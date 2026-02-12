// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { initial } from "./firstpage.js";
import {menu} from "./menupage.js";

console.log(greeting);

const content = document.querySelector("#content");

initial();

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
});