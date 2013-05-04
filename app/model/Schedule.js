Ext.define('Conference.model.Schedule', {
	extend:'Ext.data.Model',
	
	config: {
		fields:[
			'title',
			'speaker',
			'description',
			"location",
			"starting_at",
			"ending_at"
		]
	}
});