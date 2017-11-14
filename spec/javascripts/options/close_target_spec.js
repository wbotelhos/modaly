describe('#closeTarget', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');

    $('.modaly__close').removeClass().addClass('custom-close');
  });

  it ('changes the hook element', function() {
    // given
    var
      link   = $('.open').modaly({ closeTarget: '.custom-close' }).click(),
      button = $('.custom-close');

    // when
    button.click();

    // then
    expect($('#modal').data('opened')).toBeFalsy();
  });
});
