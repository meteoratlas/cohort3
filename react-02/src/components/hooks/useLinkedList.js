import { useState, useEffect } from "react";
import { DoublyLinkedList } from "../linkedList/model/DoublyLinkedList";

export default defaultList => {
    const [list, setList] = useState(defaultList);
    const [currentNode, setCurrentNode] = useState(list.current);

    useEffect(() => {
        setCurrentNode(list.current);
    });

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
        if (!list.head) {
            setList(new DoublyLinkedList(subject, amount));
            return;
        }
        let newList = list.clone();
        newList.insert(currentNode, subject, amount);
        setList(newList);
        // setCurrentNode(currentNode.next);
    };
    const deleteNode = toDelete => {
        if (!list.head) return;
        let newList = list.clone();
        newList.delete(toDelete);
        setList(newList);
        setCurrentNode(newList.current);
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
