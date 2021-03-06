export class Account {
    constructor(accountName, initBalance, UID) {
        this.name = String(accountName);
        this.UID = UID;
        initBalance < 0
            ? (this.funds = 0)
            : (this.funds = this.roundToFixed2(initBalance));
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
    constructor(accounts = []) {
        this.accounts = accounts;
    }
    getAccount(ID) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].UID === ID) {
                return this.accounts[i];
            }
        }
        return null;
    }
    clone() {
        return new AccountController(this.accounts);
    }
    addAccount(name, funds) {
        const toAdd = new Account(name, funds);
        this.accounts = [...this.accounts, toAdd];
        return toAdd;
    }
    removeAccount(acc) {
        let index = this.accounts.findIndex(n => n.UID === acc.UID);
        if (index >= 0) {
            this.accounts.splice(index, 1);
        }
        return this.accounts;
    }
    nameAccount(origName, newName) {
        if (typeof origName !== "string" || typeof newName !== "string") {
            return "Please enter an account name and a new name.";
        }
        let acc = this.accounts.find(({ name }) => name === origName);
        if (acc !== undefined) {
            acc.name = newName;
            return acc;
        }
        return "No account by that name is present.";
    }
    totalAllAccountFunds() {
        if (this.accounts.length === 0) {
            return "You have no accounts.";
        }
        if (this.accounts.length === 1) {
            return this.accounts[0].funds;
        }
        return this.accounts.map(n => n.funds).reduce((a, n) => a + n);
    }

    findHighestValueAccount() {
        if (this.accounts.length === 0) {
            return "You have no accounts.";
        }
        if (this.accounts.length === 1) {
            return this.accounts[0].name;
        }
        let highest = this.accounts[0];
        this.accounts.forEach(n => {
            if (n.funds > highest.funds) {
                highest = n;
            }
        });
        return highest.name;
        //let highest = Math.max(...this.accounts.map(n => n.funds));
    }
    findLowestValueAccount() {
        if (this.accounts.length === 0) {
            return "You have no accounts.";
        }
        if (this.accounts.length === 1) {
            return this.accounts[0].name;
        }
        let lowest = this.accounts[0];
        this.accounts.forEach(n => {
            if (n.funds < lowest.funds) {
                lowest = n;
            }
        });
        return lowest.name;
    }
}
