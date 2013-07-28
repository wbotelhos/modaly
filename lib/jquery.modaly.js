/*!
 * jQuery Modaly - A Modal Plugin
 * ----------------------------------------------------------------------
 *
 * jQuery Modaly is a plugin that generates a simple modal window.
 *
 * Licensed under The MIT License
 *
 * @version        0.1.0
 * @since          2013-04-27
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/modaly
 *
 * ----------------------------------------------------------------------
 *
 *  <div id="modal">
 *    <input type="button" value="×" class="modaly-close" />
 *  </div>
 *
 *  <a href="#modal">open</a>
 *
 *  $('a').modaly();
 *
 */

;(function($) {

  var methods = {
    init: function(settings) {
      return this.each(function() {
        this.opt = $.extend({}, $.fn.modaly.defaults, settings);

        this.overlay = methods._overlay.call(this);
        this.modal   = methods._modal.call(this);
        this.close   = methods._closeButton.call(this);

        methods._bind.call(this);

        $(this).data({
          block    : this.opt.block ? true : false,
          modaly   : true,
          settings : this.opt
        });
      });
    }, _bind: function() {
      var that = this,
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
        e.preventDefault();

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
    }, _close: function() {
      if (this.modal.data('opened')) {
        methods._hide.call(this, this.modal);
        methods._hide.call(this, this.overlay);
      }
    }, _closeButton: function() {
      var button = this.modal.find(this.opt.closeTarget);

      if (!this.opt.closeButton) {
        button.hide();
      }

      return button;
    }, _hide: function(el) {
      el.data('opened', false).fadeTo(this.opt.speed, 0, function() {
        this.style.display = 'none';
      });
    }, _modal: function() {
      var modal = $(this.getAttribute('href')).data('opened', false).addClass('modaly');

      return modal.css({ 'position' : 'fixed', 'z-index'  : 11000 });
    }, _open: function() {
      if (!this.modal.data('opened')) {
        this.modal.css({
          left          : 50 + '%',
          'margin-left' : -(this.modal.outerWidth() / 2) + 'px',
          top           : this.opt.top + 'px'
        });

        methods._show.call(this, this.modal, 1);
        methods._show.call(this, this.overlay, this.opt.overlay);
      }
    }, _overlay: function() {
      var overlay = $('#modaly-overlay');

      if (overlay.length === 0) {
        overlay = $('<div />', { id: 'modaly-overlay' });
      }

      return overlay.appendTo('body');
    }, _show: function(el, overlay) {
      el.data('opened', true).css({ opacity: 0 }).fadeTo(this.opt.speed, overlay);
    }, block: function(boo) {
      return this.each(function() {
        this.modal.data('block', boo ? true : false);
      });
    }, close: function() {
      return this.each(function() {
        methods._close.call(this);
      });
    }, open: function() {
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
    block        : false,
    closeButton  : true,
    closeOverlay : true,
    closeTarget  : '.modaly-close',
    esc          : true,
    overlay      : .5,
    speed        : 200,
    top          : 100
  };

})(jQuery);
