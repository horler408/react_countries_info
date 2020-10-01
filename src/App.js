import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar";
import Home from "./components/Home";
import Country from "./components/country";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:id" exact component={Country} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
