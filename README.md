# Modaly - A Tiny Modal

[![Tests](https://github.com/wbotelhos/modaly/workflows/Tests/badge.svg)](https://github.com/wbotelhos/modaly/actions)
[![NPM Version](https://badge.fury.io/js/modaly.svg)](https://badge.fury.io/js/modaly)
[![Maintainability](https://api.codeclimate.com/v1/badges/622fc59d2778de69f93a/maintainability)](https://codeclimate.com/github/wbotelhos/modaly/maintainability)
[![Sponsor](https://img.shields.io/badge/sponsor-%3C3-green)](https://www.patreon.com/wbotelhos)

Modaly is a jquery plugin that generates a tiny modal window.

## Required Files

+ jquery.modaly.css
+ jquery.modaly.js

## Options

```js
attribute:    'href'           // Changes the anchor's attribute.
block:        false            // Prevents the modal to open.
closeButton:  true             // Show the close button.
closeOverlay: true             // Enable close modal clicking on overlay.
closeTarget:  '.modaly__close' // Hook of the close button.
esc:          true             // Enable the key esc to close the modal.
overlay:      .5               // Overlay applied on overlay.
prevent:      true             // Prevent the click action on binded element.
speed:        200              // Speed to open and close the modal.
top:          undefined        // Distance between top of window and the modal.
visible:      false            // Keeps the modal visible on screen.
```

## Usage

```html
<div id="modal">
  <span class="modaly__close">x</span>
</div>
```

```html
<a href="#modal">open</a>
```

```js
$('a').modaly();
```

## Callbacks

Callbacks are triggered over the modal element.

```js
'modaly:opened': triggered when modaly is opened.
'modaly:closed': triggered when modaly is closed.
```

## Functions

```js
$('a').modaly('open');                   // Open the modal.

$('a').modaly('open', { key: 'value' }); // Open and add params at modal.

$('a').modaly('close');                  // Close the modal.

$('a').modaly('close', ['key']);         // Close and removes keys data from modal.

$('a').modaly('block', boolean);         // Block or unblock the modal.
```
