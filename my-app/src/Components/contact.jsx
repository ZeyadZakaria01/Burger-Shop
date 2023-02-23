import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

class Contact extends Component {
    render() {
        const styleHref = () => {
            return {
                color: "black",
                textDecoration: "none",
            };
        };
        return (
            <React.Fragment>
                <Navbar className bg="light" variant="light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand">Contact</NavLink>
                    </div>
                </Navbar>
                <Row xs={1} md={3} className="g-3 m-1">
                    <Card style={{ width: "30rem" }}>
                        <Card.Img variant="top" src="/images/contact.jpg" />
                        <Card.Body>
                            <Card.Title>Contact us</Card.Title>
                            <Card.Text>
                                Thanks for reaching us. If you have any
                                questions feel free to use the links below.
                            </Card.Text>
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            ></NavLink>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <i class="fa-brands fa-facebook"></i>{" "}
                                    <a
                                        href="https://www.facebook.com/ITI.eg"
                                        style={styleHref()}
                                    >
                                        Facebook
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fa-brands fa-linkedin"></i>{" "}
                                    <a
                                        href="https://www.linkedin.com/school/information-technology-institute-iti-/"
                                        style={styleHref()}
                                    >
                                        Linkedin
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fa-brands fa-instagram"></i>{" "}
                                    <a
                                        href="https://www.instagram.com/iti.channel/"
                                        style={styleHref()}
                                    >
                                        Instagram
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fa-brands fa-youtube"></i>{" "}
                                    <a
                                        href="https://www.youtube.com/c/ITIDigitalArtsandDesignAcademy/"
                                        style={styleHref()}
                                    >
                                        Youtube
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Row>
            </React.Fragment>
        );
    }
}

export default Contact;
