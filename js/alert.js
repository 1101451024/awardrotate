(function($){

$.prealert = {
    alert: function(message, title, callback) {
        if (title == null) title = ' ';
        $.prealert._show(title, message, null, 'alert', function(result) {
            if (callback) callback(result);
        });
    },
    _show: function(title, msg, value, type, callback) {

        $.prealert._hide();
        $("BODY").append(
            '<div class="present">'+
            '<div class="present_pic has_pre zoomIn">'+
            '<p class="pre_txt">'+
            '<p>'+
            '</div>'+
            '</div>');

        if ($.prealert.dialogClass) $(".present").addClass($.prealert.dialogClass);

        // IE6 Fixvar pos = ('undefined' == typeof (document.body.style.maxHeight)) ? 'absolute' : 'fixed';

        $(".present_pic").addClass(type);
        $(".pre_txt").text(msg);
        $(".pre_txt").html($(".pre_txt").text().replace(/\n/g, '<br />'));

        switch (type) {
            case 'alert':
                $(".pre_txt").after('<div class="pre_btn has_btn" id="popup_ok"></div>');
                $("#popup_ok").click(function() {
                    $.prealert._hide();
                    callback(true);
                });
                break;
        }
    },

    _hide: function() {
        $(".present").remove();
    },

}

$.alerts = {
	alert: function(message, title, callback) {
        if (title == null) title = ' ';
        $.alerts._show(title, message, null, 'alert', function(result) {
            if (callback) callback(result);
        });
    },
    alert2: function(message, title, callback) {
        if (title == null) title = 'Alert';
        $.alerts._show(title, message, null, 'alert2', function(result) {
            if (callback) callback(result);
        });
    },

    _show: function(title, msg, value, type, callback) {

        $.alerts._hide();
        $("BODY").append(
        	'<div class="present">'+
        	'<div class="present_pic nt_pre zoomIn">'+
        	'<p class="pre_txt2">'+
        	'</p>'+
        	'<p class="pre_txt">'+
        	'<p>'+
        	'</div>'+
        	'</div>');

        if ($.alerts.dialogClass) $(".present").addClass($.alerts.dialogClass);

        // IE6 Fixvar pos = ('undefined' == typeof (document.body.style.maxHeight)) ? 'absolute' : 'fixed';

        $(".pre_txt2").text(title);
        $(".present_pic").addClass(type);
        $(".pre_txt").text(msg);
        $(".pre_txt").html($(".pre_txt").text().replace(/\n/g, '<br />'));

        switch (type) {
            case 'alert':
                $(".pre_txt").after('<div class="pre_btn nt_btn" id="popup_ok"></div>');
                $("#popup_ok").click(function() {
                    $.alerts._hide();
                    callback(true);
                });
                break;
            case 'alert2':
                $(".pre_txt").after('<div class="pre_btn nt_btn2" id="popup_ok2"></div>');
                $("#popup_ok2").click(function() {
                    $.alerts._hide();
                    callback(true);
                });
                break;
        }

        // Make draggable
        if ($.alerts.draggable) {
            try {
                $(".present").draggable({ handle: $(".pre_txt2") });
                $(".pre_txt2").css({ cursor: 'move' });
            } catch (e) { /* requires jQuery UI draggables */ }
        }
    },

    _hide: function() {
        $(".present").remove();
    },


}

})(jQuery);