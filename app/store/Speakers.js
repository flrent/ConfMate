Ext.define('Conference.store.Speakers', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'Conference.model.Speaker',
	    sorters: [
	        {
	            property : "name",
	            direction: "ASC"
	        }
	    ],
		proxy: {
			type: 'localstorage',
			id:'speakers-'+globalConfig.uniqueId
        }
	}
});