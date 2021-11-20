var deck = document.getElementsByClassName("card");
var image_index = 0;

for (var i = 0; i < deck.length; ++i) {
    deck[i].setAttribute("style", "display: none;")
}

deck[image_index].setAttribute("style", "display:inline-block; max-width: 30vw;");

function cycle_left() {
    deck[image_index].setAttribute("style", "display:none; max-width: 30vw;");
    if (--image_index < 0) {
        image_index = deck.length - 1;
    }
    deck[image_index].setAttribute("style", "display:inline-block; max-width: 30vw;");
}

function cycle_right() {
    deck[image_index].setAttribute("style", "display:none; max-width: 30vw;");
    if (++image_index >= deck.length) {
        image_index = 0;
    }
    deck[image_index].setAttribute("style", "display:inline-block; max-width: 30vw;");
}