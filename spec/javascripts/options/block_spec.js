describe('#block', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('true', function() {
    it ('blocks the opening on click', function() {
      // given
      var link = $('.open').modaly({ block: true });

      // when
      link.click();

      // then
      expect($('#modal').data('opened')).toBeFalsy();
      expect($('#modaly__overlay').data('opened')).toBeFalsy();
    });
  });

  context('false', function() {
    it ('opens on click', function() {
      // given
      var link = $('.open').modaly({ block: false });

      // when
      link.click();

      // then
      expect($('#modal').data('opened')).toBeTruthy();
      expect($('#modaly__overlay').data('opened')).toBeTruthy();
    });
  });
});
