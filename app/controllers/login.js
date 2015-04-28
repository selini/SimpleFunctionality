var win,
    username,
    password,
    url;

function returnTo(e) {
    'use strict';
    win = Alloy.createController("index");
    $.login.close();
    win.getView().open();
}

function loginM(e) {
    'use strict';
    username = $.username.value;
    password = $.password.value;

    url = "http://selini.eu.pn/main.php";
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            alert(this.responseText);
            $.login.setTitle(username);
            win = Alloy.createController("index");
            $.login.close();
            win.getView().open();
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
        username : username,
        password : password

    });

}
function cancelM(e) {
    'use strict';
    win = Alloy.createController("index");
    $.login.close();
    win.getView().open();
}

function GoToSignUP(e) {
    win = Alloy.createController("signUp");
    $.login.close();
    win.getView().open();
}

