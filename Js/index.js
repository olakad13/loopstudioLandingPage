let hamburger = document.getElementById('hamburger-menu');
let navCard = document.getElementsByClassName('nav-links-container')[0] ;
let closeButton = document.getElementById('close-button');


function displayNavCard() {
    navCard.style.display = 'flex';
};

function closeNavCard() {
    // navCard.removeEventListener("click",displayNavCard())
    navCard.style.display = 'none';
};

