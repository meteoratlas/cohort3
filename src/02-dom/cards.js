let body = document.querySelector("body").addEventListener("click", (e) =>{
    let index = e.target.parentElement.getAttribute('data-index');
    if (e.target.className == "cardAddBeforeButton") {
        console.log(index)
    }
    if (e.target.className == "cardAddAfterButton") {
    }
    if (e.target.className == "cardDeleteButton") {
    }
});

const cards = {
    cardAmount: 0,
    cardCSSID:"card",
    addBeforeButtonClass: "addBeforeButton",
    addAfterButtonClass: "addAfterButton",
    deleteButtonClass: "deleteButton",

    addCard:()=>{
        cardAmount++;
        let toAdd = constructCard(cardAmount);

        return "nothing";
    },
    deleteCard:(card)=>{
        // Return the card we're deleting
        return card;
    },
    constructCard:(cardNum)=>{
        return `<div id=${cardCSSID}>
                    <p>Card ${cardNum}</p>
                    <button class=${addBeforeButtonClass}>Add Before</button>
                    <button class=${addAfterButtonClass}>Add After</button>
                    <button class=${deleteButtonClass}>Delete</button>
                </div>`;
    }

};

export default cards;