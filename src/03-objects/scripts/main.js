import { Account, AccountController } from "./account.js";

const bankNumInput = document.querySelector("#bankNumInput");
const bankDepositButton = document.querySelector("#depositButton");
const bankWithdrawButton = document.querySelector("#withdrawButton");
const bankBalanceButton = document.querySelector("#balanceButton");
const bankResponse = document.querySelector("#bankReport");

let acco = new Account("chequing", 20);

// Setup event listeners

bankDepositButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = isValidInput(bankNumInput.value);
    if (!input) { 
        bankResponse.innerText = "Please enter a valid number."
        return; 
    }
    let response = acco.deposit(input);
    if (typeof response === 'undefined') {
        bankNumInput.value = "";
        bankResponse.innerText = `Successfully deposited $${input} into your account.`;
    }
    else {
        bankResponse.innerText = response;
    }
});

bankWithdrawButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = isValidInput(bankNumInput.value);
    if (!input) { 
        bankResponse.innerText = "Please enter a valid number."
        return; 
    }
    let response = acco.withdraw(input);
    if (typeof response === 'undefined') {
        bankNumInput.value = "";
        bankResponse.innerText = `Successfully withdrew $${input} from your account.`;
    }
    else {
        bankResponse.innerText = response;
    }
});

bankBalanceButton.addEventListener("click", (e)=>{
    e.preventDefault();
    bankResponse.innerText = `The balance of your account "${acco.name}" is currently $${acco.balance().toFixed(2)}.`;
});

// helper function
function isValidInput(input){
    if (typeof input === "NaN" || typeof input === "undefined" ) {
        return false;
    }
    return parseFloat(input);
}

// Account manager view 

let accountManager = new AccountController();

const select = document.querySelector("#acc-select")

document.querySelector("#acc-create-submit").addEventListener("click", (e) =>{
    e.preventDefault();
    let inputEl = document.querySelector("#acc-create-input")
    let input = String(inputEl.value);
    let response = document.querySelector("#acc-create-response");
    inputEl.value = "";
    if (input === "") { 
        response.innerText = "Please enter a valid account name.";
    }
    else {
        accountManager.addAccount(input, 0);
        response.innerText = `Created a new account called '${input}'.`;
        let node = document.createElement("option");
        node.text = input;
        node.value = input;
        select.add(node);
    }
});

select.addEventListener("change", (e) => {
    accountManager.setCurrentAccount(select.value);
});

document.querySelector("#acc-total-button").addEventListener("click", (e) => {
    let total = accountManager.totalAllAccountFunds();
    let response = document.querySelector("#acc-total-response");
    if (typeof total !== "string") {
        response.innerText = `Your total funds amount to $${total}.`;
    } else {
        response.innerText = total;
    }
});

document.querySelector("#funds-deposit-button").addEventListener("click", (e) =>{
    let report = document.querySelector("#funds-modify-response");
    let dwInput = Number(document.querySelector("#funds-modify-input").value);
    if (dwInput === 0){
        report.innerText = "Please enter a value.";
        return;
    }
    let cur = accountManager.getAccount();
    if (cur === undefined){
        report.innerText = "Please create or select an account first."
    } else {
        let res = cur.deposit(dwInput);
        let success = `Successfully deposited $${dwInput} into your account '${cur.name}'`;
        report.innerText = typeof res === "string" ? res : success;
    }
    document.querySelector("#funds-modify-input").value = "";
});

document.querySelector("#funds-withdraw-button").addEventListener("click", (e) =>{
    let report = document.querySelector("#funds-modify-response");
    let dwInput = Number(document.querySelector("#funds-modify-input").value);
    if (dwInput === 0){
        report.innerText = "Please enter a value.";
        return;
    }
    let cur = accountManager.getAccount();
    if (cur === undefined){
        report.innerText = "Please create or select an account first."
    } else {
        let res = cur.withdraw(dwInput);
        let success = `Successfully withdrew $${dwInput} from your account '${cur.name}'`;
        report.innerText = typeof res === "string" ? res : success;
    }
    document.querySelector("#funds-modify-input").value = "";
});

const hiLowResponse = document.querySelector("#hi-low-response");
document.querySelector("#highest-funds-button").addEventListener("click", (e)=>{
    let res = accountManager.findHighestValueAccount();
    if (accountManager.accounts.length === 0) {
        hiLowResponse.innerText = "You have no accounts.";
        return;
    }
    hiLowResponse.innerText = `Your highest value account is ${res}.`;  
});

document.querySelector("#lowest-funds-button").addEventListener("click", (e)=>{
    let res = accountManager.findLowestValueAccount();
    if (accountManager.accounts.length === 0) {
        hiLowResponse.innerText = "You have no accounts.";
        return;
    }
    hiLowResponse.innerText = `Your lowest value account is ${res}.`;  
});