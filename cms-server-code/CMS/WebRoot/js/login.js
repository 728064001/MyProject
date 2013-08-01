//载入时

	$(function(){
		//get form obj
		var loginformobj = $("#formlogin");
		loginformobj.attr("action","LoginServlet");
	});


//即时验证
	//用户名验证
			$("#username").blur(function(){
					//get usernamevalue
					var usernameStr =$.trim( $("#username").val());
 					var usernamelen = usernameStr.length;
					//get usernametipobj
					var usernametipobj =$("#usernametip");
					// 中文正则 -->
					var reg = /[\u4e00-\u9fa5],{0,}$/; 
					if(usernamelen > 1 && usernamelen < 5){
							if(reg.test(usernameStr)){
								$("#username").css("border-color","#66FF33","border-width","2px","border-style","solid");
								usernametipobj.html("OK");
								usernametipobj.css("color","#0000FF");
							}else{	
								alert("ok");
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
		var passwordtipobj = $("#passwordtip");
		var passwordlen = passwordStr.length;
		if(passwordlen>=8 && passwordlen<=16){
				$("#password").css("border-color","66FF33","border-width","2px","border-style","solid");
				passwordtipobj.html("OK");
				passwordtipobj.css("color","#0000FF");
		}else{
				$("#password").css("border-color","red","border-width","2px","border-style","solid");
				passwordtipobj.html("密码长度为8-16个字符");
				passwordtipobj.css("color","red");
		}
		
	});		

	
	//电话号码验证
	$("#tel").blur(function(){
		var telStr = $.trim($("#tel").val());
		var tellen = telStr.length;
		var teltipobj = $("#teltip");
		var telReg=/^\d*$/;
		if(telStr.length>=7&&telStr.length<=12){
			if(telReg.test(telStr)){
				$("#tel").css("border-color","#66FF33","border-width","2px","border-style","solid");
				teltipobj.html("OK");
				teltipobj.css("color","#0000FF")
				
			}else{
				$("#tel").css("border-color","red","border-width","2px","border-style","solid");
				teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
				teltipobj.css("color","red");
			}
		}else{
				$("#tel").css("border-color","red","border-width","2px","border-style","solid");
				teltipobj.html("电话号码长度错误!(7-12位)");
				teltipobj.css("color","red");
		} 
	});
	//登录身份验证
$(":radio").mouseout(function(){
	var getidentityradio = $("input:radio[name='useridentity']");
	var identitytipobj = $("#useridentitytip");
	if(getidentityradio.is(":checked")){
		identitytipobj.html("OK");
		identitytipobj.css("color","#0000FF");			
	}else{
		identitytipobj.html("请选择登录身份！");
		identitytipobj.css("color","red");		
	}
});
	
	
//提交时验证
	function subminting(){
	//用户名验证
	//get usernamevalue
	var usernameStr =$.trim( $("#username").val());
 	var usernamelen = usernameStr.length;
	//get usernametipobj
	var usernametipobj =$("#usernametip");
	// 中文正则 -->
	var reg = /[\u4e00-\u9fa5],{0,}$/; 
		if(usernameStr==null||usernameStr==""||usernamelen<=1||usernamelen>5){
			$("#username").css("border-color","red","border-width","2px","border-style","solid");
			usernametipobj.html("2-4个中文字符");
			usernametipobj.css("color","red");
			return false;			
		}else{
			if(!reg.test(usernameStr)){
				$("#username").css("border-color","red","border-width","2px","border-style","solid");
				usernametipobj.html("请输入中文字符");
				usernametipobj.css("color","red");
				return false;			
			}else{
				$("#username").css("border-color","#66FF33","border-width","2px","border-style","solid");
				usernametipobj.html("OK");
				usernametipobj.css("color","#0000FF");
			}	
		}
	//密码验证
		var passwordStr = $.trim($("#password").val());
		var passwordtipobj = $("#passwordtip");
		var passwordlen = passwordStr.length;
		if(passwordStr==""||passwordStr==null||passwordlen<8||passwordlen>16){
			$("#password").css("border-color","red","border-width","2px","border-style","solid");
			passwordtipobj.html("密码长度为8-16个字符");
			passwordtipobj.css("color","red");
			return false;
		
		}else{
			$("#password").css("border-color","#0000FF","border-width","2px","border-style","solid");
			passwordtipobj.html("OK");
			passwordtipobj.css("color","#0000FF");
		}	
		
	//电话号码验证
		var telStr = $.trim($("#tel").val());
		var tellen = telStr.length;
		var teltipobj = $("#teltip");
		var telReg=/^\d*$/;
		if(tellen<7||tellen>12){
			$("#tel").css("border-color","red","border-width","2px","border-style","solid");
			teltipobj.html("电话号码长度错误!(7-12位)");
			teltipobj.css("color","red");
			return false;
		}else{
			if(!telReg.test(telStr)){
				$("#tel").css("border-color","red","border-width","2px","border-style","solid");
				teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
				teltipobj.css("color","red");
				return false;
			}else{
				$("#tel").css("border-color","#0000FF","border-width","2px","border-style","solid");
				teltipobj.html("OK");
				teltipobj.css("color","#0000FF");
			}
		} 	
		
		//身份验证
	var getidentityradio = $("input:radio[name='useridentity']");
	var identitytipobj = $("#useridentitytip");
	if(!getidentityradio.is(":checked")){
		identitytipobj.html("请选择登录身份！");
		identitytipobj.css("color","red");	
		return false;
	}else{
		identitytipobj.html("OK");
		identitytipobj.css("color","#0000FF");		
	}
		
	return true;
	}