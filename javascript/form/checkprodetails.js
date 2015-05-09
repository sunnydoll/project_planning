$(document).ready(function(){ 
	
	$("#proname").focus();
	$("#proname").bind("keydown", sub);
	$("#procontent").bind("keydown", sub);
	
	$("#checkprodetailsFrm").validate({ 
	
		rules:{ 	
			proname:{
				required:true,
				minlength:5,
				maxlength:30
			},
			procontent:{
				required:true,
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
	if(!$("#checkprodetailsFrm").validate().form()) return;
	$.ajax({
		url:"modifyproject.do",
		data:{proid:$("#proid").val(), proname:$("#proname").val(), procontent:$("#procontent").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("修改成功！");
				window.location.href = "checkproject.do";
			}
			else{
				alert("发生异常，修改失败，请联系管理员！");
			}
		}
	});
}

function getback()
{
	window.location.href = "checkproject.do";
}
