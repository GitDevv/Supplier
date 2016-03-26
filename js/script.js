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
	 
 	$('#tab-product').easytabs({
		defaultTab: "#tabs2",
	});
 
//	$('.top-slider').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        prevArrow:'.wraper-top-slider .cont-slider .prev',
//        nextArrow:'.wraper-top-slider .cont-slider .next',
//        autoplay:false,
//		draggable:false,
//		fade:true,
//		dots:true,
//		speed: 1000,
//     });	
	
//        $(window).scroll(function(){
//           if ($(this).scrollTop() > 60  ){
//                 $('.middle-container').addClass('active');
//            } else {
//				$('.middle-container').removeClass('active');
//			} 
//        });//scroll	
//	
//	
 
	
 	
	
	
 	
});
	