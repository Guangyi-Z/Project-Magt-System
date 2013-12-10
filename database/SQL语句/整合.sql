use PMS;
go

/*
 * ==========   Specification   =======================
 *
 *    使用之前，先根据自己的数据库名称添加这条语句 use [database_name] 
 *
 */


/* 关于表的改动 */
/* 广怡需要在项目_任务表中增加[任务JSON描述]一列，大家以后向项目_任务表插入数据时注意多加一列数据 */
alter table 项目_任务
add [任务JSON描述] varchar(7999);



/* 关于数据的改动 */
/*
 * ==========   伟鹏的数据   =======================
 */

insert into 员工
values('testID','asd','asd','asd','asd');

insert into 员工
values('77','asd','asd','asd','asd');

insert into 员工
values('66','name66','sad','asd','asdas');


insert into 项目
values('PC823894923','项目1','2011-11-21','2011-11-21','冻结','sad');


insert into 好友
values('testID','77','sad');

insert into 好友
values('testID','66','sad');


insert into 项目_员工
values('PC823894923','66','asd','管理员');

insert into 项目_员工
values('PC823894923','77','asd','管理员');


/*
 * ==========   广怡的数据   =======================
 */

insert into 任务 
	  (任务ID
      ,任务名称
      ,开始时间
      ,结束时间
      ,任务状态
      ,任务简介
      ,里程碑
      ,父任务ID)
values ('-1','ROOT','2013-12-05','2013-12-05','未启动','唯一的任务',0,'-1');


/*
 * ==========   灿光的数据   =======================
 */

INSERT INTO 员工
VALUES('IT168','张广怡','13570200001','guangyiZhang@163.com','无');

INSERT INTO 员工
VALUES('IT169','何伟鹏','13570200002','weapon@163.com','无');

INSERT INTO 员工
VALUES('IT170','王嘉豪','13570200003','jiahaoWang@163.com','无');

INSERT INTO 员工
VALUES('IT171','欧阳嘉宾','13570200004','jiabinOuyang@163.com','无');

INSERT INTO 员工
VALUES('IT172','黄凯芬','13570200005','kaifenHuang@163.com','无');

INSERT INTO 员工
VALUES('IT173','李灿光','13570200006','canguangLi@163.com','无');


/*
 * ==========   嘉豪的数据   =======================
 */


insert into 员工
values('111','11','11','11','11');

insert into 员工
values('222','22','22','22','22');

insert into 员工
values('333','33','33','33','33');


insert into 项目
values('PC20131202213415','p1','2013-12-02','2013-12-02','未启动','p1');

insert into 项目
values('PC20131202213416','p2','2013-12-04','2013-12-04','未启动','p2');

insert into 项目
values('PC20131202213417','p3','2013-12-04','2013-12-04','未启动','p3');


insert into 好友
values('testID','111','f');

insert into 好友
values('testID','222','s');

insert into 好友
values('testID','333','k');

insert into 项目_员工
values('PC20131202213415','testID','asd','项目经理');

insert into 项目_员工
values('PC20131202213416','testID','asd','项目经理');

insert into 项目_员工
values('PC20131202213417','testID','asd','项目经理');