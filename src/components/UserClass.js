import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // console.log("Constructor User Class");
  }

  componentDidMount() {
    // console.log("ComponentDidMount User Class");
  }
  render() {
    // console.log("render User Class");
    return (
      <div className="user-card">
        <h1>User Class Page</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
        <p>Name: {this.props.name}</p>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default UserClass;
