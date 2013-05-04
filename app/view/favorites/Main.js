Ext.define('Conference.view.favorites.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'favoritesMain',

    config: {
        title:'Favorites',
        iconCls:'favorites',
        items:[
            {
                xtype:'favoritesList'
            }
        ]
    }
});
