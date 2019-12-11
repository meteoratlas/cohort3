import React from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "../hooks/useLinkedList";

const LinkedListApp = () => {
    const [
        list,
        currentNode,
        nextNode,
        prevNode,
        insert,
        deleteNode,
        firstNode,
        lastNode
    ] = useLinkedList(new DoublyLinkedList(null, null));
    //
    const renderNodes = () => {
        return list.map(x => (
            <React.Fragment key={Math.random()}>
                <div className="ll-node-vis">
                    <p>{x.subject}</p>
                    <p>{x.amount}</p>
                </div>
                <h4 className="ll-arrow">⮂</h4>
            </React.Fragment>
        ));
    };

    return (
        <div id="ll-app">
            <h2>Linked List</h2>
            <LinkedListControls
                first={firstNode}
                next={nextNode}
                prev={prevNode}
                last={lastNode}
                insert={insert}
                delete={() => deleteNode(currentNode)}
            />
            <p>
                Subject: {currentNode ? currentNode.subject : "List is empty"}
            </p>
            <p>Amount: {currentNode ? currentNode.amount : "List is empty"}</p>
            <div id="ll-display">{renderNodes()}</div>
        </div>
    );
};

export default LinkedListApp;
