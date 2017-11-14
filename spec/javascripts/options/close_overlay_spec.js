describe('#closeOverlay', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('true', function() {
    it ('is closed', function() {
      // given
      var
        link    = $('.open').modaly({ closeOverlay: true }).click(),
        overlay = $('#modaly__overlay');

      // when
      overlay.click();

      // then
      expect($('#modal').is(':hidden')).toBeTruthy();
    });
  });

  context('false', function() {
    it ('is not closed', function() {
      // given
      var
        link    = $('.open').modaly({ closeOverlay: false }).click(),
        overlay = $('#modaly__overlay');

      // when
      overlay.click();

      // then
      expect($('#modal').is(':visible')).toBeTruthy();
    });
  });
});
