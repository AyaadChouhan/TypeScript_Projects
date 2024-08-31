"use strict";
const inp = document.getElementById("inp");
const btnCont = document.querySelector(".buttonCont");
function calculatorFunc(e) {
  const target = e.target;
  let str = String(inp.value);
  let checkDataType = Number(target.innerText);
  if (target.id === "btn" && !isNaN(checkDataType)) {
    let val = target.innerText;
    inp.value += val;
    console.log(val);
  } else if (!isNaN(Number(str[str.length - 1]))) {
    if (target.id === "btn") {
      let val = target.innerText;
      inp.value += val;
    }
  }
  switch (target.innerText) {
    case "AC":
      inp.value = "";
      break;
    case "=":
      let value = inp.value.slice(0, -1);
      try {
        inp.value = eval(value);
      } catch (error) {
        inp.value = "";
        throw new Error("calculation failed");
      }
      break;
    case "C":
      let singleDeletVal = inp.value.slice(0, -2);
      inp.value = singleDeletVal;
    default:
      break;
  }
}
btnCont.addEventListener("click", (e) => {
  calculatorFunc(e);
});
//# sourceMappingURL=index.js.map
