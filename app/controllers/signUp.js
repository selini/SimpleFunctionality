var win,
    db,
    username,
    password,
    email,
    xhr,
    url,
    authstr;
function returnTo(e) {
    'use strict';
    win = Alloy.createController("index");
    $.signUp.close();
    win.getView().open();
}

function SignUpM(e) {
    'use strict';
    username = $.usernameSU.value;
    password = $.passwordSU.value;
    email = $.emailSU.value;

    url = "http://selini.eu.pn/main.php";
    var client = Ti.Network.createHTTPClient({
        // function called when the response data is available
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            alert(this.responseText);
                win = Alloy.createController("index");
                $.signUp.close();
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
       email: email,
       username: username,
       password: password
 
   });
}

function cancelSUM(e) {
    win = Alloy.createController("index");
    $.signUp.close();
    win.getView().open();
}