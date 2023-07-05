import { footer } from "./page-footer";
import image from "./assets/soup-and-bread.jpg";

const content = document.querySelector("#content");

function loadHome() {
   const mainContent = document.createElement("main");
   const pageImg = new Image();
   const imgCredit = document.createElement("a");
   const restaurantDescCont = document.createElement("article");
   const restaurantDesc = document.createElement("p");
   const hoursContainer = document.createElement("article");
   const hoursHeading = document.createElement("h2");
   const weekdayHours = document.createElement("p");
   const weekendHours = document.createElement("p");

   hoursHeading.textContent = "Hours";
   weekdayHours.textContent = "Weekdays: 9am - 7pm";
   weekendHours.textContent = "Weekends: 10am - 5pm";

   pageImg.src = image;
   pageImg.alt = "Soup and Bread image";
   imgCredit.href =
      "https://pixabay.com/users/foodiefactor-5992183/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2538888%22%3EFoodie%20Factor%3C/a%3E%20from%20%3Ca%20href=%22https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2538888";

   imgCredit.textContent = "Image by: FoodieFactor";
   restaurantDesc.textContent =
      "Welcome to The Bread & Soup, where warm bread and comforting soups meet in perfect harmony. Indulge in our freshly baked artisanal breads and savor our soul-soothing soup creations. Customize your perfect pairing and experience a delightful culinary journey that nourishes both body and soul. Join us for a cozy and satisfying dining experience at The Bread & Soup.";

   restaurantDesc.appendChild(imgCredit);
   restaurantDescCont.appendChild(pageImg);
   restaurantDescCont.appendChild(restaurantDesc);
   hoursContainer.appendChild(hoursHeading);
   hoursContainer.appendChild(weekdayHours);
   hoursContainer.appendChild(weekendHours);

   mainContent.appendChild(restaurantDescCont);
   mainContent.appendChild(hoursContainer);

   imgCredit.classList.add("img-credit")
   pageImg.classList.add("soup-and-bread-img");
   restaurantDesc.classList.add("description");
   restaurantDescCont.classList.add("description-container");
   hoursContainer.classList.add("hours-container");
   hoursHeading.classList.add("hours-heading");
   weekdayHours.classList.add("hours", "weekday-hours");
   weekendHours.classList.add("hours", "weekend-hours");

   mainContent.classList.add("home-page-content", "main-content");

   content.insertBefore(mainContent, footer);
}

export default loadHome;
