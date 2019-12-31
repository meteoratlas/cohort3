import React, { useState } from "react";
import useFormState from "../hooks/useInputState";

const StackQueueForm = props => {
    const [subject, setSubject, resetSubject] = useFormState("");
    const [amount, setAmount, resetAmount] = useFormState("");
    const [response, setResponse] = useState("");

    const onFormSubmit = operation => {
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
            <div id="sq-form-inputs">
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
                    <button onClick={() => onFormSubmit("addToStack")}>
                        Add to Stack
                    </button>
                    <button onClick={() => onFormSubmit("addToQueue")}>
                        Add to Queue
                    </button>
                </div>
                <div className="form-row">
                    <button onClick={props.popFromStack}>Pop from Stack</button>
                    <button onClick={props.popFromQueue}>Pop from Queue</button>
                </div>
            </div>
            <p>{response}</p>
        </div>
    );
};
export default StackQueueForm;
