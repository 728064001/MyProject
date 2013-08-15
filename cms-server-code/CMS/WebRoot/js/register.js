//载入-->
var flag = null;
$(function(){
		//get register button
		$("#regbut").attr({"disabled":true});
		$("#formregister").attr("action","RegisterServlet");
		
//			$("#regbut").click(function(){
//				alert(register());
//			});
			
					
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
				if(qqReg.test(qqStr)){
					ajaxreturn("/CMS/registerQueryQqServlet",$("#qq"),qqtipobj);
				}else{
					$("#qq").css("border-color","red","border-width","2px","border-style","solid");
					qqtipobj.html("QQ号码不正确!");
					qqtipobj.css("color","red");
				}
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
		$("#age").blur(function(){
			var ageStr = $.trim($("#age").val());
			var agetipobj = $("#agetip");
			var ageReg=/^\d*$/;
			if(ageReg.test(ageStr)&&ageStr!=""){
				if(((parseInt(ageStr))>=17)&&((parseInt(ageStr))<=100)){
					$("#age").css("border-color","#0000FF","border-width","2px","border-style","solid");
					agetipobj.html("OK");
					agetipobj.css("color","#0000FF");						
				}else{
					$("#age").css("border-color","red","border-width","2px","border-style","solid");
					agetipobj.html("年龄范围错误！");
					agetipobj.css("color","red");			
				}
			}else{
				$("#age").css("border-color","red","border-width","2px","border-style","solid");
				agetipobj.html("请输入正确的年龄(数字)！");
				agetipobj.css("color","red");	
			}
		});
		
			
			//身份证验证  -->
		$("#card").blur(function(){
			 var cardStr = $.trim($("#card").val());
			 var cardlen = cardStr.length;
			 var cardtipobj = $("#cardtip");
			 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
			 if(cardReg.test(cardStr)){
			    ajaxreturn("/CMS/registerQueryCardServlet",$("#card"),cardtipobj);
				$("#card").css("border-color","#0000FF","border-width","2px","border-style","solid");
				cardtipobj.html("OK");
				cardtipobj.css("color","#0000FF");	 	
			 }else{
				$("#card").css("border-color","red","border-width","2px","border-style","solid");
				cardtipobj.html("身份证号码错误，请输入合法身份证!");
				cardtipobj.css("color","red");		 
			 }
		});
		
		
			//所属公司验证-->
		$("#comp").blur(function(){
			var compselectedval = $("#comp option:checked").text();
			var comtipobj = $("#comptip");
			if(compselectedval!="=请选择=" && compselectedval!=""){
				comtipobj.html("OK");
				comtipobj.css("color","#0000FF");	 			
			}else{
				comtipobj.html("请选择所属公司");
				comtipobj.css("color","red");		
			}
		});
		
			//部门验证-->
		$("#dep").blur(function(){
			var depselectedvalue = $("#dep option:selected").text();
			var deptipobj = $("#deptip");
			if(depselectedvalue!="=请选择=" && depselectedvalue!=""){
				deptipobj.html("OK");
				deptipobj.css("color","#0000FF");	 			
			}else{
				deptipobj.html("请选择部门");
				deptipobj.css("color","red");		
			}
		});
		
			
			//职位验证-->
		$("#post").blur(function(){
			var postselectedvalue = $("#post option:selected").text();
			var posttipobj = $("#posttip");
			if(postselectedvalue!="=请选择=" && postselectedvalue!=""){
				posttipobj.html("OK");
				posttipobj.css("color","#0000FF");	 			
			}else{
				posttipobj.html("请选择职位");
				posttipobj.css("color","red");		
			}
		});
		
		//即时验证----------------------------end--------------------------------------------------------------up-----end  -->

		// checkbox method
		$("#xieyi").change(function(){
			if($("#xieyi").is(":checked")==true){
				$("#regbut").attr({"disabled":false});
			}else{
				$("#regbut").attr({"disabled":true});
			}
		});	
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
	

// 提交时验证 -->
	function register(){
		//验证用户名  -->
	var usernameStr = $.trim($("#username").val());
	var usernamelen = usernameStr.length;
	var usernametipobj = $("#usernametip");
	var reg = /[\u4e00-\u9fa5],{0,}$/;
	if(usernamelen<1||usernamelen>5){
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
			$("#username").css("border-color","#0000FF","border-width","2px","border-style","solid");
			usernametipobj.html("OK");
			usernametipobj.css("color","#0000FF");
		}
	}	

	// 密码验证 -->
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var passwordtipobj = $("#passwordtip");
	if(passwordlen<8||passwordlen>16){
		$("#password").css("border-color","red","border-width","2px","border-style","solid");
		passwordtipobj.html("密码长度为8-16个字符");
		passwordtipobj.css("color","red");
		return false;
	}else{
		$("#password").css("border-color","#0000FF","border-width","2px","border-style","solid");
		passwordtipobj.html("OK");
		passwordtipobj.css("color","#0000FF");
	}

	//重复密码验证  -->
	var passwordStr = $.trim($("#password").val());
	var passwordlen = passwordStr.length;
	var repeatpasswordStr = $.trim($("#repeatpassword").val());
	var repeatpasswordlen = repeatpasswordStr.length;
	var repeatpasswordtipobj = $("#repeatpasswordtip");
	if(repeatpasswordlen==0||repeatpasswordlen!=passwordlen||passwordStr!=repeatpasswordStr){
		$("#repeatpassword").css("border-color","red","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("与前一次输入的密码不匹配!");
		repeatpasswordtipobj.css("color","red");
		return false;
	}else{
		$("#repeatpassword").css("border-color","#0000FF","border-width","2px","border-style","solid");
		repeatpasswordtipobj.html("OK");
		repeatpasswordtipobj.css("color","#0000FF");	
	}
		
		//验证性别
	var getsexradio = $("input:radio[name='sex']");
	var sextipobj = $("#sextip");
//	alert(getsexradio.is(":checked"));
	if(!getsexradio.is(":checked")){
		sextipobj.html("请选择性别！");
		sextipobj.css("color","red");
		return false;
	}else{
		sextipobj.html("OK");
		sextipobj.css("color","#0000FF");	
	}

	//验证电话号码 
	var telStr = $.trim($("#tel").val());
	var tellen = telStr.length;
	var teltipobj = $("#teltip");
	var telReg=/^\d*$/;
	if(tellen<7||tellen>12){
		$("#tel").css("border-color","red","border-width","2px","border-style","solid");
		teltipobj.html("电话号码长度错误!(7-12位)!");
		teltipobj.css("color","red");
		return false;
	}else{
		if(!telReg.test(telStr)){
			$("#tel").css("border-color","red","border-width","2px","border-style","solid");
			teltipobj.html("电话号码格式错误!(请输入合法的号码)!");
			teltipobj.css("color","red");
			return false;
		}else{
//			ajaxreturn("/CMS/registerQueryTelServlet",$("#tel"),teltipobj);
//			alert(flag);
//			if(flag!=true){
//				return false;
//			}
//	
		
				$.ajax({
					url: "/CMS/registerQueryTelServlet",
					type: "POST",
					dataType:'json',
					data: $.trim($("#tel").val()),
					success:function(json) {
						if(json.status=="yes"){
							//set style 
							$("#tel").css("border-color","#0000FF","border-width","2px","border-style","solid");
							teltipobj.html("OK");
							teltipobj.css("color","#0000FF");
						}else{
							$("#tel").css("border-color","red","border-width","2px","border-style","solid");
							teltipobj.html("该号码已经被注册!");
							teltipobj.css("color","red");
							alert("no");
							return false;
						}
					}
				});
		
		}
	}		
	
	//验证QQ  -->
	var qqStr = $.trim($("#qq").val());
	var qqlen = qqStr.length;
	var qqtipobj = $("#qqtip");
	var qqReg=/^\d*$/;
	if(qqlen<4||qqlen>15){
		$("#qq").css("border-color","red","border-width","2px","border-style","solid");
		qqtipobj.html("QQ号码长度不正确!");
		qqtipobj.css("color","red");
		return false;
	}else{
		if(!qqReg.test(qqStr)){
			$("#qq").css("border-color","red","border-width","2px","border-style","solid");
			qqtipobj.html("QQ号码长度不正确!");
			qqtipobj.css("color","red");
			return false;
		}else{
			ajaxreturn("/CMS/registerQueryQqServlet",$("#qq"),qqtipobj);
			if(flag!=true){
				return false;
			}
//		$(function(){
//				$.ajax({
//					url: "/CMS/registerQueryQqServlet",
//					type: "POST",
//					dataType:'json',
//					data: $.trim($("#qq").val()),
//					success:function(json) {
//						if(json.status=="yes"){
//							//set style 
//							$("#qq").css("border-color","#0000FF","border-width","2px","border-style","solid");
//							qqtipobj.html("OK");
//							qqtipobj.css("color","#0000FF");
//						}else{
//							$("#qq").css("border-color","red","border-width","2px","border-style","solid");
//							qqtipobj.html("该号码已经被注册!");
//							qqtipobj.css("color","red");
//							return false;
//						}
//					}
//				});
//			});
		}
	}

	//生日日期验证  -->
	//农历生日 -->
	var brithdayStr = $.trim($("#brithday").val());
	var brithdaylen = brithdayStr.length;
	var brithdaytipobj = $("#brithdaytip");
	var brithdayReg=/^\d*$/;
	if(!brithdayReg.test(brithdayStr)){
		$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
		brithdaytipobj.html("农历日期错误，如:0609");
		brithdaytipobj.css("color","red");
		return  false;
	}else{
		if(brithdaylen!=4){
			$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
			brithdaytipobj.html("农历日期长度错误，如:0609");
			brithdaytipobj.css("color","red");
			return false;
		}else{
			if(((brithdayStr.substring(0,2)<1)||(brithdayStr.substring(0,2)>12))||((brithdayStr.substring(2,4)<1)&&(brithdayStr.substring(2,4)>29))){
				$("#brithday").css("border-color","red","border-width","2px","border-style","solid");
				brithdaytipobj.html("农历日期范围错误，如:0609");
				brithdaytipobj.css("color","red");
				return false;
			}else{
				$("#brithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
				brithdaytipobj.html("OK");
				brithdaytipobj.css("color","#0000FF");	
			}
		}
	}

	//年龄验证  -->
	var ageStr = $.trim($("#age").val());
	var agetipobj = $("#agetip");
	var ageReg=/^\d*$/;
	if(!ageReg.test(ageStr)||ageStr==""){
		$("#age").css("border-color","red","border-width","2px","border-style","solid");
		agetipobj.html("请输入正确的年龄(数字)！");
		agetipobj.css("color","red");
		return false;
	}else{
		if(((parseInt(ageStr))<17)&&((parseInt(ageStr))>100)){
			$("#age").css("border-color","red","border-width","2px","border-style","solid");
			agetipobj.html("年龄范围错误！");
			agetipobj.css("color","red");
			return false;
		}else{
			$("#age").css("border-color","#0000FF","border-width","2px","border-style","solid");
			agetipobj.html("OK");
			agetipobj.css("color","#0000FF");		
		}

	}	


// 身份证验证 -->
	 var cardStr = $.trim($("#card").val());
	 var cardlen = cardStr.length;
	 var cardtipobj = $("#cardtip");
	 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
	 if(!cardReg.test(cardStr)){
	 	$("#card").css("border-color","red","border-width","2px","border-style","solid");
		cardtipobj.html("身份证号码错误，请输入合法身份证!");
		cardtipobj.css("color","red");
		return false;
	 }else{
		ajaxreturn("/CMS/registerQueryCardServlet",$("#card"),cardtipobj);	 
			if(flag!=true){
				return false;
			}
//	 		$(function(){
//				$.ajax({
//					url: "/CMS/registerQueryCardServlet",
//					type: "POST",
//					dataType:'json',
//					data: $.trim($("#card").val()),
//					success:function(json) {
//						if(json.status=="yes"){
//							//set style 
//							$("#card").css("border-color","#0000FF","border-width","2px","border-style","solid");
//							cardtipobj.html("OK");
//							cardtipobj.css("color","#0000FF");
//						}else{
//							$("#card").css("border-color","red","border-width","2px","border-style","solid");
//							cardtipobj.html("该号码已经被注册!");
//							cardtipobj.css("color","red");
//							return false;
//						}
//					}
//				});
//			});
	 }

		
		
// 所属公司验证 -->
	var compselectedval = $("#comp option:checked").text();
	var comtipobj = $("#comptip");
	if(compselectedval=="=请选择=" || compselectedval==""){
		comtipobj.html("请选择所属公司");
		comtipobj.css("color","red");
		return false;
	}else{
		comtipobj.html("OK");
		comtipobj.css("color","#0000FF");
	}



// 部门验证 -->
	var depselectedvalue = $("#dep option:selected").text();
	var deptipobj = $("#deptip");
	if(depselectedvalue=="=请选择=" || depselectedvalue==""){
		deptipobj.html("请选择部门");
		deptipobj.css("color","red");	
		return false;
	}else{
		deptipobj.html("OK");
		deptipobj.css("color","#0000FF");	 
	}

// 职位验证 -->	
	var postselectedvalue = $("#post option:selected").text();
	var posttipobj = $("#posttip");
	if(postselectedvalue=="=请选择=" || postselectedvalue==""){
		posttipobj.html("请选择职位");
		posttipobj.css("color","red");	
		return false;
	}else{
		posttipobj.html("OK");
		posttipobj.css("color","#0000FF");	
	}
	return true;
}	
		
// 提交时验证-------------------------------------------------------------------------------end -->	
