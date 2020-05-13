$(function(){
	const MSG01 = '必須入力になります。';
	const MSG02 = 'Emailの形式で入力してください。';

	$('.valid-name').keyup(function(){

		var form_g = $(this).closest('.form-group');

		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG01);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});

	$('.valid-email').keyup(function(){

		var form_g = $(this).closest('.form-group');

		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG01);
		}else if($(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG02);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});

	$('.valid-email').keyup(function(){

		var form_g = $(this).closest('.form-group');

		if($(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}else{
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG02);
		}
	});

	

	$('.valid-text').keyup(function(){

		var form_g = $(this).closest('.form-group');

		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG01);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});

});