ScrollReveal().reveal('.cards');
ScrollReveal().reveal('.cards2', {delay : 250});
ScrollReveal().reveal('.social', {delay : 250});

const myImage1 = document.getElementById("0001");
myImage1.onclick = () => {
    const mySrc = myImage1.getAttribute("src");
    if (mySrc === "image/pataGato1.svg") {
    myImage1.setAttribute("src", "image/pataGato11.svg");
    } else {
    myImage1.setAttribute("src", "image/pataGato1.svg");
    }
};
const myImage2 = document.getElementById("0002");
myImage2.onclick = () => {
    const mySrc = myImage2.getAttribute("src");
    if (mySrc === "image/pataGato2.svg") {
    myImage2.setAttribute("src", "image/pataGato22.svg");
    } else {
    myImage2.setAttribute("src", "image/pataGato2.svg");
    }
};
const myImage3 = document.getElementById("0003");
myImage3.onclick = () => {
    const mySrc = myImage3.getAttribute("src");
    if (mySrc === "image/pataGato3.svg") {
    myImage3.setAttribute("src", "image/pataGato33.svg");
    } else {
    myImage3.setAttribute("src", "image/pataGato3.svg");
    }
};
const myImage4 = document.getElementById("0004");
myImage4.onclick = () => {
    const mySrc = myImage4.getAttribute("src");
    if (mySrc === "image/pataGato4.svg") {
    myImage4.setAttribute("src", "image/pataGato44.svg");
    } else {
    myImage4.setAttribute("src", "image/pataGato4.svg");
    }
};


