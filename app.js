//Varibel med länkar till slumpade bilder.
const animalUrls = {
  cat: "https://aws.random.cat/meow",
  dog: "https://random.dog/woof.json",
  fox: "https://randomfox.ca/floof/",
};

//Variabler innehållande koppling till knappar, bilder osv.
const spinnerImgSrc = "./images/spinner.gif";
const fetchButtonEl = document.querySelector(".fetch-animal-button");
const animalSelectEl = document.querySelector(".animal-select");
const animalImageEl = document.querySelector(".animal-image img");
const favoriteImagesEl = document.querySelector(".favorite-images");

//addEventListener som aktiveras vid klick på knappen "fetch image".
fetchButtonEl.addEventListener("click", () => {
  animalImageEl.src = spinnerImgSrc;

  const animalType = animalSelectEl.value;
  const animalUrl = animalUrls[animalType];
  //fetch hämtar länkarna från cat, dog eller fox beroende på vilket djur som är valt under .animal-select.
  fetch(animalUrl)
    .then((response) => response.json())
    .then((animalData) => {
      let imageUrl = "";
      if (animalType === "cat") {
        imageUrl = animalData.file;
      } else if (animalType === "dog") {
        imageUrl = animalData.url;
      } else if (animalType === "fox") {
        imageUrl = animalData.image;
      }
      animalImageEl.src = imageUrl;
    });
});

//Vid klick på bild läggs nuvarande bild till i favorit delen av sidan. Under klassen favorites-images.
animalImageEl.addEventListener("click", (e) => {
  displayFavoriteImage(e.target.src);
});

//Funktionen för att lägga till en ny bild till favorite-images.
function displayFavoriteImage(imageSrc) {
  const newFavoriteEl = document.createElement("img");
  newFavoriteEl.src = imageSrc;
  favoriteImagesEl.prepend(newFavoriteEl);
  favoriteImagesEl.scrollTo(0, 0);
}
