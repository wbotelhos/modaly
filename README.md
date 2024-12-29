# Modaly - A Tiny Modal

[![Tests](https://github.com/wbotelhos/modaly/workflows/Tests/badge.svg)](https://github.com/wbotelhos/modaly/actions)
[![NPM Version](https://badge.fury.io/js/modaly.svg)](https://badge.fury.io/js/modaly)
[![Maintainability](https://api.codeclimate.com/v1/badges/622fc59d2778de69f93a/maintainability)](https://codeclimate.com/github/wbotelhos/modaly/maintainability)
[![Sponsor](https://img.shields.io/badge/sponsor-%3C3-green)](https://github.com/sponsors/wbotelhos)

Modaly is a plugin that generates a tiny modal window.

## Options

|Property         |Default         |Description
|-----------------|----------------|-
|`attribute`      |`'href'`        |Changes the attribute responsible to indicate the modal's selector.
|`block`          |`false`         |Prevents the modal to open.
|`closeButton`    |`true`          |Show the close button.
|`closeOverlay`   |`true`          |Enable close modal clicking on the overlay element.
|`closeSelector`  |`'[data-close]'`|Close button selector.
|`esc`            |`true`          |Enable the key esc to close the modal.
|`overlayOpacity` |`.5`            |Opacity applied on the overlay element.
|`overlaySelector`|`.5`            |The selector of the overlay element.
|`prevent`        |`true`          |Prevent the click action on binded element.
|`speed`          |`200`           |Speed to open and close the modal.

## Usage

**Binding a button for opening**

```html
<div data-modal>
  <span data-close>x</span>
</div>
```

```html
<a data-button href="[data-modal]">open</a>
```

```js
const button = document.querySelector('[data-button]');

new Modaly(button).init();
```

**Using only the API**

```html
<div data-modal>
  <span data-close>x</span>
</div>
```

```js
const modal = document.querySelector('[data-modal]');
const modaly = new Modaly(modal).init();

modaly.open()
```

## Callbacks

Callbacks are triggered over the binded element.

|Event            |Description
|-----------------|-
|`'modaly:opened'`|Triggered when modaly is opened.
|`'modaly:closed'`|Triggered when modaly is closed.

## Functions

|Function                       |Description
|-------------------------------|-
|`modaly.open()`                |Open the modal.
|`modaly.open({ key: 'value' })`|Open and add params at modal.
|`modaly.close()`               |Close the modal.
|`modaly.close(['key'])`        |Close and removes keys data from modal.
|`modaly.block(boolean)`        |Block or unblock the modal.
