import "./App.css";
import Nav from "react-bootstrap/Nav";
import { Homepage } from "./pages/homepage";
import { AboutPage } from "./pages/about";
import { LogInPage } from "./pages/loginPage";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav className="justify-content-end p-3">
          <Nav.Item className="m-3">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/logIn">LogIn</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/about">About</Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/logIn">
            <LogInPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
