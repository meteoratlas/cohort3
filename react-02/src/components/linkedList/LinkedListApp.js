import React, { useState } from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";

const LinkedListApp = () => {
    const [list, setList] = useState(new DoublyLinkedList());

    return (
        <div id="ll-app">
            <h2>Linked List</h2>
            <LinkedListControls />
        </div>
    );
};

export default LinkedListApp;
