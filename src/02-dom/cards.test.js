import cards from "./cards.js"

test("Testing card adder",()=>{
    expect(cards.addCard()).toBe("card");
});

test("Testing card before adder",()=>{
    expect(cards.addCardBefore()).toBe("card");
});

test("Testing card after adder",()=>{
    expect(cards.addCardAfter()).toBe("card");
});

test("Testing card deleter",()=>{
    expect(cards.deleteCard()).toBe("card");
});