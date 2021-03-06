var deck = document.getElementsByClassName("card");
var image_index = 0;

// ContactArea is basically the contact form. The overlay area is between the page and the contact form 
// and exists to block the user from clicking anything behind it.
var contactArea = document.getElementsByClassName("contactForm")[0];
var overlayArea = document.getElementsByClassName("grayArea")[0];

// By default, set the contact form to be hidden
contactArea.setAttribute("style", "display: none;");
overlayArea.setAttribute("style", "display: none;");

// Let only one of the projects be visible
deck[image_index].style.display = "inline-block";

// Cycle left of projects
function cycle_left() {
    deck[image_index].style.display = "none";
    if (--image_index < 0) {
        image_index = deck.length - 1;
    }
    deck[image_index].style.display = "inline-block";
}

// Cycle right of projects
function cycle_right() {
    deck[image_index].style.display = "none";
    if (++image_index >= deck.length) {
        image_index = 0;
    }
    deck[image_index].style.display = "inline-block";
}

// Toggle contact form. The actual functionality is not implemented.
function contactForm() {
    if (contactArea.style.display == "none") {
        contactArea.style.display = "block";
        overlayArea.style.display = "block";
        return;
    }
    contactArea.style.display = "none";
    overlayArea.style.display = "none";
}
