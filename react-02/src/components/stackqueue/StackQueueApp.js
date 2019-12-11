import React, { useState } from "react";
import StackQueueForm from "./StackQueueForm";
import StackQueueVis from "./StackQueueVis";
import Stack from "./model/Stack";
import Queue from "./model/Queue";

const StackQueueApp = () => {
    //const [stack, addToStack, popStack] = useStack(new Stack("first", 1));
    //const [queue, addToQueue, popQueue] = useStack(new Queue("first", 1));

    const [stack, setStack] = useState(new Stack("stack 1", 1));
    const [queue, setQueue] = useState(new Queue("queue 1", 1));

    const addToStack = (sub, amt) => {
        const newStack = stack.clone();
        newStack.add(sub, amt);
        setStack(newStack);
    };
    const addToQueue = (sub, amt) => {
        const newQueue = queue.clone();
        newQueue.add(sub, amt);
        setQueue(newQueue);
    };
    const popFromStack = () => {
        if (!stack.head) {
            // stack is empty
            return;
        }
        const newStack = stack.clone();
        newStack.pop();
        setStack(newStack);
    };
    const popFromQueue = () => {
        if (!queue.head) {
            // queue is empty
            return;
        }
        const newQueue = queue.clone();
        newQueue.pop();
        setQueue(newQueue);
    };

    const renderNodes = stackOrQueue => {
        return stackOrQueue.map(x => (
            <React.Fragment key={x.id}>
                <div className="sq-node-vis">
                    <p>{x.subject ? x.subject : "[Empty]"}</p>
                    <p>{x.amount ? x.amount : "[Empty]"}</p>
                </div>
                {/* <h4 className="sq-arrow">⮂</h4> */}
            </React.Fragment>
        ));
    };

    return (
        <div id="stack-queue-app">
            <h2>Stacks and Queue</h2>
            <StackQueueForm
                addToStack={addToStack}
                popFromStack={popFromStack}
                addToQueue={addToQueue}
                popFromQueue={popFromQueue}
            />
            <div id="sq-vis-container">{}</div>
            <StackQueueVis
                stackNodes={renderNodes(stack)}
                queueNodes={renderNodes(queue)}
            />
        </div>
    );
};

export default StackQueueApp;
