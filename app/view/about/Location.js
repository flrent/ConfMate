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
                    "<p><a href='https://maps.google.ca/maps?q=oregon+convention+center&ie=UTF-8&ei=59l4UaWXF4bqiwLcqoGQAg&ved=0CAsQ_AUoAg'><img src='/resources/images/map.png' /></a></p>"
                ].join("")
            }
        ]
    }
});