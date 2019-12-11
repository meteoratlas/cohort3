import React, { useState } from "react";
import useFormState from "../hooks/useInputState";

const StackQueueForm = props => {
    const [subject, setSubject, resetSubject] = useFormState("");
    const [amount, setAmount, resetAmount] = useFormState("");
    const [response, setResponse] = useState("");

    const onFormSubmit = operation => {
        console.log(operation);
        if (!subject || !amount) {
            setResponse("Please ensure both fields are filled out.");
            return;
        }
        if (operation === "addToStack") {
            props.addToStack(subject, amount);
        }
        if (operation === "addToQueue") {
            props.addToQueue(subject, amount);
        }

        resetSubject();
        resetAmount();
        setResponse("");
    };
    return (
        <div id="sq-form">
            <input name="subject" value={subject} onChange={setSubject}></input>
            <input name="amount" value={amount} onChange={setAmount}></input>
            <div id="stack-buttons">
                <button onClick={() => onFormSubmit("addToStack")}>
                    Add to Stack
                </button>
                <button onClick={props.popFromStack}>Pop from Stack</button>
            </div>
            <div id="queue-buttons">
                <button onClick={() => onFormSubmit("addToQueue")}>
                    Add to Queue
                </button>
                <button onClick={props.popFromQueue}>Pop from Queue</button>
            </div>
            <p>{response}</p>
        </div>
    );
};
export default StackQueueForm;
