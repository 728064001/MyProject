<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>注册成功</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="css/registersuccess.css">
	

  </head>
  
<body>
	
<table align="center" cellspacing="1" class=" table--style" style="width: 400px; height: 300px; margin-top:100px">
	<tr>
		<td align="left" valign="top">
		<table cellspacing="1" class=" table--style" style="width: 100%;background-color:silver; height: 100%">
			<tr>
				<td class="style1" style="height: 126px">
				<img style="vertical-align:middle" alt="" height="32" src="image/check.png" width="32" /><span class="style2"><strong>恭喜您，账户注册成功!</strong></span></td>
			</tr>
			<tr>
				<td class="style1" valign="top"><strong>
				<span id="jishu" class="style4">3</span><span class=" table-td-jishi-style">
				</span></strong><span class="style3"><strong>秒之后跳转到 登录页面</strong></span><br />
				<br />
				<a href="login.jsp"><strong><span class="style3">手动跳转</span></strong></a></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
<script type="text/javascript" src="js/registersuccess.js"></script>
</body>

</html>
