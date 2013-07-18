<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>firstjqgrid</title>
		<link rel="stylesheet" type="text/css" href="css/overcast/jquery-ui-1.10.3.custom.css"/>
		<link rel="stylesheet" type="text/css" href="css/ui.jqgrid.css"/>
		<link rel="stylesheet" type="text/css" href="css/ui.multiselect.css" />
		<link rel="stylesheet" href="css/searchFilter.css" type="text/css"></link>
		<link rel="stylesheet" href="css/jquery.ui.core.css" type="text/css"></link>
		
		<style>
			html, body {
				 margin: 0;
				 padding: 0;
				 font-size: 75%;
					}
		</style>
        <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="js/grid.locale-cn.js"></script>
        <script type="text/javascript" src="js/jquery-ui.custom.js"></script>
       	<script type="text/javascript" src="js/jquery.layout.js"></script>
        
        <script type="text/javascript" src="js/ui.multiselect.js"></script>
        <script type="text/javascript" src="js/jquery.jqGrid.js"></script>
		<script type="text/javascript" src="js/jquery.tablednd.js"></script>
		<script type="text/javascript" src="js/jquery.contextmenu.js"></script>
		<script type="text/javascript" src="js/grid.loader.js"></script>


		<script type="text/javascript">
		$(function(){
			$("#list3").jqGrid({
				autowidth:true,
				rownumbers:true,
				rownumWidth:50,
				multiselect: true,
			   	url:"returnquerydata",
				datatype: "json",
				mtype:"POST",
			   	colNames:['序号','姓名', '年龄','性别','住址'],
			   	colModel:[
			   		{name:'id',index:'id', width:100, sorttype:"int"},
			   		{name:'name',index:'name', width:200},
			   		{name:'age',indes:'age',width:50},
			   		{name:'sex',index:'sex',width:50},
			   		{name:'address',index:'address', width:200}
			   	],
			   		viewrecords: true,  
			   		recordpos: 'right',
						rowNum:4,
					   	rowList:[4,8,16],
					   	pager: '#pager3',
					   	pgbutton:true,
					   	pginput:true,
					   	sortname: 'id',
					    sortorder: "desc",
				        caption: "人员信息表"		   
			});
			$("#list3").jqGrid('navGrid','#pager3',{edit:true,add:true,del:true});
		});
		</script>
	</head>

	<body>
		<table id="list3">
		<tr>
			<td></td>
		</tr>		
		</table>
		<div id="pager3"></div>
	</body>
</html>
