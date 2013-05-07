Ext.define('Conference.model.Tweet', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['from_user', 'text', 'profile_image_url']
    }
});