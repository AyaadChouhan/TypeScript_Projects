"use strict";
const subBtn = document.getElementById("submitBtn");
const cardContainer = document.querySelector(".cardCont");
const inpItem = document.getElementById("inpI");
const inpQuantity = document.getElementById("inpQ");
const inpPrice = document.getElementById("inpPrice");
const mainCont = document.querySelector(".mainCont");
const editCont = document.querySelector(".editCont");
function createEl(el, id, cls) {
    const createElement = document.createElement(el);
    createElement.id = id;
    if (cls) {
        createElement.classList.add(cls);
    }
    return createElement;
}
function submitFunc(e) {
    var _a;
    const target = e.target;
    const grandParent = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (target.id === "submitBtn") {
        const crCard = createEl("div", "first");
        const crH2 = createEl("h2", "item");
        const PQCont = createEl("div", "", "PQCont");
        const priceTag = createEl("h4", "priceTag");
        const quantityTag = createEl("h4", "quantityTag");
        const cardBtnCont = createEl("div", "", "cardBtnCont");
        const deleteBtn = createEl("button", "deleteBtn");
        const editBtn = createEl("button", "editBtn");
        const outerCardDiv = createEl("div", "outerCardDiv");
        crH2.innerText = `item : ${inpItem.value}`;
        priceTag.innerText = `Price : ${inpQuantity.value}`;
        quantityTag.innerText = `Quantity :  ${inpPrice.value}`;
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";
        cardContainer.append(outerCardDiv);
        outerCardDiv.append(crCard);
        crCard.append(crH2, PQCont, cardBtnCont);
        PQCont.append(priceTag, quantityTag);
        cardBtnCont.append(deleteBtn, editBtn);
    }
    else if (target.innerText === "Delete") {
        grandParent.remove();
        editCont.remove();
    }
    else if (target.innerText === "Edit") {
        if (editCont.children.length > 0) {
            editCont.innerHTML = '';
        }
        editFunc(grandParent);
    }
    else if (target.id === "editSubmit") {
        console.log(target);
        const editItem = document.querySelector("#editI");
        const editQuantity = document.querySelector("#editQ");
        const editPrice = document.querySelector("#editP");
        const itemTag = grandParent.querySelector("#item");
        const priceTag = grandParent.querySelector("#priceTag");
        const quantityTag = grandParent.querySelector("#quantityTag");
        itemTag.innerText = `Item: ${editItem.value}`;
        quantityTag.innerText = `Quantity: ${editQuantity.value}`;
        priceTag.innerText = `Price: ${editPrice.value}`;
        editCont.remove();
    }
}
function editFunc(card) {
    const h4Tag = createEl("h4", "", "");
    const editI = createEl("input", "editI", "");
    const editQ = createEl("input", "editQ", "");
    const editP = createEl("input", "editP", "");
    const subBtn = createEl("button", "editSubmit", "");
    const removeBtn = createEl("button", "x", "");
    editCont.style.display = "grid";
    h4Tag.innerText = "Editor";
    subBtn.innerText = "Submit";
    removeBtn.innerText = "❌";
    editCont.append(h4Tag, editI, editQ, editP, subBtn, removeBtn);
    mainCont.append(editCont);
}
mainCont.addEventListener("click", (e) => {
    submitFunc(e);
});
