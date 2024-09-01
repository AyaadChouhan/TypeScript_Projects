"use strict";
const imgCont = document.querySelector(".imgCont");
const fragment = document.createDocumentFragment();
const singleImgCont = document.querySelector(".singleImgCont");
function createImages() {
    for (let i = 0; i < 16; i++) {
        let data = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300/300`;
        let img = document.createElement("img");
        img.src = data;
        fragment.append(img);
    }
    imgCont.append(fragment);
}
function singleImgFunc(e) {
    const leftI = document.createElement("i");
    const rightI = document.createElement("i");
    leftI.classList.add("leftbtn", "fa-sharp", "fa-regular", "fa-circle-left", "fa-xl");
    rightI.classList.add("leftbtn", "fa-sharp", "fa-regular", "fa-circle-right", "fa-xl");
    let target = e.target;
    let el = target.cloneNode(true);
    if (target.tagName === "IMG" && singleImgCont.children.length === 0) {
        console.log('clicked');
        singleImgCont.append(el);
    }
    if (target.tagName === "IMG" && singleImgCont.children.length >= 1) {
        console.log(singleImgCont.children.length);
        console.log('hello');
        singleImgCont.innerHTML = "";
        if (singleImgCont.children.length <= 0) {
            singleImgCont.append(leftI);
            singleImgCont.append(el);
        }
        singleImgCont.append(rightI);
    }
}
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        createImages();
    }
});
imgCont.addEventListener("click", (e) => {
    singleImgFunc(e);
});
//# sourceMappingURL=app.js.map