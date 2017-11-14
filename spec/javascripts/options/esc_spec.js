describe('#esc', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('true', function() {
    it ('closes the modal', function() {
      // given
      var link = $('.open').modaly({ esc: true }).click();

      // when
      $(document).trigger({ type: 'keyup', which: 27, keyCode: 27 });

      // then
      expect($('.modaly__close').is(':visible')).toBeFalsy();
    });
  });

  context('false', function() {
    it ('keeps the modal opened', function() {
      // given
      var link = $('.open').modaly({ esc: false }).click();

      // when
      $(document).trigger({ type: 'keyup', which: 27, keyCode: 27 });

      // then
      expect($('.modaly__close').is(':visible')).toBeTruthy();
    });
  });
});
