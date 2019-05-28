import React, { Component } from "react";
import firebase from "./firebase.js";

export default class ContractForm extends Component {
  state = {
    name: ""
  };

  // how to write data to Firebase
  // onSubmit = e => {
  //   const usersRef = firebase.database().ref("users");
  //   const user = {
  //     name: this.state.name
  //   };
  //   usersRef.push(user);
  // };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          <button label="Submit" onClick={e => this.onSubmit(e)}>
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
}
