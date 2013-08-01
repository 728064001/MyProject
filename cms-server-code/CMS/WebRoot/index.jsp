<%@ page language="java" import="java.util.*,com.haolei.entity.Person" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <%Person person = (Person)session.getAttribute("logined"); %>
    <title>CMS--<%=person.getUsername()%> onLine</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<style type="text/css">
	body{
	margin:0;
	padding:0
	}
	.style1 {
		border-style: solid;
		border-width: 0px;
	}
	.style2 {
		text-align: center;
		font-family: 华文琥珀;
		font-size:59px;
	}
	.style3 {			}
	.style4 {		
		float: right;
		border:1px;
			border-style: solid;
		border-width: 1px;
	}

	.style6 {
		text-align: center;
	}
	.style7 {
		text-align: right;
		font-size: smaller;
		color: #CC6600;
	}
	.style8 {
		border-style: solid;
		border-width: 1px;
		font-family: "Courier New", Courier, monospace;
		font-size: small;
		color: #CC6600;

	}

	.style9 {
		border-style: solid;
	}

	.style10 {
		border: 0px solid #003300;	}
		
		.style11 {
	border-style: solid;
	border-width: 1px;

}
	.style12 {
	  float:left
	}
	.style13 {
		text-align: center;
		font-size: smaller;
		color: #CC6600;
	}
	
	
	.wupin_table {
	border: 1px solid #666699;
	}
	.wupin_table_tr_td {
		text-align: center;
	}
	
	.one{
		border: 1px solid #9999FF;
	}
	.two {
		border: 1px solid #CCCCFF;
	}
	.three {
		text-align: center;
	}
	.four {
		border: 0px solid #FF9933;
	}
	.five {
		border-style: solid;
		border-width: 1px;
		border: 1px solid teal;
	
	}
	
	<!--wupin_jjzt_jjzt_table_style-->
	.jjstatus_table {
		border-style: solid;
		border-width: 0px;
	}
	.jjstatus_table_th {
		text-align: center;
		border-style: solid;
		border-width: 1px;
	}
	.jjstatus_table_tr_td {
		border-style: solid;
		border-width: 1px;
	}
	<!--wupin_jjzt_jjzt_table_style------------------------------>
	
	.wupin_jjzt_table {
		border: 1px solid #6699FF;
	}
	.wupin_jjzt_table_tr_td {
		text-align: center;
		background-color: #6699FF;
	}
	</style>
	<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
	<script type="text/javascript">
		function load(){
		$(function(){
			$("#goods").hide();
			$("#maintain").hide();
			$("#resignation").hide();
				
			$("#of").hide();
			$("#bo").hide();
			$("#zt").show();
			
			$("#jjstatus").show();
			$("#jjhistory").hide();

			});
		}
		
		
		function c1(){
			$(function(){
				$("#cmail").show();
				$("#goods").hide();
				$("#maintain").hide();
				$("#resignation").hide();
			});
		}
		function c2(){
			$(function(){
				$("#goods").show();
				$("#cmail").hide();
				$("#maintain").hide();
				$("#resignation").hide();
			});
		}
		function c3(){
			$(function(){
				$("#maintain").show();
				$("#cmail").hide();
				$("#goods").hide();
				$("#resignation").hide();
			});
		}
		function c4(){
			$(function(){
				$("#resignation").show();
				$("#cmail").hide();
				$("#goods").hide();
				$("#maintain").hide();
			});
		}
		
		function b1(){
			$("#bo").show();
			$("#of").hide();
			$("#zt").hide();
		}
		
		function o1(){
			$("#of").show();
			$("#bo").hide();
			$("#zt").hide();

		}
		
		function jj(){
			$("#bo").hide();
			$("#of").hide();
			$("#zt").show();
		}
		
	function jjstatus_show(){ 
			$("#jjstatus").show();
			$("#jjhistory").hide();
	}
	
	function jjstatushistory_show(){
			$("#jjstatus").hide();
			$("#jjhistory").show();
	}
	</script>
  </head>
  
 <body onload="load()">

<div style="border-color: inherit; border-width: 0px; width:100%; height:100%; " class="style9">
	<table border="0" cellspacing="0" class="style1" style="width: 100%; height: 884px">
		<tr>
			<td colspan="2" style="height: 60px">
			<table cellspacing="0" class="style1" style="width: 100%;background-color:silver; height: 100%">
				<tr>
					<td class="style2" style="width: 167px"  bgcolor="#C0C0C0">
					<strong>C M S</strong></td>
					<td class="style3">
						<table cellspacing="1" class="style4" style="width: 400px; height: 60px">
						<tr>
							<td class="style13">IP:<%=(session.getAttribute("ip").toString()) %></td>
							<td class="style7">修改个人信息</td>
						</tr>
						<tr>
							<td class="style13">2013/07/11 12:45</td>
							<td class="style7">&nbsp;</td>
						</tr>
						<tr>
							<td class="style13"><%=person.getUsername() %> 欢迎登录CMS</td>
							<td class="style7">log out</td>
						</tr>
					</table>
					</td>
				</tr>
			</table>
			</td>
		</tr>
		<tr>
			<td rowspan="2" style="width: 160px" align="left" valign="top">
			<table cellspacing="1" class="style8" style="width: 100%; height: 100%">
				<tr>
					<td align="center" style="height: 148px" valign="middle">
					<img src="image/userimage.jpg" /></td>
				</tr>
				<tr>
					<td align="left" valign="top">
					<table cellspacing="1" class="style8" style="width: 100%; height: 100%">
						<tr>
							<td style="height: 35px">帮派：</td>
							<td style="height: 35px">测试部</td>
						</tr>
						<tr>
							<td style="height: 36px">书信：</td>
							<td style="height: 36px">15815523495</td>
						</tr>
						<tr>
							<td style="height: 31px">职务：</td>
							<td style="height: 31px">配置管理员</td>
						</tr>
						<tr>
							<td style="height: 35px">装备：</td>
							<td style="height: 35px">自家法宝</td>
						</tr>
						<tr>
							<td align="left" colspan="2" valign="top">
							<table cellpadding="2" class="style10" style="width: 100%; height: 158%">
								<tr>
									<td style="height: 26px"  class="style11" >lenovo y450</td>
									<td style="height: 26px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 27px"  class="style11">lenovo y450</td>
									<td style="height: 27px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 24px"   class="style11">lenovo y450</td>
									<td style="height: 24px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 28px"  class="style11">lenovo y450</td>
									<td style="height: 28px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 24px"  class="style11">lenovo y450</td>
									<td style="height: 24px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 24px"  class="style11">lenovo y450</td>
									<td style="height: 24px"  class="style11">x1</td>
								</tr>
								<tr>
									<td style="height: 24px"  class="style11">lenovo y450</td>
									<td style="height: 24px"  class="style11">x1</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</table>
							</td>
						</tr>
					</table>
					</td>
				</tr>
			</table>
			</td>
			<td style="height: 41px">
			<table cellspacing="4" class="style12" style="width: 100%; height: 100%">
				<tr>
					<td bgcolor="#666699" class="style6" onclick="c1()"><strong>公 司 邮 箱</strong></td>
					<td bgcolor="#666699" class="style6" onclick="c2()"><strong>物 品 借 记</strong></td>
					<td bgcolor="#666699" class="style6" onclick="c3()"><strong>硬件登记/维护</strong></td>
					<td bgcolor="#666699" class="style6" onclick="c4()"><strong>离 职 流 程</strong></td>
				</tr>
			</table>
			</td>
		</tr>
		<tr>
			<td style="height: 718px; padding-left:5px" align="left" valign="top">
			<!--cmail-->
			<div id="cmail" style="position: absolute; width: 1065px; height: 718px; z-index: 1">
				<p>
					<html xmlns="http://www.w3.org/1999/xhtml">

					<head>
					<meta content="zh-cn" http-equiv="Content-Language" />
					<style type="text/css">
					
					.tab1_1{
						background-color:silver
					}
					.tab1 {
						border: 0px solid #3366FF;
						background-color: #9999FF;
					}
					.head1{
						text-align: center;
						font-size: x-large;
					}
					</style>
					</head>
					
					<body>
						
					<table cellspacing="1" class="tab1" style="width: 1000px; height: 700px">
						<tr>
							<td class="head1" colspan="3" style="height: 38px;text-align: center;font-size: x-large"><strong>邮 箱 管 理</strong></td>
						</tr>
						<tr>
							<td style="height: 246px; width: 500px" align="left" bgcolor="#C0C0C0" valign="top">
							<img alt="" height="17" src="image/attention.png" width="17" /> 未申请公司邮箱<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 请在如下表格中填入您的gmail邮箱地址和您的手机号。<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
							<td style="height: 246px; width: 15px"></td>
							<td style="height: 246px" align="left" bgcolor="#C0C0C0" valign="top">
							<img alt="" height="17" src="image/attention.png" width="17" />已经开通公司邮箱<br />
					&nbsp;&nbsp;&nbsp;&nbsp; 如果您需要改换另外一个gmail邮箱地址，请在下面表格中填入新的gmail。按修改按钮提交。</td>
						</tr>
						<tr>
							<td align="left" style="width: 500px" valign="top">
								<!---->
									<table cellspacing="1" class="tab1_1" style="width: 100%; height: 100%" style="float:left;background-color:silver
					">
							<tr>
								<td>gmail:</td>
								<td>&nbsp;</td>
								<td>
								<input name="Text1" style="width: 197px; height: 32px" type="text" /></td>
							</tr>
							<tr>
								<td>手机号：</td>
								<td>&nbsp;</td>
								<td>
								<input name="Text2" style="width: 197px; height: 32px" type="text" /></td>
							</tr>
							<tr>
								<td>&nbsp; </td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>
								<form method="post">
									<input name="Button1" type="button" value="申  请" style="width: 91px; height: 53px" /></form>
								</td>
								<td>&nbsp;</td>
							</tr>
						</table>
								
								<!---->
								
							</td>
							<td style="width: 15px">&nbsp;</td>
							<td align="left" valign="top">
							
								<table cellspacing="1" class="tab1_1" style="width: 100%; height: 100%" style="float:left;background-color:silver
					">
							<tr>
								<td>gmail:</td>
								<td>&nbsp;</td>
								<td>
								<input name="Text1" style="width: 197px; height: 32px" type="text" /></td>
							</tr>
							<tr>
								<td>公司邮箱：</td>
								<td>&nbsp;</td>
								<td>
								<input name="Text2" style="width: 197px; height: 32px" type="text" /></td>
							</tr>
							<tr>
								<td>状态：</td>
								<td>&nbsp;</td>
								<td>已开通</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>
								<form method="post">
									<input name="Button1" type="button" value="修  改" style="width: 91px; height: 53px" /></form>
								</td>
								<td>&nbsp;</td>
							</tr>
						</table>
							</td>
						</tr>
					</table>
						
					</body>
					
					</html>

				</p>
			</div>
			<!--cmail------------------------------------------------------------------------------------->
			<!--goods-->
			<div id="goods" style="position: absolute; width: 1065px; height: 718px; z-index: 2">
			<table cellspacing="1" class="wupin_table" style="width: 1000px; height: 700px">
	<tr bgcolor="#CCCCFF">
		<td class="wupin_table_tr_td" style="height: 26px; width: 304px" onclick="jj()"><strong>
		我的借记状态</strong></td>
		<td class="wupin_table_tr_td" style="height: 26px; width: 332px" onclick="b1()">
		<strong>图书借记</strong></td>
		<td class="wupin_table_tr_td" style="height: 26px" onclick="o1()"><strong>办公用品借记</strong></td>
	</tr>
	<tr>
		<td align="left" colspan="3" valign="top">
			<div id="bo" style="position: absolute; width: 999px; height: 673px; z-index: 1">
			<!--图书页-->
			<table cellspacing="1" class="one" style="width: 996px; height: 500px">
	<tr>
		<td style="height: 12px; width: 991px;">图书查询：</td>
	</tr>
	<tr>
		<td align="left" style="height: 54px; width: 991px;" valign="top">
		<table cellspacing="1" class="two" style="width: 100%; height: 100%">
			<tr>
				<td>分类：</td>
				<td align="left" valign="middle">
				<form method="post">
					<input name="Text1" style="width: 84px" type="text" /></form>
				</td>
				<td>出版社：</td>
				<td><input name="Text2" style="width: 91px" type="text" /></td>
				<td>作者：</td>
				<td><input name="Text3" style="width: 103px" type="text" /></td>
				<td>书名：</td>
				<td><input name="Text4" type="text" /></td>
				<td class="three">
					<input name="Button1" type="button" value="查 找" style="width: 42px" />
				</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td style="height: 19px; width: 991px;">查询结果：</td>
	</tr>
	<tr>
		<td align="left" valign="top" style="width: 991px">
		<table cellspacing="1" style="width: 100%; height: 100%;border: 0px solid #CCCCFF;
">
			<tr>
				<td style="height: 526px" align="left" valign="top">
				<table cellspacing="0" class="four" style="width: 100%; height: 100%">
					<tr>
						<th class="five">分类</th>
						<th class="five">作者</th>
						<th class="five">出版社</th>
						<th class="five">书名</th>
						<th class="five">状态</th>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
					<tr>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
						<td class="five">&nbsp;</td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td>分页按钮区</td>
			</tr>
		</table>
		</td>
	</tr>
</table>

		</div>
		<div id="of" style="position: absolute; width: 999px; height: 673px; z-index: 2">
			在村民解建勇家，习近平同一家三代围坐一起，详细询问家庭收入怎么样、孩子书读得怎么样、村里的公共服务好不好？他说，让农民群众不断过上好日子，是体现我们党的宗旨的一个重要方面，我们还要继续努力。在村里的综合超市，习近平看货架商品，问蔬菜价格，同前来购物的群众亲切交流。他指出，超市连接百姓生活，是农村服务业的一个发展趋势，要加强农村流通网络建设，为群众生活提供方便、快捷的服务
		</div>
		
			<div id="zt" style="position: absolute; width: 999px; height: 673px; z-index: 3">
			<table cellspacing="1" class="wupin_jjzt_table" style="width: 965px; height: 654px">
				<tr>
					<td style="height: 43px">
					<table cellpadding="0" cellspacing="2" style="width: 100%; height: 100%">
						<tr>
							<td style="width: 465px; background-color: #6699FF;" class="wupin_jjzt_table_tr_td" onclick="jjstatus_show()">
							<strong>我 的 借 记 状 态</strong></td>
							<td class="wupin_jjzt_table_tr_td" onclick="jjstatushistory_show()"><strong>历 史 记 录 </strong></td>
						</tr>
					</table>
					</td>
				</tr>
				<tr>
					<td align="left" style="height: 558px" valign="top">
					<!--借记状态DIV-->
					<div id="jjstatus" style="position: absolute; width: 960px; height: 558px; z-index: 1">
						<!--table-->
						<table cellspacing="0" class="jjstatus_table" style="width: 960px; height: 558px">
							<tr>
								<td class="jjstatus_table_th">类型</td>
								<td class="jjstatus_table_th">名称</td>
								<td class="jjstatus_table_th">条码</td>
								<td class="jjstatus_table_th">借出时间 </td>
								<td class="jjstatus_table_th">归还时间</td>
								<td class="jjstatus_table_th">剩余时限</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
						</table>
			
					</div>
					<!--借记状态DIV---------------------------------------------------------------->
					<!--借记历史DIV-->
					<div id="jjhistory" style="position: absolute; width: 960px; height: 558px; z-index: 2">
						<!--table-->
						<table cellspacing="0" class="jjstatus_table" style="width: 960px; height: 558px">
							<tr>
								<td class="jjstatus_table_th">类型</td>
								<td class="jjstatus_table_th">名称</td>
								<td class="jjstatus_table_th">条码</td>
								<td class="jjstatus_table_th">借出时间</td>
								<td class="jjstatus_table_th">借用时限</td>
								<td class="jjstatus_table_th">实际归还时间</td>
								<td class="jjstatus_table_th">状态</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
							<tr>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
								<td class="jjstatus_table_tr_td">&nbsp;</td>
							</tr>
						</table>
			
					</div>
					<!--借记历史DIV----------------------------------------------------------------->
					</td>
				</tr>
				<tr>
					<td>分页按钮栏</td>
				</tr>
			</table>
		</div>

		</td>
	</tr>
</table>
			</div>
			<!--goods------------------------------------------------------------------------------------->
			<!--maintain-->
			<div id="maintain" style="position: absolute; width: 1065px; height: 718px; z-index:3">
				<p>
					机械公司内部控制状况及建议
					一、内部控制的含义 内部会计控制,是单位为了提高会计信息质量,保护资产的安全、完整,确保有关法律法规和规章制度的贯彻执行等而制定和实施的一系列控制方法、措施和程序。保证会计信息的真实性是内部控制发展的主线...
				</p>
			</div>
			<!--maintain---------------------------------------------------------------------------------->
			<!--resignation-->
			<div id="resignation" style="position: absolute; width: 1065px; height: 718px; z-index: 4">
				<p>
					分析农村公共服务需求及地方管理创新
					农民对公共服务需求主要受以下因素影响 1收入对公共产品和服务需求的影响。收入水平高低影响了对公共产品和服务需求的数量与结构。收入能改变约束条件;随着个人收入的增长,政府的公共支出规模会增加(瓦格纳法则);收...
				</p>
			</div>
			<!--resignation------------------------------------------------------------------------------->
			</td>
		</tr>
		<tr>
			<td bgcolor="#C0C0C0" class="style6" colspan="2">
				<span style="color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;">
		Copyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span>
			</td>
		</tr>
	</table>
</div>

</body>
</html>
