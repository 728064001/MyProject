
var nowpage = 1;
var eachpw = 0;
//载入时
$(function(){
			$("#mainpa").css("background","#DFDFDF");
		   $("#uppa").css("background","#DFDFDF");
		   $("#downpa").css("background","#DFDFDF");
	//页面打开时不显示窗口；
	
	
	
	//DOM载入之后调用returnCDP()方法;
	returnCDP();
	
	//人员信息
	personsearch();
	
	$("#personinfo_close_image").click(function(){
		$("#personinfo").hide(); //点击关闭按钮时，隐藏人员信息窗口；
	});	

	//点击查询是的事件
		
			$("#search").click(
				function(){
					personsearch();
				}
			);		
	
		
});

//从servlet端获取公司、部门、职位 的一组JSON,然后再调用方法把数据放到对应的地方
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
function viwedata(json){
//	alert(json.company.length);
//	add comp option
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
		$(function(){
			$.ajax({
				url: args,
				type: "POST",
				dataType:'json',
				success:function(json) {
					alert(json.personinfo.length);
					createtable(json);
				}
			});
		});
}

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
		    var personId = "";
			$(".cl").dblclick(function(){
				personId = $(this).children('td').eq(0).html();
				
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
		   $("#dqpages").html("1");
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
			alert(nowpage);
			alert("asdf");
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
				}
				if(nowpage>1){
				$("#uppa").show();
				}
				//当前页等于总页数时，下一页按钮不可用
	}else{
		if($("#personinfotable").children()){
				$("#personinfotable *").remove();
				
				var nulldatatip = $("<span id='nulldatatip'></span>").append("OH! 木有查找到您要的数据哦。");
				$("#personinfotable").append(nulldatatip);
			}

	}	   
}
	
//tree 的数据结构-------------------------------------------------------------
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
//tree 数据结构-----------------------^^^^^^^^^^^^---------------------------------		
//tree 事件-------------------------------------------------------------------------
	function personinfo_click(){
			$("#personinfo").show(); //tree 事件 显示人员信息窗口
	}
//tree 事件-------------------------^^^^^^^^^^^^^^------------------------------
//tree 初始化
		$(function(){
			$.fn.zTree.init($("#treeDemo"),setting,zNodes);
		});
//tree 初始化-------------------------------------^^^^^^^^^^^^^^^^^----------------

function personsearch(){
		var form_uuid = $("#uuid").val();
		var form_username = $("#username").val();
		var form_sex = $("#sex option:selected").text();
		var form_comp = $("#comp option:selected").text();
		var form_dep = $("#dep option:selected").text();
		var form_post = $("#post option:selected").text();
		var form_card = $("#card").val();
		var form_tel = $("#tel").val();
		var form_eachpr = $("#eachpr option:selected").text();
		var args = "/CMS/PersonInfoServlet?"+"&uuid="+form_uuid+"&username="+form_username+"&sex="+form_sex+"&comp="+form_comp+"&dep="+form_dep+"&post="+form_post+"&card="+form_card+"&tel="+form_tel+"&nopage="+1+"&pagetop="+form_eachpr;
//		alert(args);
		returnPERSONinfo(args);
		}
