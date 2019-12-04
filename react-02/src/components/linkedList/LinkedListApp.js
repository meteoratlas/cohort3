import React, { useState, Component } from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "./hooks/useLinkedList";

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
    ] = useLinkedList(new DoublyLinkedList("Test Head", 1));
    //
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
            <p>Subject: {currentNode ? currentNode.subject : null}</p>
            <p>Amount: {currentNode ? currentNode.amount : null}</p>
            <p>{currentNode !== null ? "exists" : "no exist"}</p>
        </div>
    );
};

export default LinkedListApp;
