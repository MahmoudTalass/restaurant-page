import resetStyle from './css/reset.css'
import style from './css/style.css'

import loadHome from "./home-page";
import loadMenu from './menu-page';
import loadHeader from "./page-header";
import loadFooter from './page-footer';

const content = document.querySelector("#content")


loadHeader()
loadFooter();

const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeBtn.addEventListener("click", () => {
    content.removeChild(content.childNodes[2])
    loadHome()
})
menuBtn.addEventListener("click", () => {
    content.removeChild(content.childNodes[2]);
    loadMenu()
})


loadHome()

