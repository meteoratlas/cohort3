import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        console.log("on mount");
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Frontend</h1>
            </header>
            <main>
                <h2>Returned JSON</h2>
            </main>
        </div>
    );
}

export default App;
