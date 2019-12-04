import { useState } from "react";
import { DoublyLinkedList } from "../model/DoublyLinkedList";

export default defaultList => {
    const [list, setList] = useState(defaultList);
    const [currentNode, setCurrentNode] = useState(list.current);

    const firstNode = () => {
        setCurrentNode(list.first());
    };
    const lastNode = () => {
        setCurrentNode(list.last());
    };
    const nextNode = () => {
        setCurrentNode(list.next(currentNode));
    };
    const prevNode = () => {
        setCurrentNode(list.previous(currentNode));
    };
    const insert = (subject, amount) => {
        list.insert(currentNode, subject, amount);
        setCurrentNode(currentNode.next);
        let newList = list.clone();
        setList(newList);
    };
    const deleteNode = toDelete => {
        let newList = list.clone();
        newList.delete(toDelete);
        setList(newList);
        setCurrentNode(list.current);
    };

    return [
        list,
        currentNode,
        nextNode,
        prevNode,
        insert,
        deleteNode,
        firstNode,
        lastNode
    ];
};
