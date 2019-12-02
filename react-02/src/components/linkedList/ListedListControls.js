import React from "react";
import useFormState from "./hooks/useInputState";

const LinkedListControls = () => {
    const [subject, setSubject, resetSubject] = useFormState("");
    const [amount, setAmount, resetAmount] = useFormState("");
    const handleSubmit = () => {
        resetAmount();
        resetSubject();
    };
    return (
        <div>
            <div id="ll-controls-nav">
                <button>Go to First Node</button>
                <button>Previous Node</button>
                <button>Next Node</button>
                <button>Go to Last Node</button>
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
                <button>Delete Current Node</button>
            </div>
        </div>
    );
};

export default LinkedListControls;
