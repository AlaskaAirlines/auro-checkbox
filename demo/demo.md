<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Checkbox

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-checkbox>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of allowing users to select one or more options of a limited number of choices.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-checkbox use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-checkbox>` element should be used in situations where users may:

* Be filling out a form
* Need to select one or more options
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

## Example(s)

### Default

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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-checkbox` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-checkbox';
registerComponent('custom-checkbox');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-checkbox` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customCheckbox.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customCheckbox.html -->
  <custom-checkbox-group>
    <span slot="legend">Form label goes here</span>
    <custom-checkbox value="checkbox option" name="example1">Checkbox option</custom-checkbox>
    <custom-checkbox value="checkbox option" name="example2" checked>Checkbox option</custom-checkbox>
    <custom-checkbox value="checkbox option" name="example3">Checkbox option</custom-checkbox>
    <custom-checkbox value="checkbox option" name="example4">Checkbox option</custom-checkbox>
  </custom-checkbox-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customCheckbox.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customCheckbox.html -->

```html
<custom-checkbox-group>
  <span slot="legend">Form label goes here</span>
  <custom-checkbox value="checkbox option" name="example1">Checkbox option</custom-checkbox>
  <custom-checkbox value="checkbox option" name="example2" checked>Checkbox option</custom-checkbox>
  <custom-checkbox value="checkbox option" name="example3">Checkbox option</custom-checkbox>
  <custom-checkbox value="checkbox option" name="example4">Checkbox option</custom-checkbox>
</custom-checkbox-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
