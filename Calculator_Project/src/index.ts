const inp = document.getElementById("inp") as HTMLInputElement;
const btnCont = document.querySelector(".buttonCont") as HTMLElement;

function calculatorFunc(e: MouseEvent): void {
  const target = e.target as HTMLElement;
  let str: string = String(inp.value);
  let checkDataType: number = Number(target.innerText);

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
      let value: string = inp.value.slice(0, -1);
      try {
        inp.value = eval(value);
      } catch (error) {
        inp.value = "";
        throw new Error("calculation failed");
      }
      break;
    case "C":
      let singleDeletVal: string = inp.value.slice(0, -2);
      inp.value = singleDeletVal;
    default:
      break;
  }
}
btnCont.addEventListener("click", (e: MouseEvent) => {
  calculatorFunc(e as MouseEvent);
});


