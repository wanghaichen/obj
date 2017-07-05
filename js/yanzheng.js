$(function(){
    $("form :input.required").each(function(){
      var $required = $("<strong class='high'> *</strong>"); 
      $(this).parent().append($required); 
    });
    $('form :input').blur(function(){
       var $parent = $(this).parent();
       $parent.find(".formtips").remove();
       //验证电话
       if( $(this).is('#username') ){
	      
          if( this.value=="" ||(this.value!="" && !/^1[34578]\d{9}$/.test(this.value))){
            var errorMsg = '请输入电话.';
            $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
          }else{
            var okMsg = '输入正确.';
            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
          }
       }
	   //验证密码
	   if( $(this).is('#userPass') ){
	     console.log(this.value.length)
          if( this.value=="" || this.value.length<6){
            var errorMsg = '请输入密码.';
            $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
          }else{
            var okMsg = '输入正确.';
            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
          }
       }
       //验证邮件
       if( $(this).is('#email') ){
        if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
           var errorMsg = '请输入正确的E-Mail地址.';
           $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
        }else{
           var okMsg = '输入正确.';
           $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
        }
       }
		}).keyup(function(){
		$(this).triggerHandler("blur");
		}).focus(function(){
        $(this).triggerHandler("blur");
		});//end blur
 
     
    //提交，最终验证。
     $('#send').click(function(){
        $("form :input.required").trigger('blur');
        var numError = $('form .onError').length;
        if(numError){
          return false;
        } 
        alert("注册成功!");
     });
 
    //重置
     $('#res').click(function(){
        $(".formtips").remove(); 
     });
})
//]]>