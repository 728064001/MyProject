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
        <script type="text/javascript">  
            //create xmlhttprequest object  
            var xmlhttprequest;  
            function createXmlHttpRequest(){  
                if(window.navigator.appName == "Microsoft Internet Explorer"){  
                    xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP");  
                }else{  
                    xmlhttprequest = new XMLHttpRequest();  
                }  
            }  
  
            function sendRequest(){  
                var url ="http://192.168.1.3:8080/JqueryAjax/ReturnJson";  
                var sendData = "getJSON";  
                createXmlHttpRequest();  
                alert("ok");  
                xmlhttprequest.open("POST",url,true);  
                xmlhttprequest.onreadystatechange = handleStateChange;  
                xmlhttprequest.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");  
                xmlhttprequest.send(null);  
            }  
  
            function handleStateChange(){  
                if(xmlhttprequest.readyState == 4)  
                {  
                    if(xmlhttprequest.status == 200){  
                        alert("getRequest sended");  
                        parseResults();  
                    }else{  
                        alert("error1");  
                    }  
                }else{  
                      
                }  
            }  
  
            function parseResults(){  
                var returntext = xmlhttprequest.responseText;  
                alert(typeof(returntext));  
                var jsondatas = eval('('+returntext+')');  
                alert(jsondatas.username);  
                var idnode = document.getElementById("d");  
                if(idnode.hasChildNodes()){  
                    idnode.removeChild(idnode.childNodes[0]);  
                }  
  
                var textjsonnode = document.createTextNode(returntext);  
                idnode.appendChild(textjsonnode);  
            }  
        </script>  
    </head>  
  
    <body>  
        <input type="button" value="get JSON Data form Servlet" onclick="sendRequest()"/><br/>  
  
        <h2>Show json:</h2>  
        <div id="d"></div>  
       </body>  
</html>  
