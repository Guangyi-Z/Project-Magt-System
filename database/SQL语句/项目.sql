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