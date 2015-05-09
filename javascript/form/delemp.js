$(document).ready(function(){
	
	$("#empid").focus();
	$("#empid").bind("keydown", sub);
	$("#empidag").bind("keydown", sub);

	$("#empdelFrm").validate({ 
	
		rules:{ 	
			empid:{
				required:true,
				minlength:4,
				maxlength:10
			},
			/*empname:{
				required:true,
				//value:/[^\u4E00-\u9FA5] /g,
				minlength:2,
				maxlength:5
			},
			empkey:{
				required:true,
				minlength:6,
				maxlength:12
			},	*/	
			empidag:{		
				required:true, 			
				equalTo:"#empid" 	
			}
		}, 
		
		messages:{ 
		
			empid:{
				required:"必填项",
				minlength:jQuery.format(" ID长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" ID长度不超过 {0} 位 ")
			},		
			/*empname:{
				required:"必填项", 
				minlength:jQuery.format(" 名字长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 名字长度不少于 {0} 位 "),
			},
			empkey:{
				required:"必填项",
				minlength:jQuery.format(" 密码长度不少于 {0} 位 "), 
				maxlength:jQuery.format(" 密码长度不少于 {0} 位 "),
			},	*/	
			empidag:{ 		
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
	if(!$("#empdelFrm").validate().form()) return;
	$.ajax({
		url:"delemp.do",
		data:{empid:$("#empid").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				alert("删除成功！");
				window.location.href = "delemp.html";
			}
			else if(data == '2')
			{
				alert("不能删除管理员！");
			}
			else if(data == '0') {
				alert("该人员ID不存在！");
			}
			else if(data == '3')
			{
				alert("该人员不属于您的公司！");
			}
			else{
				alert("发生异常，删除失败，请联系管理员！");
			}
		}
	});
}