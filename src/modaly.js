/*!
 * Modaly - A Tiny Modal
 *
 * @author: Washington Botelho
 * @doc: wbotelhos/modaly
 * @version: 1.0.0
 */

class Modaly {
  constructor(element, options = {}) {
    this.el = element;
    this.options = options;
  }

  block(boo) {
    this.el.dataset.block = boo;
  }

  close(keys = []) {
    this._hide(this.modal);
    this._hide(this.overlay);

    keys.forEach((key) => delete this.el.dataset[key]);

    this.el.dataset.opened = false;

    this.el.dispatchEvent(new CustomEvent('modaly:closed'));
  }

  defaults() {
    return {
      attribute: 'href',
      block: false,
      closeButton: true,
      closeOverlay: true,
      closeSelector: '[data-close]',
      esc: true,
      overlayOpacity: 0.5,
      overlaySelector: '[data-overlay]',
      prevent: true,
      speed: 200,
      top: undefined,
    };
  }

  init() {
    this.opt = { ...this.defaults(), ...this.options };
    this.modal = this._modal();
    this.closeButton = this._closeButton();
    this.overlay = document.querySelector(this.opt.overlaySelector);

    this._bind();

    this.el.dataset.block = this.opt.block;
    this.el.dataset.opened = false;

    return this;
  }

  open(params = {}) {
    this._show(this.modal, 1);
    this._show(this.overlay, this.opt.overlayOpacity);

    Object.entries(params).forEach(([key, value]) => {
      this.el.dataset[key] = value;
    });

    this.el.dataset.opened = true;

    this.el.dispatchEvent(new CustomEvent('modaly:opened'));
  }

  _bind() {
    this.closeButton?.addEventListener('click', () => this.close());

    if (this.opt.closeOverlay) this.overlay?.addEventListener('click', () => this.close());

    this.el.addEventListener('click', (e) => {
      if (this.opt.prevent) {
        e.preventDefault();
        this.el.checked = !this.el.checked;
      }

      if (this.opt.anchorless) {
        e.stopPropagation();
      } else if (!this._isTrue(this.el.dataset.block)) {
        this.open();
      }
    });

    if (this.opt.esc) {
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  }

  _closeButton() {
    const button = this.modal.querySelector(this.opt.closeSelector);

    if (!button) return;
    if (!this.opt.closeButton) button.style.display = 'none';

    return button;
  }

  _hide(el) {
    el.style.transition = `opacity ${this.opt.speed}ms`;
    el.style.opacity = 0;
    el.style.display = 'none';
  }

  _isTrue(value) {
    return value === true || value === 'true';
  }

  _modal() {
    const modal = document.querySelector(this.el.getAttribute(this.opt.attribute)) || this.el;

    this.opt.anchorless = modal === this.el;

    return modal;
  }

  _show(el, opacity) {
    el.style.transition = `opacity ${this.opt.speed}ms`;
    el.style.display = 'block';

    el.offsetHeight;

    el.style.opacity = opacity;
  }
}

export default Modaly;
