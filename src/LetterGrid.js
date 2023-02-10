import { Component } from "react";
import "./LetterGrid.css";
class LetterGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWord: this.props.wordLog,
      myColor: this.props.colorLog,
    };
  }
  componentDidMount() {
    console.log(this.state.myColor?.[0]);
  }
  render() {
    return (
      <ul className={this.props.value}>
        <li
          className="letter letter1"
          style={this.state.myColor?.[0]}
        >
          {this.state.myWord?.[0]}
        </li>
        <li className="letter letter2" style={this.state.myColor?.[1]}>
          {this.state.myWord?.[1]}
        </li>
        <li className="letter letter3" style={this.state.myColor?.[2]}>
          {this.state.myWord?.[2]}
        </li>
        <li className="letter letter4" style={this.state.myColor?.[3]}>
          {this.state.myWord?.[3]}
        </li>
        <li className="letter letter5" style={this.state.myColor?.[4]}>
          {this.state.myWord?.[4]}
        </li>
      </ul>
    );
  }
}
export default LetterGrid;
