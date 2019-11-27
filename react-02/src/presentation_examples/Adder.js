import React, { Component } from "react";

class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    addOne() {
        this.setState({ num: this.state.num + 1 });
    }
    componentDidMount() {
        this.addOne();
        this.addOne();
        this.addOne();
    }
    render() {
        return <div>{this.state.num}</div>;
    }
}

export default Adder;
