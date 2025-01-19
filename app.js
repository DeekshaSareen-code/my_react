// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const Title = () => {
  return <h1>Namaste React</h1>;
};
const HeadingComponent = () => (
  <div>
    <Title />
    <h1 id="heading">Main Heading</h1>
    <p>This is a simple React component.</p>
    <button onClick={() => console.log("Button clicked!")}>Click Me</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
