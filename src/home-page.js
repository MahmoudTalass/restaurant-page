import image from "./assets/soup-and-bread.jpg";

const content = document.querySelector("#content");

function loadPage() {
   const pageImg = new Image();
   const restaurantDescCont = document.createElement("article");
   const restaurantDesc = document.createElement("p");
   const mainPage = document.createElement("main");

   pageImg.src = image;
   pageImg.alt = "Soup and Bread image";
   mainPage.appendChild(pageImg);

   restaurantDesc.textContent =
      "Welcome to The Bread Bowl, where warm bread and comforting soups meet in perfect harmony. Indulge in our freshly baked artisanal breads and savor our soul-soothing soup creations. Customize your perfect pairing and experience a delightful culinary journey that nourishes both body and soul. Join us for a cozy and satisfying dining experience at The Bread Bowl.";
   restaurantDescCont.appendChild(restaurantDesc);
   mainPage.appendChild(restaurantDescCont);

   pageImg.classList.add("img")
   restaurantDesc.classList.add("description")
   restaurantDescCont.classList.add("description-container")
   mainPage.classList.add("home-page-content")

   content.appendChild(mainPage);
}

export default loadPage;
