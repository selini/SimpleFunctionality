function returnTo(e){
	'use strict';
var win = Alloy.createController("index");
	$.greet.close();
	win.getView().open();
}

function ShowName(e){
	'use strict';
	var t="hola ";
	$.textA.setText(t+$.NameTextField.value);
}
