import { footer } from "./page-footer";

const content = document.querySelector("#content");

function loadContacts() {
   const mainContent = document.createElement("main");
   const contactsContainer = document.createElement("article");
   const contactsHeading = document.createElement("h2");
   const emailContainer = document.createElement("div");
   const emailHeading = document.createElement("span");
   const email = document.createElement("p");
   const phoneNumContainer = document.createElement("div");
   const phoneNumHeading = document.createElement("span");
   const phoneNumber = document.createElement("p");

   contactsHeading.textContent = "Contact Us";
   emailHeading.textContent = "Email: ";
   email.textContent = "fakeemail@fakeemail.com";
   phoneNumHeading.textContent = "Phone number: ";
   phoneNumber.textContent = "012-345-6789";

   contactsContainer.classList.add("contacts-container");
   contactsHeading.classList.add("contacts-heading");
   emailContainer.classList.add("email-container");
   emailHeading.classList.add("email-heading");
   email.classList.add("email");
   phoneNumContainer.classList.add("phone-num-container");
   phoneNumHeading.classList.add("phone-num-heading");
   phoneNumber.classList.add("phone-number");

   mainContent.classList.add("contact-page-content", "main-content");

   emailContainer.appendChild(emailHeading);
   emailContainer.appendChild(email);
   phoneNumContainer.appendChild(phoneNumHeading);
   phoneNumContainer.appendChild(phoneNumber);

   contactsContainer.appendChild(emailContainer);
   contactsContainer.appendChild(phoneNumContainer);

   mainContent.appendChild(contactsHeading);
   mainContent.appendChild(contactsContainer);

   content.insertBefore(mainContent, footer);
}

export default loadContacts;
