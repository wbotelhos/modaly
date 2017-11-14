describe('#close', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('on click', function() {
    it ('closes the modal', function() {
      // given
      var
        link  = $('.open').modaly({ closeButton: true }).click(),
        close = $('.modaly__close');

      // when
      close.click();

      // then
      expect($('#modal').data('opened')).toBeFalsy();
    });
  });
});
