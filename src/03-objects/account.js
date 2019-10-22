class Account {
    constructor(accountName, initBalance) {
        this.name = String(accountName);
        if (initBalance < 0) {
            initBalance = 0;
        } else {
            this.funds = this.roundToFixed2(initBalance);
        }
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
        return this.funds;
    }
    roundToFixed2(num) {
        return Math.round(num * 100) / 100;
    }
}

export default Account;
