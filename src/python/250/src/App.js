import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import PostEditor from "./components/PostEditor";

function App() {
    function fetch(operation) {
        return `${window.location.href}${operation}`;
    }
    async function postData(url, data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        const json = await response.json(); // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    }
    return (
        <div className="App">
            <header>
                <h1>Header</h1>
                <Button>Test Button</Button>
            </header>
            <main>
                <h1>Main</h1>
                <PostEditor />
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
}

export default App;
