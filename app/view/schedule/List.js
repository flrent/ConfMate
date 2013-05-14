Ext.define('Conference.view.schedule.List', {
    extend: 'Ext.dataview.List',
    requires:['Ext.XTemplate'],
    xtype: 'scheduleList',

    config: {
    	cls:'scheduleList',
        flex:1,
    	title:globalConfig.name + ' Schedule',
        store:'Schedules',
        selectedCls:"white",
        pressedCls:"white",
        itemCls:'talk',
        itemTpl: new Ext.XTemplate(
		  '<tpl for=".">',
                '<div class="title">{title}</div>',
    			'<div class="speaker"><span>{location}</span> {speaker.name}</div>',
    		'</tpl>'
        ),
        grouped:true
    }
});
