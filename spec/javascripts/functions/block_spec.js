describe('#block', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('false', function() {
    it ('unblocks the modal', function() {
      // given
      var link = $('.open').modaly({ block: true });

      // when
      link.modaly('block', false).click();

      // then
      expect($('#modal').data('opened')).toBeFalsy();
    });
  });

  context('true', function() {
    it ('blocks the modal', function() {
      // given
      var link = $('.open').modaly({ block: false });

      // when
      link.modaly('block', true).click();

      // then
      expect($('#modal').data('opened')).toBeTruthy();
    });
  });
});
