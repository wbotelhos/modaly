describe('#attribute', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('checkbox-href.html');
  });

  it ('changes the attribute responsible to indicate the modal', function() {
    // given
    var checkbox = $(':checkbox');

    checkbox.modaly({ attribute: 'data-href' });

    // when
    checkbox.modaly('open');

    // then
    expect($('.modal').data('opened')).toBeTruthy();
  });
});
