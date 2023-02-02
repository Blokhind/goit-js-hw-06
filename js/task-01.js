const categoryEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoryEl.length);

const categoryList = categoryEl.forEach((el) => {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.querySelectorAll("li").length);
});