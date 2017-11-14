describe('common', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('has the right value options', function() {
    // given
    var modaly = $.fn.modaly

    // when
    var opt = modaly.defaults

    // then
    expect(opt.block).toBeFalsy();
    expect(opt.closeButton).toBeTruthy();
    expect(opt.closeOverlay).toBeTruthy();
    expect(opt.closeTarget).toEqual('.modaly__close');
    expect(opt.esc).toBeTruthy();
    expect(opt.overlay).toEqual(.5);
    expect(opt.prevent).toBeTruthy();
    expect(opt.top).toEqual(undefined);
  });
});
