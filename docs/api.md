# auro-checkbox

## Properties

| Property   | Attribute  | Type      | Default |
|------------|------------|-----------|---------|
| `checked`  | `checked`  | `boolean` | false   |
| `disabled` | `disabled` | `boolean` | false   |
| `error`    | `error`    | `boolean` | false   |
| `id`       | `id`       | `string`  |         |
| `name`     | `name`     | `string`  |         |
| `required` | `required` | `boolean` | false   |
| `value`    | `value`    | `string`  |         |

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
