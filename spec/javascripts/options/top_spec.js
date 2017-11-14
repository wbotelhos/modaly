describe('#top', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  context('undefined', function() {
    it ('does not applies the distance', function() {
      // given
      var link = $('.open').modaly({ top: undefined });

      // when
      link.click();

      // then
      expect($('#modal').attr('style').indexOf('top')).toEqual(-1);
    });
  });

  context('null', function() {
    it ('does not applies the distance', function() {
      // given
      var link = $('.open').modaly({ top: null });

      // when
      link.click();

      // then
      expect($('#modal').attr('style').indexOf('top')).toEqual(-1);
    });
  });

  context('defined', function() {
    context('as percent', function() {
      it ('applies the distance percent', function() {
        // given
        var link = $('.open').modaly({ top: '5%' });

        // when
        link.click();

        // then
        expect($('#modal').attr('style').indexOf('5%')).toBeGreaterThan(0);
      });
    });

    context('as pixel', function() {
      it ('applies the distance as pixel', function() {
        // given
        var link = $('.open').modaly({ top: '5px' });

        // when
        link.click();

        // then
        expect($('#modal').attr('style').indexOf('5px')).toBeGreaterThan(0);
      });
    });

    context('without type', function() {
      context('as number', function() {
        it ('applies the distance as pixel', function() {
          // given
          var link = $('.open').modaly({ top: 5 });

          // when
          link.click();

          // then
          expect($('#modal').attr('style').indexOf('5px')).toBeGreaterThan(0);
        });

        context('zero', function() {
          it ('applies the distance as pixel', function() {
            // given
            var link = $('.open').modaly({ top: 0 });

            // when
            link.click();

            // then
            expect($('#modal').attr('style').indexOf('0px')).toBeGreaterThan(0);
          });
        });
      });

      context('as string', function() {
        it ('applies the distance as pixel', function() {
          // given
          var link = $('.open').modaly({ top: '5' });

          // when
          link.click();

          // then
          expect($('#modal').attr('style').indexOf('5px')).toBeGreaterThan(0);
        });

        context('zero', function() {
          it ('applies the distance as pixel', function() {
            // given
            var link = $('.open').modaly({ top: '0' });

            // when
            link.click();

            // then
            expect($('#modal').attr('style').indexOf('0px')).toBeGreaterThan(0);
          });
        });
      });
    });
  });
});
