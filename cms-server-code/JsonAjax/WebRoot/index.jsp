<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">
		<title>ajaxjson</title>
		
		<script type="text/javascript">
			var jsonObj;
			var xmlHttp;
			function createXMLHttpRequest(){
				if(window.navigator.appName == "Microsoft Internet Explorer"){
					try{
						xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch(E){
						return null;
						}
				}else{
						xmlHttp = new XMLHttpRequest();
					}//if--end
			}

			function sendDatas(){
				var un = document.getElementById("username").value;
				var ua = document.getElementById("userage").value;
				var uad = document.getElementById("useraddress").value;
				
				createXMLHttpRequest();
				var aj = new addJsonData(un,ua,uad);
				var jsonObj = JSON.stringify(aj);
				var url = "http://10.1.1.82:8080/JsonAjax/JsonServlet";
				xmlHttp.open("POST",url,true);
				xmlHttp.onreadystatechange = handleStateChange;
				xmlHttp.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");
				alert(url);
				xmlHttp.send(jsonObj);
			}

			function handleStateChange(){
				if(xmlHttp.readyState == 4){
					if(xmlHttp.status == 200){
						alert("send ok");
					}
				}
			}

			function addJsonData(n,a,d){
				//创建一个JAVASCRIPT对象
				this.myname = n;
				this.myage = a;
				this.myaddress = d;
			}
		</script>


	</head>

	<body>
		username:<input id="username"/><br/>
		userage:<input id="userage"/><br/>
		useraddress:<input id="useraddress"/><br/>
		<input type="button" value="AJAX Send" onclick="sendDatas()"/>
	<body>
</html>

