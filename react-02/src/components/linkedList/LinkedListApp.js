import React, { useState, useEffect } from "react";
import LinkedListControls from "./ListedListControls";
import LinkedListPaintingControls from "./LinkedListPaintingControls";
import { DoublyLinkedList } from "./model/DoublyLinkedList";
import useLinkedList from "../hooks/useLinkedList";
import { PLL } from "./model/PLL";
import { ThemeContextConsumer } from "../../ThemeContextProvider";
import data from "../../paintings/paintings.json";

const LinkedListApp = () => {
    const displayPaintings = true;
    const [
        list,
        currentNode,
        nextNode,
        prevNode,
        insert,
        deleteNode,
        firstNode,
        lastNode
    ] = useLinkedList(
        displayPaintings
            ? new PLL(
                  "American Gothic",
                  "Grant Wood",
                  1930,
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
              )
            : new DoublyLinkedList("Apples", 2)
    );
    const [paintings, setPaintings] = useState([]);

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
        let { title, artist, year, imgur } = newArr[0];
        insert(title, artist, year, imgur);
    };
    const renderPaintings = () => {
        return list.map(obj => (
            <React.Fragment key={obj.id}>
                <div className="ll-node-vis">
                    <img src={obj.url} alt={obj.title} height="150" />
                    <p>{obj.title}</p>
                    <p>{obj.artist}</p>
                    <p>{obj.year}</p>
                </div>
                <h4 className="ll-arrow">⮂</h4>
            </React.Fragment>
        ));
    };
    useEffect(() => {
        loadPaintings();
    }, []);
    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="ll-app" style={{ fontSize: theme.fontSize }}>
                    <h2>Linked List</h2>
                    {displayPaintings ? (
                        <LinkedListPaintingControls
                            first={firstNode}
                            next={nextNode}
                            prev={prevNode}
                            last={lastNode}
                            addPainting={popPainting}
                            delete={deleteNode}
                        />
                    ) : (
                        <LinkedListControls
                            first={firstNode}
                            next={nextNode}
                            prev={prevNode}
                            last={lastNode}
                            insert={insert}
                            delete={deleteNode}
                        />
                    )}

                    <p>
                        Subject:{" "}
                        {currentNode ? currentNode.subject : "List is empty"}
                    </p>
                    <p>
                        Amount:{" "}
                        {currentNode ? currentNode.amount : "List is empty"}
                    </p>
                    <div id="ll-display">
                        {displayPaintings ? renderPaintings() : renderNodes()}
                    </div>
                </div>
            )}
        </ThemeContextConsumer>
    );
};

export default LinkedListApp;
