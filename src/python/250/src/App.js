import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import PostEditor from "./components/PostEditor";

function App() {
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
