				
function ajaxreturntruefalse(urlstr,objvalue){
			this.args= true;
			this.urlstr = urlstr;
			this.objvalue = objvalue;
				
			var xmlhttprequest;
			function createXmlHttpRequest(){
				if(window.navigator.appName == "Microsoft Internet Explorer"){
					xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP");
				}else{
					xmlhttprequest = new XMLHttpRequest();
				}
			}
			function sendRequest(){
//				alert(rulstr+"  "+objvalue);
				createXmlHttpRequest();
				xmlhttprequest.open("POST",urlstr,true);
				xmlhttprequest.onreadystatechange = handleStateChange;
				xmlhttprequest.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");
				xmlhttprequest.send(objvalue);
			}
			function handleStateChange(){
				if(xmlhttprequest.readyState == 4)
				{
					if(xmlhttprequest.status == 200){
//						alert("getRequest sended");
						parseResults();
					}else{
						alert("error1");
					}
				}else{
					
				}
			}
			function parseResults(){
			var teltipobj=document.getElementById("teltip");
			var returntext = xmlhttprequest.responseText;
//				alert(typeof(returntext));
				var jsondatas = eval('('+returntext+')');
//				alert(jsondatas.status);
				if(jsondatas.status!="yes"){
				return true;
				
				}else{
				return false;
				}
			}
			
}	
