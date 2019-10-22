import cards from "./cards.js";

document.querySelector("body").addEventListener("click", e => {
    let index = e.target.parentElement.getAttribute("data-index");
    if (e.target.id == "addButton") {
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