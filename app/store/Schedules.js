Ext.define('Conference.store.Schedules', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'Conference.model.Schedule',
		autoLoad:true,

		grouper: {
		   groupFn: function(record) {
		    	var dateStart = new Date(record.get("starting_at")),
		    		dateEnd = new Date(record.get("ending_at"));

		   		return dateStart.toLocaleString();
		   }
		},
		data:schedule
	}
});