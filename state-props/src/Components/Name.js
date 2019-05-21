import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = { name: "Manana" };
  }

  render() {
    // setTimeout(() => {
    //   this.setState({ name: "Sam" });
    // }, 1500);
    return <div>{this.state.name}</div>;
  }
}
