USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE 项目_任务
(	项目ID varchar(50),
	任务ID varchar(50)
	PRIMARY KEY (项目ID,任务ID)
	)