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

	$("#appcomname").focus();
	//$("#appcomname").bind("keydown", sub);
	//$("#appcomcontent").bind("keydown", sub);
	$("#empcomid").bind("keydown", sub);
	$("#empcomname").bind("keydown", sub);

	$("#appcomFrm").validate({ 
	
		rules:{ 	
			appcomname:{
				required:true,
				minlength:2,
				maxlength:50
			},
			appcomcontent:{
				required:true,
				//value:/[^\u4E00-\u9FA5] /g,
				minlength:5,
				maxlength:200
			},
			empcomid:{
				required:true,
				minlength:4,
				maxlength:10
			},
			empcomname:{
				required:true,
				//value:/[^\u4E00-\u9FA5] /g,
				minlength:2,
				maxlength:5
			}
		}, 
		
		messages:{ 
		
			appcomname:{
				required:"必填项",
				minlength:jQuery.format(" 长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 长度不超过 {0} 位 ")
			},		
			appcomcontent:{
				required:"必填项", 
				minlength:jQuery.format(" 长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 长度不超过 {0} 位 ")
			},
			empcomid:{
				required:"必填项",
				minlength:jQuery.format(" ID长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" ID长度不超过 {0} 位 ")
			},		
			empcomname:{
				required:"必填项", 
				minlength:jQuery.format(" 名字长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 名字长度不超过 {0} 位 ")
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
	if(!$("#appcomFrm").validate().form()) return;
	$.ajax({
		url:"appcom.do",
		data:{appcomname:$("#appcomname").val(), appcomcontent:$("#appcomcontent").val(), empcomid:$("#empcomid").val(), empcomname:$("#empcomname").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("成功提交申请信息！");
				window.location.href = "comapply.jsp";
			}
			else{
				alert("发生异常，添加失败，请联系管理员！");
			}
		}
	});
}


