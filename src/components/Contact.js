import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black"
          placeholder="email"
        />
        <button className=" border p-2 m-3 rounded-lg"> SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
