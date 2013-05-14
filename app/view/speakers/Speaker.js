Ext.define('Conference.view.speakers.Speaker', {
    extend: 'Ext.dataview.DataView',
    xtype: 'speakersSpeaker',

    config: {
        styleHtmlContent:true,
        store:'Speaker',
        itemTpl:[
            '<h3></h3>',
            '<h5>{name}</h3>',
            '<p>{description}</p>'
        ],
        items:[]
    }
});
