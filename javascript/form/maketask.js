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
	
	$("#proid").focus();
	$("#proid").bind("keydown", sub);
	$("#taskcontent").bind("keydown", sub);

	$("#taskmakeFrm").validate({ 
	
		rules:{ 	
			proid:{
				required:true,
				digits:true,
				maxlength:6
			},
			taskcontent:{
				required:true,
				minlength:5,
				maxlength:200
			}
		}, 
		
		messages:{ 
		
			proid:{
				required:"必填项",
				digits:"必须是整数",
				maxlength:jQuery.format(" 长度不超过 {0} 位 ")
			},		
			taskcontent:{
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
	if(!$("#taskmakeFrm").validate().form()) return;
	$.ajax({
		url:"maketask.do",
		data:{proid:$("#proid").val(), taskcontent:$("#taskcontent").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("制定成功！");
				window.location.href = "choosepro.do";
			}
			else if(data == '0')
			{
				alert("与该项目号对应的项目不存在！");
			}
			else{
				alert("发生异常，制定失败，请联系管理员！");
			}
		}
	});
}

function getback()
{
	window.location.href = "choosepro.do";
}
