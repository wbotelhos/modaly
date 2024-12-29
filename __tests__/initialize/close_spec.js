describe('#close', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('on click', () => {
    it('closes the modal', () => {
      // given
      const el = document.querySelector('[data-link]');
      const close = document.querySelector('[data-close]');

      new Modaly(el, { closeButton: true }).init();

      el.click();

      // when

      close.click();

      // then
      expect(el.dataset.opened).toEqual('false');
    });
  });
});
