document.querySelector("body").addEventListener("click", e => {
    let index = e.target.parentElement.getAttribute("data-index");
    if (e.target.id == "addButton") {
        //console.log(document.querySelector("#left").lastElementChild);
        cards.addCardAfter(document.querySelector("#left").lastElementChild);
    }
    if (e.target.className == "cardAddBeforeButton") {
        const parentCard = e.target.parentElement;
        cards.addCardBefore(parentCard);
    }
    if (e.target.className == "cardAddAfterButton") {
        const parentCard = e.target.parentElement;
        cards.addCardAfter(parentCard);
    }
    if (e.target.className == "cardDeleteButton") {
        const parentCard = e.target.parentElement;
        cards.deleteCard(parentCard);
    }
});

const cards = {
    cardCount: 1,
    constructCard: cardNum => {
        let el = document.createElement("div");
        el.className = "card";
        el.dataset.index = cardNum;
        // Unfortunately the HTML needs to be formatted like this because jest doesn't ignore white space
        el.innerHTML = `<p>Card ${cardNum}</p>
    <button class="cardAddBeforeButton">Add Before</button>
    <button class="cardAddAfterButton">Add After</button><br />
    <button class="cardDeleteButton">Delete</button>`;
        // return the card div
        return el;
    },
    addCardBefore: card => {
        let el = cards.constructCard(cards.cardCount);
        cards.cardCount++;
        document.querySelector("#left").insertBefore(el, card);
    },
    addCardAfter: card => {
        let el = cards.constructCard(cards.cardCount);
        cards.cardCount++;
        const thisCardIndex = card.dataset.index;
        const cardHolder = document.querySelector("#left");
        let nodes = Array.from(cardHolder.children);
        let thisPos = nodes.findIndex(n => n.dataset.index === thisCardIndex);
        thisPos++; // reference the element after this one
        if (nodes[thisPos]) {
            card.parentNode.insertBefore(el, nodes[thisPos]);
        } else {
            // no card after this, so add to the end of the cardholder
            cardHolder.appendChild(el);
        }
    },
    deleteCard: card => {
        document.querySelector("#left").removeChild(card);
    }
};

export default cards;
