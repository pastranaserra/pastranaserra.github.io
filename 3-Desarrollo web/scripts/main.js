let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/KLS.jpg') {
      myImage.setAttribute('src','images/keto2.jpg');
    } else {
      myImage.setAttribute('src','images/KLS.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to KetolatinaSerts ' + myName;
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeader.textContent = 'Welcome to KetolatinaSerts ' + storedName;
}