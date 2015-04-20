	var widget,win;
function returnTo(e){
	'use strict';
 win = Alloy.createController("index");
	$.calentar.close();
	win.getView().open();
}
var moment = require('alloy/moment');
var currentMonth = moment();

function doPrevMonth() {

    // Remove current month calendar.
    $.calendar.remove($.calendar.children[0]);

    // Create previous month calendar and add view
    currentMonth.subtract('months', 1);
    widget = Alloy.createWidget('jp.co.mountposition.calendar', 'widget', {period: currentMonth});
    $.calendar.add(widget.getView());

    // Get calendar displayed (moment object)
    Ti.API.info(widget.calendarMonth());
}

function doNextMonth() {
    $.calendar.remove($.calendar.children[0]);

    // Create next month calendar and add view
    currentMonth.add('months', 1);
    widget = Alloy.createWidget('jp.co.mountposition.calendar', 'widget', {period: currentMonth});
    $.calendar.add(widget.getView());

    Ti.API.info(widget.calendarMonth());
}

$.calentar.open();
