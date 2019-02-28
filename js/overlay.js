
// Get the main container
var main = document.getElementById('main');

// Get the overlay
var overlay = document.getElementById('overlay');
var overlayImg = document.getElementById('overlay-img');
var overlayClose = document.getElementById('overlay-close');

// Close the overlay

overlayClose.onclick = function()
{
    main.classList.remove('blurred');
    overlay.style.display = "none";
}

// Get img that can be clicked
var gallery = document.getElementsByClassName('gallery-img');

// Set onlick event for every clickable img

for (var i = 0; i < gallery.length; i++) {

    gallery[i].onclick = function()
    {
        main.classList.add('blurred');
        overlay.style.display = "block";
        overlayImg.src = this.src;
    }

}
