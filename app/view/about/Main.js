Ext.define('Conference.view.about.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'aboutMain',

    config: {
        title:'About',
        iconCls:'info',
        items:[
            {
                title:'About',
                scrollable:true,
                layout:{
                    type:'vbox'
                },
                cls:'about',
                items:[
                    {
                        cls:'image',
                        html:'<img src="'+globalConfig.logo+'" height="100%">',
                        flex:1
                    },
                    {
                        flex:1,
                        xtype:'dataview',
                        scrollable:false,
                        data:[
                            {
                                "title":"History",
                                "goto":"history"
                            },
                            {
                                "title":"How to come",
                                "goto":"location"
                            }
                        ],
                        itemCls:"menu",
                        selectedItemCls:'selected',
                        itemTpl:"<h4>{title}</h4>"
                    },
                    {
                        cls:"author",
                        html:'<p>App made by <a href="http://twitter.com/flrent">@flrent</a></p>'
                    }
                ]
            }
        ]
    }
});
