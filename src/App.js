import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Headers from "./components/Headers";

function App() {
  return (
    <Router>
      <div className="container">
        <h3>Easy Bookmarks</h3>
        <div className="bookmarks-container">
          <Headers />
          <h3>body</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
