<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>jquerygethtml_load</title>
		<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
		<script type="text/javascript">
			var url = "daojishi.html";
			$(
				function(){
					$("#tub").click(
						function(){
							
							$("h2").load(
								url,function(){alert("ok");}
							);
						}
					);
				}
			);

		</script>
	</head>

	<body>
		<input type="button" id="tub" value="load get json" /><BR/>
		<h2></h2>
	</body>
</html>
