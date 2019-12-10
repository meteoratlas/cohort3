import React from "react";

const StackQueueForm = props => {
    return (
        <div id="sq-form">
            <div id="stack-buttons">
                <button onClick={props.addToStack}>Add to Stack</button>
                <button onClick={props.popFromStack}>Pop from Stack</button>
            </div>
            <div id="queue-buttons">
                <button onClick={props.addToQueue}>Add to Queue</button>
                <button onClick={props.popFromQueue}>Pop from Queue</button>
            </div>
        </div>
    );
};
export default StackQueueForm;
