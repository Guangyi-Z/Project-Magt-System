USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE 员工
(	员工ID   varchar(50),
	员工名称 varchar(50),
	电话号码 varchar(15),
	Email    varchar(50),
	员工简介 varchar(50)
	PRIMARY KEY (员工ID)
	)