const content = document.querySelector("#content");

function loadFooter() {
   const footer = document.createElement("footer");
    const addressContainer = document.createElement('div')

   const addressHalf1 = document.createElement("p");
   const addressHalf2 = document.createElement('p')

   footer.classList.add("footer");
   addressContainer.classList.add("copyright");

   addressHalf1.textContent = "123 Fakestreet Ave"
   addressHalf2.textContent = "Somecity, CA 12345"

   addressContainer.appendChild(addressHalf1)
   addressContainer.appendChild(addressHalf2)
   footer.appendChild(addressContainer)

   content.appendChild(footer)
}

export default loadFooter;
