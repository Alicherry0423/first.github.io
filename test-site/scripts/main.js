var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/17942_cry.png") {
    myImage.setAttribute("src", "images/17942_smile.png");
  } else {
    myImage.setAttribute("src", "images/17942.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "不知火五十鈴可愛, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "不知火五十鈴可愛, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};


