USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
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