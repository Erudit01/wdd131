const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
const menu = document.querySelector(".menu");
menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
const menu = document.querySelector(".menu");
if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
} else {
    menu.classList.add("hide");
}
}

function viewerTemplate(pic, alt) {
return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    
    // get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute("src");
    const srcParts = src.split("-");
    
    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = `${srcParts[0]}-full.jpeg`;
    
    // insert the viewerTemplate into the top of the body element
    const htmlToInsert = viewerTemplate(newSrc, clickedElement.getAttribute("alt"));
    document.body.insertAdjacentHTML("afterbegin", htmlToInsert);

    
    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    console.log("Hehehehehehehe")
    const viewer = document.querySelector(".viewer");
        viewer.remove();
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", viewHandler)