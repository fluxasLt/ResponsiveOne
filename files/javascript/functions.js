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
        $(this).hide("fade", { direction: "down"}, 500, function() { $(this).remove() })
    });
}

function previewGallery() {
    $("#gallery img").click(function() {
        var gallery = $('<div class = "gallery-preview" style="display: none;"><img src=' + $(this).attr("src") + "></div>");
        $("#page-content").append(gallery);
        $(".gallery-preview").show("fade", { direction: "down" }, 500);
        centerImage();
        closeGallery()
    });
}

