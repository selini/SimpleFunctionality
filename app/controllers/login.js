function returnTo(e){
	'use strict';
var win = Alloy.createController("index");
	$.login.close();
	win.getView().open();
}
function loginM(e){
	'use strict';
alert("log in");
}
function cancelM(e){
	'use strict';
var win = Alloy.createController("index");
	$.login.close();
	win.getView().open();
}