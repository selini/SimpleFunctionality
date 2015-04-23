var win,
    db,
    username,
    password,
    email,
    xhr,
    url;
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
    
    xhr = Ti.Network.HTTPClient();
    url = "http://.php";
    xhr.open("POST", url);
    var authstr = 'Basic ' + Titanium.Utils.base64encode(username + ':' + password + ':' + email);
    xhr.setRequestHeader('Authorization', authstr);
    xhr.send();
}

function cancelSUM(e) {
    win = Alloy.createController("index");
    $.signUp.close();
    win.getView().open();
}