var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)


setTimeout(init, 1000);

var dragContainer = document.getElementById("drag-container");
var spinContainer = document.getElementById("spin-container");
var aImg = spinContainer.getElementsByTagName("img");
var aEle = [...aImg]; 


// Size of images
spinContainer.style.width = imgWidth + "px";
spinContainer.style.height = imgHeight + "px";


// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";


function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }