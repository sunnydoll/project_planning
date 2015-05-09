$(document).ready(function() {

	$("#empid").focus();
	$("#empid").bind("keydown", sub);
	$("#empkey").bind("keydown", sub);
	
	function sub(event) {
		if(event.keyCode == '13')
			valid();
	}
});
	
	function valid() {
	
		if($("#empid").val() == "" || $("#empkey").val() == "") {
				alert("未输入用户名或者密码！");
				return false;
			}
		
		else {
			$.ajax({
				url:"login.do",
				//$.post(),
				data:{empid:$("#empid").val(), empkey:$("#empkey").val()},
				success:function(data) {
					if(data == '1') {
						window.location.href = "index.html";
					}
					else if(data == '0'){
						window.location.href = "indexemp.html";
					}
					else if(data == '4'){
						window.location.href = "highindex.html";
					}
					else if(data == '2') {
						alert("用户名或者密码错误！");
						return false;
					} else{
						alert("服务器错误，请联系管理员！");
						return false;
					}
				}
			});
		    //return true;
		}
	
	}
	
	function apply() {
		window.location.href = "comapply.jsp";
	}

/*});*/