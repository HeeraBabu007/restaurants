import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import RestaurantsCreate from './components/RestaurantsCreate';
import RestaurantsDetail from './components/RestaurantsDetail';
import RestaurantsList from './components/RestaurantsList';
import RestaurantsSearch from './components/RestaurantsSearch';
import RestaurantsUpdate from './components/RestaurantsUpdate';

function App() {
  return (
    <div className="App">
      <Router>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#pricing"><Link to="/list">List</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/search">Search</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/detail">Detail</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/update">Update</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Route path="/list">
          <RestaurantsList/>
        </Route>
        <Route path="/create">
          <RestaurantsCreate/>
        </Route>
        <Route path="/search">
          <RestaurantsSearch/>
        </Route>
        <Route path="/detail">
          <RestaurantsDetail/>
        </Route>
        <Route path="/update">
          <RestaurantsUpdate/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
