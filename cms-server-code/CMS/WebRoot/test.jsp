<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>jquery创建表格</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript" src="js/jquery-1.10.1.js">	</script>
	</head>

	<body>
		<script type="text/javascript">
	$(function(){
			var dom_table = $("<table></table>");
			dom_table.attr("border","1px");
			dom_table.attr("cellspacing","0px");
			dom_table.attr("id","tab");
			dom_table.css("border-color","#0000FF","border-width","1px","border-style","solid");
		    for (var j = 0; j < 5; j++) { 
		        var dom_tr = $('<tr></tr>'); 
		        for (var i = 0; i < 15; i++) { 
		            var dom_td = $("<td>nihao</td>"); 
		            dom_tr.append(dom_td); 
		        } 
		        dom_table.append(dom_tr); 
		    } 
		    $("#t").append(dom_table);
	});
		</script>
		<div id="t" ></div>
	</body>
</html>