describe('#close', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('closes the modal', function() {
    // given
    var link = $('.open').modaly().click();

    // when
    link.modaly('close');

    // then
    expect($('#modal').data('opened')).toBeFalsy();
  });

  context('with an array params', function() {
    it ('removes the given data parameters from modal', function() {
      // given
      var
        link  = $('.open').modaly().modaly('open'),
        modal = $('#modal').data({ keep: true, key: 'value', target: 'open' });

      // when
      link.modaly('close', ['key', 'target']);

      // then
      expect(modal.data()).toEqual({ keep: true, opened: false });
    });
  });
});
