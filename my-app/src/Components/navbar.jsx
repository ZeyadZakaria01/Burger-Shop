import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Burger Shop
                </NavLink>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/menu"
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                Cart
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink className="nav-link" to="/cart">
                    <span className="badge bg-primary m-2">
                        <span>
                            <i className="fa-solid fa-cart-shopping"></i>{" "}
                        </span>{" "}
                        {props.productsCount}
                    </span>{" "}
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
