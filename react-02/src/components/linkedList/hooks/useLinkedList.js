import { useState } from "react";
import { DoublyLinkedList } from "../model/DoublyLinkedList";

export default defaultList => {
    const [list, setList] = useState(defaultList);
    const [currentNode, setCurrentNode] = useState(list.head);

    const nextNode = () => {
        if (currentNode.next) setCurrentNode(currentNode.next);
    };
    const prevNode = () => {
        if (currentNode.prev) setCurrentNode(currentNode.prev);
    };
    const insert = (subject, amount) => {
        list.insert(currentNode, subject, amount);
        setCurrentNode(currentNode.next);
        let newList = list.clone();
        setList(newList);
    };

    return [list, currentNode, nextNode, prevNode, insert];
};
