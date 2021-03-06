﻿/*jQuery.extend(jQuery.validator.messages, {
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

	$("#proname").focus();
	$("#proname").bind("keydown", sub);
	$("#procontent").bind("keydown", sub);

	$("#promakeFrm").validate({ 
	
		rules:{ 	
			proname:{
				required:true,
				minlength:5,
				maxlength:30
			},
			procontent:{
				required:true,
				//value:/[^\u4E00-\u9FA5] /g,
				minlength:5,
				maxlength:200
			}
		}, 
		
		messages:{ 
		
			proname:{
				required:"必填项",
				minlength:jQuery.format(" 长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 长度不超过 {0} 位 ")
			},		
			procontent:{
				required:"必填项", 
				minlength:jQuery.format(" 长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 长度不超过 {0} 位 ")
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
	if(!$("#promakeFrm").validate().form()) return;
	$.ajax({
		url:"makeproject.do",
		data:{proname:$("#proname").val(), procontent:$("#procontent").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("编制成功！");
				window.location.href = "makeproject.html";
			}
			else{
				alert("发生异常，编制失败，请联系管理员！");
			}
		}
	});
}


