function returnToI(e){
	'use strict';
var win = Alloy.createController("index");
	$.parsing.close();
	win.getView().open();
}

Ti.API.info('Original response ' + this.responseText);
        // Document Object
        var doc = this.responseXML.documentElement;
        Ti.API.info('Document XML' + doc);
        var elements = doc.getElementsByTagName("item");
        Ti.API.info('Document item' + elements.text);
        //this is the XML document object

        // Parse XML
        var xml = Ti.XML.parseString(this.responseText);
        Ti.API.info('Parsed XML' + xml);

        // get item from xml
        var countryList = xml.documentElement.getElementsByTagName("item");
        Titanium.API.info("country is " + countryList);
        Titanium.API.info("lenght of countries" + countryList.length);
        Titanium.API.info("country is " + countryList.item(0));

        for (var i = 0; i < countryList.length; i++) {
            Titanium.API.info("loop country is " + countryList.item(i).text);
            countryArray[i] = countryList.item(i).text;
        };
        Titanium.API.info("Array country is " + countryArray);