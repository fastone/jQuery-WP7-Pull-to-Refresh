$(document).ready( function() {
	$('.scrollable').pullrefresh({
		url: 'demodata.json',
		dataType: 'json',
		success: function(data) {
			$(data).each(function () {
				$('ul').prepend('<li><p>'+this.text+'</p></li>');
			});
		}
	});
});
