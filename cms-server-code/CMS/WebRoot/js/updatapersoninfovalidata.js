/////////////////////////////////////////////////修改人员信息/////////////////////////////////////////////////////////////////////////		
var fla = null;
$(function(){
			//DOM Loading hidden DIV---------------start----------------------
			//1.dom载入后隐藏"修改人员信息div"
			$("#modifiypersoninfo").hide();
			//DOM Loading hidden DIV-----------------end-----------------------
			
			//DOM载入时 修改人员信息 面板中的 删除当前人员按钮 为不可用状态
			$("#deletepersoninfo").attr({"disabled":true});
			
			$("#closeModifiyPersonInfo").click(function(){
				$("#modifiypersoninfo").hide(); //点击关闭按钮时，隐藏修改人员信息窗口；
			});
			
			//删除人员的按钮默认是不可用的，选中左侧的复选框按钮后删除按钮变为可用
			$("#yesdel").change(function(){
				if($("#yesdel").is(":checked")==true){
					$("#deletepersoninfo").attr({"disabled":false});
				}else{
					$("#deletepersoninfo").attr({"disabled":true});
				}
			});
			
		//修改人员信息的验证
		// 用户名验证 -->
		$("#updatausername").blur(function(){
			var updatausernameStr = $.trim($("#updatausername").val());
			var updatausernamelen = updatausernameStr.length;
			var updatausernametipobj = $("#updatausernametip");
			var reg = /[\u4e00-\u9fa5],{0,}$/;
			if(updatausernamelen>1&&updatausernamelen<5){
				if(reg.test(updatausernameStr)){
					$("#updatausername").css("border-color","#0000FF","border-width","2px","border-style","solid");
					updatausernametipobj.html("OK");
					updatausernametipobj.css("color","#0000FF");
				}else{
					$("#updatausername").css("border-color","red","border-width","2px","border-style","solid");
					updatausernametipobj.html("请输入中文字符");
					updatausernametipobj.css("color","red");
				}
			}else{
				$("#updatausername").css("border-color","red","border-width","2px","border-style","solid");
				updatausernametipobj.html("2-4个中文字符");
				updatausernametipobj.css("color","red");
			}
		});
		//年龄验证  -->
		$("#updataage").blur(function(){
			var updataageStr = $.trim($("#updataage").val());
			var updataagetipobj = $("#updataagetip");
			var ageReg=/^\d*$/;
			if(ageReg.test(updataageStr)&&updataageStr!=""){
				if(((parseInt(updataageStr))>=17)&&((parseInt(updataageStr))<=100)){
					$("#updataage").css("border-color","#0000FF","border-width","2px","border-style","solid");
					updataagetipobj.html("OK");
					updataagetipobj.css("color","#0000FF");						
				}else{
					$("#updataage").css("border-color","red","border-width","2px","border-style","solid");
					updataagetipobj.html("年龄范围错误！");
					updataagetipobj.css("color","red");			
				}
			}else{
				$("#updataage").css("border-color","red","border-width","2px","border-style","solid");
				updataagetipobj.html("请输入正确的年龄(数字)！");
				updataagetipobj.css("color","red");	
			}
		});
		// 验证电话号码 -->
		$("#updatatel").blur(function(){
			var updatatelStr = $.trim($("#updatatel").val());
			var updatatellen = updatatelStr.length;
			var updatateltipobj = $("#updatateltip");
			var telReg=/^\d*$/;
			var servlettelStr = "/CMS/UpdataPersonInfoQueryTelServlet?"+"&uuid="+personId+"&tel="+updatatelStr;
			if(updatatellen>=7&&updatatellen<=12){
				if(telReg.test(updatatelStr)){
					updataajaxreturn(servlettelStr,$("#updatatel"),updatateltipobj);
					$("#updatatel").css("border-color","#0000FF","border-width","2px","border-style","solid");
					updatateltipobj.html("OK");
					updatateltipobj.css("color","#0000FF");				
				}else{
					$("#updatatel").css("border-color","red","border-width","2px","border-style","solid");
					updatateltipobj.html("电话号码格式错误!(请输入合法的号码)!");
					updatateltipobj.css("color","red");			
				}
			}else{
				$("#updatatel").css("border-color","red","border-width","2px","border-style","solid");
				updatateltipobj.html("电话号码长度错误!(7-12位)!");
				updatateltipobj.css("color","red");				
			}
		});
		// 验证QQ -->
		$("#updataqq").blur(function(){
			var updataqqStr = $.trim($("#updataqq").val());
			var updataqqlen = updataqqStr.length;
			var updataqqtipobj = $("#updataqqtip");
			var qqReg=/^\d*$/;
			var servlstqueryQqStr = "UpdataPersonInfoQueryQqServlet?"+"&uuid="+personId+"&qq="+updataqqStr;
			if(updataqqlen>=4&&updataqqlen<=15){
				updataajaxreturn(servlstqueryQqStr,$("#updataqq"),updataqqtipobj);
				$("#updataqq").css("border-color","#0000FF","border-width","2px","border-style","solid");
				updataqqtipobj.html("OK");
				updataqqtipobj.css("color","#0000FF");
			}else{
				$("#updataqq").css("border-color","red","border-width","2px","border-style","solid");
				updataqqtipobj.html("QQ号码长度不正确!");
				updataqqtipobj.css("color","red");
			}
		});
		//农历生日 -->
		$("#updatabrithday").blur(function(){
			var updatabrithdayStr = $.trim($("#updatabrithday").val());
			var updatabrithdaylen = updatabrithdayStr.length;
			var updatabrithdaytipobj = $("#updatabrithdaytip");
			var brithdayReg=/^\d*$/;
			if(brithdayReg.test(updatabrithdayStr)){
				if(updatabrithdaylen==4){
					if(((updatabrithdayStr.substring(0,2)>0)&&(updatabrithdayStr.substring(0,2)<=12))&&((updatabrithdayStr.substring(2,4)>0)&&(updatabrithdayStr.substring(2,4)<=29))){
						$("#updatabrithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
						updatabrithdaytipobj.html("OK");
						updatabrithdaytipobj.css("color","#0000FF");			
					}else{
						$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
						updatabrithdaytipobj.html("农历日期范围错误，如:0609");
						updatabrithdaytipobj.css("color","red");	
					}
				}else{
					$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
					updatabrithdaytipobj.html("农历日期长度错误，如:0609");
					updatabrithdaytipobj.css("color","red");				
				}
			}else{
				$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
				updatabrithdaytipobj.html("农历日期错误，如:0609");
				updatabrithdaytipobj.css("color","red");			
			}
		});
		
			//身份证验证  -->
		$("#updatacard").blur(function(){
			 var updatacardStr = $.trim($("#updatacard").val());
			 var updatacardlen = updatacardStr.length;
			 var updatacardtipobj = $("#updatacardtip");
			 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
			 var servletcardstr = "UpdataPersonInfoQueryCardServlet?"+"&uuid="+personId+"&card="+updatacardStr;
			 if(cardReg.test(updatacardStr)){
			    updataajaxreturn(servletcardstr,$("#updatacard"),updatacardtipobj);
				$("#updatacard").css("border-color","#0000FF","border-width","2px","border-style","solid");
				updatacardtipobj.html("OK");
				updatacardtipobj.css("color","#0000FF");	 	
			 }else{
				$("#updatacard").css("border-color","red","border-width","2px","border-style","solid");
				updatacardtipobj.html("身份证号码错误，请输入合法身份证!");
				updatacardtipobj.css("color","red");		 
			 }
		});
		
		//点击确认修改时 调用mpsubmitvalidata方法
		$("#updatapersoninfo").click(function(){mpsubmitvalidata();});
		
	});
	
	
	//ajax return 
function updataajaxreturn(urlstr,obj,objtip){
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
						fla = true;
					}else{
						obj.css("border-color","red","border-width","2px","border-style","solid");
						objtip.html("该号码已经被注册!");
						objtip.css("color","red");
						fla = false;
					}
				}
			});
		});
}
		//修改人员信息窗口打开时，通过ajax返回公司部门职位json信息
		function mpopenjsoncdp(){
			$(function(){
				$.ajax({
					url: "/CMS/returnCDPServlet?args=09s",
					type: "POST",
					dataType:'json',
					success:function(cdpinfo) {
//						alert(cdpinfo.company[0].name);
						viwempcdp(cdpinfo);
					}
				});
			});
		}
		//将ajax返回的公司部门职位等信息显示在相应的下拉列表中
		function viwempcdp(cdpinfo){
			//别忘记了，这里要做一些判断哦
			//1.把从 人员信息表中取到的数据 加入 修改人员信息
			$("#updatausername").prop("value", personUsername);
			$("#updataage").prop("value", personAge);
			if(personSex=="男"){
				$("input:radio[name='updatasex'][value='男']").prop("checked",true);
			}else if(personSex=="女"){
				$("input:radio[name='updatasex'][value='女']").prop("checked",true);
			}
			$("#updatatel").prop("value",personTel);
			$("#updataqq").prop("value",personQq);
			$("#updatabrithday").prop("value",personBri);
			$("#updatacard").prop("value",personCard);
			
			$("#updatacomp").empty();
			for(var i = 0;i<cdpinfo.company.length;i++){
				$("#updatacomp").append("<option value="+"'"+cdpinfo.company[i].name+"'"+">"+cdpinfo.company[i].name+"</option>");
				if($("#updatacomp option:eq("+i+")").val()==personComp){
					$("#updatacomp option:eq("+i+")").prop("selected","selected");
				}
			}
//			alert($("#updatacomp").find("option").length);//获取option长度
			
			$("#updatadep").empty();
			for(var i = 0;i<cdpinfo.dep.length;i++){
				$("#updatadep").append("<option value="+"'"+cdpinfo.dep[i].name+"'"+">"+cdpinfo.dep[i].name+"</option>");
				if($("#updatadep option:eq("+i+")").val()==personDep){
					$("#updatadep option:eq("+i+")").prop("selected","selected");
				}
			}
			
			$("#updatapost").empty();
			for(var i = 0;i<cdpinfo.post.length;i++){
				$("#updatapost").append("<option value="+"'"+cdpinfo.post[i].name+"'"+">"+cdpinfo.post[i].name+"</option>");
				if($("#updatapost option:eq("+i+")").val()==personPost){
					$("#updatapost option:eq("+i+")").prop("selected","selected");
				}
			}
			
		}
		
		//提交时验证

		function mpsubmitvalidata(){
			var updatausernameStr = $.trim($("#updatausername").val());
			var updatausernamelen = updatausernameStr.length;
			var updatausernametipobj = $("#updatausernametip");
			var reg = /[\u4e00-\u9fa5],{0,}$/;
			if(updatausernamelen<1||updatausernamelen>5){
				$("#updatausername").css("border-color","red","border-width","2px","border-style","solid");
				updatausernametipobj.html("2-4个中文字符");
				updatausernametipobj.css("color","red");
				return false;
					
			}else{
				if(!reg.test(updatausernameStr)){
					$("#updatausername").css("border-color","red","border-width","2px","border-style","solid");
					updatausernametipobj.html("请输入中文字符");
					updatausernametipobj.css("color","red");
					return false;
				}else{
					$("#updatausername").css("border-color","#0000FF","border-width","2px","border-style","solid");
					updatausernametipobj.html("OK");
					updatausernametipobj.css("color","#0000FF");
				}
			}
		
			var updataageStr = $.trim($("#updataage").val());
			var updataagetipobj = $("#updataagetip");
			var ageReg=/^\d*$/;
			if(!ageReg.test(updataageStr)||updataageStr==""){
				$("#updataage").css("border-color","red","border-width","2px","border-style","solid");
				updataagetipobj.html("请输入正确的年龄(数字)！");
				updataagetipobj.css("color","red");	
				return false;
			}else{
				if(((parseInt(updataageStr))<17)||((parseInt(updataageStr))>100)){
					$("#updataage").css("border-color","red","border-width","2px","border-style","solid");
					updataagetipobj.html("年龄范围错误！");
					updataagetipobj.css("color","red");	
					return false;
				}else{
					$("#updataage").css("border-color","#0000FF","border-width","2px","border-style","solid");
					updataagetipobj.html("OK");
					updataagetipobj.css("color","#0000FF");		
				}
			}
			
			
			var updatatelStr = $.trim($("#updatatel").val());
			var updatatellen = updatatelStr.length;
			var updatateltipobj = $("#updatateltip");
			var telReg=/^\d*$/;
			var servlettelStr = "/CMS/UpdataPersonInfoQueryTelServlet?"+"&uuid="+personId+"&tel="+updatatelStr;
			if(updatatellen<7||updatatellen>12){
				$("#updatatel").css("border-color","red","border-width","2px","border-style","solid");
				updatateltipobj.html("电话号码长度错误!(7-12位)!");
				updatateltipobj.css("color","red");		
				return false;

			}else{
				if(!telReg.test(updatatelStr)){
					$("#updatatel").css("border-color","red","border-width","2px","border-style","solid");
					updatateltipobj.html("电话号码格式错误!(请输入合法的号码)!");
					updatateltipobj.css("color","red");		
					return false;
				}else{
					updataajaxreturn(servlettelStr,$("#updatatel"),updatateltipobj);
					if(fla==false){return false;}
				}		
			}
			
			var updataqqStr = $.trim($("#updataqq").val());
			var updataqqlen = updataqqStr.length;
			var updataqqtipobj = $("#updataqqtip");
			var qqReg=/^\d*$/;
			var servlstqueryQqStr = "UpdataPersonInfoQueryQqServlet?"+"&uuid="+personId+"&qq="+updataqqStr;
			if(updataqqlen<4||updataqqlen>15){
				$("#updataqq").css("border-color","red","border-width","2px","border-style","solid");
				updataqqtipobj.html("QQ号码长度不正确!");
				updataqqtipobj.css("color","red");
				return false;
			}else{
				updataajaxreturn(servlstqueryQqStr,$("#updataqq"),updataqqtipobj);
				if(fla==false){return false;}
			}	
		
			var updatabrithdayStr = $.trim($("#updatabrithday").val());
			var updatabrithdaylen = updatabrithdayStr.length;
			var updatabrithdaytipobj = $("#updatabrithdaytip");
			var brithdayReg=/^\d*$/;
			if(!brithdayReg.test(updatabrithdayStr)){
				$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
				updatabrithdaytipobj.html("农历日期错误，如:0609");
				updatabrithdaytipobj.css("color","red");		
				return false;
			}else{
				if(updatabrithdaylen!=4){
					$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
					updatabrithdaytipobj.html("农历日期长度错误，如:0609");
					updatabrithdaytipobj.css("color","red");	
					return false;
				}else{
					if(((updatabrithdayStr.substring(0,2)<0)||(updatabrithdayStr.substring(0,2)>12))||((updatabrithdayStr.substring(2,4)<0)&&(updatabrithdayStr.substring(2,4)>29))){
						$("#updatabrithday").css("border-color","red","border-width","2px","border-style","solid");
						updatabrithdaytipobj.html("农历日期范围错误，如:0609");
						updatabrithdaytipobj.css("color","red");	
						return false;
					}else{
						$("#updatabrithday").css("border-color","#0000FF","border-width","2px","border-style","solid");
						updatabrithdaytipobj.html("OK");
						updatabrithdaytipobj.css("color","#0000FF");	
					}			
				}	
			}
			
			var updatacardStr = $.trim($("#updatacard").val());
			 var updatacardlen = updatacardStr.length;
			 var updatacardtipobj = $("#updatacardtip");
			 var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
			 var servletcardstr = "UpdataPersonInfoQueryCardServlet?"+"&uuid="+personId+"&card="+updatacardStr;
			 if(!cardReg.test(updatacardStr)){
			 	$("#updatacard").css("border-color","red","border-width","2px","border-style","solid");
				updatacardtipobj.html("身份证号码错误，请输入合法身份证!");
				updatacardtipobj.css("color","red");	
				return false;
			 }else{
				updataajaxreturn(servletcardstr,$("#updatacard"),updatacardtipobj);
				if(fla==false){return false;}
			 }	
			infoupdata();
		}
		//判断fla的值确定是否ajax提交修改信息
		function infoupdata(){
			if(mpsubmitvalidata!=null&&mpsubmitvalidata!=false){
				if(valueyesnomodifiy()){
					alert("数据提交");
					var args = "/CMS/UpdataPersonInfoServlet?"+"&uuid="+personId+"&username="+$.trim($("#updatausername").val())+"&sex="+$("input:radio[name='updatasex']").filter(':checked').val()+"&age="+$.trim($("#updataage").val())+"&tel="+$.trim($("#updatatel").val())+"&qq="+$.trim($("#updataqq").val())+"&brithday="+$.trim($("#updatabrithday").val())+"&card="+$.trim($("#updatacard").val())+"&company="+$("#updatacomp option:selected").text()+"&dep="+$("#updatadep option:selected").text()+"&post="+$("#updatapost option:selected").text();
					updatapersoninfo(args);
				}else{
					alert("数据末修改，提交无效！");
				}
			}else{
				alert("no");
			}
		}
		//提交修改之前判断信息是否修改过
		function valueyesnomodifiy(){
			if($.trim($("#updatausername").val())!=personUsername || $.trim($("#updataage").val())!=personAge || $("input:radio[name='updatasex']").filter(':checked').val()!=personSex||$.trim($("#updatatel").val())!=personTel||$.trim($("#updataqq").val())!=personQq||$.trim($("#updatabrithday").val())!=personBri||$.trim($("#updatacard").val())!=personCard||$("#updatacomp option:selected").text()!=personComp||$("#updatadep option:selected").text()!=personDep||$("#updatapost option:selected").text()!=personPost){
			return true;
			}else{
			return false;
			}
		}
	
		function updatapersoninfo(args){
			$(function(){
				$.ajax({
					url: args,
					type: "POST",
					dataType:'json',
					success:function(pinfo) {
//						alert(pinfo.status);
						if(pinfo.status=="yes"){
							personsearch();
							$("#modifiypersoninfo").hide();
						}
					}
				});
			});
		}
		

/////////////////////////////////////////////////修改人员信息/////////////////////////////////////////////////////////////////////////				
		
		