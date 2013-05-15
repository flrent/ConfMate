/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Conference': 'app'
});
//</debug>
Ext.application({
    name: 'Conference',
    viewport : {
        autoMaximize: !Ext.browser.is.Standalone && Ext.os.is.iOS && Ext.browser.is.Safari
    },
    models:[
        'Schedule',
        'Speaker',
        'Tweet'
    ],

    views: [
        'about.Main','about.History','about.Location',
        'favorites.Main','favorites.List',
        'schedule.Main','schedule.List','schedule.Schedule',
        'speakers.Main','speakers.List','speakers.Speaker',
        'twitter.Main','twitter.TwitterDataView',
        'Tabs'
    ],

    stores: [
        'Favorites',
        'Schedule',
        'Schedules',
        'Speaker',
        'Speakers',
        'Tweets'
    ],

    controllers: [
        'About',
        'Favoris',
        'Schedule',
        'Schedules',
        'Speakers'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.fly('downloading').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Conference.view.Tabs'));

        if(Ext.os.is.iOS && !Ext.Viewport.isHomeScreen()) {
            var alreadyShowHomeScreen = localStorage.getItem("alreadyShowHomeScreen");

            if(!alreadyShowHomeScreen) {
                var addToHome = Ext.create('Ext.Panel', {
                    modal:true,
                    hideOnMaskTap:true,
                    centered:false,
                    bottom:80,
                    width:'100%',
                    style:'padding:0;',
                    cls:'installToHomeScreen',
                    defaults:{style:'margin:5px;'},
                    items:[
                        {
                            styleHtmlContent:true,
                            style:"text-align:center;",
                            html:"<h3>Add this webapp to your home screen to take full advantage of your phone screen and offline feature.</p>"
                        },
                        {
                            style:"text-align:center;margin-top:-20px;",
                            html:'<p><img src="resources/images/addtohomescreen.jpg"/></p>'
                        },
                        {
                            xtype:'button',
                            ui:'action',
                            text:'Ok',
                            handler: function() {
                                addToHome.hide();
                            }
                        }
                    ]
                });
                Ext.Viewport.add(addToHome);
                addToHome.show({type:'slide',direction:'up',duration:1000});
                localStorage.setItem("alreadyShowHomeScreen",true);
            }
        }

        mixpanel.track("Launch app");
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    mixpanel.track("Update app");
                    window.location.reload();
                }
            }
        );
    }
});
