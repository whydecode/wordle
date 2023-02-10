import { Component } from "react";

class WinBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.wordSelected,
      isWon: this.props.won,
    };
  }
  render() {
    return (
      <div >
        <h1>{this.state.word}-YOU WON</h1>
      </div>
    );
  }
}
export default WinBoard;
