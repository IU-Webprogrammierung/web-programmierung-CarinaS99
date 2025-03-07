let slideIndex = 1;  // Startindex der Folien
showSlides(slideIndex);

// Funktion zur Anzeige der Folien
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wenn n größer als die Anzahl der Folien ist, setze es auf 1 (wieder zum ersten Slide)
    if (n > slides.length) { slideIndex = 1 }
    // Wenn n kleiner als 1 ist, setze es auf die letzte Folie
    if (n < 1) { slideIndex = slides.length }

    // Alle Folien ausblenden
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Alle Dots zurücksetzen
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Die gewählte Folie anzeigen
    slides[slideIndex - 1].style.display = "block";

    // Den aktiven Dot hervorheben
    dots[slideIndex - 1].className += " active";
}

// Funktion, die aufgerufen wird, wenn ein Dot geklickt wird
function currentSlide(n) {
    showSlides(slideIndex = n);
}