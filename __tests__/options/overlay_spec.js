describe('#overlay', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  it('does not show the overlay', () => {
    // given
    const modal = document.querySelector('[data-modal]');
    const modaly = new Modaly(modal, { overlay: false }).init();

    // when
    modaly.open();

    // then
    const overlay = document.querySelector('[data-overlay]');

    expect(Helper.isVisible(overlay)).toEqual(false);
  });
});
