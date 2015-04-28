var db,id,name,test;
function returnTo(e){
	'use strict';
var win = Alloy.createController("index");
	$.sql.close();
	win.getView().open();
}

db = Ti.Database.install('/mydata/test.sqlite', 'testDB1');
function executeCMD(e){
	'use strict';
var test = db.execute('SELECT * FROM cities');
db.execute('INSERT INTO cities (id,name) VALUES (11,"patra")');
test=db.execute('SELECT * FROM cities ');
while (test.isValidRow())
{
  id = test.fieldByName('id');
 name =test.fieldByName('name');
 Ti.API.info(' ' + id + ' ' + name);
  test.next();
}
test.close();
}

