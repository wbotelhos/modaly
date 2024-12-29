describe('#closeButton', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('true', () => {
    it('shows the close button', () => {
      // given
      const modal = document.querySelector('[data-modal]');
      const modaly = new Modaly(modal, { closeButton: true }).init();

      // when
      modaly.open();

      // then
      const close = document.querySelector('[data-close]');

      expect(Helper.isVisible(close)).toBe(true);
    });
  });

  context('false', () => {
    it('hides the close button', () => {
      // given
      const modal = document.querySelector('[data-modal]');
      const modaly = new Modaly(modal, { closeButton: false }).init();

      // when
      modaly.open();

      // then
      const close = document.querySelector('[data-close]');

      expect(Helper.isVisible(close)).toBe(false);
    });
  });
});
