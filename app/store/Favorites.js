Ext.define('Conference.store.Favorites', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'Conference.model.Schedule',
		autoLoad:true,
		grouper: {
			groupFn: function(record) {
		    	var dateStart = new Date(record.get("starting_at"));
		   		return dateStart.getDate()+"th of "+Ext.Date.monthNames[dateStart.getMonth()+1]+ " - "+dateStart.getHours()+":"+(dateStart.getMinutes().length > 1 ? dateStart.getMinutes() : "00");
		   }
		},
		proxy: {
			type: 'localstorage',
			id:'favorites'
        }
	}
});