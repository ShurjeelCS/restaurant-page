import donner from "./donner.jpg";
import platter from "./mixed platter.jpg";
import starter from "./starter.jpg";


function menu() {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    const div = document.createElement("div");
    div.classList.add("grid");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    heading.textContent = "Our Menu";
    img1.src = donner;
    img2.src = platter;
    img3.src = starter;
    div.appendChild(img1);
    div.appendChild(img2);
    div.appendChild(img3);
    content.appendChild(heading);
    content.appendChild(div);
    
}

export {menu};