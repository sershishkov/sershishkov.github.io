

'use strict';


$(function () {

    $('.button').click(function() {

        var menuItem = $(this).parent();
        var panel = menuItem.find('.panel');

        if (menuItem.hasClass("expanded")) {
            menuItem.removeClass('expanded').addClass('collapsed');
            panel.slideUp();
        }
        else if (menuItem.hasClass("collapsed")) {
            menuItem.removeClass('collapsed').addClass('expanded');
            panel.slideDown();
        }
    });

});
