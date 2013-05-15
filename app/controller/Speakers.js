Ext.define('Conference.controller.Speakers', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            schedulesList:"speakersList",
            navigationView:'speakersMain'
        },
        control: {
            speakersList:{
                itemtap:"showSpeaker"
            }
        }
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var store = Ext.getStore("Speakers");
        Ext.getStore("Speakers").load({
            callback: function(records) {
                if(records.length==0) {    
                    var speakers = [];
                    var alreadyPushed = {};
                    Ext.each(schedule, function(talk, index) {
                        if(!alreadyPushed[talk.speaker.name]) {
                            speakers.push(talk.speaker);
                        }
                        alreadyPushed[talk.speaker.name] = true;
                    });   
                    store.setData(speakers);
                    store.sync();
                }
            }
        });
        
    },

    showSpeaker: function(list, index, target, record, e, eOpts) {
        var store = Ext.getStore("Speaker");
        store.removeAll();
        store.add(record);
        store.load();
        
        this.getNavigationView().push({
            xtype:'speakersSpeaker',
            title:record.get("name")
        });   
        mixpanel.track("Show speaker "+record.get("name"));
    }
});