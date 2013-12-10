USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE 项目
(	项目ID varchar(50),
	项目名称 varchar(50),
	开始时间 Date,
	结束时间 Date,
	项目状态 varchar(10),
	项目简介 varchar(100)
	PRIMARY KEY (项目ID)
	)
	
CREATE TABLE 任务
(	任务ID   varchar(50),
	任务名称 varchar(50),
	开始时间 Date,
	结束时间 Date,
	任务状态 varchar(10),
	任务简介 varchar(100),
	里程碑   int,
	父任务ID varchar(50)
	PRIMARY KEY (任务ID)
	)
	
CREATE TABLE 员工
(	员工ID   varchar(50),
	员工名称 varchar(50),
	电话号码 varchar(15),
	Email    varchar(50),
	员工简介 varchar(50)
	PRIMARY KEY (员工ID)
	)
	
CREATE TABLE 用户
(	用户名   varchar(50),
	密码     varchar(50),
	员工ID   varchar(50)
	PRIMARY KEY (用户名)
	)
CREATE TABLE 权限
(	权限ID   int,
	权限名称 varchar(50)
	PRIMARY KEY (权限ID)
	)

CREATE TABLE 好友
(	员工ID   varchar(50),
	好友ID   varchar(50),
	好友备注 varchar(50)
	PRIMARY KEY (员工ID,好友ID)
	)
	
CREATE TABLE 项目_任务
(	项目ID varchar(50),
	任务ID varchar(50)
	PRIMARY KEY (项目ID,任务ID)
	)
	
CREATE TABLE 项目_员工
(	项目ID   varchar(50),
	员工ID   varchar(50),
	员工权限 varchar(50),
	项目角色 varchar(50)
	PRIMARY KEY (项目ID,员工ID)
	)