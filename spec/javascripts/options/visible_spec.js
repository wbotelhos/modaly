describe('#visible', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');

    $('<div />', { 'data-ref': 'custom', id: 'modaly__overlay' }).appendTo('#fixture_container');
  });

  context('true', function() {
    it ('keeps the modal visible but not opened', function() {
      // given
      var link = $('.open').modaly({ visible: true });

      // when

      // then
      expect($('#modal').data('opened')).toBeFalsy();
      expect($('#modaly__overlay').data('opened')).toBeFalsy();

      expect($('#modal').is(':visible')).toBeTruthy();
      expect($('#modaly__overlay').is(':visible')).toBeFalsy();
    });

    context('when open', function() {
      it ('keeps visible and makes it opened', function() {
        // given
        var link = $('.open').modaly({ visible: true });

        // when
        link.click();

        // then
        expect($('#modal').data('opened')).toBeTruthy();
        expect($('#modaly__overlay').data('opened')).toBeTruthy();

        expect($('#modal').is(':visible')).toBeTruthy();
        expect($('#modaly__overlay').is(':visible')).toBeTruthy();
      });
    });

    context('when open and then close', function() {
      xit ('keeps visible but not opened', function() {
        // given
        var link = $('.open').modaly({ visible: true }).click();

        // when
        $('.modaly__close').click();

        // then
        expect($('#modal').data('opened')).toBeFalsy();
        expect($('#modaly__overlay').data('opened')).toBeFalsy();

        expect($('#modal').is(':visible')).toBeTruthy();
        expect($('#modaly__overlay').is(':visible')).toBeFalsy();
      });
    });
  });

  context('false', function() {
    xit ('hides the modal and keep it not opened', function() {
      // given
      var link = $('.open').modaly({ visible: false });

      // when

      // then
      expect($('#modal').data('opened')).toBeFalsy();
      expect($('#modaly__overlay').data('opened')).toBeFalsy();

      expect($('#modal').is(':visible')).toBeFalsy();
      expect($('#modaly__overlay').is(':visible')).toBeFalsy();
    });
  });
});
