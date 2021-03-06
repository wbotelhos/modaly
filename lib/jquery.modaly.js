/*!
  Modaly - A Tiny Modal

  The MIT License

  @author:  Washington Botelho
  @doc:     wbotelhos.com/modaly
  @version: 0.6.0
*/

(function($) {
  'use strict';

  var methods = {
    init: function(settings) {
      return this.each(function() {
        this.opt = $.extend({}, $.fn.modaly.defaults, settings);

        this.overlay = methods._overlay.call(this);
        this.modal   = methods._modal.call(this);
        this.close   = methods._closeButton.call(this);

        methods._bind.call(this);

        $(this).data({ block: this.opt.block, modaly: true, settings: this.opt });
      });
    },

    _bind: function() {
      var
        that = this,
        el   = $(this);

      this.modal.on('click.modaly', this.opt.closeTarget, function() {
        methods._close.call(that);
      });

      if (this.opt.closeOverlay) {
        this.overlay.on('click.modaly', function() {
          methods._close.call(that);
        });
      }

      el.on('click.modaly', function(e) {
        if (that.opt.prevent) {
          e.preventDefault();

          el.prop('checked', !this.checked);
        }

        if (this.anchorless) {
          e.stopPropagation();
        } else if (!el.data('block')) {
          methods._open.call(that);
        }
      });

      if (this.opt.esc) {
        $(document).on('keyup.modaly', function(e) {
          var key = e.keyCode || e.which;

          if (key === 27) {
            methods._close.call(that);
          }
        });
      }
    },

    _close: function(keys) {
      if (this.modal.data('opened')) {
        this.modal.removeData(keys);

        methods._hide.call(this, this.modal);
        methods._hide.call(this, this.overlay);
      }

      this.modal.trigger('modaly:closed');
    },

    _closeButton: function() {
      var button = this.modal.find(this.opt.closeTarget);

      if (!this.opt.closeButton) {
        button.hide();
      }

      return button;
    },

    _hide: function(el) {
      var that = this;

      el.data('opened', false);

      el.fadeTo(this.opt.speed, 0, function() {
        if (el === that.modal) {
          el.css('opacity', 1).removeClass('modaly--visible');
        } else {
          this.style.display = 'none';
        }
      });
    },

    _modal: function() {
      var modal = $(this.getAttribute(this.opt.attribute) || this).data('opened', false);

      if (!this.opt.visible) {
        modal.addClass('modaly');
      }

      this.anchorless = modal[0] == this;

      return modal;
    },

    _open: function(params) {
      if (!this.modal.data('opened')) {
        var top = this.opt.top;

        if (top !== undefined && top !== null) {
          var type = (typeof top == 'number' || (top.indexOf('px') < 0 && top.indexOf('%') < 0)) ? 'px' : '';

          this.modal.css({ top: top + type });
        }

        this.modal.data(params);

        methods._show.call(this, this.modal, 1);
        methods._show.call(this, this.overlay, this.opt.overlay);

        this.modal.trigger('modaly:opened');
      }
    },

    _overlay: function() {
      var overlay = $('#modaly__overlay');

      if (!overlay.length) {
        overlay = $('<div />', { id: 'modaly__overlay' }).appendTo('body');
      }

      return overlay.data('opened', false);
    },

    _show: function(el, overlay) {
      if (el === this.modal) {
        el.addClass('modaly--visible');
      }

      el.data('opened', true).css({ opacity: 0 }).fadeTo(this.opt.speed, overlay);
    },

    block: function(boo) {
      return this.each(function() {
        this.modal.data('block', boo ? true : false);
      });
    },

    close: function(keys) {
      return this.each(function() {
        methods._close.call(this, keys);
      });
    },

    open: function(params) {
      return this.each(function() {
        methods._open.call(this, params);
      });
    }
  };

  $.fn.modaly = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.modaly.defaults = {
    attribute:    'href',
    block:        false,
    closeButton:  true,
    closeOverlay: true,
    closeTarget:  '.modaly__close',
    esc:          true,
    overlay:      .5,
    prevent:      true,
    speed:        200,
    top:          undefined,
    visible:      false
  };
})(jQuery);
