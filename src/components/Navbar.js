import React from "react";
import logo from "../logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Anna Gilthorpe logo"/></a>
     <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#Home">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
