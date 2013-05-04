Ext.define('Conference.view.about.Location', {
    extend: 'Ext.Panel',
    xtype: 'aboutLocation',

    config: {
        title:'About',
        styleHtmlContent:true,
        scrollable:"vertical",
        cls:'aboutLocation',
        items:[
            {
                html:[
                    '<h2>Getting around Portland</h2>',
                    '<p>Travel Portland has graciously provided Conference attendees with free passes for the MAX light rail train, Portland Street Car and buses. These passes are good for the duration of the conference, April 29 - May 2, 2013. Passes will be available at Registration, upon request. You will need to carry the pass to board the train, car or bus.</p>',
                    '<p>On the day of your arrival, take the MAX Red Line to the various destinations below. The cost for this one way trip is $2.50. Travel for the remainder of your time in Portland will be covered by the pass.</p>',
                    "<ul><li>DoubleTree - Lloyd Center stop</li>",
                    "<li>Crowne Plaza - Convention Center stop</li>",
                    "<li>Red Lion Hotel - Convention Center stop</li>",
                    "<li>Courtyard by Marriott - Convention Center stop</li></ul>"
                ].join(""),   
            },
            {
                html:[
                    "<h2>Directions</h2>",
                    "<p>Click on the map to open GPS</p>",
                    "<p><a href='https://maps.google.ca/maps?q=oregon+convention+center&ie=UTF-8&ei=59l4UaWXF4bqiwLcqoGQAg&ved=0CAsQ_AUoAg'><img src='/resources/images/map.png' /></a></p>"
                ].join("")
            }
        ]
    }
});