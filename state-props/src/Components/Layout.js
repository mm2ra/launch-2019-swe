import React from "react";
import Welcome from "./Welcome.js";
import Name from "./Name.js";
import User from "./User.js";

export default class Layout extends React.Component {
  render() {
    const title = "Welcome to Launch";

    return (
      <div>
        <Welcome title={title} />
        <Name />
        <User />
      </div>
    );
  }
}
