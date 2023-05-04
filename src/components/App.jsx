import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }
  function add(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>{heading} </h1>
      <form onSubmit={add}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={add}>Submit</button>
      </form>
    </div>
  );
}

export default App;
