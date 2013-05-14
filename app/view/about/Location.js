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
                html:globalConfig.infos.howToCome || "Define how to come steps in config.js"
            },
            {
                html:[
                    "<h2>Directions</h2>",
                    "<p>Click on the map to open GPS</p>",
                    "<p><a href='http://2013.jsday.it/location/'><img src='/resources/images/map.jpg' /></a></p>"
                ].join("")
            }
        ]
    }
});