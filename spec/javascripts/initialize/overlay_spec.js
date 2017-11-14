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
      expect($('div#modaly__overlay').length).toEqual(1);
    });
  });
});
