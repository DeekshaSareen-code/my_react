// @ts-nocheck
import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("ConstructorAbout");
  }

  componentDidMount() {
    //  console.log("ComponentDidMountAbout");
  }
  render() {
    // console.log("render About");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2> Practice react</h2>
        <UserClass name="Deeksha" location="Canada" />
      </div>
    );
  }
}

export default About;
