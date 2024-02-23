
// Animation
let id = null;
let ITEM_COUNT = 5;
let CONTAINER_SIDE = 600; 
let myContainer = document.getElementById("myContainer"); 
// update #myContainer width: 600px; height: 600px;
myContainer.style.width = CONTAINER_SIDE + "px";
myContainer.style.height = CONTAINER_SIDE + "px";



let ITEM_SIDE = 100; // update style sheet variables --anim-width: 100px; --anim-height: 100px;
let PADDING = (CONTAINER_SIDE - ITEM_SIDE)/2; // (CONTAINER_SIDE - ITEM_SIDE)/2 given by the dimensions of the container: 200 - (height/2)
let r = PADDING*0.9; // the radius of movement

let centerElem = document.getElementById("myCenter");
let myCenter_width = 100;
let myCenter_height = 205;
centerElem.style.width = myCenter_width + "px";
centerElem.style.height = myCenter_height + "px";

let theta = 0;
let elem0 = document.getElementById("myAnimation0"); 
let elem1 = document.getElementById("myAnimation1"); 
let elem2 = document.getElementById("myAnimation2"); 
let elem3 = document.getElementById("myAnimation3"); 
let elem4 = document.getElementById("myAnimation4"); 


// update ITEM_COUNT when adding;
const myElems = {0: elem0, 1: elem1, 2: elem2, 3:elem3, 4:elem4};
  
// Slider
let slider = document.getElementById("myRange");
let rValue = document.getElementById("r");
rValue.innerHTML = slider.value;
slider.max = PADDING;
slider.oninput = function() {
  r = this.value; // set radius of motion
  rValue.innerHTML = this.value;
  //elem.innerHTML = r;
}


function initAnimation() {
    setXY(0);

    for (const key in myElems) {
        moveElems(myElems[key], 360/ITEM_COUNT*key);
    }
    

    
    centerElem.style.top =  (CONTAINER_SIDE - myCenter_height)/2 + 'px'; 
    centerElem.style.left = (CONTAINER_SIDE - myCenter_width)/2  + 'px'; 
    myMove();
}

function myStop() {
  clearInterval(id);
}

function radians(degrees) {
    return degrees/180*Math.PI;
}

// Update the display values
function setXY(theta) {
    let xy = document.getElementById("xy"); 
    rad = Math.round(radians(theta) * 1000)/1000;
    let x = Math.round(r*Math.cos(rad));
    let y = Math.round(r*Math.sin(rad));
    xy.textContent = "x=" + x + "; y=" + y + "; theta=" + rad + " \u03C0";
}

function moveElems(theElem, angle) {
    let x = Math.round(r*Math.cos(radians(angle)));
    let y = Math.round(r*Math.sin(radians(angle)));
    theElem.style.top = (PADDING - y) + 'px'; 
    theElem.style.left = (PADDING + x) + 'px'; 
}

function myMove() {
  
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if ( theta == 360 ) {
        theta = 0;
    }
    setXY(theta);

    // Center of square moving
    // counter-clockwise
    for (const key in myElems) {
        moveElems(myElems[key], theta+360/ITEM_COUNT*key);
    }

    theta += 1;    
  }


}

