describe('#overlay', function() {
  'use strict';

  context('with more then one modaly on the same page', function() {
    beforeEach(function() {
      fixture.load('multiple.html');
    });

    it ('reuses the same overlay', function() {
      // given
      var
        link1 = $('.open'),
        link2 = $('.open-2');

      // when
      link1.modaly();
      link2.modaly();

      // then
      expect($('#modaly__overlay').length).toEqual(1);
    });
  });

  context('when overlay already on screen', function() {
    beforeEach(function() {
      fixture.load('overlay-home.html');
    });

    it ('is used and keeped on the same place', function() {
      // given
      var link = $('.open');

      // when
      link.modaly();

      // then
      expect($('.overlay-home div[data-id="overlay-home"]').length).toEqual(1);
    });
  });
});
