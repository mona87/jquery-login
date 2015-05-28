$(document).ready(function(){


	$user = $('#user');
	$userError = $('#user-error');
	$password = $('#password');
	$passError = $('#pass-error');
	$btn = $('button');


	$btn.on('click', check);



	function check(e){

		clearErrors();

		if(validator.isNull($user.val()) && validator.equals($password.val(),'honeycrisp')){
				e.preventDefault();	
				console.log(' match');
				window.location.href = "http://theironyard.com";
			
			
		}else if(validator.equals($user.val(),'aaron@theironyard.com') && validator.equals($password.val(),'password123')){
				console.log('match');
				e.preventDefault();	
				window.location.href = "http://theironyard.com";
				
		}	
		else if(validator.equals($user.val(),'admin@google.com') && validator.equals($password.val(),'pandas')){
				console.log('match');
				e.preventDefault();	
				window.location.href = "http://theironyard.com";
		}	
		else {
				console.log('not a match');
				e.preventDefault();	
				$userError.html('Your user was not found.')	
				$userError.show();
				$passError.html('The password you entered is incorrect.')		
				$passError.show();
		}


		if(validator.isNull($user.val()) && validator.isNull($password.val())){
			console.log('pass and user are null')
			e.preventDefault();
			$userError.html('Please enter an email address before logging in.')				
			$userError.show();
			$passError.html('Please enter a password before logging in.')
			$passError.show();
		}
		else if(validator.isNull($password.val())){
			console.log('null')
			e.preventDefault();		
			$passError.html('Please enter a password before logging in.')		
			$passError.show();
		}
		else if(validator.isNull($user.val())){
			console.log('null')
			e.preventDefault();	
			$userError.html('Please enter an email address before logging in.')				
			$userError.show();
		}
		else if(!validator.isEmail($user.val())){
			console.log('not email')
			e.preventDefault();	
			$userError.html('Please enter an email address before logging in.')			
			$userError.show();
		}




	}

	function clearErrors(){

		$passError.hide();
		$userError.hide();
		$userError.html('');
		$passError.html('');

		console.log('hide')
		
	}






});