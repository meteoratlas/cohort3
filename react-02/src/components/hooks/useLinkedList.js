import { useState, useEffect } from "react";
import { DoublyLinkedList } from "../linkedList/model/DoublyLinkedList";
import { PLL } from "../linkedList/model/PLL";

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
    const insert = (...vars) => {
        if (!list.head) {
            if (list instanceof DoublyLinkedList) {
                setList(new DoublyLinkedList(vars[0], vars[1]));
            }
            if (list instanceof PLL) {
                setList(new PLL(vars[0], vars[1], vars[2], vars[3]));
            }
            return;
        }
        let newList = list.clone();
        newList.insert(vars[0], vars[1], vars[2], vars[3]);
        setList(newList);
        // setCurrentNode(currentNode.next);
    };
    const deleteNode = () => {
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
