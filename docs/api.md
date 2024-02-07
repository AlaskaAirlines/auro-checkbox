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
| `checkbox-input` | apply css to a specific checkbox's input. |
| `checkbox-label` | apply css to a specific checkbox's label. |
