<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>ajax</title>
		<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
		<script type="text/javascript">

			$(function(){
					$("#login").click(
						function(){
							
							$.ajax({
								url: "/JqueryAjax/ReturnJson",
							   type: "POST",
							   dataType:'json',
							   success:function(json) {
							     alert(json.status);
							   }
							});
						}
					);
			});
		</script>
	</head>

	<body>
		<input type="button" id="login" value="Log in" />
	</body>
</html>
