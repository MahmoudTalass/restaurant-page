const content = document.querySelector("#content");

function loadHeader() {
   const header = document.createElement("header");
   const restaurantName = document.createElement("h1");
   const navContainer = document.createElement("nav");

   header.classList.add('page-header')
   restaurantName.classList.add("page-heading")
   navContainer.classList.add("page-nav")

   restaurantName.textContent = "Bread and Soup";
   header.appendChild(restaurantName);
   header.appendChild(navContainer);

   const homeBtn = document.createElement("button");
   const menuBtn = document.createElement("button")
   const contactBtn = document.createElement("button")

   homeBtn.textContent = "Home"
   menuBtn.textContent = "Menu"
   contactBtn.textContent = "Contact"

   navContainer.appendChild(homeBtn)
   navContainer.appendChild(menuBtn)
   navContainer.appendChild(contactBtn)


   content.appendChild(header);
}

export default loadHeader;
