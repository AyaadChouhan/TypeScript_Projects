const subBtn = document.getElementById("submitBtn") as HTMLElement;
const cardContainer = document.querySelector(".cardCont") as HTMLDivElement;
const inpItem = document.getElementById("inpI") as HTMLInputElement;
const inpQuantity = document.getElementById("inpQ") as HTMLInputElement;
const inpPrice = document.getElementById("inpPrice") as HTMLInputElement;
const mainCont = document.querySelector(".mainCont") as HTMLDivElement;
const editCont = document.querySelector(".editCont") as HTMLDivElement;

function createEl(el: string, id: string, cls?: string): HTMLElement {
  const createElement = document.createElement(el);
  createElement.id = id;
  if (cls) {
    createElement.classList.add(cls);
  }
  return createElement;
}

function submitFunc(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const grandParent = target.parentElement?.parentElement as HTMLElement;
  let targetVal: HTMLElement;

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
  } else if (target.innerText === "Delete") {
    grandParent.remove();
    editCont.remove();
  } else if (target.innerText === "Edit") {
    targetVal = target;
    if (editCont.children.length > 0) {
      editCont.innerHTML = "";
    }
    editFunc();
  } else if (target.id === "editSubmit") {
    const editItem = document.querySelector("#editI") as HTMLInputElement;
    const editQuantity = document.querySelector("#editQ") as HTMLInputElement;
    const editPrice = document.querySelector("#editP") as HTMLInputElement;

    const itemTag = grandParent.querySelector("#item") as HTMLInputElement;
    const priceTag = grandParent.querySelector("#priceTag") as HTMLInputElement;
    const quantityTag = grandParent.querySelector(
      "#quantityTag"
    ) as HTMLInputElement;

    itemTag.innerText = `Item: ${editItem.value}`;
    quantityTag.innerText = `Quantity: ${editQuantity.value}`;
    priceTag.innerText = `Price: ${editPrice.value}`;
    editCont.remove();
  }
}
function editFunc(): void {
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

mainCont.addEventListener("click", (e: MouseEvent) => {
  submitFunc(e);
});
