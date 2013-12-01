var OneProjectViewFun = function(proID) {

	var btn_mem = new Ext.Button({
		text : "管理成员",
		tooltip : "管理成员",
		id : "manaMem"
	});

	var btn_task = new Ext.Button({
		text : "管理任务",
		tooltip : "管理任务",
		id : "manaTask",
		handler : function() {
			_center.removeAll();
			_center.add(taskManageFn());
		}
	});

	var btn_proInfo = new Ext.Button({
		text : "修改项目信息",
		tooltip : "修改项目信息",
		id : "manaProInfo"
	});

	pro_grid = Ext.create('Ext.panel.Panel', {
		title : '当前项目名称',	// 当前项目名称
		region : 'center',
		tbar : [btn_mem, '-', btn_task, '-', btn_proInfo],
	});

	return pro_grid;
}