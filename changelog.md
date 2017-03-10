# jQuery Modaly - A Modal Plugin - http://wbotelhos.com/modaly

## 0.4.0

### News

+ The `open` function api can receive a hash param with keys that will be added on modal as data parameters.
+ The `close` function api can receive an array of data keys as param that will be removed from modal.

## 0.3.0

### News

+ Added options `attribute` to change the anchor's attribute used to find the modal;
+ Added options `prevent` to prevent or not the click action on binded element;
+ Now you can bind directly on modal and open it via API besides an element;
+ Plugin published at Bower;
+ Plugin published at NPM;
+ Removed fixed `height` from CSS.

### Fixes

+ Make sure that checkbox is keeped unchecked into other callbacks, when clicked, if `block` options is `true`.

## 0.2.0

### News

- Modaly now is responsive;

### Changes

- The option `top` is `undefined` for default;
- If you pass a number or a string without unit, by default it will be 'px';
- You can use '%' on `top` option.

### Fixes

- The option `top` always applies the value, even when it is `undefined`.
