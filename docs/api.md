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

## Events

| Event   | Type               |
|---------|--------------------|
| `input` | `CustomEvent<any>` |


# auro-checkbox

Custom element for the purpose of allowing users to select one or more options of a limited number of choices.

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `checked`  | `checked`  | `Boolean` | false   | If set to true, the checkbox will be filled with a checkmark. |
| `disabled` | `disabled` | `Boolean` | false   | If set to true, the checkbox will not be clickable. |
| `error`    | `error`    | `Boolean` | false   | If set to true, sets an error state on the checkbox. |
| `id`       | `id`       | `String`  |         | Sets the individual `id` per element.            |
| `name`     | `name`     | `String`  |         | Accepts any string, `DOMString` representing the value of the input. |
| `required` | `required` | `boolean` | false   |                                                  |
| `value`    | `value`    | `String`  |         | Sets the element's input value.                  |

## Methods

| Method         | Type                              |
|----------------|-----------------------------------|
| `handleChange` | `(event: any): void`              |
| `handleInput`  | `(event: any): void`              |
| `invalid`      | `(error: any): "true" \| "false"` |

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
| `checkbox-input` | apply css to a specific checkbox's input. |
| `checkbox-label` | apply css to a specific checkbox's label. |
