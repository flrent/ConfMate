Ext.define('Conference.controller.Favoris', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navigationView:'favoritesMain',
            favorisList:'favoritesList',
        },
        control: {
            favorisList:{
                itemtap:"removeFavorite"
            }
        }
    },
    removeFavorite: function(list, index, target, record, e, eOpts) {
        Ext.Msg.confirm("Remove Talk", "Do you really want to remove this talk from your schedule ?", function(buttonId,value) {
            if(buttonId=="yes") {
                Ext.getStore("Favorites").remove(record);
                Ext.getStore("Favorites").sync();
            }
        });
    }
});