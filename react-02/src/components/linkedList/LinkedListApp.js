import React, { useState, useEffect } from "react";
import LinkedListControls from "./ListedListControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "../hooks/useLinkedList";
import { ThemeContextConsumer } from "../../ThemeContextProvider";
import data from "../../paintings/paintings.json";

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
    const [paintings, setPaintings] = useState([]);
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
    // const renderPaintingNodes = () => {
    //     return list.map(x => (
    //         <React.Fragment key={x.id}>
    //             <div className="ll-node-vis">
    //                 <p>{x.subject ? x.subject : "[Empty]"}</p>
    //                 <p>{x.amount ? x.amount : "[Empty]"}</p>
    //             </div>
    //             <h4 className="ll-arrow">⮂</h4>
    //         </React.Fragment>
    //     ));
    // };
    const loadPaintings = () => {
        const arr = [];
        data.paintings.map(p => {
            return arr.push(p);
        });
        setPaintings(arr);
    };
    const popPainting = () => {
        if (paintings.length <= 0) {
            return null;
        }
        const rand = Math.floor(paintings.length * Math.random());
        const newArr = paintings.splice(rand, 1);
        setPaintings(paintings);
        // return newArr[0];
        return testPaint(newArr[0]);
    };
    const testPaint = obj => {
        return (
            <React.Fragment key="34534378900053">
                <div className="ll-node-vis">
                    <img src={obj.imgur} alt="" height="150" />
                    <p>{obj.title}</p>
                    <p>{obj.artist}</p>
                </div>
                <h4 className="ll-arrow">⮂</h4>
            </React.Fragment>
        );
    };
    useEffect(() => {
        loadPaintings();
    }, []);
    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="ll-app" style={{ fontSize: theme.fontSize }}>
                    <h2>Linked List</h2>
                    {popPainting()}
                    <LinkedListControls
                        first={firstNode}
                        //first={() => popPainting()}
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
