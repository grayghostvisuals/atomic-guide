![Atomic Guide](https://dl.dropboxusercontent.com/u/41114960/github/atomic-guide/atomic-logo.svg)
--
 - Templates : Assemble
 - Styles : Sass
 - Task Manager : Gulp
 - Pkg Mgr: NPM & Bower

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
    version: a
    modifierclass: active
    state: checked
  b:
    version: b
    modifierclass: hidden
  ```

3. Setup your partial

  ``includes/atoms/radio-input.hbs``
  
  ```
  <label for="radio{{version}}" class="control radio {{modifierclass}}">
    <input type="radio" id="radio{{version}}" name="radio" value="radio{{version}}" {{state}}>
    <span class="control__indicator"></span> Radio Input
  </label>
  ```

4. Make the call from your file of choice like so…

  ``templates/pages/index.hbs``
  
  ```
  {{> radio-input radio}}
  {{> radio-input radio.a}}
  {{> radio-input radio.b}}
  ```

## Conditions

Control scripts or anything really from appearing in your views like so…

```
{{#any 'index single case' this.basename}}
{{/any}}
```

## What Else?

Well for starters your HTML is cleansed automagically for code snippets including JavaScript without writing things twice. See index.hbs for further examples.

## Lastly

Logo by [Cole Townsend](http://coletownsend.com). Copyright 2015. 
