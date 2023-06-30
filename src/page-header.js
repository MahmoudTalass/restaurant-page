const content = document.querySelector("#content");

function loadHeader() {
   const header = document.createElement("header");
   const restaurantName = document.createElement("h1");
   const navContainer = document.createElement("nav");
   const homeBtn = document.createElement("button");
   const menuBtn = document.createElement("button");
   const contactBtn = document.createElement("button");

   header.classList.add("page-header");
   restaurantName.classList.add("page-heading");
   navContainer.classList.add("page-nav");
   homeBtn.classList.add("nav-btn")
   menuBtn.classList.add("nav-btn")
   contactBtn.classList.add("nav-btn")

   restaurantName.textContent = "Bread & Soup";
   homeBtn.textContent = "Home";
   menuBtn.textContent = "Menu";
   contactBtn.textContent = "Contact";

   header.appendChild(restaurantName);
   header.appendChild(navContainer);

   navContainer.appendChild(homeBtn);
   navContainer.appendChild(menuBtn);
   navContainer.appendChild(contactBtn);

   content.appendChild(header);
}

export default loadHeader;
