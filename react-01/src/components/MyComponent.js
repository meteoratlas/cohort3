import React from 'react';

class MyComponent extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from MyComp - or {this.props.whatToSay}</h1>
                    <button onClick={this.props.func}>Execute passed function</button>
				</div>
			)
		}
}

export default MyComponent;