Ext.define('Conference.view.schedule.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'scheduleMain',

    config: {
    	title:'Schedule',
        iconCls:'team',
    	items:[
            {
                xtype:'scheduleList'
            }
    	]
    }
});
