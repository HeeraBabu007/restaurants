import React from 'react';
import logo from './logo.svg';
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
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/detail">Detail</Link></li>
        <li><Link to="/update">Update</Link></li>
        </ul>
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
