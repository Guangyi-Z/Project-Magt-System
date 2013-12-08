var mumberManageFun = function() {
	var PROJECT_ID = "PC823894923";
	
	Ext.define('MemberMessage', {
		extend : 'Ext.data.Model',
		fields : [
		          {
		        	  name : "memberID",
		        	  type : "string"
		          }, {
		        	  name : "memberName",
		        	  type : "string"
		          }, {
		        	  name : "memberPhone",
		        	  type : "string"
		          }, {
		        	  name : "memberEmail",
		        	  type : 'string'
		          }, {
		        	  name : 'memberIntroduction',
		        	  type : 'string'
		          }
		          ]});
	//通过用户ID添加成员
	var addbyUserIDFun = function() {
		new Ext.Window({
			id : "finduserWindow",
			title : "查找用户",
			width : 300,
			height : 100,
			resizable : false,
			modal : true,
			textfieldAlign: 'left',
			labelAlign: 'right',
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
					/// 读取用户的输入
					var user_id = Ext.getCmp("userid").getValue();
					if (user_id != null){
						Ext.Ajax.request({
							url : 'MemberMessage/findMemberMsgByID.action',
							params : {
								"id" : user_id
							},
							method : 'POST',
							success : function(){
								new assistShowFn(user_id, true); 
								
							},
							failure : function(){
								Ext.example.msg("警告", "该员工不存在！",
								"msg-box-error");
							}
						})
					}
					/// 查询数据库
				}
			},{
				text : "取消",
				handler : function() {
					Ext.getCmp("finduserWindow").close();// 取消实际上就是关闭窗口
				}
			}]
		}).show();
	};
	
	//通过好友列表添加成员
	var addbyFriendsFun = function() {
		new Ext.Window({
			id : "friendsWin",
			title : "好友列表",
			width : 220,
			height : 400,
			resizable : false,
			modal : true,
			items : [{
				xtype : "grid",
			    id: 'friends_grid',
			    height:360,
			    columns: [
			        { text: '好友备注',  dataIndex: 'remarkname', flex : 1  } 
			    ],
			    multiSelect : true,
			    selType: 'checkboxmodel',
			    store: Ext.data.StoreManager.lookup(new Ext.data.Store({
			    	model : 'items',
				    storeId:'simpsonsStore',
				    fields:['remark'],
				    data:{'item':[['Bart']]},
				    autoLoad : true,
				    proxy: {
			  			type: 'memory',
			  			reader: {
			  				root: 'items',
			  			}
			  		 },
			    })),
			buttonAlign : 'center',
			minButtonWidth : 80,
			buttons : [{
						text : "添加为成员",
						tooltip : "添加为成员",
						handler : function() {
						//添加选定好友为成员
								
						Ext.getCmp("friendsWin").close(); // 根据id获取到表单的窗口，然后将其关闭
						}
					},{
						text : "返回",
						handler : function() {
							Ext.getCmp("friendsWin").close();// 返回实际上就是关闭窗口
						}
					}]
			}]
		}).show();
	};
	
	//添加成员时也会查看信息，用isAdd区别，true带有添加按钮
	var assistShowFn = function(id, isAdd){
		var _MsgStore = new Ext.create('Ext.data.Store', {
			model : 'MemberMessage',
			storeId : 'MemberMsgStore',
			
			proxy : {
					type : 'rest',
					extraParams : {
						'id' : id,
					},
					url : 'MemberMessage/findMemberMsgByID.action',
					method : 'POST',
					reader : {
						type : 'json',
						root : 'message',
						//idProperty : 'memberID'
					}
			},
			autoLoad : true
					});
		
		var name;
		var email;
		var phone;
		var intro;
		_MsgStore.on("load", function(){
			name = _MsgStore.getAt(0).get('memberName');
			email = _MsgStore.getAt(0).get('memberEmail');
			phone = _MsgStore.getAt(0).get('memberPhone');
			intro = _MsgStore.getAt(0).get('memberIntroduction');
			//alert(email);
			new showMemberMsgWinFun(id, name, email, phone, intro, isAdd);
			//Ext.getCmp('memID').setValue(email);
		});
		//alert(email);
	};

	
	// 查看成员详细资料
	var showDetailFun = function() {
		var _selectModel = mumberManager_grid.getSelectionModel();
		if(_selectModel.hasSelection()) {
			var ID = _selectModel.getLastSelected().get("memberID");
			
			new assistShowFn(ID, false);			
		}
	 else
        	Ext.example.msg("警告", "请选择要查看的成员", "msg-box-error");
	};
	var showMemberMsgWinFun = function(id, name, email, phone, intro, isAdd){
		new Ext.Window({
			id : "showWin",
			title : "成员信息",
			//store : Ext.data.StoreManager.lookup('MemberMsgStore'),
			autoWidth : true,
			autoHeight : true,
			resizable : false,
			modal : true,
			items : [{
				xtype : "form",
				labelWidth : 60,
				id : "editForm",
				frame : true,
				bodyStyle : "padding:5px 5px 0",
				border : false,
				waitMsgTarget : true,// true的意思是说表单提交时的等待信息在这个表单之内显示，而不是弹出框(进度条形式的)
				labelAlign : "right",
				labelPad : 10,// 标签与字段录入框之间的空白
				defaults : {
					width : 280
				},
				defaultType : "textfield",
				items : [

						{
				
							fieldLabel : '员工编号',
							id : 'memID',
							readOnly : true,
							editable : false,
							
							value : id
						}, {
							fieldLabel : '员工名称',
							readOnly : true,
							editable : false,
							value : name
						}, {
							fieldLabel : '电话号码',
							readOnly : true,
							editable : false,
							value : phone
						}, {
							fieldLabel : 'Email',
							readOnly : true,
							editable : false,
							vtype : 'email',
							value : email
						}, {
							fieldLabel : '员工简介',
							readOnly : true,
							editable : false,
							xtype : 'textarea',
							value : intro
						}]
					}],
			buttonAlign : 'center',
			minButtonWidth : 80,
			buttons : [{
				text : "添加",
				id : "addMem",
				handler : function() {
				Ext.Ajax.request({
					url : 'ProjectMember/addMember.action',
					params : {
						'projectID' : PROJECT_ID,
						'memberID' : id
					},
				
					method : 'POST',
					success : function(response){
						if(response.responseText == "{\"success\":true}"){
							
							Ext.example.msg("添加成功", "添加成员成功", "msg-box-success");
							Ext.getCmp("finduserWindow").close();
							Ext.getCmp("chooseWin").close();
							mumberManager_grid.getStore().reload();
						}
						else{
							Ext.example.msg("警告", "添加成员失败",
							"msg-box-error");
							
						}
					},
					failure : function(){
						Ext.example.msg("警告", "发送请求失败",
						"msg-box-error");
					}
				})
			}
				},{
				text : "返回",
				handler : function() {
					Ext.getCmp("showWin").close();// 返回实际上就是关闭窗口
				}
			}]
		}).show();
		if(isAdd == false)
			Ext.getCmp("addMem").hide();
	}
	//添加成员
	var addMumberFun = function() {
		new Ext.Window({
			id : "chooseWin",
			title : '  请选择',
			width : 250,
			height : 150,
			animateTarget : 'addMumberType',
			closable: true,
			modal : true,
			listeners : {
				'show' : function() {
					btn_showDetail.disable();// 当窗口显示时，则按钮不可用
					btn_addMumber.disable();
					btn_editMumber.disable();
					btn_delMumber.disable();
				},
				'close' : function() {
					btn_showDetail.enable();// 当宣传品关闭时，则按钮可用
					btn_addMumber.enable();
					btn_editMumber.enable();
					btn_delMumber.enable();
				}
			},
			items : [{
				xtype: 'label',
				labelAlign:'center',
				text:' 通过哪种方式添加？',
			}],
			buttonAlign : 'center',
			minButtonWidth : 80,
			buttons : [{
						text : "通过用户ID",
						tooltip : "通过用户ID",
						handler : function() {
							new addbyUserIDFun(); //通过用户ID添加成员
						}
					  },{
						text : "通过好友列表",
						tooltip : "通过好友列表",
						handler : function() {
							new addbyFriendsFun();  //通过好友列表添加成员
						}
			}]
		}).show();
	};
	
	// 编辑成员
	var editMumberFun = function() {
		var _selectModel = mumberManager_grid.getSelectionModel();
		if(_selectModel.hasSelection()) {
			var ID = _selectModel.getLastSelected().get("memberID");

			new Ext.Window({
				id : "editWin",
				title : '设置员工权限职务',
				width : 300,
				autoHeight : true,
				modal : true,
				animateTarget : 'editMumberType',
				listeners : {
					'show' : function() {
						btn_showDetail.disable();// 当窗口显示时，则按钮不可用
						btn_addMumber.disable();
						btn_editMumber.disable();
						btn_delMumber.disable();
					},
					'close' : function() {
						btn_showDetail.enable();// 当宣传品关闭时，则按钮可用
						btn_addMumber.enable();
						btn_editMumber.enable();
						btn_delMumber.enable();
					}
				},
				items : [{
					xtype : "form",
					labelWidth : 60,
					id : "editForm",
					frame : true,
					bodyStyle : "padding:5px 5px 0",
					border : false,
					waitMsgTarget : true,// true的意思是说表单提交时的等待信息在这个表单之内显示，而不是弹出框(进度条形式的)
					labelAlign : "right",
					labelPad : 10,// 标签与字段录入框之间的空白
					defaults : {
						width : 200
					},
					defaultType : "textfield",
					items : [{
								id : "role",
								fieldLabel : "成员职务",
								xtype : 'combo',    //下拉列表
								name : "memberRole",
								store : new Ext.data.SimpleStore( {
									storeId:'RoleStore',
									fields:['text'],
									data:[['项目经理'],['架构设计师'],['需求分析师'],['开发人员'],['测试师'],['文档管理员']]
								}),
								editable : false,
								value : _selectModel.getLastSelected().get("memberRole"),
								anchor : '100%',
							},{
								id : "limit",
								fieldLabel : "成员权限",
								xtype : 'combo',     //下拉列表
								name : "memberLimit",
								store : new Ext.data.SimpleStore({
									storeId:'LimitStore',
									fields:['text'],
									data:[['更新文档'],['更新进度'],['更新任务'],['更新成员']]
								}),
								editable : false,
								value : _selectModel.getLastSelected().get("memberLimit"),
								anchor : '100%',
							}],
				}],
				buttonAlign : 'center',
				minButtonWidth : 100,
				buttons : [{
					text : "提交",
					tooltip : "提交数据",
					handler : function() {
						if (Ext.getCmp("editForm").getForm().isValid()) {// 对表单进行验证(根据配置的项进行配置)
							Ext.getCmp("editForm").getForm().submit({// 利用表单的submit方法提交表单
								waitTitle : "请稍候", // 提交表单时进度条的标题
								waitMsg : "正在提交数据，稍后……", // 提交表单时进度条的信息
								url : 'ProjectMember/updateMember.action', // 提交地址
								params :　{
								'projectID' : PROJECT_ID,
								'memberID' : ID,
								'memberLimit' : Ext.getCmp('limit').getValue(),
								'memberRole' : Ext.getCmp('role').getValue()
								},
								method : "POST", // 提交方式，需要大写
								success : function() { // 如果提交成功后处理的方法
									Ext.example.msg("提交成功", "提交订单类型信息成功……",
											"msg-box-success");// 相应的提示信息
									Ext.getCmp("editWin").close(); // 根据id获取到表单的窗口，然后将其关闭
									mumberManager_grid.getStore().reload(); //
									// 提交成功后，需要刷新GridPanel数据，

								},

								failure : function(form, action) { // 提交指失败进处理的方法
									Ext.example.msg("警告", "数据提交失败，请核对...",
											"msg-box-error");
								}
							});
						} else {// 如果表单验证未通过则提示用户骓未通过。

							Ext.example.msg("提示", "请填写完整、合法的信息...",
									"msg-box-error");
						}

					}
				}, {
					text : "取消",
					tooltip : "取消此操作",
					handler : function() {
						Ext.getCmp("editWin").close();// 取消实际上就是关闭窗口
					}
				}]
			}).show();
		}
        else
        	Ext.example.msg("警告", "请选择要编辑的成员", "msg-box-error");
	};
	
	// 删除成员
	var delMumberFun = function() {
		var _selectModel = mumberManager_grid.getSelectionModel();
		if(_selectModel.hasSelection()) {
			var ID = _selectModel.getLastSelected().get("memberID");
		
			Ext.MessageBox.confirm("删除成员","确定从项目中删除该成员？", function(btnId){
					if(btnId == "yes"){
						Ext.Ajax.request({
							params : {
								'memberID' : ID,
								'projectID' : PROJECT_ID
							},
							method : 'POST',
							url : 'ProjectMember/deleteMember.action',
							success : function(){
								
									Ext.example.msg("删除成员", "从项目中成功删除成员", "msg-box-success");
									mumberManager_grid.getStore().reload(); //
							},
							failure : function() {
								Ext.example.msg("警告", "从项目中删除成员失败", "msg-box-error");
							}
						});
					}
			});
		}
        else
        	Ext.example.msg("警告", "请选择要删除的成员", "msg-box-error");
	};
	
	//按钮们
	/// 查看详细资料
	var btn_showDetail = new Ext.Button({
		text : "查看成员",
		tooltip : "查看成员",
		id : "showDetailType",
		iconCls : 'icon_btn_view',
		handler : function() {
              new showDetailFun();
		}
	});
	
	// 添加成员按钮
	var btn_addMumber = new Ext.Button( {
		text : "添加成员",
		tooltip : "添加成员",
		id : "addMumberType",
		iconCls : 'icon_btn_add',
		handler : function() {
			new addMumberFun();
		}
	});

	// 编辑成员按钮
	var btn_editMumber = new Ext.Button( {
		text : "编辑成员",
		tooltip : "编辑成员",
		id:"editMumberType",
		iconCls : 'icon_btn_edit',
		handler : function() {
			new editMumberFun();
		}
	});
	
	// 删除成员按钮
	var btn_delMumber = new Ext.Button( {
		text : "删除成员",
		tooltip : "删除成员",
		id:"delMumberType",
		iconCls : 'icon_btn_delete',
		handler : function() {
			new delMumberFun();
		}
	});
	
	Ext.define('ProjectMember', {
		extend : 'Ext.data.Model',
		fields : [
		          {
		        	  name : 'projectID',
		        	  type : 'string'
		          }, {
		        	  name : 'memberID',
		        	  type : 'string'
		          }, {
		        	  name : 'memberName',
		        	  type : 'string'
		          }, {
		        	  name : 'memberLimit',
		        	  type : 'string'
		          }, {
		        	  name : 'memberRole',
		        	  type : 'string'
		          }
		          
		          ]}
		);
	// 创建表格数据存储
	 Ext.create('Ext.data.Store', {
		model : 'ProjectMember',
	    storeId:'ProMemberStore',
	   
		
  		proxy: {
  			type: 'rest',
  			url :　'ProjectMember/findAllMember.action',
  			method : 'POST',
  			extraParams : {
		 			'projectID' : PROJECT_ID//静态项目，需连接接口
	 		},
  			reader: {
		 		type : 'json',
  				root : 'members',
  				totalProperty : 'totalCount',
  				idProperty : 'memberID'
  			}
  		 },
		autoLoad : true
	});
	 var _sm = new Ext.selection.RowModel({
			mode : 'SINGLE'
		}
		);

	var mumberManager_grid = Ext.create('Ext.grid.Panel', {
		title : '成员管理',
		columnLines : true,
		selModel : _sm,
		store : Ext.data.StoreManager.lookup('ProMemberStore'),
		region: 'center',
		tbar : [btn_showDetail,'-',btn_addMumber,'-',btn_editMumber,'-',btn_delMumber,],
		columns : [{
                	    text : '成员编号',
	               		dataIndex : 'memberID'
	               	}, {
	               		text : '成员姓名',
	               		dataIndex : 'memberName'
	               	},{
	               		text : '成员职务',
	               		dataIndex : 'memberRole'
	               	}, {
	               		text : '成员权限',
	               		dataIndex : 'memberLimit',
	               		flex : 1
					} ],
		//loadMask: true,
		frame : true
	});
	return mumberManager_grid;
}