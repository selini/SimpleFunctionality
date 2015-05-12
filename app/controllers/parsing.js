function returnToI(e){
	'use strict';
var win = Alloy.createController("index");
	$.parsing.close();
	win.getView().open();
}



///////////////////////////////////////////XML/////////////////////////////////////////
var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'book.xml');
var contents = f.read();


var doc = Ti.XML.parseString(contents.text);
// begin looping through blog posts
	var items = doc.getElementsByTagName("book");
	for (var i=0;i<items.length;i++) {
		Ti.API.log(items.item(i).getElementsByTagName("author").item(0).text);
	
	}
var url="http://apod.nasa.gov/apod.rss"; //  rss feed url
var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
	// Data is returned from the blog, start parsing
	var doc = this.responseXML.documentElement;

	// begin looping through blog posts
	var items = doc.getElementsByTagName("item");
	for (var i=0;i<items.length;i++) {
		Ti.API.log(items.item(i).getElementsByTagName("link").item(0).text);
	
	}

};
xhr.onerror = function(e) {
	// should do something more robust
	alert('Network error '+e.error);
};

xhr.open('GET',url);
xhr.send();



//////////////////////////////JSON/////////////////////////////////////////////

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'color.json');
var contents = f.read();


var jsonObject = JSON.parse(contents.text);

 Ti.API.info('color=' + jsonObject.colorsArray[4].colorName);

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
   var jsonObject = JSON.parse(this.responseText);
 
   // For debugging, if you want to see how the JSON parser see's the 
   // response text, un-comment the line below
   // Ti.API.info(jsonObject);
    
   Ti.API.info('nm=' + jsonObject[0].nm);

};
 
xhr.open("GET","http://mysafeinfo.com/api/data?list=englishmonarchs&format=json");
xhr.send();