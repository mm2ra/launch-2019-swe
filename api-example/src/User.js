import React from "react";
import axios from "axios";

export default class User extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ persons: res.data });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}> {person.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}
