var friendManageFunc = function() {
	
    var pageSize = 10;
    var my_account_id;  // 传参数进来
    

    /*
     *  =========  aux function in Handler ===========
     */ 

    var pop_window_choose_project = function(store,user_record) {
    	
    	new Ext.Window({
					id : "chooseprojectWindow",
					title : "请选择项目",
					width : 700,
					height : 400,
					resizable : false,
					modal : true,
					closable: false,
					items : [{
						xtype : "grid",
						//title: '用户信息',
					    id: 'choose_project_grid',
					    multiSelect : true,
	   					selType: 'checkboxmodel',
					    store: store,
					    columns: [
					        { text: '项目ID',  dataIndex: 'project_id'  },
					        { text: '项目名称',  dataIndex: 'project_name'  }
					    ]
					}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "确定",
						handler : function() {
  								
							var project_record = Ext.getCmp("choose_project_grid").getSelectionModel().getSelection();
					       
							if(project_record.length == 0){
						            Ext.MessageBox.show({
						                title:"提示",
						                msg:"请选择项目!"
						            })
						            return;
				        	}else{								
							      for(var j = 0; j < project_record.length; j++) 
					        		   for(var i = 0; i < user_record.length; i++)
							           {
							                // 邀请好友					         
									        
							           }   
							      // 提示操作是否成功
							           
							      // 退出     
							      Ext.getCmp("chooseprojectWindow").close();
						           
					        }	
					    }  
					    
					}, {
						text : "取消",
						handler : function() {
							Ext.getCmp("chooseprojectWindow").close();// 取消实际上就是关闭窗口
						}
					}]
			}).show();
    }
    
    
    
    var pop_window_show_information = function(store) {
    	       	   	
			new Ext.Window({
					id : "showinformationWindow",
					title : "用户信息",
					width : 700,
					height : 200,
					resizable : false,
					modal : true,
					closable: false,
					items : [{
						xtype : "grid",
						//title: '用户信入息',
					    id: 'show_information_grid',
					    store: store,
					    columns: [
					        { text: '员工ID',  dataIndex: 'user_id'  },
					        { text: '员工名称s',  dataIndex: 'user_name'  },
					        { text: '电话号码',  dataIndex: 'user_phonenum'  },
					        { text: 'Email',  dataIndex: 'user_email'  },
					        { text: '员工简介',  dataIndex: 'user_introduction', flex : 1  } 
					    ]
					}],
					buttonAlign : 'center',
					minButtonWidth : 80,
					buttons : [{
						text : "申请加入项目小组",
						handler : function() {

							
						}		
					},{
						text : "添加其为好友",
						handler : function() {

							
						}		
					},{
						text : "取消",
						handler : function() {
							Ext.getCmp("showinformationWindow").close();// 取消实际上就是关闭窗口
						}
					}]
			}).show();
    	
    }
    
    
    /*
     *  =========  Handler function ===========
     */ 
    
	var btn_finduser_handler = function() {
			
			new Ext.Window({
						id : "finduserWindow",
						title : "查找用户",
						width : 300,
						height : 100,
						resizable : false,
						modal : true,
						closable: false,
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
								
								/// 查询数据库
							    var temp_store = Ext.create('Ext.data.Store', {
								    storeId:'simpsonsStore',
								        fields: [
											       {name: 'user_id'},
											       {name: 'user_name'},
											       {name: 'user_phonenum'},
											       {name: 'user_email'},
											       {name: 'user_introduction'}
											    ],
								    data:{'items':[
								        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' },
								        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' },
								        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' }
								    ]},
								    proxy: {
								        type: 'memory',
								        reader: {
								            type: 'json',
								            root: 'items'
								        }
								    }
								});
								
								
								/// 弹出新窗口显示用户信息								
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
        if(record.length == 0){
            Ext.MessageBox.show({
                title:"提示",
                msg:"请先选择您要删除的好友!"
            })
            return;
        }else{
            for(var i = 0; i < record.length; i++){
                /// 删除页面上的数据
                ds.remove(record[i]);
                
                /// 删除后台数据库的数据
            }
        }
          
	}

    var btn_invite_handler = function() {		
					
        var record = grid.getSelectionModel().getSelection();
        if(record.length == 0){
            Ext.MessageBox.show({
                title:"提示",
                msg:"请先选择您要邀请的好友!"
                //icon: Ext.MessageBox.INFO
            })
            return;
        }else{
            
            // 查询数据库
			var temp_store = Ext.create('Ext.data.Store', {
			    storeId:'simpsonsStore',
			        fields: [
						       {name: 'project_id'},
						       {name: 'project_name'}
						    ],
			    data:{'items':[
			        { 'project_id': 'Bart',  'project_name': 'phonenum'},
			        { 'project_id': 'Bart1', 'project_name': 'phonenum'},
			        { 'project_id': 'Bart2', 'project_name': 'phonenum'}
			    ]},
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }
		    });
        	
        	// 弹出用户已经参加的项目
            new pop_window_choose_project(temp_store,record);
        }
           
	}
	
	var btn_showinformation_handler = function() {		
				
	    var record = grid.getSelectionModel().getSelection();
	    if(record.length == 0){
	        Ext.MessageBox.show({
	            title:"提示",
	            msg:"请先选择您要查看资料的好友!"
	            //icon: Ext.MessageBox.INFO
	        })
	        return;
	    }else{
	    	
	    	/// 查询数据库
	    	record[0];
	    	var temp_store = Ext.create('Ext.data.Store', {
						    storeId:'simpsonsStore',
						        fields: [
									       {name: 'user_id'},
									       {name: 'user_name'},
									       {name: 'user_phonenum'},
									       {name: 'user_email'},
									       {name: 'user_introduction'}
									    ],
						    data:{'items':[
						        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' },
						        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' },
						        { 'user_id': 'Bart','user_name': 'name','user_phonenum': 'Bart','user_email': 'Bart@126.com','user_introduction': 'Bart' }
						    ]},
						    proxy: {
						        type: 'memory',
						        reader: {
						            type: 'json',
						            root: 'items'
						        }
						    }
						});
	    	
	    	/// 弹出窗口显示用户信息
	    	new pop_window_show_information(temp_store);	    								
            
	    }        
	}
	
	var btn_modifyremark_handler = function() {
		
		/// 删除页面上的数据
        var record = grid.getSelectionModel().getSelection();
        if(record.length == 0){
            Ext.MessageBox.show({
                title:"提示",
                msg:"请先选择您要修改备注的好友!"
                //icon: Ext.MessageBox.INFO
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
					closable: false,
					textfieldAlign: 'left',
					labelAlign: 'right',
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
									
								/// 读取用户的输入
								var remarkname = Ext.getCmp("remarkname").getValue();
								             Ext.MessageBox.show({
                title:"提示",
                msg:remarkname
            })
								/// modidy the remark in the datebase
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
     *  =========  Button Definition ===========
     */ 
	
    /// 新建表格上方的按钮
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
	/// 查看资料
	var btn_showinformation = new Ext.Button({
				text : "查看资料",
				tooltip : "查看资料",
				id : "btn_showinformation",
				handler : function() {
                    new btn_showinformation_handler();
				}
			});					
    /// 修改备注名
	var btn_modifyremark = new Ext.Button({
				text : "修改备注",
				tooltip : "修改备注",
				id : "btn_modifyremark",
				handler : function() {
					new btn_modifyremark_handler();
				}
			});

    
    /*
     *  =========  Grid Definition ===========
     */ 			
   /////// 创建表格
	var ds = Ext.create('Ext.data.Store', {
		//extend: 'Ext.data.Model',
	    storeId:'simpsonsStore',
	    fields:['remark'],
	    data:{'items':[
	        { 'remark': 'Bart'},
	        { 'remark': 'Homer'},
	        { 'remark': 'Marge'}
	    ]},
	    proxy: {
	        type: 'memory',
	        reader: {
	            type: 'json',
	            root: 'items'
	        }
	    }
	});
	
	var grid = Ext.create('Ext.grid.Panel', {
	    title: '好友列表',
	    id: 'friend_main_grid',
	    store: Ext.data.StoreManager.lookup('simpsonsStore'),
	    region: 'center',
	    multiSelect : true,
	    selType: 'checkboxmodel',
	    columns: [
	        { text: '好友备注',  dataIndex: 'remark', flex : 1 }
	    ],
		tbar : [btn_finduser, '-', btn_deleteuser, '-', btn_invite, '-',btn_showinformation, '-',btn_modifyremark],
		bbar : new Ext.PagingToolbar({
					id : "toolbar1",
					store : Ext.data.StoreManager
							.lookup('simpsonsStore'),
					pageSize : pageSize,
					displayInfo : true,
					displayMsg : "第 {0} - {1} 条&nbsp;&nbsp;共 {2} 条",
					emptyMsg : "没有记录"
				})
	});

	/////////////////////////////////////////////////////////
    
    return grid;
	
}