<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import="java.util.List, org.czc.planning.model.Employee"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="../css/main.css" />
<link rel="stylesheet" type="text/css" href="../css/menu.css" />
<script type="text/javascript" src="../javascript/jquery-1.6.4.js" charset="utf-8"></script>
<script type="text/javascript" src="../javascript/jquery.validate.js" charset="utf-8"></script>
<script type="text/javascript" src="../javascript/form/highmodifyinfoFrm.js" charset="utf-8"></script>
<title>修改信息</title>
</head>
<body bgcolor="#000000">
<div style="margin:0px auto;width:780px;">
<form id="highmodifyinfoFrm" name="highmodifyinfoFrm" method="get" action="">
<!-- ImageReady Slices (ven093 contact副本.psd) -->
<table id="main" width="780" height="801" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td rowspan="12">
			<img src="../images/index_01.jpg" width="50" height="800" alt=""></td>
		<td colspan="2" rowspan="3">
			<img src="../images/index_02.jpg" width="279" height="66" alt=""></td>
		<td colspan="4" rowspan="3">
			<img src="../images/index_03.gif" width="163" height="66" alt=""></td>
		<td colspan="3">
			<img src="../images/index_04.gif" width="94" height="27" alt=""></td>
		<td colspan="3">
			<img src="../images/index_05.gif" width="76" height="27" alt=""></td>
		<td colspan="2">
			<img src="../images/index_06.jpg" width="69" height="27" alt=""></td>
		<td rowspan="12">
			<img src="../images/index_07.jpg" width="49" height="800" alt=""></td>
	</tr>
	<tr>
		<td colspan="3" width="94" height="14" >
			<a href="../highindex.html"><img src="../images/index_08.gif" alt="" width="94" height="14" border="0"></a></td>
		<td colspan="3">
			<a href=""><img src="../images/index_09.gif" width="76" height="14" border="0"></a></td>
		<td colspan="2">
			<a href="../highaboutme.html"><img src="../images/index_10.gif" width="69" height="14" border="0"></a></td>
	</tr>
	<tr>
		<td colspan="3">
			<img src="../images/index_11.gif" width="94" height="25" alt=""></td>
		<td colspan="3">
			<img src="../images/index_12.gif" width="76" height="25" alt=""></td>
		<td colspan="2">
			<img src="../images/index_13.jpg" width="69" height="25" alt=""></td>
	</tr>
	<tr>
		<td colspan="2" rowspan="3">
			<a href="../highindex.html"><img src="../images/index_14.gif" alt="" width="279" height="61" border="0"></a></td>
		<td colspan="2">
			<img src="../images/index_15.gif" width="77" height="28" alt=""></td>
		<td colspan="2">
			<img src="../images/index_16.gif" width="86" height="28" alt=""></td>
		<td colspan="2">
			<img src="../images/index_17.gif" width="75" height="28" alt=""></td>
		<td colspan="3">
			<img src="../images/index_18.gif" width="79" height="28" alt=""></td>
		<td colspan="3">
			<img src="../images/index_19.jpg" width="85" height="28" alt=""></td>
	</tr>
	<tr height="22">
<!--		<td colspan="2" width="77" height="22" background="../images/index_20.gif"><div align="center" class="STYLE3">人员管理</span></div></td>
		<td colspan="2" width="86" height="22" background="../images/index_21.gif"><div align="center" class="STYLE3">任务管理</span></div></td>
		<td colspan="2" width="75" height="22" background="../images/index_22.gif"><div align="center" class="STYLE3">项目管理</div></td>
		<td colspan="3" width="79" height="22" background="../images/index_23.gif">&nbsp;</td>
		<td colspan="3" width="85" height="22" background="../images/index_24.gif">&nbsp;</td>-->
		
		<td colspan="2" width="77" height="22">
		<div class="menuone">
		<ul>  
			<li><a href="">&nbsp;&nbsp;人员管理&nbsp;&nbsp;&nbsp;
				<!--[if IE 7]><!--></a><!--<![endif]-->  
				<!--[if lte IE 6]><table><tr><td><![endif]-->  
				<ul>  
					<li><a href="../employee/choosecom.do">&nbsp;&nbsp;&nbsp;添加人员&nbsp;&nbsp;&nbsp;</a></li>
					<li><a href="../employee/highdelemp.do">&nbsp;&nbsp;&nbsp;查看人员&nbsp;&nbsp;&nbsp;</a></li>
					<li><a href="../employee/changeinfo.do">&nbsp;&nbsp;&nbsp;修改信息&nbsp;&nbsp;&nbsp;</a></li>  
				</ul>  
				<!--[if lte IE 6]></td></tr></table></a><![endif]-->  
			</li>
		</ul>
		</div>
		</td>
		<td colspan="2" width="86" height="22">
		<div class="menutwo">
		<ul>  
			<li><a href="">&nbsp;&nbsp;&nbsp;企业管理&nbsp;&nbsp;&nbsp;&nbsp;
				<!--[if IE 7]><!--></a><!--<![endif]-->  
				<!--[if lte IE 6]><table><tr><td><![endif]-->  
				<ul>
					<li><a href="../company/addcom.html">&nbsp;&nbsp;&nbsp;添加企业&nbsp;&nbsp;&nbsp;</a></li>  
					<li><a href="../company/checkcom.do">&nbsp;&nbsp;&nbsp;查看企业&nbsp;&nbsp;&nbsp;</a></li>
					<li><a href="../company/verifycompany.do">&nbsp;&nbsp;&nbsp;审核企业&nbsp;&nbsp;&nbsp;&nbsp;</a></li>  
					<!-- <li><a href="task/checktask.do">&nbsp;&nbsp;&nbsp;&nbsp;查看任务&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
					<li><a href="task/checkemp.do">&nbsp;&nbsp;&nbsp;&nbsp;查看人员&nbsp;&nbsp;&nbsp;&nbsp;</a></li> -->
				</ul>  
				<!--[if lte IE 6]></td></tr></table></a><![endif]-->  
			</li>
		</ul>
		</div>
		</td>
		<td colspan="2" width="75" height="22">
		<div class="menuthree">
		<ul>  
			<!-- <li><a href="">&nbsp;&nbsp;计划管理&nbsp;&nbsp;&nbsp; -->
				<!--[if IE 7]><!--></a><!--<![endif]-->  
				<!--[if lte IE 6]><table><tr><td><![endif]-->  
				<!-- <ul>  
					<li><a href="project/makeproject.html">&nbsp;&nbsp;&nbsp;计划编制&nbsp;&nbsp;&nbsp;</a></li>  
					<li><a href="project/checkproject.do">&nbsp;&nbsp;&nbsp;计划查看&nbsp;&nbsp;&nbsp;</a></li>  
					<li><a href="project/execheck.do">&nbsp;&nbsp;&nbsp;执行情况&nbsp;&nbsp;&nbsp;</a></li>
					<li><a href="project/exereport.html">&nbsp;&nbsp;&nbsp;进度报告&nbsp;&nbsp;&nbsp;</a></li>
				</ul>  --> 
				<!--[if lte IE 6]></td></tr></table></a><![endif]-->  
			<!-- </li> -->
		</ul>
		</div>		
		</td>
		<td colspan="3" width="79" height="22">
		<div class="menufour">
		<ul>  
			<li><a href="">&nbsp;&nbsp;文件管理&nbsp;&nbsp;&nbsp;
				<!--[if IE 7]><!--></a><!--<![endif]-->  
				<!--[if lte IE 6]><table><tr><td><![endif]-->  
				<!-- <ul>
					<li><a href="">&nbsp;&nbsp;&nbsp;文件上传&nbsp;&nbsp;</a></li>  
					<li><a href="">&nbsp;&nbsp;&nbsp;文件下载&nbsp;&nbsp;</a></li>
				</ul> -->
				<!--[if lte IE 6]></td></tr></table></a><![endif]-->  
			</li>
		</ul>
		</div>
		</td>
		<td colspan="3" width="85" height="22">
		<div class="menufive">
		<ul>  
			<li><a href="../logout.jsp">&nbsp;&nbsp;&nbsp;退出系统&nbsp;&nbsp;&nbsp;&nbsp;
				<!--[if IE 7]><!--></a><!--<![endif]-->  
				<!--[if lte IE 6]><table><tr><td><![endif]-->  
				 
				<!--[if lte IE 6]></td></tr></table></a><![endif]-->  
			</li>
		</ul>
		</div>
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<img src="../images/index_25.gif" width="77" height="11" alt=""></td>
		<td colspan="2">
			<img src="../images/index_26.gif" width="86" height="11" alt=""></td>
		<td colspan="2">
			<img src="../images/index_27.gif" width="75" height="11" alt=""></td>
		<td colspan="3">
			<img src="../images/index_28.gif" width="79" height="11" alt=""></td>
		<td colspan="3">
			<img src="../images/index_29.jpg" width="85" height="11" alt=""></td>
	</tr>
	<tr>
		<td colspan="14">
			<img src="../images/index_30.gif" width="681" height="37" alt=""></td>
	</tr>
	<tr>
		<td colspan="14" width="681" height="550" background="../images/login_content.gif">
		<div align="center">
		  <table width="500" border="1" cellpadding="30">
            <tr>
              <td background="../images/login_content_title.gif"><div align="center"><strong>修改个人信息</strong></div></td>
            </tr>
            <tr>
              <td align="center">
              <table width="450" border="0" align="center">				
				<%
				Employee emp = (Employee)request.getSession(true).getAttribute("empsql");
				String empid = emp.getEmpid();
				String empkey = emp.getEmpkey();
				String empname = emp.getEmpname();
				int emptitle = 1;
				int comid = emp.getComid();
				%>
				<tr>
                  <td><label for="empid">员工ID：</label></td>
                  <td><input type="text" id="empid" name="empid" value="<%=empid %>" readonly="true" style="background:none;text-align:center" width="120"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>                
                <tr>
                  <td><label for="empkey">登录密码：</label></td>
                  <td><input type="password" id="empkey" name="empkey" value="<%=empkey %>" width="120"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>  
                <tr>
                  <td><label for="empkeyag">重复密码：</label></td>
                  <td><input type="password" id="empkeyag" name="empkeyag" value="<%=empkey %>" width="120"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>    
                <tr>
                  <td><label for="empname">员工姓名：</label></td>
                  <td><input type="text" id="empname" name="empname" value="<%=empname %>" width="120"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>  
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>  
                <tr>
                  <td><label for="comid">所属公司号：</label></td>
                  <td><input type="text" id="comid" name="comid" value="<%=comid %>" readonly="true" style="background:none;text-align:center" width="120"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>                
                <tr>
                  <td>&nbsp;</td>
                  <td><input type="button" id="btnOK" name="btnOK" value="提交" onClick="return valid()" style="height:30; width:70">&nbsp;&nbsp;&nbsp;&nbsp;
				      <input type="reset" id="btnReset" name="btnReset" value="重置"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
				</table></td>
            </tr>
              </table>
		</div>
		</td>
	</tr>
	<tr>
		<td colspan="14">
			<img src="../images/index_32.gif" width="681" height="24" alt=""></td>
	</tr>
	<tr>
		<td>
			<img src="../images/index_33.jpg" width="252" height="22" alt=""></td>
		<td colspan="2" rowspan="3">
			<img src="../images/index_34.gif" width="84" height="62" alt=""></td>
		<td colspan="2">
			<img src="../images/index_35.gif" width="80" height="22" alt=""></td>
		<td colspan="2">
			<img src="../images/index_36.gif" width="77" height="22" alt=""></td>
		<td colspan="3">
			<img src="../images/index_37.gif" width="67" height="22" alt=""></td>
		<td colspan="3">
			<img src="../images/index_38.gif" width="70" height="22" alt=""></td>
		<td rowspan="3">
			<img src="../images/index_39.gif" width="51" height="62" alt=""></td>
	</tr>
	<tr>
		<td>
			<img src="../images/index_40.gif" width="252" height="15" alt=""></td>
		<td colspan="2">
			<a href=""><img src="../images/index_41.gif" alt="" width="80" height="15" border="0"></a></td>
		<td colspan="2">
			<a href=""><img src="../images/index_42.gif" alt="" width="77" height="15" border="0"></a></td>
		<td colspan="3">
			<a href=""><img src="../images/index_43.gif" alt="" width="67" height="15" border="0"></a></td>
		<td colspan="3">
			<img src="../images/index_44.gif" width="70" height="15" alt=""></td>
	</tr>
	<tr>
		<td>
			<img src="../images/index_45.jpg" width="252" height="25" alt=""></td>
		<td colspan="2">
			<img src="../images/index_46.gif" width="80" height="25" alt=""></td>
		<td colspan="2">
			<img src="../images/index_47.gif" width="77" height="25" alt=""></td>
		<td colspan="3">
			<img src="../images/index_48.gif" width="67" height="25" alt=""></td>
		<td colspan="3">
			<img src="../images/index_49.gif" width="70" height="25" alt=""></td>
	</tr>
	<tr>
		<td>
			<img src="../images/sep.gif" width="50" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="252" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="27" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="57" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="20" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="60" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="26" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="51" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="24" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="19" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="24" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="36" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="16" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="18" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="51" height="1" alt=""></td>
		<td>
			<img src="../images/sep.gif" width="49" height="1" alt=""></td>
	</tr>
</table>
<!-- End ImageReady Slices -->
</form>
</div>
</body>
</html>