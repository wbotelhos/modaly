describe('#block', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('false', () => {
    it('unblocks the modal', () => {
      // given
      const el = document.querySelector('[data-link]');
      const modal = document.querySelector('[data-modal]');

      const modaly = new Modaly(el, { block: false }).init();

      // when
      el.click();

      // then
      expect(el.dataset.opened).toBe('true');
    });
  });

  context('true', () => {
    it('blocks the modal', () => {
      // given
      const el = document.querySelector('[data-link]');
      const modal = document.querySelector('[data-modal]');

      const modaly = new Modaly(el, { block: true }).init();

      // when
      el.click();

      // then
      expect(el.dataset.opened).toBe('false');
    });
  });
});
