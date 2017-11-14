describe('common', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('appends the overlay on body', function() {
    // given
    var link = $('.open');

    // when
    link.modaly();

    // then
    expect($('#modaly__overlay').length).toEqual(1);
  });

  it ('starts hidden', function() {
    // given
    var link = $('.open');

    // when
    link.modaly();

    // then
    expect($('#modaly__overlay').is(':hidden')).toBeTruthy();
  });
});
