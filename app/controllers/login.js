var win;

function returnTo(e) {
    'use strict';
    win = Alloy.createController("index");
    $.login.close();
    win.getView().open();
}

function loginM(e) {
    'use strict';
db = Ti.Database.install('/mydata/test.sqlite', 'userEnable');

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

