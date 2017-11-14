describe('#prevent', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('checkbox.html');
  });

  context('when enable', function() {
    context('and element is a checkbox', function() {
      it ('prevents to be checked inside other callbacks', function() {
        // given
        var checkbox = $(':checkbox');

        checkbox.modaly({ block: true }).on('click', function() {
          // then
          var self = $(this);

          expect(self.attr('checked')).toBeFalsy();
          expect(self.is(':checked')).toBeFalsy();
          expect(self.prop('checked')).toBeFalsy();
          expect(this.checked).toBeFalsy();
        });

        // when
        checkbox.trigger('click');
      });
    });
  });
});
