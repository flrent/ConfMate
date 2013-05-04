Ext.define('Conference.controller.Schedule', {
    extend: 'Ext.app.Controller',
    requires:["Ext.MessageBox"],
    
    config: {
        refs: {
            navigationView:'scheduleMain',
            schedule:'scheduleSchedule',
            schedulesList:"scheduleList",
            addToFavorites:'scheduleSchedule button[cls=add-to-favorites]',
            dataview:'scheduleSchedule dataview'
        },
        control: {
            addToFavorites:{
                tap:"addToFavorites"
            }
        }
    },
    addToFavorites: function() {
        var favoritesStore = Ext.getStore("Favorites");
        favoritesStore.add(Ext.getStore("Schedule").getAt(0));
        favoritesStore.sync();
        Ext.Msg.alert('Talk added', 'Your schedule is now updated.', Ext.emptyFn);
    }
});