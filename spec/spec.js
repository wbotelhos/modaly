describe('Modaly', function() {
  'use strict';

  beforeEach(function() {
    Factory.html(
      '<a href="#modal" class="open">open</a>' +

      '<div id="modal" class="modal">' +
        '<div class="header">' +
          '<h2>Some Header</h2>' +
          '<input type="button" value="×" class="modaly-close">' +
        '</div>' +

        '<div class="body">' +
          '<div id="modaly-message"></div>' +
          '<div class="content">Some content...</div>' +
        '</div>' +
      '</div>'
    );
  });

  afterEach(function() {
    Factory.clear('#modaly-overlay');
  });

  describe('initialize', function() {
    it ('appends the overlay on body', function() {
      // given
      var link = $('.open');

      // when
      link.modaly();

      // then
      expect($('#modaly-overlay').length).toEqual(1);
    });

    it ('starts hidden', function() {
      // given
      var link = $('.open');

      // when
      link.modaly();

      // then
      expect($('#modaly-overlay').is(':hidden')).toBeTruthy();
    });

    describe('close', function() {
      context('on click', function() {
        it ('closes the modal', function() {
          // given
          var link  = $('.open').modaly({ closeButton: true }).click(),
            close = $('.modaly-close');

          // when
          close.click();

          // then
          expect($('#modal').data('opened')).toBeFalsy();
        });
      });
    });

    describe('overlay', function() {
      context('with more then one modaly on the same page', function() {
        beforeEach(function() {
          Factory.append(
            '<a href="#modal-2" class="open-2">open</a>' +
            '<div id="modal-2"></div>'
          );
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
          expect($('div#modaly-overlay').length).toEqual(1);
        });
      });
    });
  });

  describe('options', function() {
    it ('has the right value options', function() {
      // given
      var modaly = $.fn.modaly

      // when
      var opt = modaly.defaults

      // then
      expect(opt.block).toBeFalsy();
      expect(opt.closeButton).toBeTruthy();
      expect(opt.closeOverlay).toBeTruthy();
      expect(opt.closeTarget).toEqual('.modaly-close');
      expect(opt.esc).toBeTruthy();
      expect(opt.overlay).toEqual(.5);
      expect(opt.prevent).toBeTruthy();
      expect(opt.top).toEqual(undefined);
    });

    describe('block', function() {
      context('true', function() {
        it ('blocks the opening on click', function() {
          // given
          var link = $('.open').modaly({ block: true });

          // when
          link.click();

          // then
          expect($('#modal').data('opened')).toBeFalsy();
          expect($('#modaly-overlay').data('opened')).toBeFalsy();
        });
      });

      context('false', function() {
        it ('opens on click', function() {
          // given
          var link = $('.open').modaly({ block: false });

          // when
          link.click();

          // then
          expect($('#modal').data('opened')).toBeTruthy();
          expect($('#modaly-overlay').data('opened')).toBeTruthy();
        });
      });
    });

    describe('closeButton', function() {
      context('true', function() {
        it ('shows the close button', function() {
          // given
          var link = $('.open').modaly({ closeButton: true });

          // when
          link.click();

          // then
          expect($('.modaly-close').is(':visible')).toBeTruthy();
        });
      });

      context('false', function() {
        it ('shows the close button', function() {
          // given
          var link = $('.open').modaly({ closeButton: false });

          // when
          link.click();

          // then
          expect($('.modaly-close').is(':visible')).toBeFalsy();
        });
      });
    });

    describe('closeOverlay', function() {
      context('true', function() {
        it ('is closed', function() {
          // given
          var link    = $('.open').modaly({ closeOverlay: true }).click(),
            overlay = $('#modaly-overlay');

          // when
          overlay.click();

          // then
          expect($('#modal').is(':hidden')).toBeTruthy();
        });
      });

      context('false', function() {
        it ('is not closed', function() {
          // given
          var link    = $('.open').modaly({ closeOverlay: false }).click(),
            overlay = $('#modaly-overlay');

          // when
          overlay.click();

          // then
          expect($('#modal').is(':visible')).toBeTruthy();
        });
      });
    });

    describe('closeTarget', function() {
      beforeEach(function() {
        $('.modaly-close').removeClass().addClass('custom-close');
      });

      it ('changes the hook element', function() {
        // given
        var link   = $('.open').modaly({ closeTarget: '.custom-close' }).click(),
          button = $('.custom-close');

        // when
        button.click();

        // then
        expect($('#modal').data('opened')).toBeFalsy();
      });
    });

    describe('esc', function() {
      context('true', function() {
        it ('closes the modal', function() {
          // given
          var link = $('.open').modaly({ esc: true }).click();

          // when
          $(document).trigger({ type: 'keyup', which: 27, keyCode: 27 });

          // then
          expect($('.modaly-close').is(':visible')).toBeFalsy();
        });
      });

      context('false', function() {
        it ('keeps the modal opened', function() {
          // given
          var link = $('.open').modaly({ esc: false }).click();

          // when
          $(document).trigger({ type: 'keyup', which: 27, keyCode: 27 });

          // then
          expect($('.modaly-close').is(':visible')).toBeTruthy();
        });
      });
    });

    describe('top', function() {
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

    describe('prevent', function() {
      context('when enable', function() {
        context('and element is a checkbox', function() {
          it ('prevents to be checked inside other callbacks', function() {
            // given
            var checkbox = $('<input />', { href: '#modal', type: 'checkbox' });

            Factory.append(checkbox);

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

    describe('attribute', function() {
      it ('changes the attribute responsible to indicate the modal', function() {
        // given
        var checkbox = $('<input />', { 'data-href': '#modal', type: 'checkbox' });

        Factory.append(checkbox);

        checkbox.modaly({ attribute: 'data-href' });

        // when
        checkbox.modaly('open');

        // then
        expect($('.modal').data('opened')).toBeTruthy();
      });
    });
  });

  describe('functions', function() {
    describe('#close', function() {
      it ('closes the modal', function() {
        // given
        var link = $('.open').modaly().click();

        // when
        link.modaly('close');

        // then
        expect($('#modal').data('opened')).toBeFalsy();
      });
    });

    describe('#open', function() {
      it ('opens the modal', function() {
        // given
        var link = $('.open').modaly();

        // when
        link.modaly('open');

        // then
        expect($('#modal').is(':visible')).toBeTruthy();
      });
    });

    describe('#block', function() {
      context('false', function() {
        it ('unblocks the modal', function() {
          // given
          var link = $('.open').modaly({ block: true });

          // when
          link.modaly('block', false).click();

          // then
          expect($('#modal').data('opened')).toBeFalsy();
        });
      });

      context('true', function() {
        it ('blocks the modal', function() {
          // given
          var link = $('.open').modaly({ block: false });

          // when
          link.modaly('block', true).click();

          // then
          expect($('#modal').data('opened')).toBeTruthy();
        });
      });
    });
  });

  describe('anchorless', function() {
    context('when click on some element over the modal', function() {
      it ('avoids the click propagation on the self modal again', function() {
        // given
        var modal = $('#modal').modaly();

        modal.modaly('open');

        // when
        modal.find('.modaly-close').trigger('click');

        // then
        expect(modal.data('opened')).toBeFalsy();
      });
    });
  });
});
