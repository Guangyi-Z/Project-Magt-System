var taskManageFn = function() {
	var pageSize = 20;
	Ext.define('Task', {
		extend : 'Ext.data.Model',
		fields : [ {
			name : 'id',
			type : 'int'
		}, {
			name : 'task_name',
			type : 'string'
		}, {
			name : 'time_limit',
			type : 'int'
		}, {
			name : 'start_day',
			type : 'date'
		}, {
			name : 'end_day',
			type : 'date'
		}, {
			name : 'task_status',
			type : 'string'
		}, {
			name : 'task_intr',
			type : 'string'
		}, {
			name : 'is_stone',
			type : 'string'
		}, {
			name : 'parent_node_id',
			type : 'int'
		} ]
	});

	Ext.define('Sel',{
		extend : 'Ext.data.Model',
		fields : [{
			name : 'id',
			type : 'int'
		}, {
			name : 'yesno',
			type : 'string'
		}]
	});
	
	var store = Ext.create('Ext.data.Store',{
		model : Sel,
		data : [['1','是'],['2','否']]
	})
	
	var treeStore = Ext.create('Ext.data.TreeStore', {
		model : Task,
		root : {
			"children" : [ {
				id : '1',
				task_name : '总任务',
				time_limit : '',
				start_day : '',
				end_day : '',
				task_status : '',
				task_intr : '',
				is_stone : '',
				parent_node_id : '',
				expanded : true,
				"children" : [ {
					id : '2',
					task_name : '吃饭',
					time_limit : '3',
					start_day : '2013-1-1',
					end_day : '2013-1-4',
					task_status : '已完成',
					task_intr : '...',
					is_stone : '否',
					parent_node_id : '',
					"children" : [ {
						id : '3',
						task_name : '001_221',
						time_limit : 'guan.yu',
						start_day : 'male',
						end_day : '49',
						task_status : '',
						task_intr : '',
						is_stone : '',
						parent_node_id : '',
						leaf : true
					} ]
				}, {
					id : '4',
					task_name : '睡觉',
					time_limit : '3',
					start_day : '2013-1-1',
					end_day : '2013-1-4',
					task_status : '已完成',
					task_intr : '...',
					is_stone : '否',
					parent_node_id : '',
					leaf : true
				}, {
					id : '5',
					task_name : '打豆豆',
					time_limit : '3',
					start_day : '2013-1-1',
					end_day : '2013-1-4',
					task_status : '已完成',
					task_intr : '...',
					is_stone : '是',
					parent_node_id : '',
					leaf : true
				} ]
			} ]
		}
	});

	// 新增任务
	var addTaskFn = function() {
		var record = treeGrid.getSelectionModel().getLastSelected();// 获取用户当前点击的记录
		// 增加一个新的节点
		var newNode = new Ext.create('Task', {
			id : '6',
			task_name : '',
			time_limit : '',
			start_day : '',
			end_day : '',
			task_status : '',
			task_intr : '',
			is_stone : '',
			parent_node_id : '',
			leaf : true
		});
		var rootNode = treeGrid.getRootNode();
		var parent = rootNode.findChild('task_name', '总任务', false);
		rootNode.insertBefore(newNode, record);
		newNode.save();
		treeGrid.getStore().reload();
		// rootNode.insertChild(0,newNode);
	};

	// 删除任务
	var delTaskFn = function() {
		var delRecord = treeGrid.getSelectionModel().getLastSelected();// 获取用户当前点击的记录
		if (delRecord.hasChildNodes()) {
			Ext.MessageBox.confirm('警告', '确定删除该任务及其子任务 ?', result);
			function result(btn) {// MessageBox的回调函数
				if (btn == "yes")
					delRecord.remove();// 删除该记录(子任务也一起删除)
			}
		} else {
			Ext.MessageBox.confirm('警告', '确定删除该任务 ?', result);
			function result(btn) {
				if (btn == "yes")
					delRecord.remove();
			}
		}
	}

//	var yesorno = [['1','是'],['2','否']];
//	var proxy = new Ext.data.MemoryProxy(yesorno);
//	var yesno = Ext.data.Record.create([{name:'id',type:'int'},{name:'cname',type:'string'}]);
//	var reader = Ext.data.ArrayReader({},yesno);
//	var store = new Ext.data.Store(
//		[['1','shi'],['2','fou']]
//	);
	
	var gridCols = [ {
		xtype : 'treecolumn',
		text : '任务名称',
		dataIndex : 'task_name',
		editor : {
			xtype : 'textfield'
		}
	}, {
		text : '工期',
		dataIndex : 'time_limit',
	}, {
		text : '开始时间',
		dataIndex : 'start_day',
		editor : {
			xtype : 'datefield',
			anchor : '100%',
			value : new Date()
		}
	}, {
		text : '结束时间',
		dataIndex : 'end_day',
		editor : {
			xtype : 'datefield',
			anchor : '100%',
			value : new Date()
		}
	}, {
		text : '任务状态',
		dataIndex : 'task_status',
	}, {
		text : '任务简介',
		dataIndex : 'task_ intr',
		editor : {
			xtype : 'textfield'
		}
	}, {
		text : '是否设置为里程碑',
		dataIndex : 'is_stone',
		editor: {
			xtype : 'combobox',
			editable : false,
			displayField : 'yesno',
			valueField : 'id',
			mode : 'local',
			store : new Ext.data.SimpleStore({
				fields : [['id'],['yesno']],
				data : [['1','是'],['2','否']]
			})
		}
	} ];

	var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {
		clicksToEdit : 1
	});

	// 下面是按钮
	// 增加任务按钮
	var btn_add = new Ext.Button( {
		text : "新建任务",
		tooltip : "新建任务",
		id : "addType",
		iconCls : 'icon-btn-add',
		handler : function() {
			var titleText = '新建任务';
			addTaskFn();
		}
	});

	// 删除任务按钮
	var btn_del = new Ext.Button( {
		text : "删除任务",
		tooltip : "删除任务",
		id : "addTaskType",
		iconCls : "icon-btn-del",
		handler : function() {
			new delTaskFn();
		}
	});

	// 保存按钮
	var btn_save = new Ext.Button( {
		text : "保存",
		tooltip : "保存",
		id : "saveTaskType",
		iconCls : "icon-btn-save",
		handler : function() {

		}
	});

	// 增加缩进按钮
	var btn_increase_indent = new Ext.Button( {
		text : "增加缩进",
		tooltip : "增加缩进",
		id : "increaseTaskIndentType",
		iconCls : "icon-btn-increaseTaskIndent",
		handler : function() {

		}
	});

	// 减少缩进按钮
	var btn_reduce_indent = new Ext.Button( {
		text : "减少缩进",
		tooltip : "减少缩进",
		id : "reduceTaskIndentType",
		iconCls : "icon-btn-reduceTaskIndent",
		handler : function() {

		}
	});

	var treeGrid = Ext.create('Ext.tree.Panel', {
		title : '任务管理',
		useArrows : true,
		tbar : [ btn_add, '-', btn_del, '-', btn_save, '-',
				btn_increase_indent, '-', btn_reduce_indent ],
		rootVisible : false,
		region : 'center',
		collapsible : true,
		selModel : {
			allowDeselect : true
		},
		store : treeStore,
		columns : gridCols,
		plugins : [ cellEditPlugin ]
	});
	return treeGrid;
}