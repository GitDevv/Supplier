function updateSpinner(obj)
{
	var contentObj = document.getElementById("content_num");
	var value = parseInt(contentObj.value);

	var valCost = parseInt($('.new_cost input').val());
	var Cost = parseInt($('.prod_inf_list .cost_li input').val());
	var discount = parseInt($('.discount input').val());
	var subCost = 0;

	subCost = Cost - discount;
	if(obj.id == "down") {
		value--;
		valCost = subCost * value;
		if(value < 1){
			value = Math.max(1, input.value - 1);
		}
	} else {
		value++;
		valCost = subCost * value;			
	}		

	$('.new_cost input').val(valCost);
	contentObj.value = value;

	$('.new_cost span').html($('.new_cost input').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));			

}	



//function toCartProduct(){
//		var $this = $(this); //знаходжу кнопку на котру натискаю
//		var valueCost =  parseInt($(this).parent().find('.new_costt').children('input').val());
//		var fullcost = parseInt($('.in_full_cost').val());
//		var fullnumber = parseInt($('.in_full_num').val());
//
//		$('.in_full_cost').val(fullcost + valueCost);
////		console.log($('.in_full_cost').val());
//		$('.in_full_num').val(fullnumber + 1);
////		console.log($('.in_full_num').val());
//		
//		$('.cart .fullcost').html($('.in_full_cost').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
//		$('.cart .fullnumber').html($('.in_full_num').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));		
//}


/*В корзину button*/
$(document).ready(function(){
	
	$('.to_cartt').click(function(){
		var $this = $(this); //знаходжу кнопку на котру натискаю
		var valueCost =  parseInt($(this).parent().find('.new_costt').children('input').val());
		var fullcost = parseInt($('.in_full_cost').val());
		var fullnumber = parseInt($('.in_full_num').val());

		$('.in_full_cost').val(fullcost + valueCost);
//		console.log($('.in_full_cost').val());
		$('.in_full_num').val(fullnumber + 1);
//		console.log($('.in_full_num').val());
		
		$('.cart .fullcost').html($('.in_full_cost').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
		$('.cart .fullnumber').html($('.in_full_num').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));				
	}); 
	
	$('.prod_inf_list .to_cart').click(function(){
		var fullcost = parseInt($('.in_full_cost').val());
		var fullnumber = parseInt($('.in_full_num').val());
		
		var contentObj = document.getElementById("content_num");
		var value = parseInt(contentObj.value);		
		var valCost = parseInt($('.new_cost input').val());

		$('.in_full_cost').val(fullcost + valCost);
//		console.log($('.in_full_cost').val());
		$('.in_full_num').val(fullnumber + value);
//		console.log($('.in_full_num').val());
		
		$('.cart .fullcost').html($('.in_full_cost').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
		$('.cart .fullnumber').html($('.in_full_num').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));				
	}); 	
	 
 
});
/*В корзину button*/	

$(document).ready(function(){
	$('.carousel').slick({
		dots:true,  
		slidesToShow: 1,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',        
		prevArrow:'.carousel_wrapper .controllers .prev',
		nextArrow:'.carousel_wrapper .controllers .next'
	}); 
	
 	$('#tab-product').easytabs();
	
	
});