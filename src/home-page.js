import soupAndBreadImg from "./assets/soup-and-bread.jpg";

const content = document.querySelector("#content");

function loadPage() {
   const header = document.createElement("header");
   const restaurantName = document.createElement("h1");
   const navContainer = document.createElement("nav");
   const navLinks = document.createElement("ul");
   const mainPage = document.createElement("main");
   const siteImg = document.createElement("img");
   const restaurantDescCont = document.createElement("article");
   const restaurantDesc = document.createElement("p");

   header.appendChild(restaurantName);
   header.appendChild(navContainer);
   navContainer.appendChild(navLinks);

   const nav = ["Home", "Menu", "Contact"];
   for (let i = 0; i < 3; i++) {
      const navLinkContainer = document.createElement("li");
      const navLink = document.createElement("a");
      navLink.href = `#${nav[i]}`;
      navLink.textContent = nav[i];
      navLinkContainer.appendChild(navLink);
      navLinks.appendChild(navLinkContainer);
   }

   mainPage.appendChild(siteImg);
   siteImg.src = soupAndBreadImg;
   siteImg.alt = "Soup and Bread image";

   restaurantDesc.textContent =
      "Welcome to The Bread Bowl, where warm bread and comforting soups meet in perfect harmony. Indulge in our freshly baked artisanal breads and savor our soul-soothing soup creations. Customize your perfect pairing and experience a delightful culinary journey that nourishes both body and soul. Join us for a cozy and satisfying dining experience at The Bread Bowl.";
   restaurantDescCont.appendChild(restaurantDesc)
   mainPage.appendChild(restaurantDescCont);

   content.appendChild(header)
   content.appendChild(mainPage)
}
