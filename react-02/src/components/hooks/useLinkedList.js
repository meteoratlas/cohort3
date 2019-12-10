import { useState, useEffect } from "react";

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
        console.log("1", currentNode);
        let newList = list.clone();
        newList.insert(currentNode, subject, amount);
        setList(newList);
        // setCurrentNode(currentNode.next);
        console.log("2", currentNode);
    };
    const deleteNode = toDelete => {
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
