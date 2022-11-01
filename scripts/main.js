const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Diciembre.png") {
    myImage.setAttribute("src", "images/Diciembre2.png");
  } else {
    myImage.setAttribute("src", "images/Diciembre.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Arreglos navideños especiales para ti, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Arreglos navideños especiales para ti, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };