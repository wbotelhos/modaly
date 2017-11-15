describe('options', function() {
  'use strict';

  it ('has the right default values', function() {
    // given
    var modaly = $.fn.modaly;

    // when
    var opt = modaly.defaults;

    // then
    expect(opt.attribute).toEqual('href');
    expect(opt.block).toEqual(false);
    expect(opt.closeButton).toEqual(true);
    expect(opt.closeOverlay).toEqual(true);
    expect(opt.closeTarget).toEqual('.modaly__close');
    expect(opt.esc).toEqual(true);
    expect(opt.overlay).toEqual(.5);
    expect(opt.prevent).toEqual(true);
    expect(opt.speed).toEqual(0); // because of spec_helper.js reset
    expect(opt.top).toEqual(undefined);
    expect(opt.visible).toEqual(false);
  });
});
