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

		// when the page loads, hide tabitems, show about tabitem
		$('.col-xs-8').find('.tabitem').hide();
		$('.col-xs-8').find('#about').show();


		//on-click show the corresponding tab
		$('.tablist').on('click', function() {
			$('.col-xs-8').find('.tabitem').hide();
			var requested_tab = $(this).data("tab"); //get the tab name
			$('.col-xs-8').find(requested_tab).show();
		}); 
		
});

