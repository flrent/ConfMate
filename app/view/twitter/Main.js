Ext.define('Conference.view.twitter.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'twitterMain',

    config: {
        title:'Twitter',
        iconCls:'info',
        items:[
            {
                title:globalConfig.hashtag || "Twitter",
                items:[
                    {
                        xtype:"twitterDataview"
                    }
                ]
            }
        ]
    }
});
