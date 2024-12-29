## 1.0.0

### Break Change

- Drops jQuery;
- Rename `overlay` option to `overlayOpacity`;
- Rename `closeTarget` option to `closeSelector`;
- Removes option `visible` since you can control it via CSS;
- Removes option `top` since you can control it via CSS;
- No more creates the overlay element, you need to define it by yourself and set the correct `overlaySelector`;

### Updates

- Adds option `overlaySelector` to indicate the overlay element;
- Adds option `colseSelector` to indicate the close button element;

## v0.6.1

### Updates

- Moves from TravisCI to Github Actions;

## v0.6.0

### News

+ Added `modaly:opened` and `modaly:closed` callbacks.

## v0.5.0

### Changes

+ The modal stylesheet is applied only when modal is opened;
+ The class `modaly` no more keeps the modal style, it is now on `modaly--visible`;
+ The modal stylesheet is removed when modal is closed;
+ Removed style from `body` and `html`.

### Fixes

+ Overlay now has the right `opened` status on data attribute on initialization;
+ When overaly already is on screen, it is not moved to `body`.

### News

+ The stylesheet now is based on [BEM](http://getbem.com/introduction);
+ Added options `visible` to keep modal visible on screen.

## v0.4.0

### News

+ The `open` function api can receive a hash param with keys that will be added on modal as data parameters;
+ The `close` function api can receive an array of data keys as param that will be removed from modal.

## v0.3.0

### News

+ Added options `attribute` to change the anchor's attribute used to find the modal;
+ Added options `prevent` to prevent or not the click action on binded element;
+ Now you can bind directly on modal and open it via API besides an element;
+ Plugin published at Bower;
+ Plugin published at NPM;
+ Removed fixed `height` from CSS.

### Fixes

+ Make sure that checkbox is keeped unchecked into other callbacks, when clicked, if `block` options is `true`.

## v0.2.0

### News

- Modaly now is responsive;

### Changes

- The option `top` is `undefined` for default;
- If you pass a number or a string without unit, by default it will be 'px';
- You can use '%' on `top` option.

### Fixes

- The option `top` always applies the value, even when it is `undefined`.
