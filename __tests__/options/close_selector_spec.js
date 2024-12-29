describe('#closeSelector', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('close_selector.html');
  });

  it('allow use another selector for close button', () => {
    // given
    const modal = document.querySelector('[data-modal]');
    const modaly = new Modaly(modal, { closeSelector: '[data-close-other]' }).init();

    modaly.open();

    // when

    document.querySelector('[data-close-other]').click();

    // then
    expect(modal.dataset.opened).toEqual('false');
  });
});
