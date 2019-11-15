import React, { Component } from 'react';
class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="new-game-dialog">
                <h2>Tic - Tac - Toe</h2>
                <p>Start a new game with...</p>
                <label>Player vs. Player</label>
                <input type="radio" name="playType" value="PVP"/>
                <label>Player vs. Computer</label>
                <input type="radio" name="playType" value="PVC" />
                <br />
                <label>Player Goes First</label>
                <input type="radio" name="turn" value="PGF"/>
                <label>Computer Goes First</label>
                <input type="radio" name="turn" value="CGF" /><br />
                <button>Start Game</button>
            </div>
          );
    }
}
 
export default NewGame;