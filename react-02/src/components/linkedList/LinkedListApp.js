import React from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "../hooks/useLinkedList";
import { ThemeContextConsumer } from "../../ThemeContextProvider";

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
    ] = useLinkedList(new DoublyLinkedList("Apples", 2));
    //
    const renderNodes = () => {
        return list.map(x => (
            <React.Fragment key={x.id}>
                <div className="ll-node-vis">
                    <p>{x.subject ? x.subject : "[Empty]"}</p>
                    <p>{x.amount ? x.amount : "[Empty]"}</p>
                </div>
                <h4 className="ll-arrow">⮂</h4>
            </React.Fragment>
        ));
    };

    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="ll-app" style={{ fontSize: theme.fontSize }}>
                    <h2>Linked List</h2>
                    <LinkedListControls
                        first={firstNode}
                        next={nextNode}
                        prev={prevNode}
                        last={lastNode}
                        insert={insert}
                        delete={() => deleteNode()}
                    />
                    <p>
                        Subject:{" "}
                        {currentNode ? currentNode.subject : "List is empty"}
                    </p>
                    <p>
                        Amount:{" "}
                        {currentNode ? currentNode.amount : "List is empty"}
                    </p>
                    <div id="ll-display">{renderNodes()}</div>
                </div>
            )}
        </ThemeContextConsumer>
    );
};

export default LinkedListApp;
