<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>jquery创建表格</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript" src="js/jquery-1.10.1.js">	</script>
	</head>

	<body>
		<script type="text/javascript">
	var j = {
		"countnum":6,
		"personinfo":[{"uuid":"1817a69b-1dea-4842-8592-d31a0b050b4e","username":"米格","sex":"男","tel":"13971863594","icq":"7332255","brithday":"0917","age":23,"card":"420821199105110011","company":"中昱达","dep":"行政人事部","post":"前台"},
		{"uuid":"965bf2df-2a19-4817-93f7-a3e8ebd203ca","username":"郝磊","sex":"男","tel":"15815523495","icq":"728064001","brithday":"0511","age":21,"card":"420821199105110017","company":"中昱达","dep":"测试部","post":"配置管理员"},
		{"uuid":"caa30351-eff2-4786-befa-c17706761434","username":"梁宁","sex":"男","tel":"1234567890","icq":"45646674","brithday":"0905","age":21,"card":"420821199105110010","company":"中昱达","dep":"开发部","post":"开发工程师"},
		{"uuid":"dc62ca19-c1d1-4efd-8ab7-163b4c8ec776","username":"猫猫","sex":"女","tel":"15815523545","icq":"99808","brithday":"1009","age":23,"card":"420821199105110013","company":"中昱达","dep":"商务部","post":"商务"},
		{"uuid":"e169f3fe-6fcb-44d7-bb83-ce74516c3ca9","username":"陈真","sex":"男","tel":"13971863591","icq":"1111111","brithday":"1111","age":21,"card":"420821199105110019","company":"中昱达","dep":"财务部","post":"人事主管"},
		{"uuid":"ef09393f-021e-432c-91e8-0cc132606c42","username":"巴西","sex":"男","tel":"15815523496","icq":"323423","brithday":"0905","age":23,"card":"111111111111115","company":"中昱达","dep":"行政人事部","post":"商务"}]
	}

		
	$(function(){
			
			//alert(j.personinfo[1].uuid);
		
			var pagem = 6;//每页显示行
	
			var dom_table = $("<table></table>");
			dom_table.attr("border","1px");
			dom_table.attr("cellspacing","0px");
			dom_table.attr("id","tab");
			dom_table.css("border-color","#F0F0F0","border-width","1px","border-style","solid");
			
			var tharray  = new Array("uuid","姓名","性别","电话","QQ","生日","年龄","身份证","公司","部门","职位"); 
			var tharraylen = tharray.length; 
			var tr_th = $("<tr></tr>");
			tr_th.css("background","#DFDFDF");
			for(var x = 0;x<tharraylen;x++){
				var th = $("<th></th>");
				th.append(tharray[x]);
				tr_th.append(th);
			}
		    dom_table.append(tr_th); 
		   
		   
		    for (var o = 0; o < j.countnum; o++) { 
		       var dom_tr = $("<tr></tr>"); 
		        for (var i = 0; i < tharraylen; i++) { 
		            var dom_td = $("<td ></td>"); 
		           var cellarray = Array(j.personinfo[o].uuid,j.personinfo[o].username,j.personinfo[o].sex,j.personinfo[o].tel,j.personinfo[o].icq,j.personinfo[o].brithday,j.personinfo[o].age,j.personinfo[o].card,j.personinfo[o].company,j.personinfo[o].dep,j.personinfo[o].post);

		            dom_td.append(cellarray[i]);
		            dom_tr.append(dom_td); 
		        } 
		        dom_table.append(dom_tr); 
		    } 
		    $("#t").append(dom_table);
		    $("table tr").bind("dblclick",function(){
				   
    				alert($(this).children('td').eq(0).html());
       
			});
		   //
		   
		    //添加分页栏
		    var pages = Math.floor((j.countnum)/pagem);
		   if((j.countnum)%pagem!=0){
		   	pages+=1;
		   }
		   // alert(pages);
		   $("#mainpa").css("background","#DFDFDF");
		   $("#uppa").css("background","#DFDFDF");
		   $("#downpa").css("background","#DFDFDF");
		   
		});
		</script>
		<div id="t" ></div><p></p>
		<span id="f" ><a id='mainpa'>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a id='uppa'>上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a id='downpa'>下一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
		跳转到<input type="text" width="80px" />页&nbsp;<input type="button" value="转到>"/>
		</span><hr/>
	</body>
</html>