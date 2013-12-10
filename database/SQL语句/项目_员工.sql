USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE 项目_员工
(	项目ID   varchar(50),
	员工ID   varchar(50),
	员工权限 varchar(50),
	项目角色 varchar(50)
	PRIMARY KEY (项目ID,员工ID)
	)