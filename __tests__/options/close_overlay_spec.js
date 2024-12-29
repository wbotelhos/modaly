describe('#closeOverlay', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('close_selector.html');
  });

  context('true', () => {
    it('is closed', () => {
      // given
      const modal = document.querySelector('[data-modal]');

      const modality = new Modaly(modal, { closeOverlay: true }).init();

      modality.open();

      // when
      document.querySelector('[data-overlay]').click();

      // then
      expect(modal.dataset.opened).toEqual('false');
    });
  });

  context('false', () => {
    it('is not closed', () => {
      // given
      const modal = document.querySelector('[data-modal]');
      const modality = new Modaly(modal, { closeOverlay: false }).init();

      modality.open();

      // when
      document.querySelector('[data-overlay]').click();

      // then
      expect(modal.dataset.opened).toEqual('true');
    });
  });
});
