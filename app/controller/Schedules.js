Ext.define('Conference.controller.Schedules', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            schedulesList:"scheduleList",
            navigationView:'scheduleMain'
        },
        control: {
            scheduleList:{
                itemtap:"showSchedule"
            }
        }
    },
    showSchedule: function(list, index, target, record, e, eOpts) {
        Ext.getStore("Schedule").removeAll();
        Ext.getStore("Schedule").add(record);
        Ext.getStore("Schedule").load();
        
        this.getNavigationView().push({
            xtype:'scheduleSchedule',
            title:record.get("title")
        });   
    }
});