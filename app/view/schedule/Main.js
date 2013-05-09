Ext.define('Conference.view.schedule.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'scheduleMain',

    config: {
    	title:'Schedule',
        iconCls:'table',
    	items:[
            {
                xtype:'scheduleList'
            }
    	]
    }
});
