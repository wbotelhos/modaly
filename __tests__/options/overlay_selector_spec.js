describe('#overlaySelector', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('overlay_selector.html');
  });

  it('allow use another selector for overlay button', () => {
    // given
    const modal = document.querySelector('[data-modal]');
    const modaly = new Modaly(modal, { overlaySelector: '[data-overlay-other]' }).init();

    modaly.open();

    // when

    document.querySelector('[data-overlay-other]').click();

    // then
    expect(modal.dataset.opened).toEqual('false');
  });
});
