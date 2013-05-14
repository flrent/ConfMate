Ext.define('Conference.view.speakers.List', {
    extend: 'Ext.dataview.List',
    requires:['Ext.XTemplate'],
    xtype: 'speakersList',

    config: {
    	cls:'speakersList',
        flex:1,
    	title:'Speakers',
        store:'Speakers',
        selectedCls:"white",
        pressedCls:"white",
        itemCls:'speaker',
        itemTpl: new Ext.XTemplate(
          '<tpl for=".">',
                '<div class="title">{name}</div>',
            '</tpl>'
        ),
    }
});
