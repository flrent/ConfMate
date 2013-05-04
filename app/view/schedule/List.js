Ext.define('Conference.view.schedule.List', {
    extend: 'Ext.dataview.List',
    requires:['Ext.XTemplate'],
    xtype: 'scheduleList',

    config: {
    	cls:'scheduleList',
        flex:1,
    	title:'Schedule',
        store:'Schedules',
        selectedCls:"white",
        pressedCls:"white",
        itemCls:'talk',
        itemTpl: new Ext.XTemplate(
    		'<tpl for=".">',
    			'<div class="title">{title}</div>',
    			'<div class="speaker">{speaker.name}</div>',
    		'</tpl>'
        ),
        grouped:true
    }
});
