describe('#anchorless', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('when click on any element inside the modal', () => {
    it('avoids the click propagation on the self modal again', () => {
      // given
      const el = document.querySelector('[data-link]');
      const modal = document.querySelector('[data-modal]');
      const close = document.querySelector('[data-close]');

      const modaly = new Modaly(modal).init();

      modaly.open();

      // when
      close.click();

      // then
      expect(modal.dataset.opened).toEqual('false');
    });
  });
});
