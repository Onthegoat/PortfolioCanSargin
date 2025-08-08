// Glider Carousel initialisieren
const glider = new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    draggable: false,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
});

// Funktion zum Aktualisieren der Projektinfos
function updateProjektInfo(index) {
    const slides = document.querySelectorAll(".projekt-slide");
    const current = slides[index];

    if (!current) return;

    const name = current.dataset.name;
    const beschreibung = current.dataset.beschreibung;

    document.getElementById("app-name").textContent = name;
    document.getElementById("app-beschreibung").innerHTML =
        beschreibung +
        ' <a href="' +
        current.getAttribute("link") +
        '" target="_blank">Github Link</a>';
}

// Beim Slide-Wechsel Infos aktualisieren
document
    .querySelector(".glider")
    .addEventListener("glider-slide-visible", (e) => {
        updateProjektInfo(e.detail.slide);
    });

// Beim Laden direkt erstes Projekt anzeigen
document.addEventListener("DOMContentLoaded", () => {
    updateProjektInfo(0);
});
