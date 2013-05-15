Ext.define('Conference.store.Favorites', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'Conference.model.Schedule',
		autoLoad:true,
		grouper: {
		   groupFn: function(record) {
		    	var dateStart = new Date(Date.parse(record.get("starting_at")));
		   		return dateStart.getDate()+"th of "+Ext.Date.monthNames[dateStart.getMonth()+1]+ " - "+(dateStart.getHours().toString().length > 1 ? dateStart.getHours() : "0"+dateStart.getHours())+":"+(dateStart.getMinutes().toString().length > 1 ? dateStart.getMinutes() : "0"+dateStart.getMinutes());
		   }
		},
		proxy: {
			type: 'localstorage',
			id:'favorites'
        }
	}
});