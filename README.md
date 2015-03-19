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