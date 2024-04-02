// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */

/**
 * The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.
 *
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityCustomError - Custom help text message to display when validity = `customError`.
 * @attr {String} setCustomValidityValueMissing - Custom help text message to display when validity = `valueMissing`.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the element. Used for client-side validation.
 * @attr {Boolean} horizontal - If set, checkboxes will be aligned horizontally.
 * @event auroCheckboxGroup-validated - Notifies that the `validity` value has changed.
 * @event auroCheckboxGroup-helpText - Notifies that the `setCustomValidity` value has changed.
 */

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import AuroFormValidation from '@aurodesignsystem/auro-formvalidation/src/validation.js';

// Import the processed CSS file into the scope of the component
import styleCss from "./auro-checkbox-group-css.js";

export class AuroCheckboxGroup extends LitElement {
  constructor() {
    super();

    this.validity = undefined;
    this.value = undefined;
    this.disabled = false;
    this.required = false;
    this.horizontal = false;

    /**
     * @private
     */
    this.index = 0;

    /**
     * @private
     */
    this.maxNumber = 3;

    /**
     * @private
     */
    this.validation = new AuroFormValidation();
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      },
      horizontal: {
        type: Boolean,
        reflect: true
      },
      value: {
        type: Array
      },
      noValidate: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: String,
        reflect: true
      },
      setCustomValidity: {
        type: String
      },
      setCustomValidityCustomError: {
        type: String
      },
      setCustomValidityValueMissing: {
        type: String
      },
      validity: {
        type: String,
        reflect: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleItems();
  }

  handleValueUpdate(value, selected) {
    if (selected) {
      // add if it isn't already in the value list
      if (!this.value.includes(value)) {
        this.value.push(value);
      }
    } else if (this.value.indexOf(value) > -1) { // eslint-disable-line no-magic-numbers
      // remove if it is in the value list
      const index = this.value.indexOf(value);

      this.value.splice(index, 1); // eslint-disable-line no-magic-numbers
    }

    this.dispatchEvent(new CustomEvent('input', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));

    this.validation.validate(this, true);
  }

  firstUpdated() {
    // must declare this function as a variable to correctly pass the reference to the removeEventListener
    const checkFocusWithin = function(evt) {
      if (document.auroCheckboxGroupActive && !document.auroCheckboxGroupActive.contains(evt.target)) {
        // if focus has left the group, cleanup and validate
        document.auroCheckboxGroupActive.focusWithin = false;
        window.removeEventListener('focusin', checkFocusWithin);
        document.removeEventListener('click', checkFocusWithin);
        // execute the validation
        document.auroCheckboxGroupActive.validation.validate(document.auroCheckboxGroupActive);
      }
    };

    this.addEventListener('auroCheckbox-focusin', () => {
      if (!this.value) {
        this.value = [];
      }

      // handle click outside the group
      if (!this.focusWithin) {
        document.addEventListener('click', checkFocusWithin);
      }

      this.focusWithin = true;
    });

    this.addEventListener('auroCheckbox-focusout', () => {
      document.auroCheckboxGroupActive = this;

      // Only add the focusWithin check event listener once as you move focus through the options
      if (this.focusWithin) {
        window.addEventListener('focusin', checkFocusWithin);
      } else {
        this.focusWithin = true;
      }
    });

    this.addEventListener('auroCheckbox-input', (evt) => {
      this.handleValueUpdate(evt.target.value, evt.target.checked);
    });
  }

  handlePreselectedItems() {
    let preSelectedValues = false;

    this.items.forEach((item) => {
      if (item.hasAttribute('checked') && this.value === undefined) {
        preSelectedValues = true;
      }
    });

    if (preSelectedValues) {
      if (!this.value) {
        this.value = [];
      }

      this.items.forEach((item) => {
        this.handleValueUpdate(item.getAttribute('value'), Boolean(item.hasAttribute('checked')));
      });
    }
  }

  handleItems() {
    const groupTagName = this.tagName.toLowerCase();
    const checkboxTagName = groupTagName.substring(0, groupTagName.indexOf('-group'));

    this.items = Array.from(this.querySelectorAll(checkboxTagName));

    this.handlePreselectedItems();
    this.handleCheckboxAttributes();

    this.validation.validate(this);
  }

  handleCheckboxAttributes() {
    this.items.forEach((el) => {
      if (this.error) {
        el.setAttribute('error', '');
      } else {
        el.removeAttribute('error');
      }

      el.disabled = this.disabled;
      el.required = this.required;
    });
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('disabled') || changedProperties.has('required')) {
      this.handleCheckboxAttributes();
    }

    if (changedProperties.has('error')) {
      this.validation.validate(this);
    }
  }

  render() {
    const groupClasses = {
      'displayFlex': this.horizontal && this.items.length <= this.maxNumber
    };

    return html`
      <fieldset class="${classMap(groupClasses)}">
        ${this.required
          ? html`<legend><slot name="legend"></slot></legend>`
          : html`<legend><slot name="legend"></slot> (optional)</legend>`
        }
        <slot @slotchange=${this.handleItems}></slot>
      </fieldset>

      ${!this.validity || this.validity === undefined || this.validity === 'valid'
        ? html`
          <p class="checkboxGroupElement-helpText" part="helpText">
            <slot name="helpText"></slot>
          </p>`
        : html`
          <p class="checkboxGroupElement-helpText" role="alert" aria-live="assertive" part="helpText">
            ${this.setCustomValidity}
          </p>`
      }
    `;
  }
}

// default internal definition
if (!customElements.get("auro-checkbox-group")) {
  customElements.define("auro-checkbox-group", AuroCheckboxGroup);
}
