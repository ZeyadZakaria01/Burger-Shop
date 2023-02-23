import React from "react";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBarMenu = (props) => {
    const { onFilter } = props;
    const style = {
        cursor: "pointer",
    };
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={() => onFilter("")} style={style}>
                        All products
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => onFilter("b")}>
                            Burgers
                        </Nav.Link>
                        <Nav.Link onClick={() => onFilter("c")}>Combo</Nav.Link>
                        <Nav.Link onClick={() => onFilter("p")}>Pizza</Nav.Link>
                        <Nav.Link onClick={() => onFilter("a")}>
                            Appetizers
                        </Nav.Link>
                        <Nav.Link onClick={() => onFilter("d")}>
                            Drinks
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBarMenu;
