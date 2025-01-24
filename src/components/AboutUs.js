// @ts-nocheck
import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/userContext";
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2> Practice react</h2>
        <UserClass name="Deeksha" location="Canada" />
      </div>
    );
  }
}

export default About;
