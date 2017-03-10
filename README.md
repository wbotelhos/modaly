# jQuery Modaly - A Modal Plugin - [wbotelhos.com/modaly](http://wbotelhos.com/modaly)

jQuery Modaly is a plugin that generates a simple modal window.

## Version

```
@version        0.3.0
@since          2013-04-27
@author         Washington Botelho
@documentation  wbotelhos.com/modaly
@twitter        twitter.com/wbotelhos
```

## Required Files

+ jquery.modaly.css
+ jquery.modaly.js

## Options

```js
block:        false           // Prevents the modal to open.
closeButton:  true            // Show the close button.
closeOverlay: true            // Enable close modal clicking on overlay.
closeTarget:  '.modaly-close' // Hook of the close button.
esc:          true            // Enable the key esc to close the modal.
overlay:      .5              // Overlay applied on overlay.
prevent:      true            // Prevent the click action on binded element.
speed:        200             // Speed to open and close the modal.
top:          undefined       // Distance between top of window and the modal.
```

## Usage

```html
<div id="modal">
  <span class="modaly-close">x</span>
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

## Licence

[The MIT License](http://opensource.org/licenses/MIT)

## Donate

You can do it via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Modaly). Thanks! (:
