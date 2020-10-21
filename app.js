const animalUrls = {
  cat: "https://aws.random.cat/meow",
  dog: "https://random.dog/woof.json",
  fox: "https://randomfox.ca/floof/",
};

const spinnerImgSrc = "./images/spinner.gif";
const fetchButtonEl = document.querySelector(".fetch-animal-button");
const animalSelectEl = document.querySelector(".animal-select");
const animalImageEl = document.querySelector(".animal-image img");
const favoriteImagesEl = document.querySelector(".favorite-images");

fetchButtonEl.addEventListener("click", () => {
  animalImageEl.src = spinnerImgSrc;

  const animalType = animalSelectEl.value;
  const animalUrl = animalUrls[animalType];

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

animalImageEl.addEventListener("click", e => {
  displayFavoriteImage(e.target.src);
});

function displayFavoriteImage(imageSrc) {
  const newFavoriteEl = document.createElement("img");
  newFavoriteEl.src = imageSrc;
  favoriteImagesEl.prepend(newFavoriteEl);
  favoriteImagesEl.scrollTo(0,0);
}