let hamburger = document.getElementById('hamburger-menu');
let navCard = document.getElementsByClassName('nav-links-container')[0] ;
let closeButton = document.getElementById('close-button');

hamburger.addEventListener('click', displayNavCard);
closeButton.addEventListener('click', closeNavCard);

function displayNavCard() {
    navCard.style.opacity = 1;
    navCard.style.visibility = 'visible';

}

function closeNavCard() {
    navCard.style.opacity = 0;
    navCard.style.visibility = 'hidden';
}

