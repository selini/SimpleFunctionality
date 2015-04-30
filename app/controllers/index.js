function doClickButtonPicture(e) {
	'use strict';

	var win = Alloy.createController("picture");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonGreet(e) {
	'use strict';

	var win = Alloy.createController("greet");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonLogin(e) {
	'use strict';

	var win = Alloy.createController("login");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonCalentar(e) {
	'use strict';
	var win = Alloy.createController("calentar");
	$.index.close();
	win.getView().open();
}

function doClickButtonMap(e) {
	'use strict';
	var win = Alloy.createController("map");
	$.index.close();
	win.getView().open();
}

function doClickButtonSQL(e) {
	'use strict';
	var win = Alloy.createController("sql");
	$.index.close();
	win.getView().open();
}

function doClickButtonArray(e) {
	'use strict';
	var win = Alloy.createController("ShowUsers");
	$.index.close();
	win.getView().open();
}

function doClickButtonParsing(e) {
	'use strict';
	var win = Alloy.createController("parsing");
	$.index.close();
	win.getView().open();
}
function doClickButtonExit(e) {
	'use strict';
var exitModule = require('com.pf.exit'); // loads the module
exitModule.terminate(0); // terminates application with code 0
}

$.index.open();

