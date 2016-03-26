	function updateSpinner(obj)
	{
		var contentObj = document.getElementById("content_num");
		var value = parseInt(contentObj.value);
		
		var valCost = parseInt($('.new_cost input').val());
		var Cost = parseInt($('.cost input').val());
		var discount = parseInt($('.discount input').val());
		var subCost;
		
		subCost = Cost - discount;
		if(obj.id == "down") {
			value--;
			valCost = subCost * value;
			if(value < 1){
				value = Math.max(2, input.value - 1);
			}
		} else {
			value++;
			valCost = subCost * value;
//			if(value > 10){
//				value = Math.max(10, input.value - 1);
//			}			
		}		
		
		$('.new_cost input').val(valCost);
		contentObj.value = value;
		
		$('.new_cost span').html($('.new_cost input').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));			
		
	}	 

$(document).ready(function(){
	 
 
 
	$('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'.wraper-top-slider .cont-slider .prev',
        nextArrow:'.wraper-top-slider .cont-slider .next',
        autoplay:false,
		draggable:false,
		fade:true,
		dots:true,
		speed: 1000,
     });	
	
        $(window).scroll(function(){
           if ($(this).scrollTop() > 60  ){
                 $('.middle-container').addClass('active');
            } else {
				$('.middle-container').removeClass('active');
			} 
        });//scroll	
	
	
	 $('input[name="phone"]').mask("+7(999) 999 - 99 - 99");
	
	$('.callback').click(function(){
		$('.modal_callback , .modal_callback .wp_callback').fadeIn();
		$(' .modal_callback .wp_sp, .modal_callback .wp_write').fadeOut();
		$('body').css('overflow-y','hidden');
		
	});	
	
	$('.write_us').click(function(){
		$('.modal_callback , .modal_callback .wp_write').fadeIn();
		$(' .modal_callback .wp_sp, .modal_callback .wp_callback').fadeOut();
		$('body').css('overflow-y','hidden');
	});	

	$('.modal_callback .close, .modal_callback .closed').click(function(){
		$(' .modal_callback').fadeOut();
		$("#callback").trigger("reset");
		$("#write").trigger("reset");
		$('body').css('overflow-y','auto');
	});		
	
	
    $("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "callback.php",
			data: $("#callback").serialize()
		}).done(function() {
            $('.modal_callback .wp_callback').fadeOut();
			$(' .modal_callback .wp_sp').fadeIn();
            $("#callback").trigger("reset");
			 
		});
		return false;
	}); 
	
    $("#write").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#write").serialize()
		}).done(function() {
            $('.modal_callback .wp_write').fadeOut();
			$(' .modal_callback .wp_sp').fadeIn();
            $("#write").trigger("reset");
			 
		});
		return false;
	}); 	
	
	
	/*****************/
	$('.button_menu_inner').click(function(){
		if(!$('.items_buy').hasClass('active')){
			$('.items_buy, .button_menu_inner').addClass('active');
			$('.shadow').fadeIn();
		}else{
			$('.items_buy, .button_menu_inner').removeClass('active');
			$('.shadow').fadeOut();
		}
	});		
	$('.shadow').click(function(){
		$('.items_buy, .button_menu_inner').removeClass('active');
		$('.shadow').fadeOut();
	});		
});
	