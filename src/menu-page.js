const content = document.querySelector("#content");

function loadMenu() {
   const mainContent = document.createElement("main");
   const menuHeader = document.createElement("h2");
   const menuContainer = document.createElement("article");

   // each contains a menu item group (ex. soups, beverages, etc) and their heading
   const menuGroup1 = document.createElement("div");
   const menuGroup2 = document.createElement("div");
   const menuGroup3 = document.createElement("div");

   // the heading of each menu item group
   const menuGroupHeading1 = document.createElement("h3");
   const menuGroupHeading2 = document.createElement("h3");
   const menuGroupHeading3 = document.createElement("h3");

   // contains a group of menu items to separate from heading
   const groupItemsContainer1 = document.createElement("div");
   const groupItemsContainer2 = document.createElement("div");
   const groupItemsContainer3 = document.createElement("div");

   // contains individual items including their heading and description
   const menuItemContainer1 = document.createElement("div");
   const menuItemContainer2 = document.createElement("div");
   const menuItemContainer3 = document.createElement("div");
   const menuItemContainer4 = document.createElement("div");
   const menuItemContainer5 = document.createElement("div");
   const menuItemContainer6 = document.createElement("div");
   const menuItemContainer7 = document.createElement("div");

   // heading of each menu item
   const menuItemHeading1 = document.createElement("h4");
   const menuItemHeading2 = document.createElement("h4");
   const menuItemHeading3 = document.createElement("h4");
   const menuItemHeading4 = document.createElement("h4");
   const menuItemHeading5 = document.createElement("h4");
   const menuItemHeading6 = document.createElement("h4");
   const menuItemHeading7 = document.createElement("h4");

   // description of each menu item
   const menuItemDesc1 = document.createElement("p");
   const menuItemDesc2 = document.createElement("p");
   const menuItemDesc3 = document.createElement("p");
   const menuItemDesc4 = document.createElement("p");
   const menuItemDesc5 = document.createElement("p");
   const menuItemDesc6 = document.createElement("p");
   const menuItemDesc7 = document.createElement("p");

   mainContent.classList.add("menu-page-content", "main-content");
   menuHeader.classList.add("menu-header");

   menuContainer.classList.add("menu-container");

   menuGroup1.classList.add("items-group");
   menuGroup2.classList.add("items-group");
   menuGroup3.classList.add("items-group");

   menuGroupHeading1.classList.add("items-group-heading");
   menuGroupHeading2.classList.add("items-group-heading");
   menuGroupHeading3.classList.add("items-group-heading");

   menuItemContainer1.classList.add("menu-item");
   menuItemContainer2.classList.add("menu-item");
   menuItemContainer3.classList.add("menu-item");
   menuItemContainer4.classList.add("menu-item");
   menuItemContainer5.classList.add("menu-item");
   menuItemContainer6.classList.add("menu-item");
   menuItemContainer7.classList.add("menu-item");

   menuItemHeading1.classList.add("menu-item-heading");
   menuItemHeading2.classList.add("menu-item-heading");
   menuItemHeading3.classList.add("menu-item-heading");
   menuItemHeading4.classList.add("menu-item-heading");
   menuItemHeading5.classList.add("menu-item-heading");
   menuItemHeading6.classList.add("menu-item-heading");
   menuItemHeading7.classList.add("menu-item-heading");

   menuItemDesc1.classList.add("menu-item-desc");
   menuItemDesc2.classList.add("menu-item-desc");
   menuItemDesc3.classList.add("menu-item-desc");
   menuItemDesc4.classList.add("menu-item-desc");
   menuItemDesc5.classList.add("menu-item-desc");
   menuItemDesc6.classList.add("menu-item-desc");
   menuItemDesc7.classList.add("menu-item-desc");

   menuGroupHeading1.textContent = "Soups";
   menuGroupHeading2.textContent = "Sandwiches";
   menuGroupHeading3.textContent = "Beverages";

   menuItemHeading1.textContent = "Tomato Basil Soup";
   menuItemDesc1.textContent =
      " A classic combination of ripe tomatoes, aromatic basil, and savory herbs blended into a comforting and flavorful soup.";

   menuItemHeading2.textContent = "French Onion Soup";
   menuItemHeading2.textContent =
      "Rich and hearty, this soup features caramelized onions simmered in a flavorful beef broth, topped with melted cheese and toasted croutons.";

   menuItemHeading3.textContent = "Chicken Noodle Soup";
   menuItemDesc3.textContent =
      "Tender chicken, wholesome vegetables, and delicate egg noodles come together in a comforting broth, perfect for a soothing meal.";

   menuItemHeading4.textContent = "Grilled Cheese Sandwich";
   menuItemDesc4.textContent =
      "A timeless favorite, our grilled cheese sandwich features a perfect blend of melted cheeses sandwiched between crispy golden bread.";

   menuItemHeading5.textContent = "Turkey and Avocado Wrap";
   menuItemDesc5.textContent =
      "Sliced turkey, creamy avocado, fresh lettuce, and zesty mayo wrapped in a soft tortilla, creating a satisfying and nutritious handheld delight.";

   menuItemHeading6.textContent = "Freshly Brewed Coffee";
   menuItemDesc6.textContent =
      "Enjoy the aroma and bold flavor of our freshly brewed coffee, the perfect pick-me-up for any time of the day.";

   menuItemHeading7.textContent = "Iced Tea";
   menuItemDesc7.textContent =
      "Choose between sweetened or unsweetened iced tea, a refreshing and cool beverage to quench your thirst.";

   // Soups group
   menuItemContainer1.appendChild(menuItemHeading1);
   menuItemContainer1.appendChild(menuItemDesc1);
   menuItemContainer2.appendChild(menuItemHeading2);
   menuItemContainer2.appendChild(menuItemDesc2);
   menuItemContainer3.appendChild(menuItemHeading3);
   menuItemContainer3.appendChild(menuItemDesc3);

   groupItemsContainer1.appendChild(menuItemContainer1);
   groupItemsContainer1.appendChild(menuItemContainer2);
   groupItemsContainer1.appendChild(menuItemContainer3);

   menuGroup1.appendChild(menuGroupHeading1);
   menuGroup1.appendChild(groupItemsContainer1);

   // Sandwiches group
   menuItemContainer4.appendChild(menuItemHeading4);
   menuItemContainer4.appendChild(menuItemDesc4);
   menuItemContainer5.appendChild(menuItemHeading4);
   menuItemContainer5.appendChild(menuItemDesc4);

   groupItemsContainer2.appendChild(menuItemContainer4);
   groupItemsContainer2.appendChild(menuItemContainer5);

   menuGroup2.appendChild(menuGroupHeading2);
   menuGroup2.appendChild(groupItemsContainer2);

   // Beverages group
   menuItemContainer6.appendChild(menuItemHeading1);
   menuItemContainer6.appendChild(menuItemDesc1);
   menuItemContainer7.appendChild(menuItemHeading2);
   menuItemContainer7.appendChild(menuItemDesc2);

   groupItemsContainer3.appendChild(menuItemContainer6);
   groupItemsContainer3.appendChild(menuItemContainer7);

   menuGroup3.appendChild(menuGroupHeading3);
   menuGroup3.appendChild(groupItemsContainer3);

   menuContainer.appendChild(menuGroup1);
   menuContainer.appendChild(menuGroup2);
   menuContainer.appendChild(menuGroup3);
}

export default loadMenu;
