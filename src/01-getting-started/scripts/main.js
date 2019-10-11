import functions from './functions.js';
import arrayFunctions from './workingWithArrays.js';
import dictionaryFunctions from './workingWithDictionaries.js';
import provinces from './provinces.js';
import {determineTaxesOwed, taxBrackets} from './canadiantaxes.js';
import {add, sub, multiply, divide} from "./calculator.js";

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Calculator
let calcNumField1 = document.getElementById("calcNumField1");
let calcNumField2 = document.getElementById("calcNumField2");

let calcAddButton = document.getElementById("calcAddButton");
let calcSubButton = document.getElementById("calcSubButton");
let calcMultButton = document.getElementById("calcMultButton");
let calcDivideButton = document.getElementById("calcDivideButton");
let calcResultText = document.getElementById("calcResultText");

calcAddButton.addEventListener("click", ()=>{
    let a = parseFloat(calcNumField1.value);
    let b = parseFloat(calcNumField2.value);

    if (isNaN(a) || isNaN(b)) {
        calcResultText.innerText = `Please input two valid numbers.`;
        return;
    }

    calcResultText.innerText = `${a} plus ${b} equals ${add(a, b)}.`;
});

calcSubButton.addEventListener("click", ()=>{
    let a = parseFloat(calcNumField1.value);
    let b = parseFloat(calcNumField2.value);

    if (isNaN(a) || isNaN(b)) {
        calcResultText.innerText = `Please input two valid numbers.`;
        return;
    }

    calcResultText.innerText = `${a} minus ${b} equals ${sub(a, b)}.`;
});

calcMultButton.addEventListener("click", ()=>{
    let a = parseFloat(calcNumField1.value);
    let b = parseFloat(calcNumField2.value);

    if (isNaN(a) || isNaN(b)) {
        calcResultText.innerText = `Please input two valid numbers.`;
        return;
    }

    calcResultText.innerText = `${a} multiplied by ${b} equals ${multiply(a, b)}.`;
});

calcDivideButton.addEventListener("click", ()=>{
    let a = parseFloat(calcNumField1.value);
    let b = parseFloat(calcNumField2.value);

    if (isNaN(a) || isNaN(b)) {
        calcResultText.innerText = `Please input two valid numbers.`;
        return;
    }

    calcResultText.innerText = `${a} divided by ${b} equals ${divide(a, b)}.`;
});


// Canadian Taxes
let taxesTextfield = document.getElementById("taxesTextfield");
let taxesButton = document.getElementById("taxesButton");
let taxesResultText = document.getElementById("taxesResultText");

taxesButton.addEventListener("click", ()=>{
    let income = taxesTextfield.value;
    if (isNaN(income)){
        taxesResultText.innerText = "Please enter a valid number."
        return;
    }
    taxesResultText.innerText = "With a net income of $" + income + ", you would owe $" + determineTaxesOwed(income, taxBrackets) + ".";
});

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

// Working with dictionaries

let dictionaryTextField = document.getElementById("dictionaryTextfield");
let dictionaryLookupButton = document.getElementById("dictionariesButton");
let dictionaryResultText = document.getElementById("dictionariesResultText");

dictionaryLookupButton.addEventListener("click", () => {
    let n = dictionaryTextField.value.toUpperCase();
    if (n.length == 0) {
        dictionaryResultText.innerText = "Please enter a provincial abbreviation.";
        return;
    }
    if (provinces.hasOwnProperty(n)) {
        dictionaryResultText.innerText = dictionaryFunctions.lookup(n);
    }
    else {
        dictionaryResultText.innerText = "Please enter a valid two-letter provincial abbreviation.";
    }
});