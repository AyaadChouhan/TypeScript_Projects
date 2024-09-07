const subBtn = document.getElementById("submitBtn") as HTMLElement;
const inpItem = document.getElementById("inpI") as HTMLInputElement;
const inpQuantity = document.getElementById("inpQ") as HTMLInputElement;
const inpPrice = document.getElementById("inpPrice") as HTMLInputElement;
const cardContainer = document.querySelector(".cardCont") as HTMLDivElement;
const mainCont = document.querySelector(".mainCont") as HTMLDivElement;
const editCont = document.querySelector(".editCont") as HTMLDivElement;

let targetVal: HTMLElement;

function createEl(el: string, id: string = "", cls: string = ""): HTMLElement {
  const createElement = document.createElement(el);
  if (id) createElement.id = id;
  if (cls) createElement.classList.add(cls);
  return createElement;
}

function submitFunc(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const grandParent = target.closest(".outerCardDiv") as HTMLElement;

  if (target.id === "submitBtn") {
    // Creating the card elements
    const crCard = createEl("div", "", "first");
    const crH2 = createEl("h2", "", "item"); 
    const PQCont = createEl("div", "", "PQCont");
    const priceTag = createEl("h4", "", "priceTag");
    const quantityTag = createEl("h4", "", "quantityTag");
    const cardBtnCont = createEl("div", "", "cardBtnCont");
    const deleteBtn = createEl("button", "deleteBtn");
    const editBtn = createEl("button", "editBtn");
    const outerCardDiv = createEl("div", "", "outerCardDiv");

    // Set text values
    crH2.innerText = `Item: ${inpItem.value}`;
    priceTag.innerText = `Price: ${inpPrice.value}`;
    quantityTag.innerText = `Quantity: ${inpQuantity.value}`;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";

    // Append elements to the DOM
    cardContainer.append(outerCardDiv);
    outerCardDiv.append(crCard);
    crCard.append(crH2, PQCont, cardBtnCont);
    PQCont.append(priceTag, quantityTag);
    cardBtnCont.append(deleteBtn, editBtn);

  } else if (target.innerText === "Delete") {
    // Deleting the card
    grandParent?.remove();
    if (editCont.style.display === "grid") editCont.style.display = "none";

  } else if (target.innerText === "Edit") {
    // Editing the card
    targetVal = grandParent;
    if (!targetVal) return;  // Ensure targetVal is not null

    if (editCont.children.length > 0) {
      editCont.innerHTML = "";  // Clear the edit container if it has children
    }
    editFunc();

    // Get elements to pre-fill the form
    const itemEl = targetVal.querySelector(".item") as HTMLElement | null;
    const priceEl = targetVal.querySelector(".priceTag") as HTMLElement | null;
    const quantityEl = targetVal.querySelector(".quantityTag") as HTMLElement | null;

    // Pre-fill edit form and handle cases when elements don't exist
    const currentItem = itemEl ? itemEl.innerText.split(": ")[1] || "" : "";
    const currentPrice = priceEl ? priceEl.innerText.split(": ")[1] || "" : "";
    const currentQuantity = quantityEl ? quantityEl.innerText.split(": ")[1] || "" : "";

    console.log("Editing item:", currentItem, currentPrice, currentQuantity);  // Debugging

    // Set values in the edit form inputs
    (document.querySelector("#editI") as HTMLInputElement).value = currentItem;
    (document.querySelector("#editP") as HTMLInputElement).value = currentPrice;
    (document.querySelector("#editQ") as HTMLInputElement).value = currentQuantity;

  } else if (target.id === "editSubmit") {
    // Submitting the edited values
    const editItem = (document.querySelector("#editI") as HTMLInputElement).value;
    const editPrice = (document.querySelector("#editP") as HTMLInputElement).value;
    const editQuantity = (document.querySelector("#editQ") as HTMLInputElement).value;

    // Ensure targetVal exists before accessing children
    if (targetVal) {
      const itemTag = targetVal.querySelector(".item") as HTMLElement | null;
      const priceTag = targetVal.querySelector(".priceTag") as HTMLElement | null;
      const quantityTag = targetVal.querySelector(".quantityTag") as HTMLElement | null;

      // Safely set new values if elements are found
      if (itemTag) itemTag.innerText = `Item: ${editItem}`;
      if (priceTag) priceTag.innerText = `Price: ${editPrice}`;
      if (quantityTag) quantityTag.innerText = `Quantity: ${editQuantity}`;
    }

    // Hide the edit container
    editCont.style.display = "none";
  }
}

function editFunc(): void {
  const h4Tag = createEl("h4", "", "");
  const editI = createEl("input", "editI", "");
  const editQ = createEl("input", "editQ", "");
  const editP = createEl("input", "editP", "");
  const subBtn = createEl("button", "editSubmit", "");
  const removeBtn = createEl("button", "x", "");

  // Set edit container layout
  editCont.style.display = "grid";
  h4Tag.innerText = "Editor";
  subBtn.innerText = "Submit";
  removeBtn.innerText = "❌";

  // Append the editor elements
  editCont.append(h4Tag, editI, editQ, editP, subBtn, removeBtn);
  mainCont.append(editCont);

  // Remove edit container when clicking "x"
  removeBtn.addEventListener("click", () => {
    editCont.style.display = "none";
  });
}

// Main event listener to handle clicks
mainCont.addEventListener("click", (e: MouseEvent) => {
  submitFunc(e);

});
