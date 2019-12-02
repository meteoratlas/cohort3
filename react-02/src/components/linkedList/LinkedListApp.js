import React, { useState, Component } from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "./hooks/useLinkedList";

const LinkedListApp = () => {
    //const [list, setList] = useState(new DoublyLinkedList());
    const [list, currentNode, nextNode, prevNode, insert] = useLinkedList(
        new DoublyLinkedList("Test Head", 1)
    );
    return (
        <div id="ll-app">
            <h2>Linked List</h2>
            <LinkedListControls
                next={nextNode}
                prev={prevNode}
                insert={insert}
            />
            <p>Subject:{currentNode.subject}</p>
            <p>Amount: {currentNode.amount}</p>
        </div>
    );
};

export default LinkedListApp;
