import functions from './functions.js';
import arrayFunctions from './workingWithArrays.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Working with arrays

let arraysTextfield   = document.getElementById("arraysTextfield");
let arraysAddButton   = document.getElementById("arraysAddButton");
let arraysShowButton  = document.getElementById("arraysShowButton");
let arraysTotalButton = document.getElementById("arraysTotalButton");
let arraysClearButton = document.getElementById("arraysClearButton");
let arraysResultText  = document.getElementById("arraysResultText");

let array = [];

arraysAddButton.addEventListener("click", () => {
    let n = arraysTextfield.value;
    if (n.length == 0) {
        arraysResultText.innerText = "Please enter a value.";
        return;
    }
    if (isNaN(n)) {
        arraysResultText.innerText = "ERROR: a numeric value is required.";
        return;
    }
    arraysResultText.innerText = "Added " + n + " to the array.";
    arrayFunctions.add(array, parseFloat(n));
    arraysTextfield.value = "";
});

arraysShowButton.addEventListener("click", () => {
    let result = arrayFunctions.show(array);
    if (result.length == 0) {
        arraysResultText.innerText = "The array currently has no values.";
        return;
    }
    arraysResultText.innerText = "The array currenly contains " + result + ".";
});

arraysTotalButton.addEventListener("click", () => {
    arraysResultText.innerText = "The total of all the numbers in the array is " + arrayFunctions.total(array) + ".";
});

arraysClearButton.addEventListener("click", () => {
    array = arrayFunctions.clear();
    arraysResultText.innerText = "The array has been cleared."
});