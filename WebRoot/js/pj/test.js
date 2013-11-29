function treeGridFunTest() {
	var treeStore = Ext.create('Ext.data.TreeStore', {
		fields : [ 'id', 'name', 'sex', 'age' ],
		root : {
			"children" : [ {
				id : '001',
				name : 'shu',
				sex : '',
				age : '',
				expanded : true,
				"children" : [ {
					id : '001_1',
					name : 'liu.bei',
					sex : 'male',
					age : '50',
					"children" : [ {
						id : '001_221',
						name : 'guan.yu',
						sex : 'male',
						age : '49',
						isLeaf : true
					} ]
				}, {
					id : '001_2',
					name : 'guan.yu',
					sex : 'male',
					age : '49'
				}, {
					id : '001_3',
					name : 'zhang.fei',
					sex : 'male',
					age : '48'
				} ]
			} ]
		}
	});
	var gridCols = [ {
		xtype : 'treecolumn',
		text : 'ID',
		dataIndex : 'id'
	}, {
		text : 'Name',
		dataIndex : 'name',
		editor : {
			xtype : 'textfield'
		}
	}, {
		text : 'Sex',
		dataIndex : 'sex'
	}, {
		text : 'Age',
		dataIndex : 'age'
	} ];

	var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {
		clicksToEdit : 1
	});

	var treeGrid = Ext.create('Ext.tree.Panel', {
		title : 'Three KingDom',
		rootVisible : false,
		region : 'center',
		collapsible : false,
		store : treeStore,
		simpleSelect : true,
		columns : gridCols,
		selType : 'cellmodel',
		plugins : [ cellEditPlugin ]
	// renderTo : 'test'
			});
	return treeGrid;
}
