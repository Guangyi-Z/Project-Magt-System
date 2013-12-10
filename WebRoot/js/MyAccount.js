var MyAccount = function() {
	
	//var MyID = 'testID';
	//var AccountID = 'admin';
	
	
	var btn_modifypassword_handler = function() {
		
		
		new Ext.Window({
					id : "modifypasswordWindow",
					title : "修改密码",
					width : 350,
					height : 190,
					resizable : false,
					modal : true,
					closable : false,
					textfieldAlign : 'left',
					labelAlign : 'right',
					items : [{
								xtype : "form",
								labelWidth : 10,
								id : "modifypasswordForm",
								frame : true,
								bodyStyle : "padding:5px 5px 0",
								border : false,
								waitMsgTarget : true,// true的意思是说表单提交时的等待信息在这个表单之内显示，而不是弹出框(进度条形式的)
								defaultType : "textfield",
								items : [{
											id : "AccountID",
											fieldLabel : "我的账户",
											readOnly:true,
											//hidden : true,
											name : "AccountID",
											value: AccountID,
											allowBlank : false
											//emptyText : "请输入新的备注名"
										},
										{
											id : "oldAccountPassword",
											fieldLabel : "请输入旧的密码",
											//hidden : true,
											name : "oldAccountPassword",
											inputType:'password',
											allowBlank : false,
											emptyText : "请输入旧的密码"
										},
										{
											id : "newAccountPassword",
											fieldLabel : "请输入新的密码",
											//hidden : true,
											name : "newAccountPassword",
											inputType:'password',
											//value: friend_id,
											allowBlank : false,
											emptyText : "请输入新的密码"
										},
									    {
											id : "newAccountPassword1",
											fieldLabel : "再次确认新的密码",
											inputType:'password',
											//name : "AccountPassword",
											allowBlank : false,
											emptyText : "再次确认新的密码"
										}]
							}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "修改",
						handler : function() {

							/// 验证新密码是否一致
							var AccountPassword = Ext.getCmp("newAccountPassword").getValue();
							var AccountPassword1 = Ext.getCmp("newAccountPassword1").getValue();							
							if(AccountPassword != AccountPassword1)	
							{
									Ext.MessageBox.show({
										title : "提示",
										msg : "两次输入的密码不一致"
										});
										return;
							}

							// 验证旧密码是否正确
							Ext.Ajax.request({
											url : "Friend/checkOldPassword.action",
											params : {
												'AccountID': AccountID,
												'oldAccountPassword' : Ext.getCmp("oldAccountPassword").getValue()
											},
											method : 'POST',
									        success: function(response) {   
									        	
									        	//console.log(response.responseText);
									        	if(response.responseText == "{\"success\":true}"){
									        		
										        		/// 验证正确，修改密码
										        		Ext.Ajax.request({
															url : "Friend/modifyPassword.action",
															params : {
																'AccountID': AccountID,
																'newAccountPassword' : Ext.getCmp("newAccountPassword").getValue()
															},
															method : 'POST',
															success: function(response) { 
																Ext.example.msg("修改成功", "修改密码成功……",
																			"msg-box-success");// 相应的提示信息
																	Ext.getCmp("modifypasswordWindow").close(); 
															},
										        		    failure: function() { 
										        		    	Ext.example.msg("修改失败", "修改密码失败功……",
																			"msg-box-error");// 相应的提示信息
																	
										        		    }
										        		});
															
														
									        	}else{
									        		
										        		/// 验证失败，不能修改密码
										        		Ext.MessageBox.show({
															title : "提示",
															msg : "密码错误"
															});
									        		
									        	}

									         },   
						                     failure: function() {   
						                             //var respText = Ext.util.JSON.decode(resp.responseText);   
										             Ext.MessageBox.show({
														title : "提示",
														msg : "no"
														});
						                      }
										});			
										
							/*
							if (Ext.getCmp("modifypasswordForm").getForm().isValid()) {// 对表单进行验证(根据配置的项进行配置)
								Ext.getCmp("modifypasswordForm").getForm().submit({// 利用表单的submit方法提交表单
									//extraParams: {'MyID': MyID},
									waitTitle : "请稍候", // 提交表单时进度条的标题
									waitMsg : "正在提交数据，稍后……", // 提交表单时进度条的信息
									url : 'Friend/modifyRemark.action', // 提交地址
									method : "POST", // 提交方式，需要大写
									success : function() { // 如果提交成功后处理的方法
										Ext.example.msg("修改成功", "修改密码成功……",
												"msg-box-success");// 相应的提示信息
										Ext.getCmp("modifypasswordWindow").close(); // 根据id获取到表单的窗口，然后将其关闭
										 grid.getStore().reload(); //
										// 提交成功后，需要刷新GridPanel数据，
		
									},
		
									failure : function(form, action) { // 提交指失败进处理的方法
										Ext.example.msg("警告", "数据提交失败，请核对...",
												"msg-box-error");
									}
								});
							} else {// 如果表单验证未通过则提示用户骓未通过。
		
								Ext.example.msg("提示", "请填写完整、合法的表单类别信息...",
										"msg-box-error");
							}
							*/	
							
						}

					}, {
						text : "取消",
						handler : function() {
							Ext.getCmp("modifypasswordWindow").close();// 取消实际上就是关闭窗口
						}
					}]
				}).show();
		
		
	}
	
	var btn_modifypassword = new Ext.Button({
			text : "修改密码",
			tooltip : "修改密码",
			id : "btn_modifypassword",
			handler : function() {
				new btn_modifypassword_handler();
			}
	});	
	
	
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
	

	var my_store = Ext.create('Ext.data.Store', {
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
							'friend.id' : MyID
						}
				},
				autoLoad : true
			});

	var _sm = new Ext.selection.RowModel({
				mode : 'SINGLE'
			});

	var grid = Ext.create('Ext.grid.Panel', {
				title : '我的账号：'+AccountID,
				id : 'my_information_grid',
				store : my_store,
				selModel : _sm,
				columnLines : true,
				region : 'center',
				//multiSelect : true,
				//selType : 'checkboxmodel',
				columns : [{
							text : '我的ID',
							dataIndex : 'user_id'
						}, {
							text : '我的名称',
							dataIndex : 'user_name'
						}, {
							text : '电话号码',
							dataIndex : 'user_phonenum'
						}, {
							text : 'Email',
							dataIndex : 'user_email'
						}, {
							text : '我的简介',
							dataIndex : 'user_introduction',
							flex : 1
						}],
				tbar : [btn_modifypassword]
			});

	// ///////////////////////////////////////////////////////

	return grid;
	
	
}