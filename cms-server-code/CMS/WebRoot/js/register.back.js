//载入-->
	function int(){
		//document.getElementById("xieyi").checked = true;
		var regbut = document.getElementById("regbut").disabled = true;
	}
// checkbox method
	function checkboxonchange(){
		var xieyicheckbox = document.getElementById("xieyi").checked;
		if(xieyicheckbox){
			document.getElementById("regbut").disabled = false;
		}else{
			document.getElementById("regbut").disabled = true;
		}
	}
//即时验证  -->
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
	
	// 重复密码验证 -->
	function repeatPasswordInputOnblur(){
		var passwordStr=document.getElementById("password").value.trim();
		var repeatpasswordStr=document.getElementById("repeatpassword").value.trim();
		var repeatpasswordtipobj=document.getElementById("repeatpasswordtip");
		if(repeatpasswordStr.length==passwordStr.length&&passwordStr==repeatpasswordStr){
				(document.getElementById("repeatpassword")).style.border="#66FF33 2px solid";
				repeatpasswordtipobj.childNodes[0].nodeValue="ok";
				repeatpasswordtipobj.style.color="#0000FF";
				return true;
		}else{
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="与前一次输入的密码不匹配!";
				repeatpasswordtipobj.style.color="red";
				return false;
		}
	}
	
	// 验证电话号码 -->
	function telInputOnblur(){
		var telStr=document.getElementById("tel").value.trim();
		var teltipobj=document.getElementById("teltip");
		var telReg=/^\d*$/;
		if(telStr.length>=7&&telStr.length<=12){
			if(telReg.test(telStr)){
				(document.getElementById("tel")).style.border="#66FF33 2px solid";
				teltipobj.childNodes[0].nodeValue="ok";
				teltipobj.style.color="#0000FF";
				return true;
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
	
	// 验证QQ -->
	function qqInputOnblur(){
		var qqStr=document.getElementById("qq").value.trim();
		var qqtipobj=document.getElementById("qqtip");
		var qqReg=/^\d*$/;
		if(qqStr.length>=4&&qqStr.length<=15){
			if(qqReg.test(qqStr)){
				(document.getElementById("qq")).style.border="#66FF33 2px solid";
				qqtipobj.childNodes[0].nodeValue="ok";
				qqtipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="请输入正确的号码!";
				qqtipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="QQ号码长度不正确!";
				qqtipobj.style.color="red";
				return false;
		}
	}
	
	//农历生日 -->
	function brithdayInputOnblur(){
		var brithdayStr=document.getElementById("brithday").value.trim();
		var brithdaytipobj=document.getElementById("brithdaytip");
		var brithdayReg=/^\d*$/;
		if(brithdayReg.test(brithdayStr)){
			if(brithdayStr.length==4){
				if(((brithdayStr.substring(0,2)>0)&&(brithdayStr.substring(0,2)<=12))&&((brithdayStr.substring(2,4)>0)&&(brithdayStr.substring(2,4)<=29))){
				(document.getElementById("brithday")).style.border="#66FF33 2px solid";
				brithdaytipobj.childNodes[0].nodeValue="ok";
				brithdaytipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期范围错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
				}
			}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期长度错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
		}
	}
	
	//年龄验证  -->
	function ageInputOnblur(){
		var ageStr=document.getElementById("age").value.trim();
		var agetipobj=document.getElementById("agetip");
		var ageReg=/^\d*$/;
		if(ageReg.test(ageStr)){
			if(((parseInt(ageStr))>=17)&&((parseInt(ageStr))<=100)){
				(document.getElementById("age")).style.border="#66FF33 2px solid";
				agetipobj.childNodes[0].nodeValue="ok";
				agetipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄范围错误！";
				agetipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄格式错误！";
				agetipobj.style.color="red";
				return false;
		}
	}
	
	//身份证验证  -->
	function cardInputOnblur(){
		var cardStr=document.getElementById("card").value.trim();
		var cardtipobj=document.getElementById("cardtip");
		var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
		if(cardReg.test(cardStr)){
				(document.getElementById("card")).style.border="#66FF33 2px solid";
				cardtipobj.childNodes[0].nodeValue="ok";
				cardtipobj.style.color="#0000FF";
		}else{
				(document.getElementById("card")).style.border="red 2px solid";	
				cardtipobj.childNodes[0].nodeValue="身份证号码错误，请输入合法身份证!";
				cardtipobj.style.color="red";
		}
	}

	//所属公司验证-->
	function componblur(){
		var getcompselectobj = document.getElementById("comp");
		var getcompselectedvalue = getcompselectobj.options[getcompselectobj.selectedIndex].value;
		var getcompselecttipobj = document.getElementById("comptip");
		if(getcompselectedvalue!="=请选择="&&getcompselectedvalue!=""&&getcompselectedvalue!=null){
				getcompselectobj.style.border="#66FF33 2px solid";
				getcompselecttipobj.childNodes[0].nodeValue="ok";
				getcompselecttipobj.style.color="#0000FF";
		}else{
				getcompselectobj.style.border="red 2px solid";	
				getcompselecttipobj.childNodes[0].nodeValue="未选择所属公司!";
				getcompselecttipobj.style.color="red";
		}
	}
	
	//部门验证-->
		function deponblur(){
		var getdepselectobj = document.getElementById("dep");
		var getdepselectedvalue = getdepselectobj.options[getdepselectobj.selectedIndex].value;
		var getdepselecttipobj = document.getElementById("deptip");
		if(getdepselectedvalue!="=请选择="&&getdepselectedvalue!=""&&getdepselectedvalue!=null){
				getdepselectobj.style.border="#66FF33 2px solid";
				getdepselecttipobj.childNodes[0].nodeValue="ok";
				getdepselecttipobj.style.color="#0000FF";
		}else{
				getdepselectobj.style.border="red 2px solid";	
				getdepselecttipobj.childNodes[0].nodeValue="未选择部门!";
				getdepselecttipobj.style.color="red";
		}
	}
	
	//职位验证-->
		function postonblur(){
		var getpostselectobj = document.getElementById("post");
		var getpostselectedvalue = getpostselectobj.options[getpostselectobj.selectedIndex].value;
		var getpostselecttipobj = document.getElementById("posttip");
		if(getpostselectedvalue!="=请选择="&&getpostselectedvalue!=""&&getpostselectedvalue!=null){
				getpostselectobj.style.border="#66FF33 2px solid";
				getpostselecttipobj.childNodes[0].nodeValue="ok";
				getpostselecttipobj.style.color="#0000FF";
		}else{
				getpostselectobj.style.border="red 2px solid";	
				getpostselecttipobj.childNodes[0].nodeValue="未选择职位!";
				getpostselecttipobj.style.color="red";
		}
	}
//即时验证------------------------------------------------------------------------------------------up-----end  -->


// 提交时验证 -->
	function register(){
		//验证用户名  -->
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
		
	// 密码验证 -->
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
		
	//重复密码验证  -->
		var repeatpasswordStr=document.getElementById("repeatpassword").value.trim();
		var repeatpasswordtipobj=document.getElementById("repeatpasswordtip");
		if(repeatpasswordStr.length!=passwordStr.length||passwordStr!=repeatpasswordStr){
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="与前一次输入的密码不匹配!";
				repeatpasswordtipobj.style.color="red";
				return false;
		}else{
			if(passwordStr.length<8||passwordStr.length>16){
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符!";
				repeatpasswordtipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("repeatpassword")).style.border="#66FF33 2px solid";
				repeatpasswordtipobj.childNodes[0].nodeValue="ok";
				repeatpasswordtipobj.style.color="#0000FF";
			}
		}	
		
	//验证电话号码  -->
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
	//验证QQ  -->
		var qqStr=document.getElementById("qq").value.trim();
		var qqtipobj=document.getElementById("qqtip");
		var qqReg=/^\d*$/;
		if(qqStr.length<4||qqStr.length>15){
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="QQ号码长度不正确!";
				qqtipobj.style.color="red";
				return false;
		}else{
			if(!qqReg.test(qqStr)){
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="请输入正确的号码!";
				qqtipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("qq")).style.border="#66FF33 2px solid";
				qqtipobj.childNodes[0].nodeValue="ok";
				qqtipobj.style.color="#0000FF";
			}
		}		
	//生日日期验证  -->
	//农历生日 -->
		var brithdayStr=document.getElementById("brithday").value.trim();
		var brithdaytipobj=document.getElementById("brithdaytip");
		var brithdayReg=/^\d*$/;
		if(!brithdayReg.test(brithdayStr)){
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
		}else{
			if(brithdayStr.length!=4){
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期长度错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
			}else{
				if((brithdayStr.substring(0,2)<1)||(brithdayStr.substring(0,2)>12)||((brithdayStr.substring(2,4)<1)||(brithdayStr.substring(2,4)>29))){
					(document.getElementById("brithday")).style.border="red 2px solid";	
					brithdaytipobj.childNodes[0].nodeValue="农历日期范围错误，如:0609";
					brithdaytipobj.style.color="red";
					return false;
				}else{
					(document.getElementById("brithday")).style.border="#66FF33 2px solid";
					brithdaytipobj.childNodes[0].nodeValue="ok";
					brithdaytipobj.style.color="#0000FF";
				}
			}
		}	
		

	//年龄验证  -->
		var ageStr=document.getElementById("age").value.trim();
		var agetipobj=document.getElementById("agetip");
		var ageReg=/^\d*$/;
		if(!ageReg.test(ageStr)){
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄格式错误！";
				agetipobj.style.color="red";
				return false;
		}else{
			if(((parseInt(ageStr))<17)||((parseInt(ageStr))>100)){
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄范围错误！";
				agetipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("age")).style.border="#66FF33 2px solid";
				agetipobj.childNodes[0].nodeValue="ok";
				agetipobj.style.color="#0000FF";
			}
		}
// 身份证验证 -->
		var cardStr=document.getElementById("card").value.trim();
		var cardtipobj=document.getElementById("cardtip");
		var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
		if(!cardReg.test(cardStr)){
				(document.getElementById("card")).style.border="red 2px solid";	
				cardtipobj.childNodes[0].nodeValue="身份证号码错误，请输入合法身份证!";
				cardtipobj.style.color="red";
				return false;
		}else{
				(document.getElementById("card")).style.border="#66FF33 2px solid";
				cardtipobj.childNodes[0].nodeValue="ok";
				cardtipobj.style.color="#0000FF";
		}	
		
		
// 所属公司验证 -->
		var getcompselectobj = document.getElementById("comp");
		var getcompselectedvalue = getcompselectobj.options[getcompselectobj.selectedIndex].value;
		var getcompselecttipobj = document.getElementById("comptip");
		if(getcompselectedvalue=="=请选择="||getcompselectedvalue==""||getcompselectedvalue==null){
				getcompselectobj.style.border="red 2px solid";	
				getcompselecttipobj.childNodes[0].nodeValue="未选择所属公司!";
				getcompselecttipobj.style.color="red";
				return false;
		}else{
				getcompselectobj.style.border="#66FF33 2px solid";
				getcompselecttipobj.childNodes[0].nodeValue="ok";
				getcompselecttipobj.style.color="#0000FF";
		}

// 部门验证 -->
		var getdepselectobj = document.getElementById("dep");
		var getdepselectedvalue = getdepselectobj.options[getdepselectobj.selectedIndex].value;
		var getdepselecttipobj = document.getElementById("deptip");
		if(getdepselectedvalue=="=请选择="||getdepselectedvalue==""||getdepselectedvalue==null){
		        getdepselectobj.style.border="red 2px solid";	
				getdepselecttipobj.childNodes[0].nodeValue="未选择部门!";
				getdepselecttipobj.style.color="red";
				return false;
		}else{
				getdepselectobj.style.border="#66FF33 2px solid";
				getdepselecttipobj.childNodes[0].nodeValue="ok";
				getdepselecttipobj.style.color="#0000FF";
		}	

// 职位验证 -->		
		var getpostselectobj = document.getElementById("post");
		var getpostselectedvalue = getpostselectobj.options[getpostselectobj.selectedIndex].value;
		var getpostselecttipobj = document.getElementById("posttip");
		if(getpostselectedvalue=="=请选择="||getpostselectedvalue==""||getpostselectedvalue==null){
				getpostselectobj.style.border="red 2px solid";	
				getpostselecttipobj.childNodes[0].nodeValue="未选择职位!";
				getpostselecttipobj.style.color="red";
				return false;
		}else{
				getpostselectobj.style.border="#66FF33 2px solid";
				getpostselecttipobj.childNodes[0].nodeValue="ok";
				getpostselecttipobj.style.color="#0000FF";
		}
		
		return true;
	}	
		
// 提交时验证-------------------------------------------------------------------------------end -->	
