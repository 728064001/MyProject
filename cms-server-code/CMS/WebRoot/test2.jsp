<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript" src="js/jquery-1.8.0.js">	</script>
	</head>

	<body>
		<script type="text/javascript">
$(function(){
		$("#but").click(function(){
			alert(asdf());
		});

function asdf(){
			var telstr = $.trim($("#tel").val());
			var url = "/CMS/registerQueryTelServlet?"+"&tel="+telstr;
				$.ajax({
					url: url,
					async:false,
					type: "POST",
					dataType:'json',
					success:function(j) {
					alert(j.status);
						if(j.status=="no"){
							return false;
						}
						
					}
				});
	return true;
}
});
		</script>
		<input id="tel" /><input type="button" id="but"/>
	</body>
</html>