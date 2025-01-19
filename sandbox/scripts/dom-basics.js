const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const ingredientData = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 Tbsp", "8"];

function ingredientTemplate(index) {
    return `<li>${portionData[index]} ${ingredientData[index]}`
}

const newList = document.createElement("ul");
ingredientData.forEach(function(item, index) {
    newList.innerHTML += ingredientTemplate(index);
})

document.body.append(newList);