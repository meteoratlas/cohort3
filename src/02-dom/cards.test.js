import cards from "./cards.js"

test("Testing card add and remove",()=>{
    document.body.innerHTML =
    '<div id="left">' +
    '<button id="addButton">Add</button>' +
    `<div class="card" data-index="0"><p>Card 0</p>
    <button class="cardAddBeforeButton">Add Before</button>
    <button class="cardAddAfterButton">Add After</button><br />
    <button class="cardDeleteButton">Delete</button></div>` +
    '</div>';

    let cardExample = document.querySelector(".card");
    let container = document.querySelector("#left");

    expect(cards.constructCard(0)).toStrictEqual(cardExample);

    cards.addCardBefore(cardExample);
    expect(Array.from(container.children)[1].dataset.index).toBe("1");

    cards.addCardAfter(cardExample);
    expect(Array.from(container.children)[3].dataset.index).toBe("2");

    cards.deleteCard(cardExample);
    expect(Array.from(container.children).length).toBe(3); 
    cards.addCardAfter(cardExample);
    expect(Array.from(container.children)[container.children.length - 1].dataset.index).toBe("3");
});
