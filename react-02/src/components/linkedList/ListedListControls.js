import React, { useState } from "react";
import useFormState from "../hooks/useInputState";

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
                <div className="form-column">
                    <button onClick={props.prev}>Previous Node</button>
                    <button onClick={props.first}>Go to First Node</button>
                    <input
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={setSubject}
                    ></input>
                    <button onClick={handleSubmit}>Insert New Node</button>
                </div>
                <div className="form-column">
                    <button onClick={props.next}>Next Node</button>
                    <button onClick={props.last}>Go to Last Node</button>
                    <input
                        name="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={setAmount}
                    ></input>
                    <button onClick={props.delete}>Delete Current Node</button>
                </div>

                <br />
                <div id="ll-controls-mod">
                    <br />
                </div>
            </div>
            <p>{response}</p>
        </div>
    );
};

export default LinkedListControls;
