<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>CMS LOGIN</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style type="text/css">
.table1{
	border-style: solid;
	border-width: 1px;
}
.tablehead-style{
	background-color: silver;
	text-align: center;
	font-family: Aharoni;
	font-size: xx-large;
}
.tableheadtext-style{
	
}
.usertiptext-style{
	text-align: left;
	font-family: "Courier New", Courier, monospace;
	font-size: small;
	color: #0000FF;
}
.passwordtiptext-style{
	text-align: left;
	font-family: "Courier New", Courier, monospace;
	font-size: small;
	color: #0000FF;
}
.forgetpasswordtext-style{
	color: #FF9900;
	font-size: x-small;
	font-family: 微软雅黑;

}
.regist-style{
	text-align: center;
	color: red;
	font-size: small;
	font-family: 微软雅黑;

}

a.regist-style:link{
	color: red;
	font-size: x-small;
	font-family: 微软雅黑;

}
.style6 {
	text-align: center;
	color: #C0C0C0;
	font-family: "Courier New", Courier, monospace;
}
.foottext-style{
	text-align: center;
}
.style8 {
	
}
.style9 {
	text-align: center;
	color: #C0C0C0;
	font-family: "Courier New", Courier, monospace;
	font-weight: bold;
}
</style>
<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
  </head>
  
<body>
	<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; height: 500px">
		<!-- MSTableType="layout" -->
		<tr>
			<td colspan="3" style="height: 90px" valign="top">
			<!-- MSCellType="ContentHead" -->
			&nbsp;</td>
		</tr>
		<tr>
			<td style="width: 416px" valign="top">
			<!-- MSCellType="NavBody" -->
			&nbsp;</td>
			<td style="width: 417px" valign="top">
			<!-- MSCellType="ContentBody" -->
			<table id="table1" cellpadding="0" cellspacing="0" class="table1" style="width: 700px; height:80px">
	<tr>
		<td class="tablehead-style" style="height: 75px"><strong>C M S login</strong></td>
	</tr>
	<tr>
		<td valign="top" style="height: 300px">
			<!--content-->
			<div id="tabs">
			    <div id="tabs-1">
			  		<form id="formlogin" method="POST">
			      	  <table id="table2" cellpadding="0" cellspacing="0" class="f7" style="width: 100%; height: 100%">
								<tr>
									<td style="height: 81px; width: 111px;" class="style6">
									<strong>用户名：</strong></td>
									<td style="height: 81px; width: 329px;" class="f6">
										<input name="username" id="username" style="width: 162px; height: 30px" type="text" onmouseover="this.style.border='#FFAB3F 2px solid'" onmouseout="this.style.border='#ABADB3 1px solid'"/></td>
									<td style="height: 81px" class="usertiptext-style" id="usernametip">
									请输入你的中文姓名</td>
								</tr>
								<tr>
									<td style="height: 94px; width: 111px;" class="style6">
									<strong>密&nbsp; 码：</strong></td>
									<td style="height: 94px; width: 329px;" class="f6">
									
									<input name="password" id="password" style="width: 165px; height: 30px" type="password"  onmouseover="this.style.border='#FFAB3F 2px solid'" onmouseout="this.style.border='#ABADB3 1px solid'"/></td>
									<td style="height: 94px" class="passwordtiptext-style" id="passwordtip">请输入8位密码</td>
								</tr>
								<tr>
									<td style="height: 94px; width: 111px;" class="style9">
									手机号：</td>
									<td style="height: 94px; width: 329px;" class="f6">
										<input name="tel" id="tel" style="width: 165px; height: 30px" type="text"  onmouseover="this.style.border='#FFAB3F 2px solid'" onmouseout="this.style.border='#ABADB3 1px solid'"  />
									
									<td style="height: 94px" class="passwordtiptext-style" id="teltip">
									请输入您的手机号</td>
								</tr>
								<tr>
									<td style="height: 94px; width: 111px;" class="style9">
									登录身份：</td>
									<td style="height: 94px; width: 329px;" class="f6">
									
									<input name="useridentity" type="radio" value="普通用户" /><span style="font-size:small">普通用户</span>&nbsp;&nbsp;
									<input name="useridentity" type="radio" value="管理员" /><span style="font-size:small">管理员</span></td>
									<td style="height: 94px" class="passwordtiptext-style" id="useridentitytip">
									请选择您的登录身份</td>
								</tr>
								<tr>
									<td style="width: 111px">&nbsp;</td>
									<td style="width: 329px">
									<input name="Submit1" style="width: 130px; height: 47px" type="submit" value="登   录" onclick="return subminting()"/>&nbsp;
									<span class="forgetpasswordtext-style">
									<br />
									<br />
									<span ><a href="a.htl">忘记密码了？</a></span>&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
									<td class="style8"><a class="regist-style" href="register.jsp">注册</a></td>
								</tr>
							</table>
						</form>
			  </div>
			  
			  
			</div>		
		</td>
	</tr>
	<tr>
		<td style="background-color:silver; height: 37px;"; class="foottext-style">
		<span style="color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;">
		Copyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span></td>
	</tr>
			</table>
			</td>
			<td style="height: 658px; width: 422px" valign="top">
			<!-- MSCellType="NavBody2" -->
			&nbsp;</td>
		</tr>
		<tr>
			<td colspan="3" style="height: 90px" valign="top">
			<!-- MSCellType="ContentFoot" -->
		</td>
		</tr>
	</table>
	<script type="text/javascript" src="js/login.js"></script>
</body>

</html>
