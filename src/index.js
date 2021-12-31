import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Mainpage extends React.Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}
ReactDOM.render(<Mainpage />, document.getElementById("root"));
