const imgCont = document.querySelector(".imgCont") as HTMLDivElement;
const fragment: DocumentFragment = document.createDocumentFragment();
const singleImgCont = document.querySelector(
  ".singleImgCont"
) as HTMLDivElement;

function createImages(): void {
  for (let i = 0; i < 16; i++) {
    let data: string = `https://picsum.photos/id/${Math.floor(
      Math.random() * 1000
    )}/300/300`;
    let img: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;
    img.src = data;
    fragment.append(img);
  }
  imgCont.append(fragment);
}

function singleImgFunc(e: Event): void {
  const leftI = document.createElement("i") as HTMLElement;
  const rightI = document.createElement("i") as HTMLElement;

  leftI.classList.add(
    "leftbtn",
    "fa-sharp",
    "fa-regular",
    "fa-circle-left",
    "fa-xl"
  );
  rightI.classList.add(
    "leftbtn",
    "fa-sharp",
    "fa-regular",
    "fa-circle-right",
    "fa-xl"
  );

  let target = e.target as HTMLElement;
  let el = target.cloneNode(true) as HTMLElement;
  if (target.tagName === "IMG" && singleImgCont.children.length === 0) {
    console.log('clicked')
    singleImgCont.append(el);
  }

  if (target.tagName === "IMG" && singleImgCont.children.length >= 1) {
    console.log(singleImgCont.children.length)
    console.log('hello')
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

imgCont.addEventListener("click", (e: Event) => {
  singleImgFunc(e);
});
