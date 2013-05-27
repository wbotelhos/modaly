# jQuery Modaly - A Modal Plugin - [wbotelhos.com/modaly](http://wbotelhos.com/modaly)

jQuery Modaly is a plugin that generates a simple modal window.

## Version

```
@version        0.1.0
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
block        : false           // Prevents the modal to open.
closeButton  : true            // Show the close button.
closeOverlay : true            // Enable close modal clicking on overlay.
closeTarget  : '.modaly-close' // Hook of the close button.
esc          : true            // Enable the key esc to close the modal.
overlay      : .5              // Overlay applied on overlay.
speed        : 200             // Speed to open and close the modal.
top          : 100             // Distance between top of window and the modal.
```

## Usage

```html
<div id="modal">
  <input type="button" value="×" class="modaly-close" />
</div>
```

```html
<a href="#modal">open</a>
```

```js
$('a').modal();
```

## Functions

```js
$('a').modaly('close');          // Close the modal.

$('a').modaly('open');           // Open the modal.

$('a').modaly('block', boolean); // Block or unblock the modal.
```

## Licence

The MIT License

## Donate

You can do it via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Modaly). Thanks! (:
