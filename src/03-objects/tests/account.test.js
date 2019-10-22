import Account from '../account';

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