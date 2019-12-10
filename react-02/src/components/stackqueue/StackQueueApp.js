import React from "react";
import StackQueueForm from "./StackQueueForm";

const StackQueueApp = () => {
    const addToStack = () => {};
    const popFromStack = () => {};
    const addToQueue = () => {};
    const popFromQueue = () => {};

    return (
        <div id="stack-queue-app">
            <h2>Stacks and Queue</h2>
            <StackQueueForm
                addToStack={addToStack}
                popFromStack={popFromStack}
                addToQueue={addToQueue}
                popFromQueue={popFromQueue}
            />
        </div>
    );
};

export default StackQueueApp;
