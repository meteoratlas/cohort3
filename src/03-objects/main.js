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

document.querySelector("#acc-create-submit").addEventListener("click", (e) =>{
    e.preventDefault();
    let inputEl = document.querySelector("#acc-create-input")
    let input = String(inputEl.value);
    let response = document.querySelector("#acc-create-response");
    let select = document.querySelector("#acc-select");
    inputEl.value = "";
    if (input === "") { 
        response.innerText = "Please enter a valid account name.";
    }
    else {
        accountManager.addAccount(input, 0);
        response.innerText = `Created your new account '${input}'.`;
        let node = document.createElement("option");
        node.text = input;
        node.value = input;
        select.add(node);
    }
});