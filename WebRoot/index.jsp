<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>IT项目管理系统</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">

		<link rel="stylesheet" href="resources/css/ext-all.css" />
		<link rel="stylesheet" href="style/example.css" />
		<link rel="stylesheet" href="style/myStyle.css" />
		<script type="text/javascript" src="extjs/ext-all.js"></script>
		<script type="text/javascript" src="extjs/examples.js"></script>
		<!-- <script type="text/javascript" src="extjs/ext-base.js"></script> -->
		<!-- index -->
		<script type="text/javascript">
			var MyID = "${sessionScope.userID}";
			var AccountID = "${sessionScope.userName}";
		</script>
		<script type="text/javascript" src="index.js"></script>
		<!-- 项目管理模块 -->
		<script type="text/javascript" charset="utf-8"
			src="js/pj/projectManage.js"></script>
		<script type="text/javascript" charset="utf-8"
			src="js/pj/projectStaffManage.js"></script>
		<script type="text/javascript" charset="utf-8"
			src="js/pj/mumberManage.js"></script>
		<!-- 好友管理模块 -->
		<script type="text/javascript" charset="utf-8"
			src="js/fr/friendManage.js"></script>
		<!-- 我的账户模块 -->
		<script type="text/javascript" charset="utf-8" src="js/MyAccount.js"></script>
		<!-- 测试模块 -->
		<script type="text/javascript" charset="utf-8" src="js/pj/test.js"></script>
		<!-- 任务管理模块 -->
		<script type="text/javascript" charset="utf-8"
			src="js/pj/taskManage.js"></script>
		<!-- 查看项目模块 -->
		<script type="text/javascript" charset="utf-8"
			src="js/pj/OneProjectView.js"></script>
	</head>
	<body>
	</body>
</html>
