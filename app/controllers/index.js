function doClickButtonPicture(e) {
	'use strict';

	var win = Alloy.createController("picture");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonColor(e) {
	'use strict';

	var win = Alloy.createController("login");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonMusic(e) {
	'use strict';

	var win = Alloy.createController("greet");
	$.index.close();
	win.getView().open();
	

}
function doClickButtonCalentar(e) {
	'use strict';
	var win = Alloy.createController("calentar");
	$.index.close();
	win.getView().open();
}


function doClickButtonExit(e) {
	'use strict';
var exitModule = require('com.pf.exit'); // loads the module
exitModule.terminate(0); // terminates application with code 0
}

$.index.open();

