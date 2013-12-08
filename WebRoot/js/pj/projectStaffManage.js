var projectStaffManageFn = function(){
	
	var btn_viewMessage = new Ext.Button({
				text : "查看信息",
				tooltip : "查看成员个人信息",
				id : "btnViewMsg",
				width : 120,
				handler : function(){
				}
	});
	
	var btn_deleteStaff = new Ext.Button({
				text : "移除成员",
				tooltip : "移除项目成员",
				id : "btnDeleteStf",
				width : 120,
				handler : function(){
				}
	});
	
	var btn_viewAuthor = new Ext.Button({
				text : "查看权限",
				tooltip : "查看成员的权限详情",
				id : "btnViewAuthor",
				width : 120,
				handler : function(){
				}
	});
	
	var btn_addStaff = new Ext.Button({
				text : "添加成员",
				tooltip : "添加项目成员",
				id : "btnAddStaff",
				width : 120,
				handler : function(){
				}
	});
	
	var staff_store = Ext.create('Ext.data.Store', {
		storeId : 'staffStore',
		fields : ['user_name', 'user_role'],
		data : {
			'items' : [
			           { 'user_name' : 'aaa', 'user_role' : '项目经理'},
			           { 'user_name' : 'bbb', 'user_role' : '架构师'}
			           ]},
		proxy : {
			     type : 'memory',
			     reader : {
			        	   type : 'json',
			        	   root : 'items'
			           }
		}
	});
	
	
	var grid = Ext.create('Ext.grid.Panel', {
		//title : '项目成员',
		id : "grid_ProjectStaff",
		store : Ext.data.StoreManager.lookup('staffStore'),
		region : 'left',
		maxWidth : 260,
		maxHeight : 429,
		minWidth : 260,
		minHeight : 429,
		autoScroll : true,
		columnLines : true,
		draggable : false,
		columnWidth : 120,
		columns : [
		           {
		        	   text : '成员名称',
		        	   dataIndex : 'user_name'
		           }, {
		        	   text : '项目角色',
		        	   dataIndex : 'user_role'
		           }],
		frame : true
	});
	
	new Ext.Window({
		id : "proStaffWnd",
		title : "项目成员",
		maxWidth : 270,
		minHeight : 500,
		maxWidth : 270,
		minHeight : 500,
		frame : true,
		draggable : false,
		items : [grid],
		buttonAlign : 'center',
		minButtonWidth : 80,
		tbar : [btn_viewMessage, '-', btn_viewAuthor],
		bbar : [btn_addStaff, '-', btn_deleteStaff]
	}).show();
	//return grid;
}