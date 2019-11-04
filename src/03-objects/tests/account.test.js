import { Account, AccountController } from '../scripts/account';

// Account class
test("Test that the account object was initialized correctly.", () => {
    let acc = new Account("checkingAccount", 25)
    expect(acc).toBeInstanceOf(Account);
    expect(acc.funds).toBe(25);
    expect(acc.name).toBe("checkingAccount");

    let acc2 = new Account(4676234, -34);
    expect(acc2).toBeInstanceOf(Account);
    expect(acc2.funds).toBe(0);
    expect(acc2.name).toBe("4676234");
});

test("Test rounding function", () => {
    let acc = new Account("checkingAccount", 25)
    expect(acc.roundToFixed2(54.32925)).toBe(54.33);
    expect(acc.roundToFixed2(32.65323)).toBe(32.65);
    expect(acc.roundToFixed2(15.99999)).toBe(16.00);
});

test("Test deposit function", () => {
    let acc = new Account("checkingAccount", 0);
    acc.deposit(20);
    expect(acc.balance()).toBe(20);
    acc.deposit(50.44);
    expect(acc.balance()).toBe(70.44);
    expect(acc.deposit(-1.44)).toBe("Please enter a positive dollar amount.");
});

test("Test withdraw function", () => {
    let acc = new Account("checkingAccount", 50);
    acc.withdraw(20);
    expect(acc.balance()).toBe(30);
    acc.withdraw(10.50);
    expect(acc.balance()).toBe(19.50);
    expect(acc.withdraw(-5.00)).toBe("Please enter a positive dollar amount.");
    expect(acc.withdraw(50000.00)).toBe("Your account does not contain the requested funds.");
});

test("Test balance function", () => {
    let acc = new Account("checkingAccount", 25.34)
    expect(acc.balance()).toBe(25.34);
    acc.withdraw(2.20);
    expect(acc.balance()).toBe(23.14);
    acc.deposit(100.00);
    expect(acc.balance()).toBe(123.14);
});

// Controller 
let controller = new AccountController();
controller.addAccount("savings", 4000);
let emptyController = new AccountController();
let oneAccController = new AccountController();
oneAccController.addAccount("acc", 54.44);

test("Test controller account add", () => {
    let newAccount = new Account("chequing", 1000);
    let len = controller.accounts.length;
    expect(controller.addAccount("chequing", 1000)).toStrictEqual(newAccount)
    expect(controller.accounts.length).toBe(len + 1);
});

test("Test controller account remove", () => {
    let s = new Account("remove-me", 500);
    controller.addAccount("remove-me", 500);
    expect(controller.accounts.length).toBe(3);
    expect(controller.removeAccount("remove-me")).toStrictEqual(s);
    expect(controller.accounts.length).toBe(2);
    expect(controller.removeAccount("not-in-array")).toBe("There is no account with that name.");

    expect(emptyController.removeAccount("savings")).toBe("You have no accounts.");
});

test("Test renaming command", () => {
    controller.addAccount("name1", 22.45)
    let me = controller.nameAccount("name1", "renamedAccount");
    expect(me.name).toBe("renamedAccount");
    expect(controller.nameAccount("test", null)).toBe("Please enter an account name and a new name.");
    expect(controller.nameAccount("nonexistantAccount", "newName")).toBe("No account by that name is present.");
});

test("Total of funds in all accounts", () => {
    controller.addAccount("dummy", 40000);
    expect(controller.totalAllAccountFunds()).toBe(45022.45);
    controller.addAccount("dummy2", 200);
    expect(controller.totalAllAccountFunds()).toBe(45222.45);
    expect(emptyController.totalAllAccountFunds()).toBe("You have no accounts.")
    expect(oneAccController.totalAllAccountFunds()).toBe(54.44);
});

test("Return the account with the highest funds", () =>{
    expect(emptyController.findHighestValueAccount()).toBe("You have no accounts.");
    expect(oneAccController.findHighestValueAccount()).toBe("acc");
    expect(controller.findHighestValueAccount()).toBe("dummy");
    controller.addAccount("rich", 4353934.34);
    expect(controller.findHighestValueAccount()).toBe("rich");
});

test("Return the account with the lowest funds", () =>{
    expect(emptyController.findLowestValueAccount()).toBe("You have no accounts.");
    expect(oneAccController.findLowestValueAccount()).toBe("acc");
    expect(controller.findLowestValueAccount()).toBe("renamedAccount");
    controller.addAccount("poor", 0.32);
    expect(controller.findLowestValueAccount()).toBe("poor");
});

test("Test getter", () =>{
    controller.currentAccount = "savings";
    expect(controller.getAccount()).toBe("savings");
});

test("Test setter", () =>{
    controller.addAccount("testy", 43);
    controller.setCurrentAccount("testy");
    expect(controller.getAccount().name).toBe("testy");
});