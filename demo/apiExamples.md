<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-checkbox

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
        <auro-checkbox value="checked option" name="exampleOption" checked>Checkbox option</auro-checkbox>
        <auro-checkbox value="unchecked option" name="exampleOption">Unchecked checkbox option</auro-checkbox>
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
  <auro-checkbox value="checked option" name="exampleOption" checked>Checkbox option</auro-checkbox>
  <auro-checkbox value="unchecked option" name="exampleOption">Unchecked checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### Disabled

Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-checkbox-group>
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="disabled checkbox option" disabled>Disabled checkbox option</auro-checkbox>
    <auro-checkbox value="disabled checkbox option" disabled checked>Disabled checkbox option</auro-checkbox>
  </auro-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-checkbox-group>
  <span slot="legend">Form label goes here</span>
  <auro-checkbox value="disabled checkbox option" disabled>Disabled checkbox option</auro-checkbox>
  <auro-checkbox value="disabled checkbox option" disabled checked>Disabled checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Error

Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-checkbox-group error="custom error">
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="disabled checkbox option">error checkbox option</auro-checkbox>
    <auro-checkbox value="error checkbox option" checked>error checkbox option</auro-checkbox>
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
  <auro-checkbox value="disabled checkbox option">error checkbox option</auro-checkbox>
  <auro-checkbox value="error checkbox option" checked>error checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Required

Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
  <auro-checkbox-group required>
    <span slot="legend">Form label goes here</span>
    <auro-checkbox value="checked option" name="exampleOption" checked>Checkbox option</auro-checkbox>
    <auro-checkbox value="unchecked option" name="exampleOption">Unchecked checkbox option</auro-checkbox>
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
  <auro-checkbox value="checked option" name="exampleOption" checked>Checkbox option</auro-checkbox>
  <auro-checkbox value="unchecked option" name="exampleOption">Unchecked checkbox option</auro-checkbox>
</auro-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
