Ext.define('Conference.view.favorites.List', {
    extend: 'Ext.dataview.List',
    xtype: 'favoritesList',

    config: {
        flex:1,
    	title:'My schedule',
    	grouped:true,
        selectedCls:"white",
        pressedCls:"white",
        itemCls:'talk',
        store:'Favorites',
        emptyText:"<h1>Add your favorite talks to create your own schedule for the conference</h1>",
        itemTpl: new Ext.XTemplate(
          '<tpl for=".">',
                '<div class="title">{title}</div>',
                '<div class="speaker"><span>{location}</span> {speaker.name}</div>',
            '</tpl>'
        )
    }
});
