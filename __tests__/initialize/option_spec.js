describe('options', function () {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  it('has the right default values', function () {
    // given
    const el = document.querySelector('[data-link]');

    const modaly = new Modaly(el).init();

    // when
    var opt = modaly.defaults();

    // then
    expect(opt.attribute).toEqual('href');
    expect(opt.block).toEqual(false);
    expect(opt.closeButton).toEqual(true);
    expect(opt.closeSelector).toEqual('[data-close]');
    expect(opt.esc).toEqual(true);
    expect(opt.overlayOpacity).toEqual(0.5);
    expect(opt.overlaySelector).toEqual('[data-overlay]');
    expect(opt.prevent).toEqual(true);
    expect(opt.speed).toEqual(200);
    expect(opt.top).toEqual(undefined);
  });
});
