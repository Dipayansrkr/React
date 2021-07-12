import React from "react";
import "./styles.css";

import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Namaste React</h1>
      <p>Welcome to my first React Webpage</p>
      <button style={{ margin: "10px" }}>React</button>
      <button className="butt">Angular</button>
      <Button buttonText="JavaScript" />
    </div>
  );
}
export default App;
