function valid(){
	//alert("fuck");
	if(!$("#checktaskFrm").validate().form()) return;
	$.ajax({
		url:"checktaskdetails.do",
		data:{taskid:$("#taskid").val()},
		success:function(data) {
			//alert(data);
			if(data == '1') {
				//alert("删除成功！");
				window.location.href = "checktaskindetails.jsp";
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