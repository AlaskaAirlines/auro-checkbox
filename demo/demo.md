<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Checkbox

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-checkbox>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of ...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-checkbox use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-checkbox>` element should be used in situations where users may:

* ...
* ...
* ...
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

## Example(s)

#### Default

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

#### Disabled

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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-checkbox` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-checkbox';
registerComponent('custom-checkbox');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-checkbox` element.

<div class="exampleWrapper">
  <custom-header display="display">Salutations World!</custom-header>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
  ```html
  <custom-header display="display">Salutations World!</custom-header>
  ```

</auro-accordion>
