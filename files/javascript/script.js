$(document).ready(function() {
	burgeMenuDisplay();
	

	$(window).resize(function() {
		burgerMenuDisplayChange(); // Burger menu display changes.
		centerImage();            // Center image.
	});
    
    burgerMenuClick(); // Burger menu clicking.
    previewGallery(); // Preview image.
    

});