//Loading--------------start--------------
$(function(){
		//Personnel information Paging button style----start---------------
		$("#mainpa").css("background","#DFDFDF");
		$("#uppa").css("background","#DFDFDF");
		$("#downpa").css("background","#DFDFDF");
		//Personnel information Paging button style---------end-------------
	
	//DOM载入之后调用returnCDP()方法;
	returnCDP();
	
	//DOM载入之后调用人员信息查询方法
	personsearch();
	
	$("#personinfo_close_image").click(function(){
		$("#personinfo").hide(); //点击关闭按钮时，隐藏人员信息窗口
		$("#modifiypersoninfo").hide();//同时也隐藏修改人员信息窗口
	});	


	//点击查询是的事件
		
			$("#search").click(
				function(){
					nowpage=1;
					personsearch();
				}
			);		
//人员信息分页按钮相关的事件---------------------start-----------------------------
	$("#mainpa").click(function(){
		//首页按钮事件
		nowpage = 1;//设置当前页为第一页
		
		personsearch();
	});
	$("#uppa").click(function(){
		//上一页按钮事件
		nowpage-=1;
		
		if(nowpage<1){
			nowpage = 1;
		}
		personsearch();
	});	
	$("#downpa").click(function(){
		//下一页按钮事件
		nowpage+=1;
		personsearch();
	});
	$("#lastpa").click(function(){
		nowpage=p;
		personsearch();
	});
//人员信息分页按钮相关的事件-------------end-------------------------
});
//Loading--------------end---------------------------------------------
//Related variables-----------------------start------------------------ 
	var nowpage=1;//当前页
	var eachpw=0;//每页显示行数
	var p = 0;//最后一页
////Related variables-----------------------end------------------------ 
////Obtained from the servlet client company, department, position of a group of JSON, and then call the method places the data into the corresponding-------------------------start-----------------------------
function returnCDP(){
		$(function(){
			$.ajax({
				url: "/CMS/returnCDPServlet?args=09s",
				type: "POST",
				dataType:'json',
				success:function(json) {
					viwedata(json);
				}
			});
		});
}
//Obtained from the servlet client company, department, position of a group of JSON, and then call the method places the data into the corresponding-------------------------end-----------------------------
function viwedata(json){
	var compnamelen = json.company.length;
	var depnamelen = json.dep.length;
	var postnamelen = json.post.length;
	var compobj = $("#comp");
	var depobj = $("#dep");
	var postobj = $("#post");
	for(var i=0;i<compnamelen;i++){
		compobj.append("<option value="+"'"+json.company[i].name+"'"+">"+json.company[i].name+"</option>");
	}
	for(var i=0;i<depnamelen;i++){
		depobj.append("<option value="+"'"+json.dep[i].name+"'"+">"+json.dep[i].name+"</option>");
	}
	for(var i=0;i<postnamelen;i++){
		postobj.append("<option value="+"'"+json.post[i].name+"'"+">"+json.post[i].name+"</option>");
	}
}
//从servlet端获取人员信息JSON数据
function returnPERSONinfo(args){
//	alert(args);
		$(function(){
			$.ajax({
				url: args,
				type: "POST",
				dataType:'json',
				success:function(json) {
					p = json.vpages;
					createtable(json);
				}
			});
		});
}
		    var personId = "";
		    var personUsername = "";
		    var personSex = "";
		    var personTel = "";
		    var personQq = "";
		    var personBri = "";
		    var personAge = "";
		    var personCard = "";
		    var personComp = "";
		    var personDep = "";
		    var personPost = "";
function createtable(json){

			//先判断DIV中是否有子元素
			if(json.personinfo.length>0){
			if($("#personinfotable").children()){
				$("#personinfotable *").remove();
			}
			var dom_table = $("<table></table>");
			dom_table.attr("border","1px");
			dom_table.attr("cellspacing","0px");
			dom_table.attr("id","tab");
			dom_table.css("border-color","#F0F0F0","border-width","1px","border-style","solid");
			
			var tharray  = new Array("UUID","姓名","性别","电话","QQ","生日","年龄","身份证","公司","部门","职位"); 
			var tharraylen = tharray.length; 
			var tr_th = $("<tr></tr>");
			tr_th.css("background","#DFDFDF");
			for(var x = 0;x<tharraylen;x++){
				var th = $("<th></th>");
				th.append(tharray[x]);
				tr_th.append(th);
			}
		    dom_table.append(tr_th); 
		   
		   
		    for (var o = 0; o < json.personinfo.length; o++) { 
		       var dom_tr = $("<tr class='cl'></tr>"); 
		        for (var i = 0; i < tharraylen; i++) { 
		            var dom_td = $("<td ></td>"); 
		           var cellarray = Array(json.personinfo[o].uuid,json.personinfo[o].username,json.personinfo[o].sex,json.personinfo[o].tel,json.personinfo[o].icq,json.personinfo[o].brithday,json.personinfo[o].age,json.personinfo[o].card,json.personinfo[o].company,json.personinfo[o].dep,json.personinfo[o].post);

		            dom_td.append(cellarray[i]);
		            dom_tr.append(dom_td); 
		        } 
		        dom_table.append(dom_tr); 
		    } 
		    $("#personinfotable").append(dom_table);
		    
			$(".cl").dblclick(function(){
				//单击每一行的时候，分别取到从第一列到最后一列的值
				personId = $(this).children('td').eq(0).html();
				personUsername = $(this).children('td').eq(1).html();
				personSex = $(this).children('td').eq(2).html();
				personTel = $(this).children('td').eq(3).html();
				personQq = $(this).children('td').eq(4).html();
				personBri = $(this).children('td').eq(5).html();
				personAge = $(this).children('td').eq(6).html();
				personCard = $(this).children('td').eq(7).html();
				personComp = $(this).children('td').eq(8).html();
				personDep = $(this).children('td').eq(9).html();
				personPost = $(this).children('td').eq(10).html();
				$("#modifiypersoninfo").show();
				// 修改人员信息窗口打开之后调用方法用于加载数据
				mpopenjsoncdp();
			});
		   //为行添加鼠标移动上去的样式
			$(".cl").mousemove(function(){
				$(this).css("background","#C0C0C0");
				
			});
		   $(".cl").mouseout(function(){
		   		$(this).css("background","#FAFAFA");
		   });
		   
		   $(".cl:odd").css("background","#DFDFDF");
		    //添加分页栏状态
		   $("#dqpages").html(nowpage);
		   $("#zpages").html(json.vpages+"页");
		   $("#countrow").html("共"+json.courows+"条数据");
			
		   // 分页按钮的样式
		   $("#mainpa").css("background","#DFDFDF");
		   $("#mainpa").mousemove(function(){
			$("#mainpa").css("background","#5F5F5F");
			});
			 $("#mainpa").mouseout(function(){
			$("#mainpa").css("background","#DFDFDF");
			});
			
		   $("#uppa").css("background","#DFDFDF");
		   $("#uppa").mousemove(function(){
			$("#uppa").css("background","#5F5F5F");
			});
			 $("#uppa").mouseout(function(){
			$("#uppa").css("background","#DFDFDF");
			});
			
		   $("#downpa").css("background","#DFDFDF");
		   $("#downpa").mousemove(function(){
			$("#downpa").css("background","#5F5F5F");
			});
			 $("#downpa").mouseout(function(){
			$("#downpa").css("background","#DFDFDF");
			});		   
			
		   $("#lastpa").css("background","#DFDFDF");
		   $("#lastpa").mousemove(function(){
			$("#lastpa").css("background","#5F5F5F");
			});
			 $("#lastpa").mouseout(function(){
			$("#lastpa").css("background","#DFDFDF");
			});		
			
				//当前页为1时，上一页按钮不可用
				if(nowpage==1){
					$("#uppa").hide();
				}else{
					$("#uppa").show();
				}
				if(nowpage>1){
				$("#uppa").show();
				}else{
				$("#uppa").hide();
				}
				//当前页等于总页数时，下一页按钮不可用
				if(nowpage==json.vpages){
					nowpage=json.vpages
					$("#downpa").hide();
				}else{
					$("#downpa").show();
				}
				
	}else{
		if($("#personinfotable").children()){
				$("#personinfotable *").remove();
				
				var nulldatatip = $("<span id='nulldatatip'></span>").append("OH! 木有查找到您要的数据哦。");
				$("#personinfotable").append(nulldatatip);
			}

	}	   
}
function personsearch(){
		var form_uuid = $("#quuid").val();
		var form_username = $("#qusername").val();
		var form_sex = $("#qsex option:selected").text();
		var form_comp = $("#qcomp option:selected").text();
		var form_dep = $("#qdep option:selected").text();
		var form_post = $("#qpost option:selected").text();
		var form_card = $("#qcard").val();
		var form_tel = $("#qtel").val();
		var form_eachpr = $("#qeachpr option:selected").text();
		var args = "/CMS/PersonInfoServlet?"+"&uuid="+form_uuid+"&username="+form_username+"&sex="+form_sex+"&comp="+form_comp+"&dep="+form_dep+"&post="+form_post+"&card="+form_card+"&tel="+form_tel+"&nopage="+nowpage+"&pagetop="+form_eachpr;
		returnPERSONinfo(args);
		}	
//////////////////////////////////////////////////tree Data Structures and events//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var setting = {
			view:{
				showLine:false
			},
			data: {
				simpleData: {
					enable: true
				}
			}
		};
var zNodes =[
			{ name:"人员管理", open:true,iconOpen:"image/treeimage/person_open.png",iconClose:"image/treeimage/person_close.png",
				children: [
					{ name:"人员管理", isParent:false, "click":"personinfo_click();"}
				]},
			{ name:"邮箱管理",open:true,iconOpen:"image/treeimage/mail_open.png",iconClose:"image/treeimage/mail_close.png",

				children: [
					{ name:"公司邮箱",
						children: [
							{ name:"邮箱信息"},
							{ name:"待办项"}
					]},
					{ name:"回收站", 
						children: [
							{ name:"已删除的邮箱"}
					]},
					{ name:"设置", isParent:false}
				]},
			{ name:"借记管理", open:true,iconOpen:"image/treeimage/borrow_open.png",iconClose:"image/treeimage/borrow_close.png",

				children:[
					{ name:"借记状态", 
						children: [
							{ name:"图书借记状态"},
							{ name:"电子用品借记状态"},
							{ name:"历史记录"}
					]},
					{ name:"物品管理", 
						children: [
							{ name:"图书管理"},
							{ name:"电子用品管理"},
							{ name:"借用授权"}
					]}
				]
			},
			{ name:"硬件维护", open:true,iconOpen:"image/treeimage/hardwaremaintenance_open.png",iconClose:"image/treeimage/hardwaremaintenance_close.png",

				children:[
					{ name:"维护待办",
						children: [
							{ name:"待办项"},
							{ name:"记录"}
					]},
					{ name:"IP管理",
						children: [
							{ name:"IP信息表"},
							{ name:"叶子节点212"},
							{ name:"叶子节点213"},
							{ name:"叶子节点214"}
					]},
					{ name:"父节点21 - 展开",
						children: [
							{ name:"叶子节点211"},
							{ name:"叶子节点212"},
							{ name:"叶子节点213"},
							{ name:"叶子节点214"}
					]}
				]
			},
			{ name:"离职流程",  open:true,iconOpen:"image/treeimage/resignation_open.png",iconClose:"image/treeimage/resignation_close.png",

				children:[
					{ name:"离职登记",
						children: [
							{ name:"登记"}
					]},
					{ name:"记录",
						children: [
							{ name:"已离职信息"}
					]}
				]
			},
			{ name:"日志", open:true,iconOpen:"image/treeimage/log_open.png",iconClose:"image/treeimage/log_close.png",

				children:[
					{ name:"系统日志",
						children: [
							{ name:"系统日志"}
					]},
					{ name:"业务日志",
						children: [
							{ name:"业务日志"}
					]}
				]
			}
		];	
	
//tree events---------------------------start--------------------------------------
	function personinfo_click(){
			$("#personinfo").show(); //tree 事件 显示人员信息窗口ss
	}
//tree events-----------------------end------------------------------
//tree init------------------------start-----------------------------
		$(function(){
			$.fn.zTree.init($("#treeDemo"),setting,zNodes);
		});
//tree init-------------------------------------end----------------
//////////////////////////////////////////////////tree Data Structures and events//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
			alert(personSex);
			$("#updatausername").attr("value", personUsername);
			$("#updataage").attr("value", personAge);
			
			$("input:radio[name='updatasex'][value='男']").attr("checked",false);
			$("input:radio[name='updatasex'][value='女']").attr("checked",false);
			alert("yes");
			if(personSex=="男"){
				$("input:radio[name='updatasex'][value='男']").attr("checked",true);
			}else if(personSex=="女"){
				$("input:radio[name='updatasex'][value='女']").attr("checked",true);
			}
			$("#updatatel").attr("value",personTel);
			$("#updataqq").attr("value",personQq);
			$("#updatabrithday").attr("value",personBri);
			$("#updatacard").attr("value",personCard);
			
			$("#updatacomp").empty();
			for(var i = 0;i<cdpinfo.company.length;i++){
				$("#updatacomp").append("<option value="+"'"+cdpinfo.company[i].name+"'"+">"+cdpinfo.company[i].name+"</option>");
				if($("#updatacomp option:eq("+i+")").val()==personComp){
					$("#updatacomp option:eq("+i+")").attr("selected","selected");
				}
			}
//			alert($("#updatacomp").find("option").length);//获取option长度
			
			$("#updatadep").empty();
			for(var i = 0;i<cdpinfo.dep.length;i++){
				$("#updatadep").append("<option value="+"'"+cdpinfo.dep[i].name+"'"+">"+cdpinfo.dep[i].name+"</option>");
				if($("#updatadep option:eq("+i+")").val()==personDep){
					$("#updatadep option:eq("+i+")").attr("selected","selected");
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		