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
				var url ="/CMS/registerQueryTelServlet";
				var sendData = document.getElementById("tel").value;
				createXmlHttpRequest();
				xmlhttprequest.open("POST",url,true);
				xmlhttprequest.onreadystatechange = handleStateChange;
				xmlhttprequest.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");
				xmlhttprequest.send(sendData);
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
			var teltipobj=document.getElementById("teltip");
				alert(typeof(returntext));
				var jsondatas = eval('('+returntext+')');
				alert(jsondatas.status);
				if(jsondatas.status=="yes"){
				
				(document.getElementById("tel")).style.border="#66FF33 2px solid";
				teltipobj.childNodes[0].nodeValue="ok";
				teltipobj.style.color="#0000FF";
				}else{
					(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="该电话号码已经被注册!";
				teltipobj.style.color="red";
				}
			
		
			}