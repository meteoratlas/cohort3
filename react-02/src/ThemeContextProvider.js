import React, { Component } from "react";
const Context = React.createContext();
const { Provider, Consumer } = Context;

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: "1rem",
            setFontSize: this.setFontSize,
            useDarkTheme: false
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
        this.setState(state => {
            this.setState({ useDarkTheme: !state.useDarkTheme });
        });
    };
    render() {
        return (
            <Provider
                value={this.state}
                textSizeCallback={() => this.setFontSize}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, Context };
