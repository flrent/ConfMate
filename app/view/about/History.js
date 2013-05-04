Ext.define('Conference.view.about.History', {
    extend: 'Ext.Panel',
    xtype: 'aboutHistory',

    config: {
        title:'About',
        styleHtmlContent:true,
        scrollable:true,
        cls:'aboutHistory',
        html:globalConfig.infos.history || "Define history in config.js"
    }
});
