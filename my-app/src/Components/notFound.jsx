import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className bg="light" variant="light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand">Not Found</NavLink>
                    </div>
                </Navbar>
                <Card style={{ width: "30rem" }}>
                    <Card.Img variant="top" src="/images/TurtleBurger.jpg" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            The page is not found!
                            <br />
                            Please enter a valid url or return to home page.
                        </Card.Text>

                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/home"
                        >
                            <Button variant="secondary">Go to Home</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default NotFound;
