import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className bg="light" variant="light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand">About</NavLink>
                    </div>
                </Navbar>
                <Row xs={1} md={3} className="g-3 m-1">
                    <Card style={{ width: "30rem" }}>
                        <Card.Img variant="top" src="/images/team.jpg" />
                        <Card.Body>
                            <Card.Title>Our Team</Card.Title>
                            <Card.Text>
                                Teamwork means working in a team. More
                                specifically it means working well in a team.
                                Teamwork comes from two words: team and work.
                                Team means a group of people working together.
                                It comes from an old Germanic word meaning a
                                group of animals drawing a plough togther. Work
                                means labor, putting effort in to achieve a
                                goal. It comes from the Old English noun weorc.
                            </Card.Text>
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            ></NavLink>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "30rem" }}>
                        <Card.Img variant="top" src="/images/company.jpg" />
                        <Card.Body>
                            <Card.Title>Our Company</Card.Title>
                            <Card.Text>
                                They focused their energy on challenging the
                                conventional idea that food served fast must be
                                “junk-food” and instead worked on refining it to
                                become an elevated culinary adventure where the
                                ingredients are natural and the taste is
                                spectacular.
                            </Card.Text>
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/home"
                            ></NavLink>
                        </Card.Body>
                    </Card>
                </Row>
            </React.Fragment>
        );
    }
}

export default About;
