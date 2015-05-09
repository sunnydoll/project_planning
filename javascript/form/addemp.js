/*jQuery.extend(jQuery.validator.messages, {
   required: "必填",
   remote: "请修正该字段",
   email: "请输入正确格式的电子邮件",
   url: "请输入合法的网址",
   date: "请输入合法的日期",
   dateISO: "请输入合法的日期 (ISO).",
   number: "请输入合法的数字",
   digits: "只能输入整数",
   creditcard: "请输入合法的信用卡号",
   equalTo: "请确认密码相同",
   accept: "请输入拥有合法后缀名的字符串",
   maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
   minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
   rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
   range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
   max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
   min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});*/

$(document).ready(function(){ 
	
	$("#empid").focus();
	$("#empid").bind("keydown", sub);
	$("#empname").bind("keydown", sub);
	$("#empkey").bind("keydown", sub);
	$("#empkeyag").bind("keydown", sub);

	$("#empaddFrm").validate({ 
	
		rules:{ 	
			empid:{
				required:true,
				minlength:4,
				maxlength:10
			},
			empname:{
				required:true,
				//value:/[^\u4E00-\u9FA5] /g,
				minlength:2,
				maxlength:5
			},
			empkey:{
				required:true,
				minlength:6,
				maxlength:12
			},		
			empkeyag:{		
				required:true, 			
				equalTo:"#empkey" 	
			}
		}, 
		
		messages:{ 
		
			empid:{
				required:"必填项",
				minlength:jQuery.format(" ID长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" ID长度不超过 {0} 位 ")
			},		
			empname:{
				required:"必填项", 
				minlength:jQuery.format(" 名字长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 名字长度不超过 {0} 位 ")
			},
			empkey:{
				required:"必填项",
				minlength:jQuery.format(" 密码长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 密码长度不超过 {0} 位 ")
			},		
			empkeyag:{ 		
				required:"必填项",			
				equalTo:" 密码不一致" 	
			}	
		} 		
	});

});

function sub(event) {
	if(event.keyCode == '13')
		valid();
}

function valid(){
	//alert("fuck");
	if(!$("#empaddFrm").validate().form()) return;
	$.ajax({
		url:"addemp.do",
		data:{empid:$("#empid").val(), empkey:$("#empkey").val(),empname:$("#empname").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("添加成功！");
				window.location.href = "addemp.html";
			}
			else if(data == '0') {
				alert("已有该人员ID，ID重复！");
			} 
			else{
				alert("发生异常，添加失败，请联系管理员！");
			}
		}
	});
}


