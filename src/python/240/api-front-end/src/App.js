import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import "./App.css";

function App() {
    const [data, setData] = useState({});
    const [showDataTypes, setShowDataTypes] = useState(true);
    const [serverResponseMsg, setServerResponseMsg] = useState("Connecting...");
    setTimeout(() => {
        setServerResponseMsg("Could not connect to server.");
    }, 5000);
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
    const handleInputChange = e => {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        setShowDataTypes(value);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Frontend</h1>
                <form>
                    <label>Show Data Types in JSON?</label>
                    <input
                        type="checkbox"
                        checked={showDataTypes}
                        onChange={handleInputChange}
                    ></input>
                </form>
            </header>
            <main>
                {Object.entries(data).length === 0 &&
                data.constructor === Object ? (
                    <h2>{serverResponseMsg}</h2>
                ) : (
                    <ReactJson
                        src={data}
                        theme="twilight"
                        enableClipboard={false}
                        displayDataTypes={showDataTypes}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
