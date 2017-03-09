/*!
 * jQuery Modaly - A Modal Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/modaly
 * @version : 0.2.0
 *
 */

;
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

        $(this).data({
          block:    this.opt.block ? true : false,
          modaly:   true,
          settings: this.opt
        });
      });
    },

    _bind: function() {
      var
        that = this,
        el   = $(that);

      that.modal.on('click.modaly', that.opt.closeTarget, function() {
        methods._close.call(that);
      });

      if (that.opt.closeOverlay) {
        that.overlay.on('click.modaly', function() {
          methods._close.call(that);
        });
      }

      el.on('click.modaly', function(e) {
        if (that.opt.prevent) {
          e.preventDefault();

          el.prop('checked', !this.checked);
        }

        if (!el.data('block')) {
          methods._open.call(that);
        }
      });

      if (that.opt.esc) {
        $(document).on('keyup.modaly', function(e) {
          var key = e.keyCode || e.which;

          if (key === 27) {
            methods._close.call(that);
          }
        });
      }
    },

    _close: function() {
      if (this.modal.data('opened')) {
        methods._hide.call(this, this.modal);
        methods._hide.call(this, this.overlay);
      }
    },

    _closeButton: function() {
      var button = this.modal.find(this.opt.closeTarget);

      if (!this.opt.closeButton) {
        button.hide();
      }

      return button;
    },

    _hide: function(el) {
      el.data('opened', false).fadeTo(this.opt.speed, 0, function() {
        this.style.display = 'none';
      });
    },

    _modal: function() {
      var modal = $(this.getAttribute('href')).data('opened', false).addClass('modaly');

      return modal;
    },

    _open: function() {
      if (!this.modal.data('opened')) {
        var top = this.opt.top;

        if (top !== undefined && top !== null) {
          var type = (typeof top == 'number' || (top.indexOf('px') < 0 && top.indexOf('%') < 0)) ? 'px' : '';

          this.modal.css({ top: top + type });
        }

        methods._show.call(this, this.modal, 1);
        methods._show.call(this, this.overlay, this.opt.overlay);
      }
    },

    _overlay: function() {
      var overlay = $('#modaly-overlay');

      if (overlay.length === 0) {
        overlay = $('<div />', { id: 'modaly-overlay' });
      }

      return overlay.appendTo('body');
    },

    _show: function(el, overlay) {
      el.data('opened', true).css({ opacity: 0 }).fadeTo(this.opt.speed, overlay);
    },

    block: function(boo) {
      return this.each(function() {
        this.modal.data('block', boo ? true : false);
      });
    },

    close: function() {
      return this.each(function() {
        methods._close.call(this);
      });
    },

    open: function() {
      return this.each(function() {
        methods._open.call(this);
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
    block:        false,
    closeButton:  true,
    closeOverlay: true,
    closeTarget:  '.modaly-close',
    esc:          true,
    overlay:      .5,
    prevent:      true,
    speed:        200,
    top:          undefined
  };
})(jQuery);
