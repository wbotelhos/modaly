describe('#attribute', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('attribute.html');
  });

  it ('changes the attribute responsible to indicate the modal', function() {
    // given
    var modal = $('.open');

    modal.modaly({ attribute: 'data-href' });

    // when
    modal.click();

    // then
    expect($('#modal').data('opened')).toBeTruthy();
  });
});
