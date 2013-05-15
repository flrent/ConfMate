Ext.define("Conference.view.twitter.TwitterDataView", {
    extend: 'Ext.dataview.List',
    requires:['Ext.dataview.List','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterDataview',

    config: {
        cls:"twitter",
        itemCls:"tweet",
        itemTpl: '<img src="{profile_image_url}" /><span>{from_user}</span>{text}',
        itemHeight:'60px',
        selectedCls:"none",
        store: 'Tweets',
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: 'Refresh',
                loadingText:'Loading...',
                releaseRefreshText:'Pull to refresh'
            }
        ]
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});