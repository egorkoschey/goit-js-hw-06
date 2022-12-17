const categoryItem = document.querySelector("#categories");
const categoryList = categoryItem.querySelectorAll("li.item");
console.log("Number of categories:", categoryList.length);


const categoryElements = document.querySelectorAll("li.item")
    categoryElements.forEach(function (categoryElement){
        const firstElem = categoryElement.firstElementChild;
        console.log(`Category: ${firstElem.textContent}`)
    
        
const sumOfItems = categoryElement.querySelectorAll("li");
console.log("Elements:", sumOfItems.length);
});