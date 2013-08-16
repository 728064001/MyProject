<%@ page language="java" import="java.util.*,com.haolei.dao.CompanyNameListDAO,com.haolei.dao.DepNameListDAO,com.haolei.dao.PostNameListDAO" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>用户注册</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="css/register.css">
	<script type="text/javascript" src="js/jquery-1.8.0.js"></script>
 </head>
<body>

<table border="0" ellpadding="0" cellspacing="0" style="width: 100%; height: 670px">
	<tr>
		<td style="width: 379px; height: 99px"></td>
		<td style="width: 660px; height: 99px"></td>
		<td style="height: 99px; width: 379px;"></td>
	</tr>
	<tr>

		<td style="height: 238px; width: 379px">
		&nbsp;</td>
		<td style="height: 238px; width: 660px" align="left" valign="top">
		<form id="formregister" method="post">
		<table border="0" ellspacing="0" class="main-table-style" style="width: 100%; height: 100%">
			<tr bgcolor="#808080">
				<td colspan="3" style="height: 54px; text-align: center" class="table-head-style">
				<strong>用 户 注 册</strong></td>
			</tr>
			<tr>
				<td style="text-align: center; width: 138px; height: 45px;" class="username-style">
				<strong>用户名：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="username" id="username" type="text" style="width: 159px; height: 25px"  />
				</td>
				<td style="height: 45px" class="tagtip-style" id="usernametip">输入中文姓名</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>密&nbsp;&nbsp; 码：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="password" id="password" type="password" style="width: 159px; height: 25px"  /></td>
				<td style="height: 45px" class="tagtip-style" id="passwordtip">8-16位密码</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>重复输入密码：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="repeatpassword" id="repeatpassword" type="password" style="width: 159px; height: 25px" /></td>
				<td style="height: 45px" class="tagtip-style" id="repeatpasswordtip">&nbsp;</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;">
				<strong>性 别：</strong></td>
				<td style="height: 45px; width: 196px">					
				<strong>
				<input class="radio-text" name="sex" value="男" type="radio" /></strong><span class="radio-text"><strong>男&nbsp;&nbsp; 
				</strong></span><strong>
				<input class="radio-text" name="sex" value="女" type="radio" /><span class="radio-text">女</span></strong></td>
				<td style="height: 45px" class="tagtip-style" id="sextip">
				&nbsp;</td>
			</tr>
			
			
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>联系电话：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="tel" id="tel" type="text" style="width: 159px; height: 25px"  /></td>
				<td style="height: 45px" class="tagtip-style" id="teltip">最多12个字符</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>QQ:</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="qq" id="qq" type="text" style="width: 159px; height: 25px"  /></td>
				<td style="height: 45px" class="tagtip-style" id="qqtip">&nbsp;</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>生日日期：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="brithday" id="brithday" type="text" style="width: 159px; height: 25px" /></td>
				<td style="height: 45px" class="tagtip-style" id="brithdaytip">4位农历日期,如:农历九月六日 为 0906</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>年&nbsp; 龄：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="age" id="age" type="text" style="width: 159px; height: 25px"  /></td>
				<td style="height: 45px" class="tagtip-style" id="agetip">1-100</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>身份证：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="card" id="card" type="text" style="width: 159px; height: 25px"  /></td>
				<td style="height: 45px" class="tagtip-style" id="cardtip">最多19个字符</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>所&nbsp; 
				属：</strong></td>
				<td style="height: 45px; width: 196px">					
					<select name="comp" id="comp" style="width: 109px; height: 25px"  >
					<option value="=请选择=">=请选择=</option>
					<%
					CompanyNameListDAO companynamelistdao = new CompanyNameListDAO();
					List companynamelist = companynamelistdao.returnCompanyNameList();
					%>
					<%
						for(int i=0;i<companynamelist.size();i++){
					%>
					<option><%=companynamelist.get(i) %></option>
					<%}%>
					</select></td>
				<td style="height: 45px" class="tagtip-style" id="comptip">选择所属公司</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>部&nbsp; 门：</strong></td>
				<td style="height: 45px; width: 196px" align="left" valign="middle">
					<select name="dep" id="dep" style="width: 109px; height: 25px" >
					<option value="=请选择=">=请选择=</option>
					<%
					DepNameListDAO depnamelistdao = new DepNameListDAO();
					List depnamelist = depnamelistdao.returnDepNameList();
					%>
					<%
						for(int x=0;x<depnamelist.size();x++){
					%>
					<option><%=depnamelist.get(x) %></option>
					<%}%>
					</select>
				</td>
				<td style="height: 45px" class="tagtip-style" id="deptip">选择所在部门</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>职&nbsp; 位：</strong></td>
				<td style="height: 45px; width: 196px">
				<select name="post" id="post" style="width: 109px; height: 25px" onblur="postonblur()">
				<option value="=请选择=">=请选择=</option>
				<%
					PostNameListDAO postnamelistdao = new PostNameListDAO();
					List postNameList = postnamelistdao.returnPostNameList();
					int postNameListLength = postNameList.size();
				%>
				<%
					for(int o = 0;o<postNameListLength;o++){
				%>
				<option><%=postNameList.get(o)%></option>
				<%}%>
				</select></td>
				<td style="height: 45px" class="tagtip-style" id="posttip">选择职位</td>
			</tr>
			<tr>
				<td class="td-font-style" style="width: 138px; height: 88px;"></td>
				<td style="height: 88px; width: 196px"><span>&nbsp;<input name="xieyi" id="xieyi" type="checkbox" />				
				<span class="style9">同意</span><a href="xieyi.html" target="_blank"><span class="style9">用户协议</span></a><span class="style9">&nbsp;
				</span>				</span><br/><br/>
					<input name="regist" id="regbut" type="button" value="注  册" style="width: 103px; height: 45px"/>	</td>
				<td style="height: 88px" valign="bottom">&nbsp;</td>
			</tr>
			<tr>
				<td class="td-font-style" style="height: 37px;" colspan="3" bgcolor="#C0C0C0">
		<span style="color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;">
		Copyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span></td>
			</tr>
		</table>
		</form>
		</td>
		<td style="height: 238px; width: 379px;"></td>
	</tr>
	<tr>
		<td style="width: 379px; height: 84px;"></td>
		<td style="width: 660px; height: 84px;"></td>
		<td style="height: 84px; width: 379px;"></td>
	</tr>
</table>

<script type="text/javascript" src="js/register.js"></script>


</body>
</html>
