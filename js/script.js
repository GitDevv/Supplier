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




jQuery(document).ready(function(){

jQuery(".productRate").hover (
function(){
	jQuery(this).append("<span></span>");
},
function()
{
	jQuery(this).find("span").remove();
});


var rating;

jQuery(".productRate").mousemove (
function(e){
	if (!e) e = window.event;
 	if (e.pageX){
	       x = e.pageX;
	        } else if (e.clientX){
	        x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
	     
	    }
	    var posLeft = 0;
	    var obj = this;
	   while (obj.offsetParent)
	    {
	        posLeft += obj.offsetLeft;
	        obj = obj.offsetParent;
	    }
	    var offsetX = x-posLeft,
			modOffsetX = 5*offsetX%this.offsetWidth;
			rating = parseInt(5*offsetX/this.offsetWidth);

		if(modOffsetX > 0) rating+=1;
		jQuery(this).find("span").eq(0).css("width",rating*18+"px");
		jQuery(this).find("div").eq(0).css("width",rating*18+"px");

});
	 
	
jQuery(".productRate").click (
function()
{
	alert("Я ставлю "+rating);
	return false;
});

 
	}); 