function aboutUs() {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Turkuaz";
    heading.setAttribute("style", "text-align: center;");
    const p = document.createElement("p");
    p.textContent = "At Turkuaz, we are dedicated to bringing the rich and vibrant flavours of Turkish cuisine to our community. Our menu features authentic dishes crafted from the freshest ingredients, ensuring a delightful culinary experience for all our guests. We pride ourselves on offering a warm and inviting atmosphere paired with friendly service, making every visit memorable. Join us at Turkuaz to savour the true flavours of Turkey and enjoy a meal that will transport your taste buds. Thank you for choosing Turkuaz!";
    content.appendChild(heading);
    content.appendChild(p);
}

export {aboutUs};