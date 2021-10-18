// define parameters for acceptable hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// generate random HEX color

// set btn to the element with id 'btn'
const btn = document.getElementById("btn");
// set color to the item with 'color' class
const color = document.querySelector(".color");

// listen for click on 'btn' item
btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
// add each random 
     hexColor += hex[getRandomNumber()];
}

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Math.floor to round DOWN to integer from Math.random so that it falls within hex.length
// if rounded up then it would be longer than hex.length by 1
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}