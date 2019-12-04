import React, { Component } from "react";

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseHovered: false
        };
    }
    onClickFunc = () => {
        this.props.callback(this.props.name, this.props.tab);
    };
    toggleHover = () => {
        this.setState(prevState => ({
            mouseHovered: !prevState.mouseHovered
        }));
        this.props.hover(this.props.name);
    };
    render() {
        return (
            <img
                className={"icon"}
                width={"80px"}
                alt={this.props.name}
                src={this.props.pic}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                onClick={this.onClickFunc}
            ></img>
        );
    }
}

export default Icon;
