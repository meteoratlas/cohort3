import React, { Component } from "react";
const Context = React.createContext();
const { Provider, Consumer } = Context;

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.white = "#f8f4f4";
        this.black = "#282c34";
        this.lightTheme = {
            fg: this.black,
            bg: this.white
        };
        this.darkTheme = {
            fg: this.white,
            bg: this.black
        };
        this.state = {
            fontSize: "1rem",
            setFontSize: this.setFontSize,
            useDarkTheme: false,
            setTheme: this.toggleTheme,
            currentTheme: this.lightTheme
        };
    }
    setFontSize = size => {
        let s = "1rem";
        if (size === "small") {
            s = "0.75rem";
        }
        if (size === "large") {
            s = "1.25rem";
        }
        this.setState({ fontSize: s });
    };
    toggleTheme = () => {
        this.setState(state => ({
            useDarkTheme: !state.useDarkTheme
        }));
        this.setState(state => ({
            currentTheme: state.useDarkTheme ? this.darkTheme : this.lightTheme
        }));
    };
    render() {
        return (
            <Provider
                value={this.state}
                textSizeCallback={() => this.setFontSize}
                toggleThemeCallback={() => this.toggleTheme}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, Context };
