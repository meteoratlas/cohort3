import React, { Component } from "react";

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onClickFunc = () => {
        this.props.callback(this.props.name, this.props.tab);
    };
    render() {
        return (
            <img
                className="icon"
                width={"80px"}
                alt={this.props.name}
                src={this.props.pic}
                onClick={this.onClickFunc}
            ></img>
        );
    }
}

export default Icon;
