/////////////////////////////////////////////////修改人员信息/////////////////////////////////////////////////////////////////////////		
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
			alert("ok");
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
			if(updatatellen>=7&&updatatellen<=12){
				if(telReg.test(updatatelStr)){
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
	});
		
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

		
		//根据双击人员信息表得到的UUID查询人员信息,这样做的目地是为了防止操作时该UUID对应的人员已经不存在，所以
		//要再通过一次查询数据库来确认。
//		function uuidqueryinfo(uuid){
//			$(function(){
//				$.ajax({
//					url: args,
//					type: "POST",
//					dataType:'json',
//					success:function(pinfo) {
//						alert();
//					}
//				});
//			});
//		}
		

/////////////////////////////////////////////////修改人员信息/////////////////////////////////////////////////////////////////////////				
		
		