import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Headers from "./components/Headers";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <div className="container">
        <h3>Easy Bookmarks</h3>
        <div className="bookmarks-container">
          <Headers />
          <Switch>
            <Route exact path="/bookmark/:id" component={Body} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
