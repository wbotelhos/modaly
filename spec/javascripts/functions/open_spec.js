describe('#open', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('opens the modal', function() {
    // given
    var link = $('.open').modaly();

    // when
    link.modaly('open');

    // then
    expect($('#modal').is(':visible')).toBeTruthy();
  });

  it ('triggers event', function(done) {
    // given
    var link = $('.open').modaly();

    $('#modal').on('modaly:opened', function() {
      // then
      done();
    });

    // when
    link.modaly('open');
  });

  context('with a hash data', function() {
    it ('is added on modal as data', function() {
      // given
      var link = $('.open').modaly();

      // when
      link.modaly('open', { key: 'value' });

      // then
      expect($('#modal').data()).toEqual({ key: 'value', opened: true });
    });
  });
});
