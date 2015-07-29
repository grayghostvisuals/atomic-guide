![Atomic Guide](https://dl.dropboxusercontent.com/u/41114960/github/atomic-guide/atomic-logo.svg)

![](https://dl.dropboxusercontent.com/u/41114960/github/atomic-guide/ag-preview.png)

## Under The Hood

 - Templates : Assemble
 - Styles : Sass (LibSass Port)
 - Task Manager : Gulp
 - Pkg Mgr: NPM & Bower

## Installation

Installation instructions assume you have gulp and node w/npm installed globally in your system. You could also use `npm start` if you desire as the `package.json` file of this project supports that command.

```javascript
$ npm install && bower install
```

## Development

Start Development

```javascript
$ gulp
```

Build

```javascript
$ gulp build
```

Preview Build

```javascript
$ gulp preview
```

Clean Environment

```javascript
$ gulp clean
```

## Naming Convention

Everything is name spaced and separated by a hyphen. BEM is the style of choice. We suggest using [Sass Guidelines](http://sass-guidelin.es/) for documenting your Sass code to keep consistency across teams.

```css
ns-component
ns-component--modifier
ns-component__child--modifier
```

## Theming

If you want to have variations on an input for example and keep things DRY then you can do the following…

1. Create a ``modifier.yaml`` file and place it inside your ``data`` directory.
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

4. Make the call from your template file of choice like so…

  ``templates/pages/index.hbs``

  ```
  {{> radio-input radio}}
  {{> radio-input radio.a}}
  {{> radio-input radio.b}}
  ```

## Conditions

Control scripts, styles or anything desired from appearing in your templates. A few examples are:

```
{{#any 'index single case' this.basename}}
{{/any}}
```

```
{{#is 'index' this.basename}}
{{/is}}
```

```
{{#if 'single' this.basename}}
{{/if}}
```

For further reading on conditionals see the [Handlebars](http://handlebarsjs.com/block_helpers.html) documentation.

## Environment Control

This project takes advantage of the environment flag used by Assemble.

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

### Code Blocks

Here's an example from your assemble template to import a partial called headings that's also called within the associated code block. The class name on the `pre` tag tells Prism this is a block we would like [Prism](http://prismjs.com) to style using html grammar.

```markup
{{> headings}}
<pre class="language-html"><code>{{> headings}}</code></pre>
```

Here's an example using a JavaScript snippet.

```markup
{{> button}}
<pre class="language-javascript"><code></code></pre>
```

The partial with the required JavaScript sets up the pre block to accept the JavaScript it will be injected with. The required JavaScript is included in your layout of choice and it's `script` tag is given a class of `atomic-js`.

```javascript
<script class="atomic-js">var button = document.querySelector('button');
button.addEventListener('click', function() {
console.log('hello world');
})</script>
```

In the future we hope to remove the need to write this kind of block within the markup and use something like file reading with Node.

## Credits

Logo by [Cole Townsend](http://coletownsend.com). ©2015 and beyond.
