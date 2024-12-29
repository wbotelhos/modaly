describe('when open', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  context('on click', () => {
    it('opens the modal', () => {
      // given
      const el = document.querySelector('[data-link]');

      new Modaly(el).init();

      // when
      el.click();

      // then
      expect(el.dataset.opened).toEqual('true');
    });
  });
});
