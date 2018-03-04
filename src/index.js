import React from "react";
import { render } from "react-dom";

// React Class Component の書き方
class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Miyazaki" };
  }
  render() {
    return <h2 onClick={this.onClickButton}>{this.state.name}</h2>;
  }

  onClickButton = () => {
    // alert('-- clicked!');
    this.setState({ name: this.state.name + "さん" });
  };
}

render(<Human />, document.getElementById("root"));
