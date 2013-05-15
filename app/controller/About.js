Ext.define('Conference.controller.About', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navigationView:'aboutMain',
            menu:'aboutMain dataview',
        },
        control: {
            menu: {
                itemtap: "handleMenu"
            }
        }
    },
    handleMenu: function(dt, index, target, record, e, eOpts) {
        var goTo = record.get("goto");

        if(goTo=="history") {
            this.showHistory();
        }
        else if(goTo=="location") {
            this.showLocation();
        }
    },
    showHistory: function() {
        this.getNavigationView().push({xtype:"aboutHistory"});
        mixpanel.track("Show History");
    },
    showLocation: function() {
        this.getNavigationView().push({xtype:"aboutLocation"});
        mixpanel.track("Show Location");
    }
});