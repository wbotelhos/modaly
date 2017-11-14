describe('#anchorless', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('when click on some element over the modal', function() {
    it ('avoids the click propagation on the self modal again', function() {
      // given
      var modal = $('#modal').modaly();

      modal.modaly('open');

      // when
      modal.find('.modaly__close').trigger('click');

      // then
      expect(modal.data('opened')).toBeFalsy();
    });
  });
});
