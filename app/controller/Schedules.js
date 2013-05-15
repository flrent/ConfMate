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
    launch: function() {
        Ext.getStore("Schedules").sync();
    },
    showSchedule: function(list, index, target, record, e, eOpts) {
        var store = Ext.getStore("Schedule");
        store.removeAll();
        store.add(record);
        store.load();
        
        this.getNavigationView().push({
            xtype:'scheduleSchedule',
            title:record.get("title")
        }); 
        mixpanel.track("Show talk "+record.get("title"));
    }
});