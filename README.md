# Atomic Guide

## Dependencies

[node](http://nodejs.org) // [npm](https://www.npmjs.com) // [bower](http://bower.io)

### Tooling:

 - HTML Templates : Assemble
 - Styles : Sass
 - Task Manager : Gulp

## Installation

```javascript
$ npm install && bower install
```

## Development

```javascript
$ npm start
```

## Naming Convention
[Read this discussion on naming](http://www.codeshare.io/XM00X)

**Everything is name spaced and separated by a hyphen. BEM is the style of choice**

```css
/* BEM Convention */
ns-component
ns-component--modifier
ns-component__child--modifier
```

## Theming

If you want to have variations on an input and keep things DRY
then you can do the following…

1. Create a ``.yaml`` file and place it inside your ``data`` directory.
2. Add data.

  ``data/modifier.yaml``

  ```
  a:
    modifierclass: active
    state: checked
  b:
    modifierclass: hidden
  ```

3. Make the call from your file of choice like so…

  ``templates/pages/index.hbs``
  
  ```
  {{> radio-input radio}}
  {{> radio-input radio.a}}
  {{> radio-input radio.b}}
  ```
  
  ``includes/atoms/radio-input.hbs``
  
  ```
  <label for="radio{{modifierclass}}" class="control radio">
    <input type="radio" id="radio{{modifierclass}}" name="radio" value="radio-value{{modifierclass}}" {{state}}>
    <span class="control__indicator"></span> Radio Input
  </label>
  ```

## Conditions

Control scripts or anything really from appearing in your views like so…

```
{{#any 'index single case' this.basename}}
{{/any}}
```