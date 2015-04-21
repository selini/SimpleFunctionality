var db,importName,importContinent,importTempF,importTempC,dbConditionId,cityId,cityName,cityContinent;
function returnTo(e){
	'use strict';
var win = Alloy.createController("index");
	$.sql.close();
	win.getView().open();
}
db = Ti.Database.install('/mydata/test.sqlite', 'weatherDB1');
function executeCMD(e){
	'use strict';
var cityWeatherRS = db.execute('SELECT * FROM cities');
db.execute('INSERT INTO cities (id,city) VALUES (9,"sallonika")');
cityWeatherRS=db.execute('SELECT * FROM cities ');
while (cityWeatherRS.isValidRow())
{
  cityName = cityWeatherRS.fieldByName('id');
  cityContinent = cityWeatherRS.fieldByName('city');
  Ti.API.info(' ' + cityName + ' ' + cityContinent);
  cityWeatherRS.next();
}
cityWeatherRS.close();
}

