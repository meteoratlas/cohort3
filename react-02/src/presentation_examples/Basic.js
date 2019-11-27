import React, { Component } from "react";

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Welcome!" };
    }
    render() {
        return <h1>{this.state.title}</h1>;
    }
}

export default Basic;
