import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2> Its not you its us</h2>
      <h3>
        {
          // @ts-ignore
          err.status
        }
        :{" "}
        {
          // @ts-ignore
          err.statusText
        }
      </h3>
    </div>
  );
};

export default Error;
