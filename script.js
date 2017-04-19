var div1 = "\
	<div class='row'>\
		<div class='col-md-12 header'>\
			<h1> Cafe Keating </h1>\
			<img src='http://parkresto.com/wp-content/themes/parkrestaurant/images/11onlinereservationpark.jpg'>\
		</div>\
	</div>";

var div2 = "\
	<div class='row'>\
		<div class='col-md-8 tab'></div>\
		<div class='col-md-4 sidebar'></div>\
	</div>";


$(document).ready( function() {
		// append/prepend
		/** 
		//$('#content').prepend(div1);
		//$('#content').append(div2);
		 **/
		// hide tabitems, show about
		$('.col-md-8').find('.tabitem').hide();
		$('.col-md-8').find('#about').show();


		//on click go to the corresponding tab
		$('.tablist').on('click', function() {
			$('.col-md-8').find('.tabitem').hide();
			var requested_tab = $(this).data("tab"); //get the tab name
			$('.col-md-8').find(requested_tab).show();
		}); 
		
});
	//("tab").on('click', function {
	// switch tabs 
	//
	//});

