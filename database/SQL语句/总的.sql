USE [PROJECT_MANAGEMENT_SYSTEM] 
GO
CREATE TABLE ��Ŀ
(	��ĿID varchar(50),
	��Ŀ���� varchar(50),
	��ʼʱ�� Date,
	����ʱ�� Date,
	��Ŀ״̬ varchar(10),
	��Ŀ��� varchar(100)
	PRIMARY KEY (��ĿID)
	)
	
CREATE TABLE ����
(	����ID   varchar(50),
	�������� varchar(50),
	��ʼʱ�� Date,
	����ʱ�� Date,
	����״̬ varchar(10),
	������ varchar(100),
	��̱�   int,
	������ID varchar(50)
	PRIMARY KEY (����ID)
	)
	
CREATE TABLE Ա��
(	Ա��ID   varchar(50),
	Ա������ varchar(50),
	�绰���� varchar(15),
	Email    varchar(50),
	Ա����� varchar(50)
	PRIMARY KEY (Ա��ID)
	)
	
CREATE TABLE �û�
(	�û���   varchar(50),
	����     varchar(50),
	Ա��ID   varchar(50)
	PRIMARY KEY (�û���)
	)
CREATE TABLE Ȩ��
(	Ȩ��ID   int,
	Ȩ������ varchar(50)
	PRIMARY KEY (Ȩ��ID)
	)

CREATE TABLE ����
(	Ա��ID   varchar(50),
	����ID   varchar(50),
	���ѱ�ע varchar(50)
	PRIMARY KEY (Ա��ID,����ID)
	)
	
CREATE TABLE ��Ŀ_����
(	��ĿID varchar(50),
	����ID varchar(50)
	PRIMARY KEY (��ĿID,����ID)
	)
	
CREATE TABLE ��Ŀ_Ա��
(	��ĿID   varchar(50),
	Ա��ID   varchar(50),
	Ա��Ȩ�� varchar(50),
	��Ŀ��ɫ varchar(50)
	PRIMARY KEY (��ĿID,Ա��ID)
	)