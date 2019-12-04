import React, { useState } from "react";
import useFormState from "./hooks/useInputState";

const LinkedListControls = props => {
    const [subject, setSubject, resetSubject] = useFormState("");
    const [amount, setAmount, resetAmount] = useFormState("");
    const [response, setResponse] = useState("");
    const handleSubmit = () => {
        if (!subject || !amount) {
            setResponse("Please ensure both fields are filled out.");
            return;
        }
        props.insert(subject, amount);

        resetAmount();
        resetSubject();
        setResponse("");
    };
    return (
        <div>
            <div id="ll-controls-nav">
                <button onClick={props.first}>Go to First Node</button>
                <button onClick={props.prev}>Previous Node</button>
                <button onClick={props.next}>Next Node</button>
                <button onClick={props.last}>Go to Last Node</button>
            </div>
            <br />
            <div id="ll-controls-mod">
                <input
                    name="subject"
                    value={subject}
                    onChange={setSubject}
                ></input>
                <input
                    name="amount"
                    value={amount}
                    onChange={setAmount}
                ></input>
                <br />
                <button onClick={handleSubmit}>Insert New Node Here</button>
                <button onClick={props.delete}>Delete Current Node</button>
            </div>
            <p>{response}</p>
        </div>
    );
};

export default LinkedListControls;
