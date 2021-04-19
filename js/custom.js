function send_message(){
	
	var n=jQuery("#name").val();
	var e=jQuery("#email").val();
	var mob=jQuery("#mobile").val();
	var me=jQuery("#message").val();
	
	
	
	if(n==""){
		alert('please enter name');
	}else if(e==""){
		alert('please enter email');
	}else if(mob==""){
		alert('please enter mobile');
	}else if(me==""){
		alert('please enter message');
	}else{
		$.ajax({
			url:'send_message.php',
			method:'post',
			data:{name: n, email: e, mobile: mob, message: me}
      })
			.done(function(msg){
        alert('Saved ' + msg);
      })
      .fail(function(errorMessage){
          alert('error: ' + errorMessage);
      });
	
}
}

function user_register(){
	jQuery('.field_error').html('');
	var name=jQuery("#name").val();
	var email=jQuery("#email").val();
	var mobile=jQuery("#mobile").val();
	var password=jQuery("#password").val();
	var is_error='';
	if(name==""){
		jQuery('#name_error').html('please enter name');
		is_error='yes';
	}if(email==""){
		jQuery('#email_error').html('please enter email');
		is_error='yes';
	}if(mobile==""){
		jQuery('#mobile_error').html('please enter mobile');
		is_error='yes';
	}if(password==""){
		jQuery('#password_error').html('please enter password');
		is_error='yes';
	}
	if(is_error==''){
		jQuery.ajax({
			url:'register_submit.php',
			type:'post',
			data:'name='+name+'&email='+email+'&mobile='+mobile+'&password='+password,
			success:function(result){
				if(result=='email_present'){
					jQuery('#email_error').html('Email id already exists');
				}
				if(result=='insert'){
					jQuery('.register-msg p').html('Thank you for registeration');
				}
				
			}
		});
	
	}
}


function user_login(){
	jQuery('.field_error').html('');
	var email=jQuery("#login_email").val();
	var password=jQuery("#login_password").val();
	var is_error='';
	if(email==""){
		jQuery('#login_email_error').html('please enter email');
		is_error='yes';
	}if(password==""){
		jQuery('#login_password_error').html('please enter password');
		is_error='yes';
	}
	if(is_error==''){
		jQuery.ajax({
			url:'login_submit.php',
			type:'post',
			data:'email='+email+'&password='+password,
			success:function(result){
				if(result=='wrong'){
					jQuery('.login-msg p').html('please enter valid login detail');
				}
				if(result=='valid'){
					window.location.href=window.location.href;
				}
				
			}
		});
	}
	}
	
function manage_cart(pid,type)
{
	
	if(type=='update'){
	 var qty=jQuery("#"+pid+"qty").val();
	}else{
	var qty=jQuery("#qty").val();
	}
	jQuery.ajax({
			url:'manage_cart.php',
			type:'post',
			data:'pid='+pid+'&qty='+qty+'&type='+type,
			success:function(result){
				if(type=='update' || type=='remove'){
					window.location.href=window.location.href;
				}
				jQuery('.htc__qua').html(result);			
			}
		});
	
	
}
	
	
function sort_product_drop(cat_id, site_path){
	var sort_product_id=jQuery('#sort_product_id').val();
	window.location.href=site_path+"categories.php?id="+cat_id+"&sort="+sort_product_id;

}


function wishlist_manage(pid,type){
	
	jQuery.ajax({
			url:'wishlist_manage.php',
			type:'post',
			data:'pid='+pid+'&type='+type,
			success:function(result){
				
				if(result=='not_login'){
					
				window.location.href='login.php';
				}else{
						jQuery('.htc__wishlist').html(result);
				}
			}
		});
}

