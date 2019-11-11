import {Fetcher, HTMLGenerator, com, HTMLGen} from "./citymain.js";

const cardHolder = document.querySelector("#card-holder");
cardHolder.addEventListener("click", e => {
    if (e.target.className === "card-del-but") {
        let city = com.deleteCity(e.target.parentElement.dataset.city);
        Fetcher.delete(city);
        cardHolder.removeChild(e.target.parentElement);
    }
    if (e.target.className === "card-add-but") {
        updatePopulation(e);
    }
    if (e.target.className === "card-remove-but") {
        updatePopulation(e, false);
    }
});

function updatePopulation(e, movedIn = true) {
    let card = e.target.parentElement;
    let modify = card.querySelector("input").value;
    card.querySelector("input").value = "";
    if (modify === "" || Number(modify) <= 0) {
        // number needed notice
        console.log("Please enter a positive number");
        return;
    }
    let city = com.getCity(card.dataset.city);
    if (movedIn) {
        city.movedIn(Number(modify));
    } else {
        city.movedOut(Number(modify));
    }
    Fetcher.updatePop(city);
    HTMLGen.updateCard(card.dataset.city);
}

document.querySelector("#new-city-submit").addEventListener("click", () => {
    const response = document.querySelector("#new-city-response");

    let name = document.querySelector("#new-city-name").value;
    let lat = document.querySelector("#new-city-lat").value;
    let long = document.querySelector("#new-city-long").value;
    let pop = document.querySelector("#new-city-pop").value;
    if (name === "" || lat === "" || long === "" || pop === "") {
        response.innerText = "Please enter all necessary data.";
        return;
    }
    let attempt = com.createCity(name, Number(lat), Number(long), Number(pop));
    if (typeof attempt === "string") {
        response.innerText = attempt;
    }
    // otherwise, success. Update the server
    Fetcher.addData(attempt)
    response.innerText = `Successfully created your city '${name}'.`;
    [...cardHolder.childNodes].forEach(n => n.remove()); // reset card holder
    HTMLGen.createCardsFromCommunity();
    // reset boxes, cache these somewhere
    document.querySelector("#new-city-name").value = "";
    document.querySelector("#new-city-lat").value = "";
    document.querySelector("#new-city-long").value = "";
    document.querySelector("#new-city-pop").value = "";
});

let communeResponse = document.querySelector("#cc-response");
document.querySelector("#northernMost").addEventListener("click", () => {
    communeResponse.innerText = `The northernmost city in this community is ${com.getMostNorthern()}.`;
});

document.querySelector("#southernMost").addEventListener("click", () => {
    communeResponse.innerText = `The southernmost city in this community is ${com.getMostSouthern()}.`;
});
document.querySelector("#population").addEventListener("click", () => {
    communeResponse.innerText = `The total population of all the cities combined is ${com.getPopulation()} citizens.`;
});