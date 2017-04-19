var div1 = "\
	<div class='row'>\
			<div class='col-md-12'>\
				<div class='jumbotron'>\
					<h1> Keating's Tech Cafe </h1>\
				</div>\
			</div>\
		</div>";

var div2 = "\
	<div class='row'>\
	</div";


var div3 = "\
			<div class='col-md-8'>\
				<div class='tab'>\
					<button data-tab='#about' class='tablist'><h2>About</h2></button>\
					<button data-tab='#menu' class='tablist'><h2>Menu</h2></button>\
					<button data-tab='#contact' class='tablist'><h2>Contact</h2></button>\
				</div>\
				<div id='about' class='tabitem'>\
					<h3>Keating's Tech Cafe</h3>\
					<p> This is a web development project by Thomas Keating. Though somewhat styled with CSS3 and pre-processed with SCSS, the primary purpose of this project is to display javascript and jquery knowledge.</p>\
				</div>\
				<div id='menu' class='tabitem'>\
					<div class='section'>\
						<h3>Coffee</h3>\
						<ul>\
							<li>Light Roast</li>\
							<li>Dark Roast</li>\
							<li>Espresso</li>\
						</ul>\
					</div>\
					<div class='section'>\
						<h3>Bread</h3>\
						<ul>\
							<li>Rye</li>\
							<li>Pumpernickel</li>\
							<li>Raisin</li>\
							<li>Focaccia</li>\
						</ul>\
					</div>\
					<div class='section'>\
						<h3>Sandwiches</h3>\
						<ul>\
							<li>BLT</li>\
							<li>Chicken Salad</li>\
							<li>Caprese</li>\
							<li>Roast Beef</li>\
						</ul>\
					</div>\
					<div id='darker' class='section'>\
						<h3>Treats</h3>\
						<ul>\
							<li>Strawberry Cheesecake</li>\
							<li>Pie du Jour</li>\
							<li>Power Bar</li>\
							<li>Smoothie du Jour</li>\
						</ul>\
					</div>\
				</div>\
				<div id='contact' class='tabitem'>\
					<h3>Reach Me</h3>\
					<p>at <a href='mailto:twkeating1@gmail.com'>twkeating1@gmail.com</a> and check out the rest of my portfolio <a href='https://offscript.github.io/work/'>here.</a></p>\
				</div>";

var div4 = "\
	<div class='col-md-4'>\
			<h1>News</h1>\
			<div>\
				<h3>4/1/17 Cafe Keating is closed until further notice</h3>\
				<p>April Fools!</p>\
			</div>\
			<div>\
				<h3>3/22/17 Proud to Announce Partnership with Thomas Farms</h3>\
				<p>All meat is now locally sourced!</p>\
			</div>\
			<div>\
				<h3>3/3/17 Now Open Late Friday and Saturday!</h3>\
				<p>We'll be open from 6 a.m.-10 p.m.!</p>\
			</div>\
		</div>\
	</div>\
</div>";


$(document).ready( function() {
		// Here I append the major divs one at a time to the page
		$('.container-fluid').prepend(div1);
		$('.container-fluid').append(div2);
		$('.row:last').append(div3);
		$('.row:last').append(div4);
		//$('#content').append(div2);

		// when the page loads, hide tabitems, show about tabitem
		$('.col-md-8').find('.tabitem').hide();
		$('.col-md-8').find('#about').show();


		//on-click show the corresponding tab
		$('.tablist').on('click', function() {
			$('.col-md-8').find('.tabitem').hide();
			var requested_tab = $(this).data("tab"); //get the tab name
			$('.col-md-8').find(requested_tab).show();
		}); 
		
});

