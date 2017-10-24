
$("#guidelines").click(function() {
	$("#guidelines-content").toggle();
	$("#guidelines .show-text").toggle();
  $("#guidelines .hide-text").toggle();
});

$("#people1").click(function() {
	$("#people2-bio, #people2-arrow").hide();
	$("#people3-bio, #people3-arrow").hide();
	$("#people4-bio, #people4-arrow").hide();
	$("#people1-bio, #people1-arrow").show();
});
$("#people2").click(function() {
	$("#people1-bio, #people1-arrow").hide();
	$("#people3-bio, #people3-arrow").hide();
	$("#people4-bio, #people4-arrow").hide();
	$("#people2-bio, #people2-arrow").show();
});
$("#people3").click(function() {
	$("#people1-bio, #people1-arrow").hide();
	$("#people2-bio, #people2-arrow").hide();
	$("#people4-bio, #people4-arrow").hide();
	$("#people3-bio, #people3-arrow").show();
});
$("#people4").click(function() {
	$("#people1-bio, #people1-arrow").hide();
	$("#people2-bio, #people2-arrow").hide();
	$("#people3-bio, #people3-arrow").hide();
	$("#people4-bio, #people4-arrow").show();
});
