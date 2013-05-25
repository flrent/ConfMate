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
                    "<p>Click on the map to see complete details.</p>",
                    "<p><a target='_new' href='http://2013.jsconf.us/getting-here'><img src='resources/images/map.png' /></a></p>"
                ].join("")
            }
        ]
    }
});