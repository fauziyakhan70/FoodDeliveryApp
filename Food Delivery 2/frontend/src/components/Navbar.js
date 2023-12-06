import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './ContextReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {

  const cart = useCart();
  const cartCount = cart.length;
  
  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const getUsername = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      return tokenPayload.username;
    }
    return null;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          OnlineFoodDelivery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          {isTokenValid() ? (
            <div className="d-flex align-items-center">
              <span className="text-white mr-2">{getUsername()}</span>
              <button className="btn btn-secondary btn-transparent" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-user-circle fa-2x" ></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registration">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <Link to="/cart" className="nav-link ml-2">
            <i className="fa fa-shopping-cart fa-2x"></i>
            {cartCount > 0 && <span className="badge bg-danger">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
