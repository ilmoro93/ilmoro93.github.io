// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/bike-5431242_1280.png') {
        myImage.setAttribute('src','images/41cqd2vbXnL.jpg');
    } else {
        myImage.setAttribute('src','images/bike-5431242_1280.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Per favore inserisci il tuo nome.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Guarda che bella bici, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Guarda che bella bici, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
