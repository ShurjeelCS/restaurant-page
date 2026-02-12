import donner from "./donner.jpg";
import platter from "./mixed platter.jpg";
import starter from "./starter.jpg";


function menu() {
    
    const content = document.querySelector("#content");
    content.setAttribute("style", "width: 100%; display: grid; place-items: center;")
    const heading = document.createElement("h1");
    const div = document.createElement("div");
    const left = document.createElement("div");
    left.classList.add("left");
    const right = document.createElement("div");
    right.classList.add("right");
    const pcontent = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tempor turpis. Nulla facilisi. Nunc quis urna eget ipsum ullamcorper vulputate. Mauris bibendum accumsan nulla nec consectetur. Mauris accumsan urna vitae mauris consectetur, vel tempor mauris commodo. Pellentesque porttitor sagittis fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed gravida nec leo ac pellentesque. Nam eu augue ut orci tempus gravida sit amet sit amet quam."
    pcontent.appendChild(p);
    right.appendChild(pcontent);

    div.classList.add("row");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    heading.textContent = "Our Menu";
    img1.src = donner;
    const images = [platter, starter];

    left.appendChild(img1);
    div.appendChild(left);
    div.appendChild(right);

    for (let i = 0; i < 2; i++) {
        const templeft = document.createElement("div");
        templeft.classList.add("left");
        
        const imgo = document.createElement("img");
        imgo.src = images[i]; 
        templeft.appendChild(imgo);

        const pi = document.createElement("p");
        pi.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tempor turpis. Nulla facilisi. Nunc quis urna eget ipsum ullamcorper vulputate. Mauris bibendum accumsan nulla nec consectetur. Mauris accumsan urna vitae mauris consectetur, vel tempor mauris commodo. Pellentesque porttitor sagittis fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed gravida nec leo ac pellentesque. Nam eu augue ut orci tempus gravida sit amet sit amet quam.`;
        
        
        div.appendChild(templeft);
        div.appendChild(pi);
    }

    content.appendChild(heading);
    content.appendChild(div);
    
}

export {menu};