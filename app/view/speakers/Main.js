Ext.define('Conference.view.speakers.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'speakersMain',

    config: {
    	title:'Speakers',
        iconCls:'team',
    	items:[
            {
                xtype:'speakersList'
            }
    	]
    }
});
