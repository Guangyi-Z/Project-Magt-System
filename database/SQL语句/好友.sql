USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE 好友
(	员工ID   varchar(50),
	好友ID   varchar(50),
	好友备注 varchar(50)
	PRIMARY KEY (员工ID,好友ID)
	)