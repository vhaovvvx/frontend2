const elmt = document.getElementsByClassName("content");
//less1
//hidden
hiddenElmt = () => {
  const hidden = document.getElementById("hiddenElmt").classList.toggle("show");
  if (hidden === true) {
    elmt[0].style.display = "none";
  } else {
    elmt[0].style.display = "block";
  }
};

//less2
//randomColor

randomColor = () => {
  //   const Elmt = document.getElementsByClassName("content2");

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  elmt[1].style.backgroundColor = "#" + randomColor;
};

//less3
swapContent = () => {
  let str = "";
  const elmtSwap = document.querySelector(".content-swap-1");
  const elmtSwap2 = document.querySelector(".content-swap-2");

  str = elmtSwap.textContent;
  elmtSwap.textContent = elmtSwap2.textContent;
  elmtSwap2.textContent = str;
};

//less4
let fontDefault = 14;

changeSize = () => {
  fontDefault++;
  console.log(fontDefault);
  console.log(elmt[2]);
  elmt[2].style.fontSize = "" + fontDefault + "px";
};
