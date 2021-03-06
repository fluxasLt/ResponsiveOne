function burgerMenuClick() {
    $("#burger-icon img").click(function() {
        if ($("#burger-icon img").attr("src") === "images/large-version/burger-icon-closed.png") {
            $("#burger-icon img").attr("src", "images/large-version/burger-icon-open.png");
            $("#main-navigation ul").show("drop", { direction: "down"}, 1e3);
        } else {
            $("#burger-icon img").attr("src", "images/large-version/burger-icon-closed.png");
            $("#main-navigation ul").hide("drop", {direction: "down"}, 1e3);
        }
    });
}

function burgerMenuDisplayChange() {
    if ($("#burger-icon").css("display") === "block" && $("#burger-icon img").attr("src") === "images/large-version/burger-icon-closed.png") {
        $("#main-navigation ul").css("display", "none");
    } else if ($("#burger-icon").css("display") === "none") {
        $("#burger-icon img").attr("src", "images/large-version/burger-icon-closed.png");
        $("#main-navigation ul").css("display", "block");
    }
}

function burgeMenuDisplay() {
    if ($("#burger-icon").css("display") === "block") {
        $("#main-navigation ul").css("display", "none");
    }
}

function centerImage() {
    var imageHorizontalPosition = $(".gallery-preview").width() / 2 - $(".gallery-preview img").width() / 2 - 8;
    var imageVerticalPosition = $(".gallery-preview").height() / 2 - $(".gallery-preview img").height() / 2 - 8;
    $("#page-content .gallery-preview img").addClass("image-preview").css({ "left": imageHorizontalPosition, "top": imageVerticalPosition});
}

function closeGallery() {
    $(".gallery-preview").click(function() {
        event.preventDefault();
        $(this).hide("fade", { direction: "down"}, 500, function() { $(this).remove() })
    });
}

function previewGallery() {
    $("#gallery img").click(function() {
        event.preventDefault();
        var gallery = $('<div class = "gallery-preview" style="display: none;"><img src=' + $(this).attr("src") + "></div>");
        $("#page-content").append(gallery);
        $(".gallery-preview").show("fade", { direction: "down" }, 500);
        centerImage();
        closeGallery()
    });
     $("#gallery img").mouseover(function() {
        $(this).css("opacity", 0.5);
    });
    $("#gallery img").mouseleave(function() {
        $(this).css("opacity", 1);
    });
}

function scrollToSection() {
    $("#main-navigation li").click(function() {
        var scrollTarget = $(this).children().attr("href");
        $("html, body").animate({scrollTop: $(scrollTarget).offset().top}, 500);
        return false
    });
    $("#social-media a").click(function() {
        var scrollTarget = $(this).children().attr("href");
        $("html, body").animate({scrollTop: 0}, 500);
        return false
    });
}

function makeSkillsBars() {
    var barHeight = $("#skills-list span").height();
    $("#skills-list div").css({height: barHeight * .6, "margin-top": barHeight * .3});
    $("#skills-list div").append('<div class="skill"></div>');
    $("#skills-list div div").css({height: barHeight * .6});
    $("#skills-list div div").each(function(index, value) {
        $(this).animate({
            width: Math.floor(Math.random() * 100)}, 500)
    });
}