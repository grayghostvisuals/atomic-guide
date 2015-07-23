![Atomic Guide](https://dl.dropboxusercontent.com/u/41114960/github/atomic-guide/atomic-logo.svg)

![](https://dl.dropboxusercontent.com/u/41114960/github/atomic-guide/ag-preview.png)

## Under The Hood

 - Templates : Assemble
 - Styles : Sass
 - Task Manager : Gulp
 - Pkg Mgr: NPM & Bower

## Installation

```javascript
$ npm install && bower install
```

## Development

Compiling and LiveReload

```javascript
$ gulp
```

Production Build

```javascript
$ gulp build
```

Preview Production Build

```javascript
$ gulp preview
```

Cleanup

```javascript
$ gulp clean
```

## Naming Convention

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

You can also take advantage of the environment flag used by Assemble.

```
var env_flag = false;
assemble.option('production', env_flag);
```
**`gulpfile.js`**

The if statement that follows will produce true if the boolean for the environment variable above is set to true. Great for keeping out things like analytics and such.

```
{{#if production}}
{{/if}}
```
**`template.hbs`**

## What Else?

### Code Blocks + Prism

Here's an example from your assemble template to import a partial called headings that's also called from the code block. The class name on the `pre` tag tells Prism this is a block we would like it to style using html grammar.

```markup
{{> headings}}
<pre class="language-html"><code>{{> headings}}</code></pre>
```

Here's an example using a JavaScript snippet.

```markup
{{> button}}
<pre class="language-javascript"><code></code></pre>
```

The partial with the required JavaScript sets up the pre block to accept the JavaScript it will be injected with. The required JavaScript is included in your layout of choice and given a class of `atomic-js`.

```javascript
<script class="atomic-js">var button = document.querySelector('button');
button.addEventListener('click', function() {
console.log('hello world');
})</script>
```

In the future we hope to remove the need to write this kind of block within the markup and use file reading with Node to inject the tags as needed and with the appropriate code.

## Credits

Logo by [Cole Townsend](http://coletownsend.com). ©2015 and beyond.
