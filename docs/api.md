# auro-checkbox-group

## Properties

| Property                        | Attribute                       | Type      | Default     |
|---------------------------------|---------------------------------|-----------|-------------|
| `disabled`                      | `disabled`                      | `boolean` | false       |
| `error`                         | `error`                         | `string`  |             |
| `horizontal`                    | `horizontal`                    | `boolean` | false       |
| `noValidate`                    | `noValidate`                    | `boolean` |             |
| `required`                      | `required`                      | `boolean` | false       |
| `setCustomValidity`             | `setCustomValidity`             | `string`  |             |
| `setCustomValidityCustomError`  | `setCustomValidityCustomError`  | `string`  |             |
| `setCustomValidityValueMissing` | `setCustomValidityValueMissing` | `string`  |             |
| `validity`                      | `validity`                      | `string`  | "undefined" |
| `value`                         | `value`                         | `array`   | "undefined" |

## Methods

| Method                   | Type                                |
|--------------------------|-------------------------------------|
| `handleItems`            | `(): void`                          |
| `handlePreselectedItems` | `(): void`                          |
| `handleValueUpdate`      | `(value: any, selected: any): void` |

## Events

| Event   | Type               |
|---------|--------------------|
| `input` | `CustomEvent<any>` |


# auro-checkbox

The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `checked`  | `checked`  | `Boolean` | false   | If set to true, the checkbox will be filled with a checkmark. |
| `disabled` | `disabled` | `Boolean` | false   | If set to true, the checkbox will be unclickable. |
| `error`    | `error`    | `Boolean` | false   | If set to true, sets an error state on the checkbox. |
| `id`       | `id`       | `String`  |         | Sets the individual `id` per element.            |
| `name`     | `name`     | `String`  |         | Accepts any string, `DOMString` representing the value of the input. |
| `required` | `required` | `Boolean` | false   | Populates the `required` attribute on the checkbox. Used for client-side validation. |
| `value`    | `value`    | `String`  |         | Sets the element's input value.                  |

## Methods

| Method         | Type                                 |
|----------------|--------------------------------------|
| `handleChange` | `(event: any): void`                 |
| `handleInput`  | `(event: any): void`                 |
| `invalid`      | `(error: any): "true" \| "false"`    |
| `isRequired`   | `(required: any): "true" \| "false"` |

## Events

| Event                   | Type               |
|-------------------------|--------------------|
| `auroCheckbox-focusin`  | `CustomEvent<any>` |
| `auroCheckbox-focusout` | `CustomEvent<any>` |
| `auroCheckbox-input`    | `CustomEvent<any>` |

## CSS Shadow Parts

| Part             | Description                               |
|------------------|-------------------------------------------|
| `checkbox`       | apply css to a specific checkbox.         |
| `checkbox-input` | apply css to a specifix checkbox's input. |
| `checkbox-label` | apply css to a specifix checkbox's label. |
