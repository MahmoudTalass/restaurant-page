import image from "./assets/soup-and-bread.jpg";

const content = document.querySelector("#content");

function loadPage() {
   const pageImg = new Image();
   const restaurantDescCont = document.createElement("article");
   const restaurantDesc = document.createElement("p");
   const mainPage = document.createElement("main");
   const hoursContainer = document.createElement("article");
   const hoursHeading = document.createElement("h2");
   const weekdayHours = document.createElement("p");
   const weekendHours = document.createElement("p");

   hoursHeading.textContent = "Hours";
   weekdayHours.textContent = "Weekdays: 9am - 7pm";
   weekendHours.textContent = "Weekends: 10am - 5pm";

   pageImg.src = image;
   pageImg.alt = "Soup and Bread image";

   restaurantDesc.textContent =
      "Welcome to The Bread & Soup, where warm bread and comforting soups meet in perfect harmony. Indulge in our freshly baked artisanal breads and savor our soul-soothing soup creations. Customize your perfect pairing and experience a delightful culinary journey that nourishes both body and soul. Join us for a cozy and satisfying dining experience at The Bread & Soup.";

   restaurantDescCont.appendChild(pageImg);
   restaurantDescCont.appendChild(restaurantDesc);
   hoursContainer.appendChild(hoursHeading);
   hoursContainer.appendChild(weekdayHours);
   hoursContainer.appendChild(weekendHours);

   mainPage.appendChild(restaurantDescCont);
   mainPage.appendChild(hoursContainer);

   pageImg.classList.add("soup-and-bread-img");
   restaurantDesc.classList.add("description");
   restaurantDescCont.classList.add("description-container");
   hoursContainer.classList.add("hours-container");
   hoursHeading.classList.add("hours-heading");
   weekdayHours.classList.add("hours", "weekday-hours");
   weekendHours.classList.add("hours", "weekend-hours");

   mainPage.classList.add("home-page-content");

   content.appendChild(mainPage);
}

export default loadPage;
