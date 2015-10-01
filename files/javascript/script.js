$(document).ready(function() {

	if($("#burger-icon").css("display") === "block") {
		$("#main-navigation ul").css("display", "none");
	}

	$(window).resize(function() {
		if($("#burger-icon").css("display") === "block" && $("#burger-icon img").attr("src") === "images/large-version/burger-icon-closed.png") {
			$("#main-navigation ul").css("display", "none");
		} else if($("#burger-icon").css("display") === "none") {
			$("#burger-icon img").attr("src", "images/large-version/burger-icon-closed.png");
			$("#main-navigation ul").css("display", "block");
		}
	});

    $("#burger-icon img").click(function(){
    	if($("#burger-icon img").attr("src") === "images/large-version/burger-icon-closed.png") {
        	$("#burger-icon img").attr("src", "images/large-version/burger-icon-open.png");
        	$("#main-navigation ul").show("drop", { direction: "down" }, 1000);
        } else {
        	$("#burger-icon img").attr("src", "images/large-version/burger-icon-closed.png");
        	$("#main-navigation ul").hide("drop", { direction: "down" }, 1000);
        }
    });

});