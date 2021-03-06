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
        <>
            <div id="ll-controls-nav">
                <div className="form-row">
                    <button onClick={props.prev}>Previous Node</button>
                    <button onClick={props.next}>Next Node</button>
                </div>
                <div className="form-row">
                    <button onClick={props.first}>Go to First Node</button>
                    <button onClick={props.last}>Go to Last Node</button>
                </div>
                <div className="form-row">
                    <input
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={setSubject}
                    ></input>
                    <input
                        name="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={setAmount}
                    ></input>
                </div>
                <div className="form-row">
                    <button onClick={handleSubmit}>Insert New Node</button>
                    <button onClick={props.delete}>Delete Current Node</button>
                </div>

                <br />
            </div>
            <p>{response}</p>
        </>
    );
};

export default LinkedListControls;
