import React from "react";

const StackQueueVis = props => {
    return (
        <div id="sq-vis-container">
            <div id="stack-vis">
                <h3>Stack</h3>
                {props.stackNodes}
            </div>
            <div id="queue-vis">
                <h3>Queue</h3>
                {props.queueNodes}
            </div>
        </div>
    );
};

export default StackQueueVis;
