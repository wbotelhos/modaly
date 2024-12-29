describe('#esc', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('true', () => {
    xit('closes the modal', () => {
      // given
      const el = document.querySelector('[data-link]');
      const modal = document.querySelector('[data-modal]');

      const modaly = new Modaly(el, { esc: true }).init();

      modaly.open();

      // when
      Helper.pressEsc();

      // then
      expect(Helper.isVisible(modal)).toBe(false);
    });
  });
});
