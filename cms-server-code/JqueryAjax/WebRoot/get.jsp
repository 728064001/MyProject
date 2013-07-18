<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	<base href="<%=basePath%>">
		<title>get</title>
		<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
		<script type="text/javascript">
			var url ="http://localhost:8080/JqueryAjax/ReturnJson";
			$(
				function(){
					$("#but").click(
					function(){
						alert(url);
						$.getJSON(
							url,function(data){
								var n = data.username;
								var a = data.age;
								var ad = data.address;
								$("#div").html(n);
							}
						);
					}
				);
				}
			)
		</script>
	</head>

	<body>
		<input type="button" id="but" value="get"/></br>
		<div id="div"></div>
	</body>
</html>

