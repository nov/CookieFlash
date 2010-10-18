$(function () {
  var parse = function (flash) {
    try {
      return JSON.parse(flash);
    } catch(e) {
      return {text: flash}; // To support simple String as $.alert.xxx() input
    }
  };

  var render = function (flash, options) {
    if (typeof flash == 'string') {
      flash = parse(flash);
    }
    $.jGrowl(flash.text, $.extend(flash, options));
  };

  $.alert = {
    error: function (flash) {
      render(flash, {theme: 'error'});
    },
    warn: function (flash) {
      render(flash, {theme: 'warn'});
    },
    notice: function (flash) {
      render(flash, {theme: 'notice'});
    }
  };

  if ($.cookie('flash.error')) {
    $.alert.error($.cookie('flash.error'));
    $.cookie('flash.error', null);
  }
  if ($.cookie('flash.warn')) {
    $.alert.warn($.cookie('flash.warn'));
    $.cookie('flash.warn', null);
  }
  if ($.cookie('flash.notice')) {
    $.alert.notice($.cookie('flash.notice'));
    $.cookie('flash.notice', null);
  }
});
