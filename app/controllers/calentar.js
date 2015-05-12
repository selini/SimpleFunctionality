var dayA,
    monthA,
    yearA,
    minDate,
    win;

function returnTo(e) {
	'use strict';
	win = Alloy.createController("index");
	$.calentar.close();
	win.getView().open();
}

minDate = new Date();
dayA = minDate.getDate();
monthA = (minDate.getMonth() + 1);
yearA = minDate.getFullYear();
var square = require('ti.sq');
var calendarViewA = square.createView({
	height : 300,
	width : 300,
	pagingEnabled : true,
	min : {
		month : monthA,
		day : dayA,
		year : yearA
	},
	max : {
		month : 01,
		day : 01,
		year : 2035
	}
});

$.calentar.add(calendarViewA);
