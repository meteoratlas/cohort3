import React, { Component } from "react";
const Context = React.createContext();
//const { Provider, Consumer } = React.createContext();
const { Provider, Consumer } = Context;

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { textSize: "12px", useDarkTheme: false };
    }
    setTextSize = size => {
        if (size < 0.2 || size > 2) return;
        this.setState(state => {
            this.setState({ textSize: size });
        });
    };
    toggleTheme = () => {
        this.setState(state => {
            this.setState({ useDarkTheme: !state.useDarkTheme });
        });
    };
    render() {
        return (
            <Provider value={{ fontSize: "1rem" }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, Context };
