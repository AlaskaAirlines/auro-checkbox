<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-checkbox-group

## Properties

| Property                        | Attribute                       | Type      | Default     |
|---------------------------------|---------------------------------|-----------|-------------|
| [disabled](#disabled)                      | `disabled`                      | `boolean` | false       |
| [error](#error)                         | `error`                         | `string`  |             |
| [noValidate](#noValidate)                    | `noValidate`                    | `boolean` |             |
| [required](#required)                      | `required`                      | `boolean` | false       |
| [setCustomValidity](#setCustomValidity)             | `setCustomValidity`             | `string`  |             |
| [setCustomValidityCustomError](#setCustomValidityCustomError)  | `setCustomValidityCustomError`  | `string`  |             |
| [setCustomValidityValueMissing](#setCustomValidityValueMissing) | `setCustomValidityValueMissing` | `string`  |             |
| [validity](#validity)                      | `validity`                      | `string`  | "undefined" |
| [value](#value)                         | `value`                         | `array`   | "undefined" |

## Methods

| Method                   | Type                                |
|--------------------------|-------------------------------------|
| [handleItems](#handleItems)            | `(): void`                          |
| [handlePreselectedItems](#handlePreselectedItems) | `(): void`                          |
| [handleValueUpdate](#handleValueUpdate)      | `(value: any, selected: any): void` |

## Events

| Event   | Type               |
|---------|--------------------|
| [input](#input) | `CustomEvent<any>` |

# auro-checkbox

The auro-select element is a wrapper for auro-dropdown and auro-menu to create a dropdown menu control.

## Properties

| Property   | Attribute  | Type      | Default |
|------------|------------|-----------|---------|
| [checked](#checked)  | `checked`  | `boolean` | false   |
| [disabled](#disabled) | `disabled` | `boolean` | false   |
| [error](#error)    | `error`    | `boolean` | false   |
| [id](#id)       | `id`       | `string`  |         |
| checkbox(#name)     | `name`     | `string`  |         |
| [required](#required) | `required` | `boolean` | false   |
| [value](#value)    | `value`    | `string`  |         |

## Methods

| Method         | Type                                 |
|----------------|--------------------------------------|
| [handleChange](#handleChange) | `(event: any): void`                 |
| [handleInput](#handleInput)  | `(event: any): void`                 |
| [invalid](#invalid)      | `(error: any): "true" \| "false"`    |
| [isRequired](#isRequired)   | `(required: any): "true" \| "false"` |

## Events

| Event                   | Type               |
|-------------------------|--------------------|
| `auroCheckbox-focusin`  | `CustomEvent<any>` |
| `auroCheckbox-focusout` | `CustomEvent<any>` |
| `auroCheckbox-input`    | `CustomEvent<any>` |

## CSS Shadow Parts

| Part             | Description                              |
|------------------|------------------------------------------|
| [checkbox](#checkbox)       | apply css to a specific checkbox         |
| `checkbox-input` | apply css to a specifix checkbox's input |
| `checkbox-label` | apply css to a specifix checkbox's label |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
      <auro-checkbox-group>
        <span slot="legend">Form label goes here</span>
        <auro-checkbox value="checkbox option" name="example1">Checkbox option</auro-checkbox>
        <auro-checkbox value="checkbox option" name="example2" checked>Checkbox option</auro-checkbox>
        <auro-checkbox value="checkbox option" name="example3">Checkbox option</auro-checkbox>
        <auro-checkbox value="checkbox option" name="example4">Checkbox option</auro-checkbox>
      </auro-checkbox-group>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-checkbox-group>
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="checkbox option" name="example1">Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox option" name="example2" checked>Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox option" name="example3">Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox option" name="example4">Checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

### Disabled

Use the `disabled` attribute to disable singular `auro-checkbox` elements or the entire `auro-checkbox-group`.

#### Group

The `disabled` attribute used to disable the entire `auro-checkbox-group`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-checkbox-group disabled>
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="disabled checkbox option" name="example1">Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example2" checked>Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example3">Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example4" checked>Disabled checkbox option</auro-checkbox>
  </auro-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-checkbox-group disabled>
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="disabled checkbox option" name="example1">Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example2" checked>Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example3">Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example4" checked>Disabled checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Single

The `disabled` attribute used to disable a single `auro-checkbox` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/singleDisabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/singleDisabled.html -->
  <auro-checkbox-group>
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="disabled checkbox option" name="example1">Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example2" checked>Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example3" disabled>Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" name="example4" disabled checked>Disabled checkbox option</auro-checkbox>
  </auro-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/singleDisabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/singleDisabled.html -->

```html
<auro-checkbox-group>
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="disabled checkbox option" name="example1">Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example2" checked>Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example3" disabled>Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" name="example4" disabled checked>Disabled checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error

Sets a persistent error state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-checkbox-group error="custom error">
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="error checkbox option" name="example1">Error checkbox option</auro-checkbox>
    <auro-checkbox value="error checkbox option" name="example2">Error checkbox option</auro-checkbox>
    <auro-checkbox value="error checkbox option" name="example3">Error checkbox option</auro-checkbox>
    <auro-checkbox value="error checkbox option" name="example4" checked>Error checkbox option</auro-checkbox>
  </auro-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-checkbox-group error="custom error">
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="error checkbox option" name="example1">Error checkbox option</auro-checkbox>
  <auro-checkbox value="error checkbox option" name="example2">Error checkbox option</auro-checkbox>
  <auro-checkbox value="error checkbox option" name="example3">Error checkbox option</auro-checkbox>
  <auro-checkbox value="error checkbox option" name="example4" checked>Error checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Required

When present, the `required` attribute specifies that an `auro-checkbox` within the `auro-checkbox-group` must be checked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
  <auro-checkbox-group required>
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="checked option" name="example1">Checkbox option</auro-checkbox>
    <auro-checkbox value="checkbox Option" name="example2">Checkbox option</auro-checkbox>
    <auro-checkbox value="checkbox Option" name="example3">Checkbox option</auro-checkbox>
    <auro-checkbox value="checkbox Option" name="example4">Checkbox option</auro-checkbox>
  </auro-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/required.html -->

```html
<auro-checkbox-group required>
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="checked option" name="example1">Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox Option" name="example2">Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox Option" name="example3">Checkbox option</auro-checkbox>
  <auro-checkbox value="checkbox Option" name="example4">Checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
