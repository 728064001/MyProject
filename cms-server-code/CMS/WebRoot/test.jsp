<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>从Servlet获取JSON数据</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript" src="js/ajaxtel.js">	</script>
	</head>

	<body>
		<input  id = "tel" />
		<input type="button" value="get JSON Data form Servlet" onclick="sendRequest()"/><br/>

		<h2>Show json:</h2>
		<div id="d"></div>
		 
	<table width="200" border="1" bgcolor="#c0c0c0">
	<tbody>

	<tr>
	<th>姓名</th>
	<th>年龄</th>
	<th>住址</th></tr>
	<tr>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td></tr>
	<tr>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td></tr>
	</tbody></table>
	</body>
</html>