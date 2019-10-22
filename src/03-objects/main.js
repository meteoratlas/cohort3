import Account from "./account.js";


const bankNumInput = document.querySelector("#bankNumInput");
const bankDepositButton = document.querySelector("#depositButton");
const bankWithdrawButton = document.querySelector("#withdrawButton");
const bankBalanceButton = document.querySelector("#balanceButton");
const bankResponse = document.querySelector("#bankReport");

let account = new Account("chequing", 20);

// Setup event listeners

bankDepositButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = isValidInput(bankNumInput.value);
    if (!input) { 
        bankResponse.innerText = "Please enter a valid number."
        return; 
    }
    let response = account.deposit(input);
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
    let response = account.withdraw(input);
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
    bankResponse.innerText = `The balance of your account "${account.name}" is currently $${account.balance().toFixed(2)}.`;
});

// helper function
function isValidInput(input){
    if (typeof input === "NaN" || typeof input === "undefined" ) {
        return false;
    }
    return parseFloat(input);
}