const inp = document.getElementById("inp") as HTMLInputElement;
const btnCont = document.querySelector(".buttonCont") as HTMLElement;

let returnedEval = false;
function calculatorFunc(e: MouseEvent): void {
  const target = e.target as HTMLElement;
  let str: string = String(inp.value);
  let checkDataType: number = Number(target.innerText);

  if (boolEval && !isNaN(checkDataType)) {
    inp.value = "";
    returnedEval = false;
  }
  if (target.id === "btn" && !isNaN(checkDataType)) {// in this condition first i want number not operator that means if user try to type operator first then i doesn't happen's but if user write a number first then i will print in the input value
    let val = target.innerText;
    inp.value += val;
    console.log(val);
  } else if (!isNaN(Number(str[str.length - 1]))) { //in this condition we say if last digit of input values is number then add operator in the input list else dont add operator bcz we have already a opertor at the end then why we want
    if (target.id === "btn") {
      let val = target.innerText;
      console.log(val);
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
        returnedEval = true;
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
