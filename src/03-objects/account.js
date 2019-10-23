export class Account {
    constructor(accountName, initBalance) {
        this.name = String(accountName);
        initBalance < 0 ? this.funds = 0 : this.funds = this.roundToFixed2(initBalance);
    }
    deposit(toDeposit) {
        if (toDeposit <= 0) {
            return "Please enter a positive dollar amount.";
        }
        this.funds += this.roundToFixed2(toDeposit);
    }
    withdraw(toWithdraw) {
        if (toWithdraw <= 0) {
            return "Please enter a positive dollar amount.";
        }
        if (toWithdraw > this.balance()) {
            return "Your account does not contain the requested funds.";
        }
        this.funds -= this.roundToFixed2(toWithdraw);
    }
    balance() {
        return this.roundToFixed2(this.funds);
    }
    roundToFixed2(num) {
        return Math.round(num * 100) / 100;
    }
}

export class AccountController {
    constructor(){
        this.userName = "Josh";
        this.accounts = [];
    }
    addAccount(name, funds){
        const toAdd = new Account(name, funds);
        this.accounts.push(toAdd);
        return toAdd;
    }
    removeAccount(name){
        if (this.accounts.length === 0) return "You have no accounts.";
        // Removes the first instance (multiple accounts could share the same name).
        let index = this.accounts.findIndex(n=>n.name === name);
        if (index > 0) {
            let [removed] = this.accounts.splice(index, 1);
            return removed;
        } else{
            return "There is no account with that name.";
        }
    }
    nameAccount(account, newName){

    }
    totalAllAccountFunds(){
        return 0;
    }
    findHighestValueAccount(){
        return "";
    }
    findLowestValueAccount(){
        return "";
    }
}
