
test("Testing event listeners",()=>{
    document.body.innerHTML =
    '<body>' +
    '<div id="left">' +
    '<button id="addButton">Add</button>' +
    `<div class="card" data-index="0"><p>Card 0</p>
    <button class="cardAddBeforeButton">Add Before</button>
    <button class="cardAddAfterButton">Add After</button><br />
    <button class="cardDeleteButton">Delete</button></div>` +
    '</div></body>';

    let addButton = document.querySelector("#addButton");
    addButton.click();
    // Review this functionality when testing main is more clear.
});