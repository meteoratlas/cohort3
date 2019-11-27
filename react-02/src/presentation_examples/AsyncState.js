class Adder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    addOne() {
        this.setState({ num: this.state.num + 1 });
        /*
  		this.setState((previousState) => {
    		return {num: previousState.num + 1}
  		});
		*/
    }
    componentDidMount() {
        this.addOne();
        this.addOne();
        this.addOne();
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
            </div>
        );
    }
}

ReactDOM.render(<Adder />, document.getElementById("example"));
