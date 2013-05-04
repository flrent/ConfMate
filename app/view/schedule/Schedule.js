Ext.define('Conference.view.schedule.Schedule', {
    extend: 'Ext.dataview.DataView',
    xtype: 'scheduleSchedule',

    config: {
        styleHtmlContent:true,
        store:'Schedule',
        itemTpl:[
            '<h3>{title}</h3>',
            '<h5>{speaker.name}</h3>',
            '<p>{description}</p>'
        ],
        items:[
            {
                xtype:'toolbar',
                docked:"bottom",
                ui:"none",
                defaults:{flex:1},
                items:[
                    {
                        text:'Add to favorites',
                        cls:"add-to-favorites",
                        ui:'action',
                        iconCls:"favorites"
                    },
                    /*{
                        text:'Share'
                    }*/
                ]
            }
        ]
    }
});
