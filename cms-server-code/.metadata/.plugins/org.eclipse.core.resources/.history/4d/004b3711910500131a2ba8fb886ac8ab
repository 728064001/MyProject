<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%request.setCharacterEncoding("utf-8");%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>cms admin</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" href="css/zTreeStyle/zTreeStyle.css" />
	<link rel="stylesheet" href="css/admin.css" />
	<link rel="stylesheet" href="css/admin_modifiypersoninfodiv.css" />
	<link rel="stylesheet" href="css/admin_addpersondiv.css" />
	<script type="text/javascript" src="js/jquery-1.10.1.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.core-3.5.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.excheck-3.5.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.exedit-3.5.js"></script>
	<script type="text/javascript" src="js/admin.js"></script>
	<script type="text/javascript" src="js/updatapersoninfovalidata.js"></script>
	<script type="text/javascript" src="js/admin_addperson.js"></script>
</head>

<body>
<table align="center" cellspacing="1" class="admin-main-tab-style" style="width: 1300px; height: 900px">
	<tr bgcolor="#C0C0C0">
		<td class="admin-main-tab-td-style" style="height: 17px; width: 211px">
		<span class="admin-main-tab-td-logo-style">CMS</span> <span class="admin-main-tab-td-admins-style"><strong>admin</strong></span></td>
		<td class="admin-child-tab-td-null-style" style="height: 17px">
		<table cellspacing="1" class="admin-child-tab-style" style="width: 220px; height: 100%">
			<tr>
				<td>IP:192.168.1.1</td>
				<td class="admin-child-tab-td-welcome-style">修改信息</td>
			</tr>
			<tr>
				<td>2013/8/1 23:14</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>XX 欢迎登录 CMS</td>
				<td class="admin-child-tab-td-welcome-style">Logout</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td style="width: 211px; height: 808px;" align="left" valign="top">
		<table cellspacing="1" class="style8" style="width: 100%; height: 100%">
			<tr>
				<td align="left" style="height: 281px" valign="top">
				<table cellspacing="1" class="style9" style="width: 100%; height: 100%">
					<tr>
						<td class="admin-child-tab-td-welcome-style" style="height: 95px">
						<img src="image/userimage.jpg" height="85" width="85" /></td>
					</tr>
					<tr>
						<td align="left" valign="top">
						<table cellspacing="1" style="width: 100%; height: 100%">
							<tr>
								<td class="admin-child-tab-td-welcome-style" colspan="2"><strong>石头</strong></td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">性别:</td>
								<td>
								<img alt="" height="11" src="image/male.gif" width="11" /></td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">帮派:</td>
								<td>xxxxxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">职务:</td>
								<td>xxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">书信:</td>
								<td>xxxxxxxxxxxx</td>
							</tr>
							<tr>
								<td class="admin-main-tab-style0" style="width: 69px">我的装备</td>
								<td>&nbsp;</td>
							</tr>
						</table>
						</td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td align="left" valign="top">
				<hr /><hr/>
				<strong><span class="admin-main-tab-style1">[ 业务区 ]<br/>
				<!--tree-->
				</span></strong>
				<div>
				<ul id="treeDemo" class="ztree"></ul></div>
				<hr/>
				</td>
			</tr>
		</table>
		</td>
		<td style="height: 808px" bgcolor="#FAFAFA" align="left" valign="top">
		<!--业务工作区-->
		<!--人员信息DIV-->
		<div id="personinfo" style="position: absolute; width: 1080px; height: 808px; z-index: 1">
			<table cellspacing="1" class="admin-main-tab-admin-child-tab-td-null-style" style="width: 100%; height: 100%">
				<tr>
					<td bgcolor="#808080" style="height: 20px">
					<table cellpadding="0" cellspacing="0" style="width: 100%; height: 100%">
						<tr>
							<td>&nbsp;<strong><span class="admin-main-tab-admin-main-tab-td-logo-style">人员信息&nbsp;</span></strong></td>
							<td class="admin-child-tab-td-null-style">
							<img id="personinfo_close_image" alt="" height="23" src="image/personinfo_close.png" width="26" /></td>
						</tr>
					</table>
					</td>
				</tr>
				<tr>
					<td style="height: 33px"><span class="admin-main-tab-style1">UUID</span>:<input name="quuid" id="quuid" type="text" style="width: 81px" /> 
					<span class="admin-main-tab-style1">姓名</span>:<input name="qusername" id="qusername" type="text" style="width: 59px" />&nbsp;<span class="admin-main-tab-style1">性别</span>:<select name="qsex" id="qsex">
						<option value="--">--</option>
						<option value="女">女</option>
						<option value="男">男</option>
						</select>&nbsp;<span class="admin-main-tab-style1">公司</span>:<select name="qcomp" id="qcomp" style="width: 65px">
						<option value="--">--</option>
						</select>&nbsp;<span class="admin-main-tab-style1">部门:</span><select name="qdep" id="qdep" style="width: 85px">
						<option value="--">--</option>
						</select>&nbsp;<span class="admin-main-tab-style1">职位</span>:<select name="qpost" id="qpost" style="width: 95px">
						<option value="--">--</option>
						</select>&nbsp;&nbsp;<span class="admin-main-tab-style1"> 
					身份证:</span><input name="qcard" id="qcard" type="text" style="width: 130px" /> 
					<span class="admin-main-tab-style1">电话:</span><input name="qtel" id="qtel" type="text" style="width: 81px" />&nbsp;&nbsp;<input name="search" id="search" type="button" value="查找" style="width: 50px" /></td>
				</tr>
				<tr>
					<td align="left" valign="top">&nbsp;&nbsp;&nbsp; &nbsp;<img alt="" height="18" src="image/addperson.png" width="18" /><span id="aperson" class="admin-main-tab-admin-main-tab-td-admins-style">添加人员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					</span>
					<hr style="height: -12px"/>
					<!--根据ajax 返回的数据动态创建表格 -->
					<div id="personinfotable"></div>
						<span id="f" ><a class="fto" id='mainpa'>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='uppa'>上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='downpa'>下一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="fto" id='lastpa'>最后一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
						跳转到<input id="pagenum" type="text" width="80px" />页&nbsp;<input id="pagejump" type="button"  value="转到>"/>
						</span><span id="dqpages"></span>&nbsp;&nbsp;/&nbsp;&nbsp;<span id="zpages"></span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="countrow"></span>&nbsp;&nbsp;&nbsp;每页显示<select id="qeachpr"><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>条数据<hr/>
					<!--根据ajax 返回的数据动态创建表格 ----------------------------------->
					</td>
				</tr>
			</table>
		</div>
		<!--人员信息DIV-->	
		<!-- 修改人员信息DIV -->
		<div id="modifiypersoninfo" style="position: absolute;background-color:#FFFFFF; width: 1014px; height: 483px; z-index: 1;">
	<table cellspacing="0" class="admin-modifiypersoninfo-main-tablel-style" style="width: 100%; height: 100%">
		<tr>
			<td style="height: 21px">
			<table cellspacing="0" class="admin-modifiypersoninfo-tableltitle-style" style="width: 100%; height: 100%">
				<tr bgcolor="#808080">
					<td class="admin-modifiypersoninfo-tablellogo-style"><strong>修改人员信息</strong></td>
					<td class="admin-modifiypersoninfo-divhidebutton-style">
					<img alt="关闭" id="closeModifiyPersonInfo"  height="20" src="image/personinfo_close.png" width="21" /></td>
				</tr>
			</table>
			</td>
		</tr>
		<tr>
			<td align="left" valign="top">
			<table cellpadding="0" cellspacing="0" class="admin-modifiypersoninfo-childrentable-style" style="width: 100%; height: 100%; color: #C0C0C0;">
				<tr>
					<td class="admin-modifiypersoninfo-divhidebutton-style"><span class="admin-modifiypersoninfo-formtag-style"><strong>姓名</strong></span>:<input name="updatausername" id="updatausername" type="text" style="height: 25px;width:100px" /></td>
					<td id="updatausernametip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp;</td>
					<td style="width: 270px"><span class="admin-modifiypersoninfo-formtag-style"><strong>年龄</strong></span>:<input name="updataage" id="updataage" type="text" style="width: 82px; height: 25px;" /></td>
					<td id="updataagetip" style="width: 270px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
				</tr>
				<tr>
					<td class="admin-modifiypersoninfo-divhidebutton-style"><span class="admin-modifiypersoninfo-formtag-style"><strong>性别:</strong></span>
						<input name="updatasex" id="male" type="radio" value="男" /><span class="admin-modifiypersoninfo-sexfont-style">男&nbsp;&nbsp;&nbsp;&nbsp; 
					</span> 
					<input name="updatasex" id="female" type="radio" value="女" class="admin-modifiypersoninfo-tablellogo-style"  /><span class="admin-modifiypersoninfo-sexfont-style">女
					 
					</span>
					</td>
					<td id="updatasextip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
					<td style="width: 270px"><span class="admin-modifiypersoninfo-formtag-style"><strong>电话:</strong></span><input name="updatatel" id="updatatel" type="text" style="height: 25px" /></td>
					<td id="updatateltip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
				</tr>
				<tr>
					<td class="admin-modifiypersoninfo-divhidebutton-style"><span class="admin-modifiypersoninfo-formtag-style"><strong>QQ:</strong></span><input name="updataqq" id="updataqq" type="text" style="height: 25px" /></td>
					<td id="updataqqtip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
					<td style="width: 270px"><span class="admin-modifiypersoninfo-formtag-style"><strong>生日:</strong></span><input name="updatabrithday" id="updatabrithday" type="text" style="width: 82px; height: 25px;" /></td>
					<td id="updatabrithdaytip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
				</tr>
				<tr>
					<td class="admin-modifiypersoninfo-divhidebutton-style"><span class="admin-modifiypersoninfo-formtag-style"><strong>身份证:</strong></span><input name="updatacard" id="updatacard" type="text" style="width: 216px; height: 25px;" /></td>
					<td id="updatacardtip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
					<td style="width: 270px"><span class="admin-modifiypersoninfo-formtag-style"><strong>公司:</strong></span>
						<select name="updatacomp" id="updatacomp" style="width: 81px; height: 22px;">
						</select>
					</td>
					<td id="updatacomptip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
				</tr>
				<tr>
					<td class="admin-modifiypersoninfo-divhidebutton-style"><span class="admin-modifiypersoninfo-formtag-style"><strong>部门:</strong></span><select name="updatadep" id="updatadep" style="width: 81px; height: 22px;">
						</select></td>
					<td id="updatadeptip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
					<td style="width: 270px"><span class="admin-modifiypersoninfo-formtag-style"><strong>职位:</strong></span><select name="updatapost" id="updatapost" style="width: 121px">
						</select></td>
					<td id="updataposttip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					&nbsp; </td>
				</tr>
				<tr>
					<td class="admin-modifiypersoninfo-deletetable-style">
						&nbsp;<span class="admin-modifiypersoninfo-deletetablequeren-style">确认？</span><input name="yesdel" id="yesdel" type="checkbox" />
&nbsp;
						<input name="deletepersoninfo" id="deletepersoninfo" style="background-color:#E84940;width: 141px; height: 69px" type="button" value="删除当前人员" />
					</td>
					<td>&nbsp;</td>
					<td style="width: 270px">
						<input name="updatapersoninfo" id="updatapersoninfo" style="background-color:#A5E373; width: 179px; height: 84px;" type="button" value="确 认 修 改"/></td>
					<td>&nbsp;</td>
				</tr>
			</table>
			</td>
		</tr>
	</table>
</div>
		<!-- 修改人员信息DIV -->
		<!-- 添加人员DIV -->
	<div id="addperson" style="position: absolute; background-color:white; width: 1080px; height: 800px; z-index: 1">
	<table cellpadding="0" cellspacing="0" class="admin-addperson-maintable-style" style="width: 100%; height: 100%">
		<tr>
			<td style="height: 18px">
			<table cellpadding="0" cellspacing="0" class="admin-addperson-title-style" style="width: 100%; height: 100%">
				<tr bgcolor="#808080">
					<td><span class="admin-addperson-titletext-style"><strong>添加人员</strong></span></td>
					<td class="admin-addperson-titleimg-style">
					<img alt="关闭窗口" id="closeaddpersonwindowimg" height="22" src="image/personinfo_close.png" width="25" /></td>
				</tr>
			</table>
			</td>
		</tr>
		<tr>
			<td align="left" valign="top">
			<table cellpadding="0" cellspacing="0" class="admin-addperson-maintable-style" style="width: 100%; height: 100%">
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>用户名:</strong></td>
					<td style="width: 418px">
						<input name="ausername" id="ausername" type="text" style="width: 170px; height: 27px" />
					</td>
					<td class="admin-addperson-tip-style" id="ausernametip">用户真实姓名(中文)</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>邮&nbsp; 箱:</strong></td>
					<td style="width: 418px">
						<input name=aemail id="aemail" type="text" style="width: 213px; height: 27px" /><span class="admin-addperson-tip3-style">该邮箱为系统发送客户注册密码用.请预留注册用户本人的邮箱，确保能收到系统邮件！</span></td>
					<td class="admin-addperson-tip2-style" id="aemailtip">填写注册用户本人真实有效邮箱</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>性&nbsp; 别:</strong></td>
					<td style="width: 418px"><span class="admin-addperson-sextxt-style">男
						</span>
						<input name="asex" type="radio" value="男" class="admin-addperson-sextxt-style" /><span class="admin-addperson-sextxt-style">&nbsp;&nbsp;&nbsp;&nbsp; 
					女</span><input name="asex" type="radio" value="女" /></td>
					<td id="asextip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>QQ:</strong></td>
					<td style="width: 418px">
						<input name="aqq" id="aqq" type="text" style="width: 170px; height: 27px" /></td>
					<td id="aqqtip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>联系电话:</strong></td>
					<td style="width: 418px">
						<input name="atel" id="atel" type="text" style="width: 170px; height: 27px" /></td>
					<td id="ateltip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>生日日期:</strong></td>
					<td style="width: 418px">
						<input name="abrithday" id="abrithday" type="text" style="width: 99px; height: 27px" /></td>
					<td id="abrithdaytip" class="admin-addperson-tip2-style">4位农历生日 如：农历5月初9就是 0509</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>年&nbsp; 龄:</strong></td>
					<td style="width: 418px">
						<input name="aage" id="aage" type="text" style="width: 99px; height: 27px" /></td>
					<td id="aagetip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>身份证号:</strong></td>
					<td style="width: 418px">
						<input name="acard" id="acard" type="text" style="width: 190px; height: 27px" /></td>
					<td id="acardtip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>所属公司:</strong></td>
					<td style="width: 418px">
						<select name="acompany" id="acompany">
						</select>
					</td>
					<td id="acompanytip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>部&nbsp; 门:</strong></td>
					<td style="width: 418px">
						<select name="adep" id="adep" style="width: 113px">
						</select></td>
					<td id="adeptip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px"><strong>职&nbsp; 位:</strong></td>
					<td style="width: 418px">
						<select name="apost" id="apost" style="width: 141px">
						</select></td>
					<td id="aposttip" class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
				<tr>
					<td class="admin-addperson-tag-style" style="width: 304px">&nbsp;</td>
					<td style="width: 418px" class="admin-addperson-maintable-style0">
		
						<input name="addpersonbut" id="addpersonbut" type="button" value="确认添加人员" style="height: 55px; width: 155px" />
					</td>
					<td class="admin-addperson-tip2-style">&nbsp;</td>
				</tr>
			</table>
			</td>
		</tr>
	</table>
</div>
		
		<!-- 添加人员DIV -->
		</td>
	</tr>
	<tr bgcolor="#C0C0C0">
		<td style="height: 33px;" class="admin-child-tab-td-welcome-style" colspan="2">
		<span style="color: rgb(81, 81, 81); font-family: Arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; display: inline !important; float: none;">
		Copyright ©&nbsp; 2013 zyeeda. All Rights Reserved</span></td>
	</tr>
</table>
</body>

</html>
