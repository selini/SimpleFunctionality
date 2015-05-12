var win;
function returnTo(e) {
    'use strict';
    win = Alloy.createController("index");
    $.AfterLogin.close();
    win.getView().open();
}

function LogOut(e) {
    'use strict';
    win = Alloy.createController("login");
    $.AfterLogin.close();
    win.getView().open();
}
