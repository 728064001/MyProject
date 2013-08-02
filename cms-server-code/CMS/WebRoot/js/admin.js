//载入时
$(function(){
	//页面打开时不显示人员信息窗口；
	$("#personinfo").hide();
	
	//DOM载入之后调用returnCDP()方法;
	returnCDP();
	
	
	$("#personinfo_close_image").click(function(){
		$("#personinfo").hide(); //点击关闭按钮时，隐藏人员信息窗口；
	});	
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
		$(function(){
			$.fn.zTree.init($("#treeDemo"),setting,zNodes);
		});
	

		
