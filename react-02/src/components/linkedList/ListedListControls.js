import React from "react";

const LinkedListControls = () => {
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
                <input name="subject"></input>
                <input name="amount"></input>
                <br />
                <button>Insert New Node Here</button>
                <button>Delete Current Node</button>
            </div>
        </div>
    );
};

export default LinkedListControls;
