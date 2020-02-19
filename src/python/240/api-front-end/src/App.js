import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import "./App.css";

function App() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("http://127.0.0.1:5000/getall")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Server could not be contacted.");
                }
            })
            .then(d => {
                setData(d);
            })
            .catch(error => {});
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Frontend</h1>
            </header>
            <main>
                <h2>Returned JSON</h2>
                <ReactJson src={data} theme="ocean" enableClipboard={false} />
            </main>
        </div>
    );
}

export default App;
