import React, { Component } from "react";
const Context = React.createContext();
//const { Provider, Consumer } = React.createContext();
const { Provider, Consumer } = Context;

class ThemeContextProvider extends Component {
    render() {
        return (
            <Provider value={{ fontSize: "2rem" }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, Context };
