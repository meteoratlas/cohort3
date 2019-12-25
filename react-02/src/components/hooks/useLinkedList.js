import { useState, useEffect } from "react";
import { DoublyLinkedList } from "../linkedList/model/DoublyLinkedList";

export default defaultList => {
    const [list, setList] = useState(defaultList);
    const [currentNode, setCurrentNode] = useState(list.current);

    useEffect(() => {
        setCurrentNode(list.current);
    }, [list]);

    const firstNode = () => {
        setCurrentNode(list.first());
    };
    const lastNode = () => {
        setCurrentNode(list.last());
    };
    const nextNode = () => {
        setCurrentNode(list.next());
    };
    const prevNode = () => {
        setCurrentNode(list.previous());
    };
    const insert = (subject, amount) => {
        if (!list.head) {
            setList(new DoublyLinkedList(subject, amount));
            return;
        }
        let newList = list.clone();
        newList.insert(subject, amount);
        setList(newList);
        // setCurrentNode(currentNode.next);
    };
    const deleteNode = toDelete => {
        if (!list.head) return;
        let newList = list.clone();
        newList.delete();
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
