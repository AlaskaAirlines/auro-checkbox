// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit";
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./auro-checkbox-css.js";

import checkLg from '@alaskaairux/icons/dist/icons/interface/check-lg_es6.js';

// build the component class
class AuroCheckbox extends LitElement {
  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.required = false;
    this.error = false;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      checked: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      id:       { type: String },
      name:     { type: String },
      value:    { type: String }
    };
  }

  // This custom event is only for the purpose of supporting IE
  // .addEventListener('change', function() { })
  handleChange(event) {
    this.checked = event.target.checked;
    const customEvent = new CustomEvent(event.type, event);

    this.dispatchEvent(customEvent);
  }

  handleInput(event) {
    this.checked = event.target.checked;

    this.dispatchEvent(new CustomEvent('auroCheckbox-input', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  invalid(error) {
    if (error) {
      return 'true';
    }

    return 'false'
  }

  isRequired(required) {
    if (required) {
      return 'true';
    }

    return 'false'
  }

  /**
   * Function to support @focusin event.
   * @private
   * @return {void}
   */
  handleFocusin() {
    this.dispatchEvent(new CustomEvent('auroCheckbox-focusin', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   *
   * @private
   * @return {void} Function to generate checkmark svg
   */
  generateIconHtml() {
    this.dom = new DOMParser().parseFromString(checkLg.svg, 'text/html');
    this.svg = this.dom.body.firstChild;

    this.svg.classList.add('svg--cbx');

    return this.svg;
  }

  firstUpdated() {
    this.addEventListener('click', () => {
      this.handleFocusin();
    });

    this.addEventListener('focusin', () => {
      this.handleFocusin();
    })

    this.addEventListener('focusout', () => {
      this.dispatchEvent(new CustomEvent('auroCheckbox-focusout', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      'label': true,
      'label--cbx': true,
      'errorBorder': this.error
    }

    return html`
      <div class="cbxGroup" part="checkbox">
        <input
          class="util_displayHiddenVisually cbx--input"
          part="checkbox-input"
          @change=${this.handleChange}
          @input="${this.handleInput}"
          ?disabled="${this.disabled}"
          aria-invalid="${this.invalid(this.error)}"
          aria-required="${this.isRequired(this.required)}"
          .checked="${this.checked}"
          id="${ifDefined(this.id)}"
          name="${ifDefined(this.name)}"
          type="checkbox"
          .value="${this.value}"
        />

        <label for="${ifDefined(this.id)}" class="${classMap(labelClasses)}" part="checkbox-label">
          ${this.checked ? this.generateIconHtml() : undefined}
          <slot></slot>
        </label>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-checkbox")) {
  customElements.define("auro-checkbox", AuroCheckbox);
}
