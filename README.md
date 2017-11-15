# Modaly - A Tiny Modal

[![Build Status](https://img.shields.io/travis/wbotelhos/modaly/master.svg)](https://travis-ci.org/wbotelhos/modaly "Travis CI")
[![NPM Version](https://badge.fury.io/js/modaly.svg)](https://badge.fury.io/js/modaly)
[![Dependency](https://david-dm.org/wbotelhos/modaly.svg)](https://david-dm.org/wbotelhos/modaly "Dependency Status")
[![Dev Dependency](https://david-dm.org/wbotelhos/modaly/dev-status.svg)](https://david-dm.org/wbotelhos/modaly#info=devDependencies "Dev Dependency Status")
[![Code Climate](https://codeclimate.com/github/wbotelhos/modaly.png)](https://codeclimate.com/github/wbotelhos/modaly)
[![Support Modaly](http://img.shields.io/gittip/wbotelhos.svg)](https://gratipay.com/~wbotelhos)

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

## Functions

```js
$('a').modaly('open');                   // Open the modal.

$('a').modaly('open', { key: 'value' }); // Open and add params at modal.

$('a').modaly('close');                  // Close the modal.

$('a').modaly('close', ['key']);         // Close and removes keys data from modal.

$('a').modaly('block', boolean);         // Block or unblock the modal.
```

## Contributors

[Check it out](http://github.com/wbotelhos/modaly/graphs/contributors)

## Love it!

Via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=modaly) or [Gratipay](https://gratipay.com/modaly). Thanks! (:
