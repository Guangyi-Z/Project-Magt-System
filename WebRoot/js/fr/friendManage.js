var friendManageFunc = function() {

	var pageSize = 10;
	var my_account_id; // 传参数进来
    var MyID = 'testID';
	
	
	/*
	 * ========= aux function in Handler ===========
	 */


	var pop_window_choose_project = function(store,friend_id) {

		new Ext.Window({
					id : "chooseprojectWindow",
					title : "请选择项目",
					width : 700,
					height : 400,
					resizable : false,
					columnLines : true,
					modal : true,
					closable : false,
					items : [{
								xtype : "grid",
								// title: '用户信息',
								id : 'choose_project_grid',
								multiSelect : true,
								selType : 'checkboxmodel',
								store : store,
								columns : [{
											text : '项目ID',
											dataIndex : 'project_id',
											width: 200
										}, {
											text : '项目名称',
											dataIndex : 'project_name'
										}]
							}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "确定",
						handler : function() {
								
							var project_record = Ext.getCmp("choose_project_grid").getSelectionModel().getSelection();
							
							
								if (project_record.length == 0) {
									Ext.MessageBox.show({
												title : "提示",
												msg : "请选择项目!"
											})
									return;
								} 
								var project_record_string_array = new Array()
								for(var i = 0; i<project_record.length; i++)
								{
									project_record_string_array[i*2+0] = project_record[i].get("project_id");
									project_record_string_array[i*2+1] = project_record[i].get("project_name");
								}						  
							
								Ext.Ajax.request({
									    url: 'Friend/inviteFriendToProject.action',
									    params: {
									        'fproject_array': project_record_string_array,
									        'friend.id': friend_id
									    },
								        success: function(resp,opts) {   
													Ext.example.msg("添加成功", "成功添加到项目中……",
															"msg-box-success");// 相应的提示信息
													Ext.getCmp("chooseprojectWindow").close(); // 根据id获取到表单的窗口，然后将其关闭 
						                     },   
						                     failure: function(resp,opts) {   
													Ext.example.msg("警告", "添加失败，请再次尝试...",
															"msg-box-error");
						                      }  
								});

							}
						}

					, {
						text : "取消",
						handler : function() {
							Ext.getCmp("chooseprojectWindow").close();// 取消实际上就是关闭窗口
						}
					}]
				}).show();
	}

	var pop_window_show_information = function(store,friend_id) {

		new Ext.Window({
					id : "showinformationWindow",
					title : "用户信息",
					width : 700,
					height : 200,
					resizable : false,
					modal : true,
					closable : false,
					items : [{
								xtype : "grid",
								// title: '用户信息',
								id : 'show_information_grid',
								store : store,
								columns : [{
											text : '员工ID',
											dataIndex : 'user_id'
										}, {
											text : '员工名称',
											dataIndex : 'user_name'
										}, {
											text : '电话号码',
											dataIndex : 'user_phonenum'
										}, {
											text : 'Email',
											dataIndex : 'user_email'
										}, {
											text : '员工简介',
											dataIndex : 'user_introduction',
											flex : 1
										}]
							}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
								text : "申请加入项目小组",
								handler : function() {
										
													var temp_store = Ext.create('Ext.data.Store', {
																			model : 'FProject',
																			storeId : 'fprojectStore',
																			proxy : {
																				type : 'ajax',
																				url : 'Friend/getProject.action',
																				method : 'POST',
																				reader : {
																					type : 'json',
																					root : 'fprojects',
																					totalProperty : 'totalCount',
																					idProperty : 'id'
																				},
																				extraParams : {
																					'MyID' : friend_id
																				}
																			},
																			autoLoad : true
																		});

										
													// 弹出用户已经参加的项目
													new pop_window_choose_project(temp_store, MyID);									
									
									
								}
							}, {
								text : "取消",
								handler : function() {
									Ext.getCmp("showinformationWindow").close();// 取消实际上就是关闭窗口
								}
							}]
				}).show();

	}

	/*
	 * ========= Handler function ===========
	 */

	var btn_finduser_handler = function() {

		new Ext.Window({
			id : "finduserWindow",
			title : "查找用户",
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
						id : "finduserForm",
						frame : true,
						bodyStyle : "padding:5px 5px 0",
						border : false,
						waitMsgTarget : true,// true的意思是说表单提交时的等待信息在这个表单之内显示，而不是弹出框(进度条形式的)
						defaultType : "textfield",
						items : [{
									id : "userid",
									fieldLabel : "请输入用户ID",
									name : "userid",
									allowBlank : false,
									emptyText : "请输入用户ID"
								}]
					}],
			buttonAlign : 'center',
			minButtonWidth : 80,
			buttons : [{
						text : "查找",
						handler : function() {

							// / 读取用户的输入
							var user_id = Ext.getCmp("userid").getValue();

							
															
									
							// / 弹出新窗口显示用户信息
							new pop_window_show_information(temp_store);

						}

					}, {
						text : "取消",
						handler : function() {
							Ext.getCmp("finduserWindow").close();// 取消实际上就是关闭窗口
						}
					}]
		}).show();
	}

	var btn_deleteuser_handler = function() {

		var record = grid.getSelectionModel().getSelection();
		if (record.length == 0) {
			Ext.MessageBox.show({
						title : "提示",
						msg : "请先选择您要删除的好友!"
					})
			return;
		} else {
			for (var i = 0; i < record.length; i++) {
				// / 删除页面上的数据
				ds.remove(record[i]);

				// / 删除后台数据库的数据
			}
		}

	}

	var btn_invite_handler = function() {
		
			var _selectModel = grid.getSelectionModel();
			if(!_selectModel.hasSelection()) {
							Ext.MessageBox.show({
					title : "提示",
					msg : "请先选择您要邀请的好友!"
					})
				return;
			}
			var friend_id = _selectModel.getLastSelected().get("id");	

			var temp_store = Ext.create('Ext.data.Store', {
									model : 'FProject',
									storeId : 'fprojectStore',
									proxy : {
										type : 'ajax',
										url : 'Friend/getProject.action',
										method : 'POST',
										reader : {
											type : 'json',
											root : 'fprojects',
											totalProperty : 'totalCount',
											idProperty : 'id'
										},
										extraParams : {
											'MyID' : MyID
										}
									},
									autoLoad : true
								});

//			var _sm = new Ext.selection.RowModel({
//						mode : 'SINGLE'
//					});
			

			// 弹出用户已经参加的项目
			new pop_window_choose_project(temp_store, friend_id);
		

	}

	var btn_showinformation_handler = function() {

			var _selectModel = grid.getSelectionModel();
			if(!_selectModel.hasSelection()) {
							Ext.MessageBox.show({
					title : "提示",
					msg : "请先选择您要查看资料的好友!"
					})
				return;
			}
			
			var friend_id = _selectModel.getLastSelected().get("id");		
			
			
			/// 查询数据库
			var temp_store = Ext.create('Ext.data.Store', {
						storeId : 'informationStore',
						model : 'UserInformation',
						proxy : {
								type : 'ajax',
								url : 'Friend/getUserInformation.action',
								method : 'POST',
								reader : {
									type : 'json',
									root : 'informations',
									totalProperty : 'totalCount',
									idProperty : 'id'
								},
								extraParams : {
									'friend.id' : friend_id
								}
						},
						autoLoad : true
					});

			// / 弹出窗口显示用户信息
			new pop_window_show_information(temp_store,friend_id);

	}


	var btn_modifyremark_handler = function() {

		
		var _selectModel = grid.getSelectionModel();
		if(!_selectModel.hasSelection()) {
						Ext.MessageBox.show({
				title : "提示",
				msg : "请先选择您要修改备注的好友!"
					// icon: Ext.MessageBox.INFO
				})
			return;
		}
		var friend_id = _selectModel.getLastSelected().get("id");
		
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
											id : "myid",
											fieldLabel : "请输入新的备注名",
											hidden : true,
											name : "MyID",
											value: MyID,
											allowBlank : false,
											emptyText : "请输入新的备注名"
										},
										{
											id : "friendid",
											fieldLabel : "请输入新的备注名",
											hidden : true,
											name : "friend.id",
											value: friend_id,
											allowBlank : false,
											emptyText : "请输入新的备注名"
										},
									    {
											id : "remarkname",
											fieldLabel : "请输入新的备注名",
											name : "friend.remark",
											allowBlank : false,
											emptyText : "请输入新的备注名"
										}]
							}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "修改",
						handler : function() {

							if (Ext.getCmp("modifyremarkForm").getForm().isValid()) {// 对表单进行验证(根据配置的项进行配置)
								Ext.getCmp("modifyremarkForm").getForm().submit({// 利用表单的submit方法提交表单
									//extraParams: {'MyID': MyID},
									waitTitle : "请稍候", // 提交表单时进度条的标题
									waitMsg : "正在提交数据，稍后……", // 提交表单时进度条的信息
									url : 'Friend/modifyRemark.action', // 提交地址
									method : "POST", // 提交方式，需要大写
									success : function() { // 如果提交成功后处理的方法
										Ext.example.msg("提交成功", "提交订单类型信息成功……",
												"msg-box-success");// 相应的提示信息
										Ext.getCmp("modifyremarkWindow").close(); // 根据id获取到表单的窗口，然后将其关闭
										 grid.getStore().reload(); //
										// 提交成功后，需要刷新GridPanel数据，
		
									},
		
									failure : function(form, action) { // 提交指失败进处理的方法
										Ext.example.msg("警告", "数据提交失败，请核对...",
												"msg-box-error");
									}
								});
							} else {// 如果表单验证未通过则提示用户骓未通过。
		
								Ext.example.msg("提示", "请填写完整、合法的订单类别信息...",
										"msg-box-error");
							}
									
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
					new btn_deleteuser_handler();
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

	/*
	 * ========= Grid Definition ===========
	 */
	// ///// 创建表格
	// model,store,grid
	
	Ext.define('UserInformation', {
		extend : 'Ext.data.Model',
		fields : [{
					name : 'user_id',
					type : "string"
				}, {
					name : 'user_name',
					type : "string"
				}, {
					name : 'user_phonenum',
					type : "string"
				}, {
					name : 'user_email',
					type : "string"
				}, {
					name : 'user_introduction',
					type : "string"
				}]
	});
	
	
	Ext.define('FProject', {
		extend : 'Ext.data.Model',
		fields : [{
					name : 'project_id',
					type : "string"
				}, {
					name : 'project_name',
					type : "string"
				}]
	});
	
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
				//multiSelect : true,
				//selType : 'checkboxmodel',
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
							store : Ext.data.StoreManager
									.lookup('myStore'),
							pageSize : pageSize,
							displayInfo : true,
							displayMsg : "第 {0} - {1} 条&nbsp;&nbsp;共 {2} 条",
							emptyMsg : "没有记录"
						})
			});

	// ///////////////////////////////////////////////////////

	return grid;

}