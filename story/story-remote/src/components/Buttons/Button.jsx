import React from 'react';
import './Button.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavLink from 'react-router-dom'

function ButtonX () {
  return (
    <div>Button export remote
      {/* <button>CLICK remote</button> */}
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default ButtonX