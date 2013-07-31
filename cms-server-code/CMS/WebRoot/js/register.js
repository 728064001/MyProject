//载入-->
	var flag = true;
	$(function(){
		//get register button
		$("#regbut").attr({"disabled":true});
//		ajaxreturn("/CMS/registerQueryTelServlet","15815523495");
	});

// checkbox method
	$("#xieyi").change(function(){
		if($("#xieyi").is(":checked")==true){
			$("#regbut").attr({"disabled":false});
		}else{
			$("#regbut").attr({"disabled":true});
		}
	});
	
//ajax return 
function ajaxreturn(urlstr,obj,objtip){
		$(function(){
			$.ajax({
				url: urlstr,
				type: "POST",
				dataType:'json',
				data: $.trim(obj.val()),
				success:function(json) {
					if(json.status=="yes"){
						//set style 
						obj.css("border-color","#0000FF","border-width","2px","border-style","solid");
						objtip.html("OK");
						objtip.css("color","#0000FF");
						flag = true;
					}else{
						obj.css("border-color","red","border-width","2px","border-style","solid");
						objtip.html("该号码已经被注册!");
						objtip.css("color","red");
						flag = false;
					}
				}
			});
		});
}

	
	
	
//即时验证  -->
// 用户名验证 -->
$("#username").blur(function(){
	var usernameStr = $.trim($("#username").val());
	var usernamelen = usernameStr.length;
	var usernametipobj = $("#usernametip");
	var reg = /[\u4e00-\u9fa5],{0,}$/;
	if(usernamelen>1&&usernamelen<5){
		if(reg.test(usernameStr)){
			$("#username").css("border-color","#0000FF","border-width","2px","border-style","solid");
			usernametipobj.html("OK");
			usernametipobj.css("color","#0000FF");
		}else{
			$("#username").css("border-color","red","border-width","2px","border-style","solid");
			usernametipobj.html("请输入中文字符");
			usernametipobj.css("color","red");
		}
	}else{
		$("#username").css("border-color","red","border-width","2px","border-style","solid");
		usernametipobj.html("2-4个中文字符");
		usernametipobj.css("color","red");
	}
});

// 密码验证 -->
$("#password").blur(function(){
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var passwordtipobj = $("#passwordtip");
	if(passwordlen>=8&&passwordlen<=16){
		$("#password").css("border-color","#0000FF","border-width","2px","border-style","solid");
		passwordtipobj.html("OK");
		passwordtipobj.css("color","#0000FF");
	}else{
		$("#password").css("border-color","red","border-width","2px","border-style","solid");
		passwordtipobj.html("密码长度为8-16个字符");
		passwordtipobj.css("color","red");	
	}
});

// 重复密码验证 -->
$("#repeatpassword").blur(function(){
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var repeatpasswordStr = $.trim($("#repeatpassword").val());
	var repeatpasswordlen = repeatpasswordStr.length;
	var repeatpasswordtipobj = $("#repeatpasswordtip");
	if(repeatpasswordlen!=0&&repeatpasswordlen==passwordlen&&passwordStr==repeatpasswordStr){
		$("#repeatpassword").css("border-color","#0000FF","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("OK");
		repeatpasswordtipobj.css("color","#0000FF");	
	}else{
		$("#repeatpassword").css("border-color","red","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("与前一次输入的密码不匹配!");
		repeatpasswordtipobj.css("color","red");		
	}
});

//验证性别
$(":radio").mouseout(function(){
	var getsexradio = $("input:radio[name='sex']");
	var sextipobj = $("#sextip");
//	alert(getsexradio.is(":checked"));
	if(getsexradio.is(":checked")){
		sextipobj.html("OK");
		sextipobj.css("color","#0000FF");			
	}else{
		sextipobj.html("请选择性别！");
		sextipobj.css("color","red");		
	}
});
	
// 验证电话号码 -->
$("#tel").blur(function(){
	var telStr = $.trim($("#tel").val());
	var tellen = telStr.length;
	var teltipobj = $("#teltip");
	var telReg=/^\d*$/;
	if(tellen>=7&&tellen<=12){
		if(telReg.test(telStr)){
			ajaxreturn("/CMS/registerQueryTelServlet",$("#tel"),teltipobj);
			$("#tel").css("border-color","#0000FF","border-width","2px","border-style","solid");
			teltipobj.html("OK");
			teltipobj.css("color","#0000FF");				
		}else{
			$("#tel").css("border-color","red","border-width","2px","border-style","solid");
			teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
			teltipobj.css("color","red");			
		}
	}else{
		$("#tel").css("border-color","red","border-width","2px","border-style","solid");
		teltipobj.html("电话号码长度错误!(7-12位)!");
		teltipobj.css("color","red");				
	}
});
	
// 验证QQ -->
$("#qq").blur(function(){
	var qqStr = $.trim($("#qq").val());
	var qqlen = qqStr.length;
	var qqtipobj = $("#qqtip");
	var qqReg=/^\d*$/;
	if(qqlen>=4&&qqlen<=15){
		ajaxreturn("/CMS/registerQueryQqServlet",$("#qq"),qqtipobj);
		$("#qq").css("border-color","#0000FF","border-width","2px","border-style","solid");
		qqtipobj.html("OK");
		qqtipobj.css("color","#0000FF");
	}else{
		$("#qq").css("border-color","red","border-width","2px","border-style","solid");
		qqtipobj.html("QQ号码长度不正确!");
		qqtipobj.css("color","red");
	}
});
	
//农历生日 -->
$("#brithday").blur(function(){
	var brithdayStr = $.trim($("#brithday").val());
	var brithdaylen = brithdayStr.length;
	var brithdaytipobj = $("#brithdaytip");
	var brithdayReg=/^\d*$/;
	if(brithdayReg.test(brithdayStr)){
		if(brithdaylen==4){
			if(((brithdayStr.substring(0,2)>0)&&(brithdayStr.substring(0,2)<=12))&&((brithdayStr.substring(2,4)>0)&&(brithdayStr.substring(2,4)<=29))){
				$("#brithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
				brithdaytipobj.html("OK");
				brithdaytipobj.css("color","#0000FF");			
			}else{
				$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
				brithdaytipobj.html("农历日期范围错误，如:0609");
				brithdaytipobj.css("color","red");	
			}
		}else{
			$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
			brithdaytipobj.html("农历日期长度错误，如:0609");
			brithdaytipobj.css("color","red");				
		}
	}else{
		$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
		brithdaytipobj.html("农历日期错误，如:0609");
		brithdaytipobj.css("color","red");			
	}
});
	
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
			ajaxreturn("/CMS/registerQueryCardServlet",document.getElementById("card"),cardtipobj);
				alert("ok");
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
	var args=null;
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
		
		//验证性别
			var getsexradio = document.getElementsByName("sex");
		var sextipobj = document.getElementById("sextip");
		if(!getsexradio[0].checked&&!getsexradio[1].checked){
				sextipobj.childNodes[0].nodeValue="请选择性别";
				sextipobj.style.color="red";
				return false
		}else{
				sextipobj.childNodes[0].nodeValue="ok";
				sextipobj.style.color="#0000FF";
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
		//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
			ajaxreturn("/CMS/registerQueryTelServlet",document.getElementById("tel"),teltipobj);
			if(flag == false){
				return false
			}
		//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$		
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
				ajaxreturn("/CMS/registerQueryQqServlet",document.getElementById("qq"),qqtipobj);
				if(flag!=true){
					return false;
				}
				
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
				ajaxreturn("/CMS/registerQueryCardServlet",document.getElementById("card"),cardtipobj);
				if(flag==false){
					return false;
				}
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
