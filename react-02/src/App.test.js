import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./ThemeContextProvider";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <ThemeContextProvider value={{ fontSize: 11 }}>
            <App />
        </ThemeContextProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
