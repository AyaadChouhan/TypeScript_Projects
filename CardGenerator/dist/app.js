"use strict";
const subBtn = document.getElementById("submitBtn");
const cardContainer = document.querySelector(".cardCont");
const inpItem = document.getElementById("inpI");
const inpQuantity = document.getElementById("inpQ");
const inpPrice = document.getElementById("inpPrice");
const mainCont = document.querySelector(".mainCont");
const editCont = document.querySelector(".editCont");
let targetVal;
function createEl(el, id = "", cls = "") {
    const createElement = document.createElement(el);
    if (id)
        createElement.id = id;
    if (cls)
        createElement.classList.add(cls);
    return createElement;
}
function submitFunc(e) {
    const target = e.target;
    const grandParent = target.closest(".outerCardDiv");
    if (target.id === "submitBtn") {
        const crCard = createEl("div", "", "first");
        const crH2 = createEl("h2", "", "item");
        const PQCont = createEl("div", "", "PQCont");
        const priceTag = createEl("h4", "", "priceTag");
        const quantityTag = createEl("h4", "", "quantityTag");
        const cardBtnCont = createEl("div", "", "cardBtnCont");
        const deleteBtn = createEl("button", "deleteBtn");
        const editBtn = createEl("button", "editBtn");
        const outerCardDiv = createEl("div", "", "outerCardDiv");
        crH2.innerText = `Item: ${inpItem.value}`;
        priceTag.innerText = `Price: ${inpPrice.value}`;
        quantityTag.innerText = `Quantity: ${inpQuantity.value}`;
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";
        cardContainer.append(outerCardDiv);
        outerCardDiv.append(crCard);
        crCard.append(crH2, PQCont, cardBtnCont);
        PQCont.append(priceTag, quantityTag);
        cardBtnCont.append(deleteBtn, editBtn);
    }
    else if (target.innerText === "Delete") {
        grandParent === null || grandParent === void 0 ? void 0 : grandParent.remove();
        if (editCont.style.display === "grid")
            editCont.style.display = "none";
    }
    else if (target.innerText === "Edit") {
        targetVal = grandParent;
        if (!targetVal)
            return;
        if (editCont.children.length > 0) {
            editCont.innerHTML = "";
        }
        editFunc();
        const itemEl = targetVal.querySelector(".item");
        const priceEl = targetVal.querySelector(".priceTag");
        const quantityEl = targetVal.querySelector(".quantityTag");
        const currentItem = itemEl ? itemEl.innerText.split(": ")[1] || "" : "";
        const currentPrice = priceEl ? priceEl.innerText.split(": ")[1] || "" : "";
        const currentQuantity = quantityEl ? quantityEl.innerText.split(": ")[1] || "" : "";
        console.log("Editing item:", currentItem, currentPrice, currentQuantity);
        document.querySelector("#editI").value = currentItem;
        document.querySelector("#editP").value = currentPrice;
        document.querySelector("#editQ").value = currentQuantity;
    }
    else if (target.id === "editSubmit") {
        const editItem = document.querySelector("#editI").value;
        const editPrice = document.querySelector("#editP").value;
        const editQuantity = document.querySelector("#editQ").value;
        if (targetVal) {
            const itemTag = targetVal.querySelector(".item");
            const priceTag = targetVal.querySelector(".priceTag");
            const quantityTag = targetVal.querySelector(".quantityTag");
            if (itemTag)
                itemTag.innerText = `Item: ${editItem}`;
            if (priceTag)
                priceTag.innerText = `Price: ${editPrice}`;
            if (quantityTag)
                quantityTag.innerText = `Quantity: ${editQuantity}`;
        }
        editCont.style.display = "none";
    }
}
function editFunc() {
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
    removeBtn.addEventListener("click", () => {
        editCont.style.display = "none";
    });
}
mainCont.addEventListener("click", (e) => {
    submitFunc(e);
});
