function valid(){
	//alert("fuck");
	if(!$("#checkproFrm").validate().form()) return;
	$.ajax({
		url:"checkprodetails.do",
		data:{proid:$("#proid").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				//alert("删除成功！");
				window.location.href = "checkproindetails.jsp";
			}
			/*else if(data == '0') {
				alert("该人员ID不存在！");
			} */
			else{
				alert("发生异常，查看失败，请联系管理员！");
			}
		}
	});
}