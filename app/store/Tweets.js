Ext.define('Conference.store.Tweets', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Conference.model.Tweet',
        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',

            reader: {
                type: 'json',
                rootProperty: 'results'
            },
            extraParams:{
                q:globalConfig.hashtag,
                rpp:50,
                p:1
            }
        }
    }
});