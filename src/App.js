import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbars/navbar";
import LandingPage from "./components/landingPage";
import Home from "./components/Home";
import Country from "./components/country";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/react_default" exact component={LandingPage} />
          <Route path="/react_default/home" exact component={Home} />
          <Route path="/react_default/home/:id" component={Country} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
