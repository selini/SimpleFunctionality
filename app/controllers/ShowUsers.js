function returnTo(e) {
	'use strict';
	var win = Alloy.createController("index");
	$.ShowUsers.close();
	win.getView().open();
}

var users = "all";
url = "http://selini.eu.pn/main.php";
var client = Ti.Network.createHTTPClient({
	// function called when the response data is available
	onload : function(e) {
		var jsonArray = JSON.parse(this.responseText);
			
		$.usernameU1.title=jsonArray.user[0].username;
		$.passwordU1.title = jsonArray.user[0].password;
		$.usernameU2.title = jsonArray.user[1].username;
		$.passwordU2.title = jsonArray.user[1].password;

	},
	// function called when an error occurs, including a timeout
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('error');
	},
	timeout : 5000 // in milliseconds
});
// Prepare the connection.
client.open("POST", url);

client.send({
	users : users
}); 