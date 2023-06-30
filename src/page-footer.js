const content = document.querySelector("#content");

function loadFooter() {
   const footer = document.createElement("footer");
   const addressContainer = document.createElement("div");
   const address = document.createElement("p")

   footer.classList.add("footer");
   addressContainer.classList.add("address-container");
   address.classList.add("address")

   address.textContent = "Address: 123 Fakestreet Ave Somecity, CA 12345";

   addressContainer.appendChild(address)

   footer.appendChild(addressContainer);

   content.appendChild(footer);
}

export default loadFooter;
