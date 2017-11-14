describe('#closeButton', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('true', function() {
    it ('shows the close button', function() {
      // given
      var link = $('.open').modaly({ closeButton: true });

      // when
      link.click();

      // then
      expect($('.modaly__close').is(':visible')).toBeTruthy();
    });
  });

  context('false', function() {
    it ('shows the close button', function() {
      // given
      var link = $('.open').modaly({ closeButton: false });

      // when
      link.click();

      // then
      expect($('.modaly__close').is(':visible')).toBeFalsy();
    });
  });
});
