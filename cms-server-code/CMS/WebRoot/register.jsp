<%@ page language="java" import="java.util.*,com.haolei.dao.CompanyNameListDAO,com.haolei.dao.DepNameListDAO" pageEncoding="UTF-8"%>
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
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style type="text/css">
 body{
	margin:0;
	padding:0;
}
.main-table-style {
	border: 1px solid #999966;
}
.td-font-style {
	text-align: center;
}
.table-head-style {
	font-family: 华文琥珀;
	font-size: large;
}
.username-style {
	font-size: large;
	font-family: 黑体;
	color: #808080;
}
.tagname-style {
	text-align: center;
	font-family: 黑体;
	font-size: large;
	color: #808080;
}
.tagtip-style {
	font-size: small;
	color: #0000FF;

}
. table-td-text-style{
	font-size: small;
}
</style>

  </head>
  
<body onload="int()">

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
		<form action="login.html" method="post">
		<table border="0" ellspacing="0" class="main-table-style" style="width: 100%; height: 100%">
			<tr bgcolor="#808080">
				<td colspan="3" style="height: 54px; text-align: center" class="table-head-style">
				<strong>用 户 注 册</strong></td>
			</tr>
			<tr>
				<td style="text-align: center; width: 138px; height: 45px;" class="username-style">
				<strong>用户名：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="username" id="username" type="text" style="width: 159px; height: 25px" onblur="userInputOnblur()" />
				</td>
				<td style="height: 45px" class="tagtip-style" id="usernametip">输入中文姓名</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>密&nbsp;&nbsp; 码：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="password" id="password" type="password" style="width: 159px; height: 25px" onblur="passwordInputOnblur()" /></td>
				<td style="height: 45px" class="tagtip-style" id="passwordtip">8-16位密码</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>重复输入密码：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="repeatpassword" id="repeatpassword" type="password" style="width: 159px; height: 25px" onblur="repeatPasswordInputOnblur()"/></td>
				<td style="height: 45px" class="tagtip-style" id="repeatpasswordtip">&nbsp;</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>联系电话：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="tel" id="tel" type="text" style="width: 159px; height: 25px" onblur="telInputOnblur()" /></td>
				<td style="height: 45px" class="tagtip-style" id="teltip">最多12个字符</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>QQ:</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="qq" id="qq" type="text" style="width: 159px; height: 25px" onblur="qqInputOnblur()" /></td>
				<td style="height: 45px" class="tagtip-style" id="qqtip">&nbsp;</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>生日日期：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="brithday" id="brithday" type="text" style="width: 159px; height: 25px" onblur="brithdayInputOnblur()"/></td>
				<td style="height: 45px" class="tagtip-style" id="brithdaytip">4位农历日期,如:农历九月六日 为 0906</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>年&nbsp; 龄：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="age" id="age" type="text" style="width: 159px; height: 25px" onblur="ageInputOnblur()" /></td>
				<td style="height: 45px" class="tagtip-style" id="agetip">1-100</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>身份证：</strong></td>
				<td style="height: 45px; width: 196px">					
				<input name="card" id="card" type="text" style="width: 159px; height: 25px" onblur="cardInputOnblur()" /></td>
				<td style="height: 45px" class="tagtip-style" id="cardtip">最多19个字符</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>所&nbsp; 
				属：</strong></td>
				<td style="height: 45px; width: 196px">					
					<select name="comp" id="comp" style="width: 109px; height: 25px" >
					<option>=请选择=</option>
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
				<td style="height: 45px" class="tagtip-style">选择所属公司</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>部&nbsp; 门：</strong></td>
				<td style="height: 45px; width: 196px" align="left" valign="middle">
					<select name="dep" id="dep" style="width: 109px; height: 25px">
					<option>=请选择=</option>
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
				<td style="height: 45px" class="tagtip-style">选择所在部门</td>
			</tr>
			<tr>
				<td class="tagname-style" style="width: 138px; height: 45px;"><strong>职&nbsp; 位：</strong></td>
				<td style="height: 45px; width: 196px">
				<select name="post" id="post" style="width: 109px; height: 25px">
				<option>=请选择=</option>
				</select></td>
				<td style="height: 45px" class="tagtip-style">选择职位</td>
			</tr>
			<tr>
				<td class="td-font-style" style="width: 138px; height: 88px;"></td>
				<td style="height: 88px; width: 196px"><span>&nbsp;<input name="xieyi" id="xieyi" type="checkbox" onchange="checkboxonchange()" />				
				<span class="style9">同意</span><a href="xieyi.html" target="_blank"><span class="style9">用户协议</span></a><span class="style9">&nbsp;
				</span>				</span><br/><br/>
					<input name="regist" id="regbut" type="submit" value="注  册" style="width: 103px; height: 45px" onclick="return register()"/>	</td>
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

<script type="text/javascript">	
<!--载入-->
	function int(){
		
		//document.getElementById("xieyi").checked = true;
		var regbut = document.getElementById("regbut").disabled = true;
	}
// checkbox method
	function checkboxonchange(){
		var xieyicheckbox = document.getElementById("xieyi").checked;
		if(xieyicheckbox){
			document.getElementById("regbut").disabled = false;
		}else{
			document.getElementById("regbut").disabled = true;
		}
	}
<!--即时验证  -->
    <!-- 用户名验证 -->
	function userInputOnblur(){
		var usernameStr=document.getElementById("username").value.trim();
		var usernametipobj=document.getElementById("usernametip");
		<!-- 中文正则 -->
		var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig; 		
		if(usernameStr.length>1&&usernameStr.length<5){			
			if(reg.test(usernameStr)){
				(document.getElementById("username")).style.border="#66FF33 2px solid";
				usernametipobj.childNodes[0].nodeValue="ok";
				usernametipobj.style.color="#0000FF";
				return true;
			}else{			
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="请输入中文";
				usernametipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="2-4个中文字符";
				usernametipobj.style.color="red";
				return false;
		}
	}
	
	<!-- 密码验证 -->
	function passwordInputOnblur(){
		var passwordStr=document.getElementById("password").value.trim();
		var passwordtipobj=document.getElementById("passwordtip");
		if(passwordStr.length>=8&&passwordStr.length<=16){
				(document.getElementById("password")).style.border="#66FF33 2px solid";
				passwordtipobj.childNodes[0].nodeValue="ok";
				passwordtipobj.style.color="#0000FF";
				return true;
		}else{
				(document.getElementById("password")).style.border="red 2px solid";	
				passwordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符";
				passwordtipobj.style.color="red";
				return false;
		}
	}
	
	<!-- 重复密码验证 -->
	function repeatPasswordInputOnblur(){
		var passwordStr=document.getElementById("password").value.trim();
		var repeatpasswordStr=document.getElementById("repeatpassword").value.trim();
		var repeatpasswordtipobj=document.getElementById("repeatpasswordtip");
		if(repeatpasswordStr.length==passwordStr.length&&passwordStr==repeatpasswordStr){
				(document.getElementById("repeatpassword")).style.border="#66FF33 2px solid";
				repeatpasswordtipobj.childNodes[0].nodeValue="ok";
				repeatpasswordtipobj.style.color="#0000FF";
				return true;
		}else{
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="与前一次输入的密码不匹配!";
				repeatpasswordtipobj.style.color="red";
				return false;
		}
	}
	
	<!-- 验证电话号码 -->
	function telInputOnblur(){
		var telStr=document.getElementById("tel").value.trim();
		var teltipobj=document.getElementById("teltip");
		var telReg=/^\d*$/;
		if(telStr.length>=7&&telStr.length<=12){
			if(telReg.test(telStr)){
				(document.getElementById("tel")).style.border="#66FF33 2px solid";
				teltipobj.childNodes[0].nodeValue="ok";
				teltipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码格式错误!(请输入合法的号码)!";
				teltipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码长度错误!(7-12位)";
				teltipobj.style.color="red";
				return false;
		} 
	}
	
	<!-- 验证QQ -->
	function qqInputOnblur(){
		var qqStr=document.getElementById("qq").value.trim();
		var qqtipobj=document.getElementById("qqtip");
		var qqReg=/^\d*$/;
		if(qqStr.length>=4&&qqStr.length<=15){
			if(qqReg.test(qqStr)){
				(document.getElementById("qq")).style.border="#66FF33 2px solid";
				qqtipobj.childNodes[0].nodeValue="ok";
				qqtipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="请输入正确的号码!";
				qqtipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="QQ号码长度不正确!";
				qqtipobj.style.color="red";
				return false;
		}
	}
	
	<!--农历生日 -->
	function brithdayInputOnblur(){
		var brithdayStr=document.getElementById("brithday").value.trim();
		var brithdaytipobj=document.getElementById("brithdaytip");
		var brithdayReg=/^\d*$/;
		if(brithdayReg.test(brithdayStr)){
			if(brithdayStr.length==4){
				if(((brithdayStr.substring(0,2)>0)&&(brithdayStr.substring(0,2)<=12))&&((brithdayStr.substring(2,4)>0)&&(brithdayStr.substring(2,4)<=29))){
				(document.getElementById("brithday")).style.border="#66FF33 2px solid";
				brithdaytipobj.childNodes[0].nodeValue="ok";
				brithdaytipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期范围错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
				}
			}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期长度错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
		}
	}
	
	<!--年龄验证  -->
	function ageInputOnblur(){
		var ageStr=document.getElementById("age").value.trim();
		var agetipobj=document.getElementById("agetip");
		var ageReg=/^\d*$/;
		if(ageReg.test(ageStr)){
			if(((parseInt(ageStr))>=17)&&((parseInt(ageStr))<=100)){
				(document.getElementById("age")).style.border="#66FF33 2px solid";
				agetipobj.childNodes[0].nodeValue="ok";
				agetipobj.style.color="#0000FF";
				return true;
			}else{
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄范围错误！";
				agetipobj.style.color="red";
				return false;
			}
		}else{
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄格式错误！";
				agetipobj.style.color="red";
				return false;
		}
	}
	
	<!--身份证验证  -->
	function cardInputOnblur(){
		var cardStr=document.getElementById("card").value.trim();
		var cardtipobj=document.getElementById("cardtip");
		var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
		if(cardReg.test(cardStr)){
				(document.getElementById("card")).style.border="#66FF33 2px solid";
				cardtipobj.childNodes[0].nodeValue="ok";
				cardtipobj.style.color="#0000FF";
				return true;
		}else{
				(document.getElementById("card")).style.border="red 2px solid";	
				cardtipobj.childNodes[0].nodeValue="身份证号码错误，请输入合法身份证!";
				cardtipobj.style.color="red";
				return false;
		}
	}

<!--即时验证------------------------------------------------------------------------------------------up-----end  -->


<!-- 提交时验证 -->
	function register(){
		<!--验证用户名  -->
		var usernameStr=document.getElementById("username").value.trim();
		var usernametipobj=document.getElementById("usernametip");
		var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig; 		
		if(usernameStr==null||usernameStr==""||usernameStr.length<=1||usernameStr.length>5){
			(document.getElementById("username")).style.border="red 2px solid";	
			usernametipobj.childNodes[0].nodeValue="2-4个中文字符";
			usernametipobj.style.color="red";		
			return false;			
		}else{
			if(!reg.test(usernameStr)){
				(document.getElementById("username")).style.border="red 2px solid";	
				usernametipobj.childNodes[0].nodeValue="请输入中文";
				usernametipobj.style.color="red";
				return false;			
			}else{
				(document.getElementById("username")).style.border="#66FF33 2px solid";
				usernametipobj.childNodes[0].nodeValue="ok";
				usernametipobj.style.color="#0000FF";			
			}	
		}
		
	<!-- 密码验证 -->
		var passwordStr=document.getElementById("password").value.trim();
		var passwordtipobj=document.getElementById("passwordtip");
		// alert(passwordStr.length);
		if(passwordStr==""||passwordStr==null||passwordStr.length<8||passwordStr.length>16){
				(document.getElementById("password")).style.border="red 2px solid";	
				passwordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符";
				passwordtipobj.style.color="red";
				return false;
		
		}else{
				(document.getElementById("password")).style.border="#66FF33 2px solid";
				passwordtipobj.childNodes[0].nodeValue="ok";
				passwordtipobj.style.color="#0000FF";								
		}	
		
	<!--重复密码验证  -->
		var repeatpasswordStr=document.getElementById("repeatpassword").value.trim();
		var repeatpasswordtipobj=document.getElementById("repeatpasswordtip");
		if(repeatpasswordStr.length!=passwordStr.length||passwordStr!=repeatpasswordStr){
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="与前一次输入的密码不匹配!";
				repeatpasswordtipobj.style.color="red";
				return false;
		}else{
			if(passwordStr.length<8||passwordStr.length>16){
				(document.getElementById("repeatpassword")).style.border="red 2px solid";	
				repeatpasswordtipobj.childNodes[0].nodeValue="密码长度为8-16个字符!";
				repeatpasswordtipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("repeatpassword")).style.border="#66FF33 2px solid";
				repeatpasswordtipobj.childNodes[0].nodeValue="ok";
				repeatpasswordtipobj.style.color="#0000FF";
			}
		}	
		
	<!--验证电话号码  -->
		var telStr=document.getElementById("tel").value.trim();
		var teltipobj=document.getElementById("teltip");
		var telReg=/^\d*$/;
		if(telStr.length<7||telStr.length>12){
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码长度错误!(7-12位)";
				teltipobj.style.color="red";
				return false;
		}else{
			if(!telReg.test(telStr)){
				(document.getElementById("tel")).style.border="red 2px solid";	
				teltipobj.childNodes[0].nodeValue="电话号码格式错误!(请输入合法的号码)!";
				teltipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("tel")).style.border="#66FF33 2px solid";
				teltipobj.childNodes[0].nodeValue="ok";
				teltipobj.style.color="#0000FF";
			}
		} 	
	<!--验证QQ  -->
		var qqStr=document.getElementById("qq").value.trim();
		var qqtipobj=document.getElementById("qqtip");
		var qqReg=/^\d*$/;
		if(qqStr.length<4||qqStr.length>15){
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="QQ号码长度不正确!";
				qqtipobj.style.color="red";
				return false;
		}else{
			if(!qqReg.test(qqStr)){
				(document.getElementById("qq")).style.border="red 2px solid";	
				qqtipobj.childNodes[0].nodeValue="请输入正确的号码!";
				qqtipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("qq")).style.border="#66FF33 2px solid";
				qqtipobj.childNodes[0].nodeValue="ok";
				qqtipobj.style.color="#0000FF";
			}
		}		
	<!--生日日期验证  -->
	<!--农历生日 -->
		var brithdayStr=document.getElementById("brithday").value.trim();
		var brithdaytipobj=document.getElementById("brithdaytip");
		var brithdayReg=/^\d*$/;
		if(!brithdayReg.test(brithdayStr)){
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
		}else{
			if(brithdayStr.length!=4){
				(document.getElementById("brithday")).style.border="red 2px solid";	
				brithdaytipobj.childNodes[0].nodeValue="农历日期长度错误，如:0609";
				brithdaytipobj.style.color="red";
				return false;
			}else{
				if((brithdayStr.substring(0,2)<1)||(brithdayStr.substring(0,2)>12)||((brithdayStr.substring(2,4)<1)||(brithdayStr.substring(2,4)>29))){
					(document.getElementById("brithday")).style.border="red 2px solid";	
					brithdaytipobj.childNodes[0].nodeValue="农历日期范围错误，如:0609";
					brithdaytipobj.style.color="red";
					return false;
				}else{
					(document.getElementById("brithday")).style.border="#66FF33 2px solid";
					brithdaytipobj.childNodes[0].nodeValue="ok";
					brithdaytipobj.style.color="#0000FF";
				}
			}
		}	
		

	<!--年龄验证  -->
		var ageStr=document.getElementById("age").value.trim();
		var agetipobj=document.getElementById("agetip");
		var ageReg=/^\d*$/;
		if(!ageReg.test(ageStr)){
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄格式错误！";
				agetipobj.style.color="red";
				return false;
		}else{
			if(((parseInt(ageStr))<17)||((parseInt(ageStr))>100)){
				(document.getElementById("age")).style.border="red 2px solid";	
				agetipobj.childNodes[0].nodeValue="年龄范围错误！";
				agetipobj.style.color="red";
				return false;
			}else{
				(document.getElementById("age")).style.border="#66FF33 2px solid";
				agetipobj.childNodes[0].nodeValue="ok";
				agetipobj.style.color="#0000FF";
			}
		}
<!-- 身份证验证 -->
		var cardStr=document.getElementById("card").value.trim();
		var cardtipobj=document.getElementById("cardtip");
		var cardReg=/^(\d{14}|\d{17})(\d|[xX])$/;
		if(!cardReg.test(cardStr)){
				(document.getElementById("card")).style.border="red 2px solid";	
				cardtipobj.childNodes[0].nodeValue="身份证号码错误，请输入合法身份证!";
				cardtipobj.style.color="red";
				return false;
		}else{
				(document.getElementById("card")).style.border="#66FF33 2px solid";
				cardtipobj.childNodes[0].nodeValue="ok";
				cardtipobj.style.color="#0000FF";
		}		
		
		return true;
	}	
		
<!-- 提交时验证-------------------------------------------------------------------------------end -->	

<!-- ajax -->
	function sendAjax(servletURL){
		sendRequest();

			//create xmlhttprequest object
			var xmlhttprequest;
			function createXmlHttpRequest(){
				if(window.navigator.appName == "Microsoft Internet Explorer"){
					xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP");
				}else{
					xmlhttprequest = new XMLHttpRequest();
				}
			}	
			

			function sendRequest(){
				var url =servletURL;
				var sendData = "getJSON";
				createXmlHttpRequest();
				//alert("ok");
				xmlhttprequest.open("POST",url,true);
				xmlhttprequest.onreadystatechange = handleStateChange;
				xmlhttprequest.setRequestHeader("Content-Type","application/x-www-form-rulencoded;");
				xmlhttprequest.send(sendData);
			}
			
			
			function handleStateChange(){
				if(xmlhttprequest.readyState == 4)
				{
					if(xmlhttprequest.status == 200){
						//alert("getRequest sended");
						parseResults();
					}else{
						//alert("error1");
					}
				}else{
					
				}
			}
			
			var jsondatas;
			function parseResults(){
				var returntext = xmlhttprequest.responseText;
				alert(typeof(returntext));
				jsondatas = eval('('+returntext+')');
				alert(jsondatas.company[1].companyname);
			}
			
			
			return jsondatas;
				
	}
<!-- ajax -------------------------------------------------------------------------->

	var jss ={"company":[{"companyname":"中昱达"},{"companyname":"新昱"}]};
	function updateselectdepvalue(){
		var getselect = document.getElementById("comp");
		if(getselect.options.length>1){
			getselect.options.length=1;
			updata_comp();
		}else{
			updata_comp();
		}
		
	}
	
	function updata_comp(){
			//var jsonda = sendAjax("CMS/returnCompanyNameServlet");
			//get select
			var getselect = document.getElementById("comp");
			//create option
	
			//for(var s = 0;s<jsonda.length;s++){
				var createoption = document.createElement("option");
				createoption.setAttribute("value", jss.company[1].companyname);
				var textnode = document.createTextNode(jss.company[1].companyname);
				createoption.appendChild(textnode);
				getselect.appendChild(createoption);
			//}
		
	

		
		
	}
</script>

	
</body>

</html>
