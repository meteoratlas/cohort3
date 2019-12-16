import React, { Component } from "react";
class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useCPU: "false",
            playerFirst: "true"
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        let CPUForm = (
            <React.Fragment>
                <label>Player Goes First</label>
                <input
                    type="radio"
                    name="playerFirst"
                    value="true"
                    checked={this.state.playerFirst === "true"}
                    onChange={this.handleChange}
                />
                <label>Computer Goes First</label>
                <input
                    type="radio"
                    name="playerFirst"
                    value="false"
                    checked={this.state.playerFirst === "false"}
                    onChange={this.handleChange}
                />
                <br />
            </React.Fragment>
        );

        return (
            <div id="new-game-dialog">
                <p>Start a new game with...</p>
                <label>Player vs. Player</label>
                <input
                    type="radio"
                    name="useCPU"
                    value="false"
                    checked={this.state.useCPU === "false"}
                    onChange={this.handleChange}
                />
                <label>Player vs. Computer</label>
                <input
                    type="radio"
                    name="useCPU"
                    value="true"
                    checked={this.state.useCPU === "true"}
                    onChange={this.handleChange}
                />
                <br />

                {this.state.useCPU === "true" ? CPUForm : null}
                <button
                    onClick={() =>
                        this.props.startGame(
                            this.state.useCPU,
                            this.state.playerFirst
                        )
                    }
                >
                    Start Game
                </button>
            </div>
        );
    }
}

export default NewGame;
