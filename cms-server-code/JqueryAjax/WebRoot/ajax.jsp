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
			//create json 
			//get value
			var u;
			var p;
			var jsonObj;
			
			function getvalues(){
				u = $("#username").val();
				p = $("#password").val();
				jsonObj = {
					"username":u,
					"password":p
				}
				return jsonObj;
			}
			

			$(function(){
					$("#login").click(
						function(){
							alert(getvalues().username);
							$.ajax({
								url: "http://10.1.1.82:8080/JqueryAjax/ReturnJson",
							   type: "POST",
							   dataType:'json',
							   success:function(json) {
							     alert(json.address);
							   }
							});
						}
					);
			});
		</script>
	</head>

	<body>
		username:<input id="username" /><br/>
		password:<input type="password" id="password" /><br/>
		<input type="button" id="login" value="Log in" />
	</body>
</html>