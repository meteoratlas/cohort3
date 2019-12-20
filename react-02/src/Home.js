import React from "react";
import { ThemeContextProvider } from "./ThemeContextProvider";
import App from "./App";

const Home = () => {
    return (
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    );
};

export default Home;
