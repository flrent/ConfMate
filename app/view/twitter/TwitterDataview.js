Ext.define("Conference.view.twitter.TwitterDataView", {
    extend: 'Ext.dataview.DataView',
    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterDataview',

    config: {
        itemTpl: '<div class="tweet"><img src="{profile_image_url}" /><span>{from_user}</span>{text}</div>',
        height:300,
        store: 'Tweets'
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});