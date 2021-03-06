global.fetch = require("node-fetch");

const url = "http://localhost:5000/";

test("test server interactions", async () => {
    let data = await postData(url + "getall");

    expect(data.status).toEqual(200);
    expect(data.Customers.length).toBe(11);

    data = await postData(url + "get", {
        key: "customer_id",
        keyval: 4,
        sheet: "Customers"
    });
    expect(data.status).toEqual(200);
    expect(data.first_name).toEqual("Dorethea");

    data = await postData(url + "get", {
        key: "product_id",
        keyval: 6,
        sheet: "Products"
    });
    expect(data.status).toEqual(200);
    expect(data.name).toEqual("Tuba");

    data = await postData(url + "get", { baddata: 1 });
    expect(data.status).toEqual(400);

    // Test add
    data = await postData(url + "add", {
        sheet: "Products",
        key: 1,
        product_id: 20,
        name: "Ukelele",
        price: 111.23
    });
    expect(data.status).toEqual(400);
});

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    const json = await response.json(); // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}
