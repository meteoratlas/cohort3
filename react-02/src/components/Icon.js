import React, { Component } from "react";

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <img
                src={this.props.pic}
                onClick={this.props.callback(this.props.name)}
            ></img>
        );
    }
}

export default Icon;
