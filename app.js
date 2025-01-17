// @ts-nocheck
/*
  <div id="parent">
    <div id="child">
        <h1>Child</h1>
    </div>
  </div>
*/

// @ts-ignore
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Child"),
    React.createElement("h2", {}, "Child2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
