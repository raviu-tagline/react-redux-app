import React from "react";
import RegisterContainer from "../../containers/RegisterContainer";
import ListContainer from "../../containers/ListContainer";
import Home from "../../components/Home";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
  faHome,
  faList,
  faPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../custom.css";

export default function NavHeader() {
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">React Redux App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/home" className="nav-link">
                  <FontAwesomeIcon icon={faHome} />
                  <span>&nbsp;Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/create" className="nav-link">
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Route
          path="/update/:id"
          render={(props) => <Insert {...props} />}
        ></Route> */}
        <Route path="/create">
          <RegisterContainer />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Router>
    </>
  );
}
