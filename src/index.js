// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import turkishFood from "./turkish.jpg";

console.log(greeting + "baka");

const div = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "Turkuaz";
const paragraph = document.createElement("p");
paragraph.textContent = "Enjoy authentic turkish food at our affordable fine dining establishment. Our atmostphere provides the perfect environment for group dinners and romantic evenings.";
const img = document.createElement("img");
img.src = turkishFood;

div.appendChild(heading);
div.appendChild(paragraph);
div.appendChild(img);