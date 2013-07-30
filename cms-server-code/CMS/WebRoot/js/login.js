//载入时
function init(){
		var getlform = document.getElementById("formlogin");
		getlform.setAttribute("action","LoginServlet");
}

//即时验证
   // 用户名验证 -->
	function userInputOnblur(){
		var usernameStr=document.getElementById("username").value.trim();
		var usernametipobj=document.getElementById("usernametip");
		// 中文正则 -->
		var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig; 		
		if(usernameStr.length>1&&usernameStr.length<5){			
			if(reg.test(usernameStr)){
				(document.getElementById("username")).style.border="#66FF33 2px solid";
				usernametipobj.childNodes[0].nodeValue="ok";
				usernametipobj.style.color="#0000FF";
				return true;
			}else{			
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="请输入中文";
				usernametipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="2-4个中文字符";
				usernametipobj.style.color="red";
				return false;
		}
	}
	
	// 密码验证 -->
	function passwordInputOnblur(){
		var passwordStr=document.getElementById("password").value.trim();
		var passwordtipobj=document.getElementById("passwordtip");
		if(passwordStr.length>=8&&passwordStr.length<=16){
				(document.getElementById("password")).style.border="#66FF33 2px solid";
				passwordtipobj.childNodes[0].nodeValue="ok";
				passwordtipobj.style.color="#0000FF";
				return true;
		}else{
				(document.getElementById("password")).style.border="red 2px solid";	
				passwordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符";
				passwordtipobj.style.color="red";
				return false;
		}
	}
	//电话号码验证
	function telInputOnblur(){
		var telStr=document.getElementById("tel").value.trim();
		var teltipobj=document.getElementById("teltip");
		var telReg=/^\d*$/;
		
		if(telStr.length>=7&&telStr.length<=12){
			if(telReg.test(telStr)){
					(document.getElementById("tel")).style.border="#66FF33 2px solid";
					teltipobj.childNodes[0].nodeValue="ok";
					teltipobj.style.color="#0000FF";
				
			}else{
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码格式错误!(请输入合法的号码)!";
				teltipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码长度错误!(7-12位)";
				teltipobj.style.color="red";
				return false;
		} 
	}
	
	
	
//提交时验证
	function subminting(){
	//用户名验证
		var usernameStr=document.getElementById("username").value.trim();
		var usernametipobj=document.getElementById("usernametip");
		var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig; 		
		if(usernameStr==null||usernameStr==""||usernameStr.length<=1||usernameStr.length>5){
			(document.getElementById("username")).style.border="red 2px solid";	
			usernametipobj.childNodes[0].nodeValue="2-4个中文字符";
			usernametipobj.style.color="red";		
			return false;			
		}else{
			if(!reg.test(usernameStr)){
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="请输入中文";
				usernametipobj.style.color="red";
				return false;			
			}else{
				(document.getElementById("username")).style.border="#66FF33 2px solid";
				usernametipobj.childNodes[0].nodeValue="ok";
				usernametipobj.style.color="#0000FF";			
			}	
		}
	//密码验证
		var passwordStr=document.getElementById("password").value.trim();
		var passwordtipobj=document.getElementById("passwordtip");
		// alert(passwordStr.length);
		if(passwordStr==""||passwordStr==null||passwordStr.length<8||passwordStr.length>16){
				(document.getElementById("password")).style.border="red 2px solid";	
				passwordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符";
				passwordtipobj.style.color="red";
				return false;
		
		}else{
				(document.getElementById("password")).style.border="#66FF33 2px solid";
				passwordtipobj.childNodes[0].nodeValue="ok";
				passwordtipobj.style.color="#0000FF";								
		}	
		
	//电话号码验证
		var telStr=document.getElementById("tel").value.trim();
		var teltipobj=document.getElementById("teltip");
		var telReg=/^\d*$/;
		if(telStr.length<7||telStr.length>12){
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码长度错误!(7-12位)";
				teltipobj.style.color="red";
				return false;
		}else{
			if(!telReg.test(telStr)){
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码格式错误!(请输入合法的号码)!";
				teltipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("tel")).style.border="#66FF33 2px solid";
				teltipobj.childNodes[0].nodeValue="ok";
				teltipobj.style.color="#0000FF";						
			}
		} 	
		
	return true;
	}