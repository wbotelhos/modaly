describe('#attribute', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('attribute.html');
  });

  it('changes the attribute responsible to indicate the modal', () => {
    // given
    const el = document.querySelector('[data-link]');

    const modaly = new Modaly(el, { attribute: 'data-href' }).init();

    // when
    el.click();

    // then
    expect(el.dataset.opened).toEqual('true');
  });
});
