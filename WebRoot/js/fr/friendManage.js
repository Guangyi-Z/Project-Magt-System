var friendManageFunc = function() {

	var pageSize = 10;
	var my_account_id; // 传参数进来

	var pop_window_choose_project = function() {

		// var proWin = new Ext.Window({
		// id : "finduserWindow",
		// title : "查找项目",
		// width : 525,
		// height : 200,
		// resizable : false,
		// // modal : true,
		// layout : 'border',
		// closable : true,
		// closeAction : 'destroy'
		// }).show();
		// console.log(proWin.getPosition());

	}
	var btn_finduser_handler = function() {

		Ext.define('Staff', {
					extend : 'Ext.data.Model',
					fields : [{
								name : "id",
								type : "string"
							}, {
								name : "name",
								type : "string"
							}, {
								name : "phoneNum",
								type : "string"
							}, {
								name : "email",
								type : "string"
							}, {
								name : "intro",
								type : "string"
							}]
				});

		var store_Staff = Ext.create('Ext.data.Store', {
					model : 'Staff',
					storeId : 'StaffStore',
					proxy : {
						type : 'ajax',
						url : 'Friend/findStaff.action',
						method : 'POST',
						reader : {
							type : 'json',
							root : 'staffs',
							totalProperty : 'totalCount',
							idProperty : 'id'
						}
					}
				});
		var sm_Staff = new Ext.selection.RowModel({
					mode : 'SINGLE'
				});

		var grid_Staff = Ext.create('Ext.grid.Panel', {
					store : Ext.data.StoreManager.lookup('StaffStore'),
					selModel : sm_Staff,
					columnLines : true,
					region : 'center',
					columns : [{
								text : '员工ID',
								dataIndex : 'id'
							}, {
								text : '名称',
								dataIndex : 'name'
							}, {
								text : '电话号码',
								dataIndex : 'phoneNum'
							}, {
								text : 'Email',
								dataIndex : 'email'
							}, {
								text : '员工简介',
								dataIndex : 'intro'
							}],

					frame : true,

					tbar : [{
						xtype : 'button',
						iconCls : 'icon_btn_view',
						text : "添加好友",
						handler : function() {
							var selectedModel = grid_Staff.getSelectionModel();
							if (selectedModel.hasSelection()) {
								var FriendID = selectedModel.getLastSelected()
										.get("id");
								Ext.Ajax.request({
											url : "Friend/addFriend.action",
											params : {
												"FriendID" : FriendID,
												"MyID" : "testID"
											},
											method : 'POST',
											success : function() {

												Ext.example.msg("添加好友", "添加成功",
														"msg-box-success");
												grid.getStore().reload();

											},
											failure : function() {
												Ext.example.msg("警告", "添加好友失败",
														"msg-box-error");
											}
										});
							} else {
								Ext.example.msg("警告", "请选择要添加的好友",
										"msg-box-error");
							}
						}
					}, '-', {
						xtype : 'button',
						id : 'id_view_projects',
						iconCls : 'icon_btn_view',
						text : "查看项目",
						handler : function() {

							var _selectModel = grid_Staff.getSelectionModel();
							if (_selectModel.hasSelection()) {
								var ID = _selectModel.getLastSelected()
										.get("id");
								findFriendWin.removeAll();
								findFriendWin.add(grid_Project);
								store_Project.load({
											params : {
												'FriendID' : ID
											}
										});
							} else {
								Ext.example.msg("警告", "请选择要查看的好友",
										"msg-box-error");
							}

						}
					}, '->', {
						id : 'staffID',
						xtype : 'textfield',
						emptyText : '请输入用户ID',
						allowBlank : false
					}, {
						xtype : 'button',
						iconCls : 'icon_btn_view',
						text : "查找",
						handler : function() {

							// / 读取用户的输入
							var StaffID = Ext.getCmp("staffID").getValue();

							store_Staff.load({
										params : {
											'StaffID' : StaffID
										}

									});

						}

					}]
				});

		Ext.define('Project', {
					extend : 'Ext.data.Model',
					fields : [{
								name : "id",
								type : "string"
							}, {
								name : "name",
								type : "string"
							}, {
								name : "startDate",
								type : "string"
							}, {
								name : "finishDate",
								type : "string"
							}, {
								name : "status",
								type : "string"
							}]
				});
		var FriendID = "beforeChange";

		var store_Project = Ext.create('Ext.data.Store', {
					model : 'Project',
					storeId : 'ProjectStore',
					proxy : {
						type : 'ajax',
						url : 'Friend/findProject.action',
						method : 'POST',
						reader : {
							type : 'json',
							root : 'projects',
							totalProperty : 'totalCount',
							idProperty : 'id'
						},
						extraParams : {
							'FriendID' : FriendID
						}
					}
				});
		var sm_Project = new Ext.selection.RowModel({
					mode : 'SINGLE'
				});
		var grid_Project = Ext.create('Ext.grid.Panel', {
					store : Ext.data.StoreManager.lookup('ProjectStore'),
					selModel : sm_Project,
					columnLines : true,
					region : 'center',
					columns : [{
								text : '项目编号',
								dataIndex : 'id'
							}, {
								text : '项目名称',
								dataIndex : 'name'
							}, {
								text : '开始时间',
								dataIndex : 'startDate'
							}, {
								text : '结束时间',
								dataIndex : 'finishDate'
							}, {
								text : '项目状态',
								dataIndex : 'status'
							}],

					frame : true,
					tbar : [{
						xtype : 'button',
						iconCls : 'icon_btn_view',
						text : "申请加入",
						handler : function() {
							var selectedModel = grid_Project
									.getSelectionModel();
							if (selectedModel.hasSelection()) {
								var ProjectID = selectedModel.getLastSelected()
										.get("id");
								Ext.Ajax.request({
											url : "Friend/applyForProject.action",
											params : {
												"MyID":'testID',
												"ProjectID" : ProjectID
											},
											method : 'POST',
											success : function() {

												Ext.example.msg("申请加入项目",
														"申请成功",
														"msg-box-success");
												grid.getStore().reload();

											},
											failure : function() {
												Ext.example.msg("警告", "申请失败",
														"msg-box-error");
											}
										});
							} else {
								Ext.example.msg("警告", "请选择要申请加入的项目",
										"msg-box-error");
							}
						}
					}]
				});

		var findFriendWin = new Ext.Window({
					id : "finduserWindow",
					title : "查找用户",
					width : 525,
					height : 200,
					resizable : false,
					modal : true,
					closable : true,
					closeAction : 'destroy',
					layout : 'border',
					animateTarget : 'btn_finduser',
					textfieldAlign : 'left',
					labelAlign : 'right',
					items : [grid_Staff]
				}).show();
	}

	var btn_invite_handler = function() {

		var record = grid.getSelectionModel().getSelection();
		if (record.length == 0) {
			Ext.MessageBox.show({
				title : "提示",
				msg : "请先选择您要邀请的好友!"
					// icon: Ext.MessageBox.INFO
				})
			return;
		} else {

			// 查询数据库
			var temp_store = Ext.create('Ext.data.Store', {
						storeId : 'simpsonsStore',
						fields : [{
									name : 'project_id'
								}, {
									name : 'project_name'
								}],
						data : {
							'items' : [{
										'project_id' : 'Bart',
										'project_name' : 'phonenum'
									}, {
										'project_id' : 'Bart1',
										'project_name' : 'phonenum'
									}, {
										'project_id' : 'Bart2',
										'project_name' : 'phonenum'
									}]
						},
						proxy : {
							type : 'memory',
							reader : {
								type : 'json',
								root : 'items'
							}
						}
					});

			// 弹出用户已经参加的项目
			new pop_window_choose_project(temp_store, record);
		}

	}

	var btn_showinformation_handler = function() {

		var record = grid.getSelectionModel().getSelection();
		if (record.length == 0) {
			Ext.MessageBox.show({
				title : "提示",
				msg : "请先选择您要查看资料的好友!"
					// icon: Ext.MessageBox.INFO
				})
			return;
		} else {

			// / 查询数据库
			record[0];
			var temp_store = Ext.create('Ext.data.Store', {
						storeId : 'simpsonsStore',
						fields : [{
									name : 'user_id'
								}, {
									name : 'user_name'
								}, {
									name : 'user_phonenum'
								}, {
									name : 'user_email'
								}, {
									name : 'user_introduction'
								}],
						data : {
							'items' : [{
										'user_id' : 'Bart',
										'user_name' : 'name',
										'user_phonenum' : 'Bart',
										'user_email' : 'Bart@126.com',
										'user_introduction' : 'Bart'
									}, {
										'user_id' : 'Bart',
										'user_name' : 'name',
										'user_phonenum' : 'Bart',
										'user_email' : 'Bart@126.com',
										'user_introduction' : 'Bart'
									}, {
										'user_id' : 'Bart',
										'user_name' : 'name',
										'user_phonenum' : 'Bart',
										'user_email' : 'Bart@126.com',
										'user_introduction' : 'Bart'
									}]
						},
						proxy : {
							type : 'memory',
							reader : {
								type : 'json',
								root : 'items'
							}
						}
					});

			// / 弹出窗口显示用户信息
			new pop_window_show_information(temp_store);

		}
	}

	var btn_modifyremark_handler = function() {

		// / 删除页面上的数据
		var record = grid.getSelectionModel().getSelection();
		if (record.length == 0) {
			Ext.MessageBox.show({
				title : "提示",
				msg : "请先选择您要修改备注的好友!"
					// icon: Ext.MessageBox.INFO
				})
			return;
		}

		new Ext.Window({
					id : "modifyremarkWindow",
					title : "修改备注名",
					width : 300,
					height : 100,
					resizable : false,
					modal : true,
					closable : false,
					textfieldAlign : 'left',
					labelAlign : 'right',
					items : [{
								xtype : "form",
								labelWidth : 10,
								id : "modifyremarkForm",
								frame : true,
								bodyStyle : "padding:5px 5px 0",
								border : false,
								waitMsgTarget : true,// true的意思是说表单提交时的等待信息在这个表单之内显示，而不是弹出框(进度条形式的)
								defaultType : "textfield",
								items : [{
											id : "remarkname",
											fieldLabel : "请输入新的备注名",
											name : "remark",
											allowBlank : false,
											emptyText : "请输入新的备注名"
										}]
							}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "修改",
						handler : function() {

							// / 读取用户的输入
							var remarkname = Ext.getCmp("remarkname")
									.getValue();
							Ext.MessageBox.show({
										title : "提示",
										msg : remarkname
									})
							// / modidy the remark in the datebase
						}

					}, {
						text : "取消",
						handler : function() {
							Ext.getCmp("modifyremarkWindow").close();// 取消实际上就是关闭窗口
						}
					}]
				}).show();
	}

	/*
	 * ========= Button Definition ===========
	 */

	// / 新建表格上方的按钮
	// 查找用户按钮
	var btn_finduser = new Ext.Button({
				text : "查找用户",
				tooltip : "查找用户",
				id : "btn_finduser",
				handler : function() {
					new btn_finduser_handler();
				}
			});
	// 删除用户按钮
	var btn_deleteuser = new Ext.Button({
				text : "删除好友",
				tooltip : "删除好友",
				id : "btn_deleteuser",
				handler : function() {
					new deleteFn();
				}
			});
	// 邀请加入项目
	var btn_invite = new Ext.Button({
				text : "邀请加入项目",
				tooltip : "邀请加入项目",
				id : "btn_invite",
				handler : function() {
					new btn_invite_handler();
				}
			});
	// / 查看资料
	var btn_showinformation = new Ext.Button({
				text : "查看资料",
				tooltip : "查看资料",
				id : "btn_showinformation",
				handler : function() {
					new btn_showinformation_handler();
				}
			});
	// / 修改备注名
	var btn_modifyremark = new Ext.Button({
				text : "修改备注",
				tooltip : "修改备注",
				id : "btn_modifyremark",
				handler : function() {
					new btn_modifyremark_handler();
				}
			});

	var deleteFn = function() {
		var _selectModel = grid.getSelectionModel();
		if (_selectModel.hasSelection()) {
			var ID = _selectModel.getLastSelected().get("id");

			Ext.MessageBox.confirm("删除好友", "你将永久删除此好友，不可恢复！", function(btnId) {
						if (btnId == "yes") {
							Ext.Ajax.request({
										url : "Friend/deleteFriend.action",
										params : {
											"FriendID" : ID,
											"MyID" : "testID"
										},
										method : 'POST',
										success : function() {

											Ext.example.msg("删除好友", "删除成功",
													"msg-box-success");
											grid.getStore().reload(); //

										},
										failure : function() {
											Ext.example.msg("警告", "删除好友失败",
													"msg-box-error");
										}
									});
						}
					});
		} else {
			Ext.example.msg("警告", "请选择要删除的好友", "msg-box-error");
		}
	}

	Ext.define('Friend', {
				extend : 'Ext.data.Model',
				fields : [{
							name : "id",
							type : "string"
						}, {
							name : "remark",
							type : "string"
						}]
			});

	Ext.create('Ext.data.Store', {
				model : 'Friend',
				storeId : 'myStore',
				proxy : {
					type : 'ajax',
					url : 'Friend/findAllFriend.action',
					method : 'POST',
					reader : {
						type : 'json',
						root : 'friends',
						totalProperty : 'totalCount',
						idProperty : 'id'
					},
					extraParams : {
						'MyID' : 'testID'
					}
				},
				autoLoad : true
			});

	var _sm = new Ext.selection.RowModel({
				mode : 'SINGLE'
			});

	var grid = Ext.create('Ext.grid.Panel', {
				title : '好友列表',
				id : 'friend_main_grid',
				store : Ext.data.StoreManager.lookup('myStore'),
				selModel : _sm,
				columnLines : true,
				region : 'center',
				multiSelect : true,
				selType : 'checkboxmodel',
				columns : [{
							text : '好友ID',
							dataIndex : 'id'
						}, {
							text : '好友备注',
							dataIndex : 'remark',
							flex : 1
						}],
				tbar : [btn_finduser, '-', btn_deleteuser, '-', btn_invite,
						'-', btn_showinformation, '-', btn_modifyremark],
				bbar : new Ext.PagingToolbar({
							id : "toolbar1",
							store : Ext.data.StoreManager.lookup('myStore'),
							pageSize : pageSize,
							displayInfo : true,
							displayMsg : "第 {0} - {1} 条&nbsp;&nbsp;共 {2} 条",
							emptyMsg : "没有记录"
						})
			});

	return grid;

}