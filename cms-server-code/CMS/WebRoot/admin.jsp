<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%request.setCharacterEncoding("utf-8");%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>cms admin</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" href="css/zTreeStyle/zTreeStyle.css" />
	<link rel="stylesheet" href="css/admin.css" />
	<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.core-3.5.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.excheck-3.5.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.exedit-3.5.js"></script>
	<script type="text/javascript" src="js/admin.js"></script>
</head>

<body>
<table align="center" cellspacing="1" class="admin-main-tab-style" style="width: 1300px; height: 900px">
	<tr bgcolor="#C0C0C0">
		<td class="admin-main-tab-td-style" style="height: 17px; width: 211px">
		<span class="admin-main-tab-td-logo-style">CMS</span> <span class="admin-main-tab-td-admins-style"><strong>admin</strong></span></td>
		<td class="admin-child-tab-td-null-style" style="height: 17px">
		<table cellspacing="1" class="admin-child-tab-style" style="width: 220px; height: 100%">
			<tr>
				<td>IP:192.168.1.1</td>
				<td class="admin-child-tab-td-welcome-style">修改信息</td>
			</tr>
			<tr>
				<td>2013/8/1 23:14</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>XX 欢迎登录 CMS</td>
				<td class="admin-child-tab-td-welcome-style">Logout</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td style="width: 211px; height: 808px;" align="left" valign="top">
		<table cellspacing="1" class="style8" style="width: 100%; height: 100%">
			<tr>
				<td align="left" style="height: 281px" valign="top">
				<table cellspacing="1" class="style9" style="width: 100%; height: 100%">
					<tr>
						<td class="admin-child-tab-td-welcome-style" style="height: 95px">
						<img src="image/userimage.jpg" height="85" width="85" /></td>
					</tr>
					<tr>
						<td align="left" valign="top">
						<table cellspacing="1" style="width: 100%; height: 100%">
							<tr>
								<td class="admin-child-tab-td-welcome-style" colspan="2"><strong>石头</strong></td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">性别:</td>
								<td>
								<img alt="" height="11" src="image/male.gif" width="11" /></td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">帮派:</td>
								<td>xxxxxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">职务:</td>
								<td>xxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">书信:</td>
								<td>xxxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">我的装备</td>
								<td>&nbsp;</td>
							</tr>
						</table>
						</td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td align="left" valign="top">
				<hr /><hr/>
				<strong><span class="admin-main-tab-style1">[ 业务区 ]<br/>
				<!--tree-->
				</span></strong>
				<div>
				<ul id="treeDemo" class="ztree"></ul></div>
				<hr/>
				</td>
			</tr>
		</table>
		</td>
		<td style="height: 808px" bgcolor="#FAFAFA" align="left" valign="top">
		<!--业务工作区-->
		<!--人员信息-->
		<div id="personinfo" style="position: absolute; width: 1080px; height: 808px; z-index: 1">
			<table cellspacing="1" class="admin-main-tab-admin-child-tab-td-null-style" style="width: 100%; height: 100%">
				<tr>
					<td bgcolor="#808080" style="height: 20px">
					<table cellpadding="0" cellspacing="0" style="width: 100%; height: 100%">
						<tr>
							<td>&nbsp;<strong><span class="admin-main-tab-admin-main-tab-td-logo-style">人员信息&nbsp;</span></strong></td>
							<td class="admin-child-tab-td-null-style">
							<img id="personinfo_close_image" alt="" height="23" src="image/personinfo_close.png" width="26" /></td>
						</tr>
					</table>
					</td>
				</tr>
				<tr>
					<td style="height: 33px"><span class="admin-main-tab-style1">UUID</span>:<input name="uuid" id="uuid" type="text" style="width: 81px" /> 
					<span class="admin-main-tab-style1">姓名</span>:<input name="username" id="username" type="text" style="width: 59px" />&nbsp;<span class="admin-main-tab-style1">性别</span>:<select name="sex" id="sex">
						<option value="--">--</option>
						<option value="女">女</option>
						<option value="男">男</option>
						</select>&nbsp;<span class="admin-main-tab-style1">公司</span>:<select name="comp" id="comp" style="width: 65px">
						<option value="--">--</option>
						</select>&nbsp;<span class="admin-main-tab-style1">部门:</span><select name="dep" id="dep" style="width: 85px">
						<option value="--">--</option>
						</select>&nbsp;<span class="admin-main-tab-style1">职位</span>:<select name="post" id="post" style="width: 95px">
						<option value="--">--</option>
						</select>&nbsp;&nbsp;<span class="admin-main-tab-style1"> 
					身份证:</span><input name="card" id="card" type="text" style="width: 130px" /> 
					<span class="admin-main-tab-style1">电话:</span><input name="tel" id="tel" type="text" style="width: 81px" />&nbsp;&nbsp;<input name="search" id="search" type="button" value="查找" style="width: 50px" /></td>
				</tr>
				<tr>
					<td align="left" valign="top">&nbsp;&nbsp;&nbsp; &nbsp;<img alt="" height="18" src="image/addperson.png" width="18" /><span class="admin-main-tab-admin-main-tab-td-admins-style">添加人员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					</span>
					<hr style="height: -12px"/>
					<!--根据ajax 返回的数据动态创建表格 -->
					<div id="personinfotable"></div>
						<span id="f" ><a class="fto" id='mainpa'>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='uppa'>上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='downpa'>下一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='lastpa'>最后一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
						跳转到<input type="text" width="80px" />页&nbsp;<input type="button" value="转到>"/>
						</span><span id="dqpages"></span>&nbsp;&nbsp;/&nbsp;&nbsp;<span id="zpages"></span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="countrow"></span>&nbsp;&nbsp;&nbsp;每页显示<select id="eachpr"><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>条数据<hr/>
					<!--根据ajax 返回的数据动态创建表格 ----------------------------------->
					</td>
				</tr>
			</table>
		</div>
		<!---->	
		</td>
	</tr>
	<tr bgcolor="#C0C0C0">
		<td style="height: 33px;" class="admin-child-tab-td-welcome-style" colspan="2">
		<span style="color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;">
		Copyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span></td>
	</tr>
</table>
</body>

</html>
