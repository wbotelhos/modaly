/*!
  Modaly - A Tiny Modal

  The MIT License

  @author: Washington Botelho
  @doc: wbotelhos.com/modaly
  @version: 1.0.0
*/

class Modaly {
  constructor(element, options = {}) {
    this.el = element;
    this.options = options;
  }
  block(boo) {
    this.modal.modal.dataset.block = boo ? 'true' : 'false';
  }
  close() {
    this._hide(this.modal);
    this._hide(this.overlay);
    this.modal.dispatchEvent(new CustomEvent('modaly:closed'));
  }
  defaults() {
    return {
      attribute: 'href',
      block: false,
      closeButton: true,
      closeOverlay: true,
      closeTarget: '[data-modal-close]',
      esc: true,
      overlay: 0.5,
      prevent: true,
      speed: 200,
      top: undefined,
      visible: false
    };
  }
  init() {
    this.opt = {
      ...this.defaults(),
      ...this.options
    };
    this.overlay = this._overlay();
    this.modal = this._modal();
    this.closeButton = this._closeButton();
    this._bind();
    this.modal.dataset.block = this.opt.block;
    this.modal.dataset.modaly = true;
    return this;
  }
  open() {
    if (this.opt.top !== undefined) {
      const type = typeof this.opt.top === 'number' || !this.opt.top.includes('px') && !this.opt.top.includes('%') ? 'px' : '';
      this.modal.style.top = `${this.opt.top}${type}`;
    }
    this._show(this.modal, 1);
    this._show(this.overlay, this.opt.overlay);
    this.modal.dispatchEvent(new CustomEvent('modaly:opened'));
  }
  _bind() {
    this.el.querySelectorAll(this.opt.closeTarget).forEach(closeTarget => {
      closeTarget.addEventListener('click', () => this.close());
    });
    if (this.opt.closeOverlay) this.overlay.addEventListener('click', () => this.close());
    this.el.addEventListener('click', e => {
      if (this.opt.prevent) {
        e.preventDefault();
        this.el.checked = !this.el.checked;
      }
      if (this.opt.anchorless) {
        e.stopPropagation();
      } else if (this.el.dataset.block === 'false') {
        this.open();
      }
    });
    if (this.opt.esc) {
      document.addEventListener('keyup', e => {
        if (e.key === 'Escape') this.close();
      });
    }
  }
  _closeButton() {
    const button = this.modal.querySelector(this.opt.closeTarget);
    if (!this.opt.closeButton) button.style.display = 'none';
    return button;
  }
  _hide(el) {
    el.style.transition = `opacity ${this.opt.speed}ms`;
    el.style.opacity = 0;
    el.style.display = 'none';
  }
  _modal() {
    const modal = document.querySelector(this.el.getAttribute(this.opt.attribute)) || this.el;
    if (!this.opt.visible) modal.classList.add('modaly');
    this.opt.anchorless = modal === this.el;
    return modal;
  }
  _overlay() {
    let overlay = document.getElementById('modaly__overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modaly__overlay';
      document.body.appendChild(overlay);
    }
    return overlay;
  }
  _show(el, opacity) {
    if (el === this.modal) el.classList.add('modaly--visible');
    el.style.transition = `opacity ${this.opt.speed}ms`;
    el.style.display = 'block';
    el.offsetHeight;
    el.style.opacity = opacity;
  }
}