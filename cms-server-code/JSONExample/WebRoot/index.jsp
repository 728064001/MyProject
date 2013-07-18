<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>jsonExample</title>
		<script type="text/javascript" src="json.js"></script>

		<script type="text/javascript">
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


			function doJSON(){
				var u = document.getElementById("us").value;
				createXMLHttpRequest();
				var url = "http://10.1.1.82:8080/JSONExample/jsonservlet?username="+u;
				xmlHttp.open("POST",url,true);
				xmlHttp.onreadystatechange = handleStateChange;
				xmlHttp.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");
				alert(url);
				xmlHttp.send(null);
			}

			function handleStateChange(){
				if(xmlHttp.readyState == 4){
					if(xmlHttp.status == 200){
						parseResults();
					}
				}
			}

			function parseResults(){
				
				var returntext = xmlHttp.responseText;
				if(returntext==1){
					var Text = document.createTextNode("用户可以注册");
				}else if(returntext==0){
					var Text = document.createTextNode("用户已经被注册！！");
				}
				var responseDiv = document.getElementById("serverResponse");
				if(responseDiv.hasChildNodes()){
					responseDiv.removeChild(responseDiv.childNodes[0]);
				}
				responseDiv.appendChild(Text);
			}

			
		</script>
	</head>

	<body>
		<br/><br/>
		<form >
			<img height="200px" width="200px" src="http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E8%BD%A6&ie=utf-8&in=24015&cl=2&lm=-1&st=&pn=79&rn=1&di=201197425550&ln=1973&fr=&&fmq=1371800641629_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic7.nipic.com%2F20100606%2F4899050_135353032906_2.jpg">
			<input id="us" type="text" onchange="doJSON()" />
			<input type="button" value="Click here to send JSON data to the server" onclick="doJSON()" />
		</form>
		<H2>Server Response:</H2>
		<div id="serverResponse"></div>
	</body>

</html>
