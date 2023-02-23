import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

function Footer() {
    const style = () => {
        return {
            // position: "absolute", left: "0", bottom: "0", right: "0"
            backgroundColor: "#212529",
            color: "white",
        };
    };
    const styleHref = () => {
        return {
            color: "white",
            textDecoration: "none",
        };
    };
    return (
        <Card style={style()}>
            <Card.Header>
                {" "}
                <blockquote className="blockquote mb-0">Burger Shop</blockquote>
            </Card.Header>
            <Card.Body>
                <p>
                    <Container className="m-3">
                        <Row>
                            <Col>
                                {" "}
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/menu"
                                >
                                    Menu
                                </NavLink>
                            </Col>
                            <Col>
                                {" "}
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <NavLink className="nav-link" to="/cart">
                                    Cart
                                </NavLink>
                            </Col>
                            <Col>
                                <NavLink className="nav-link" to="/about">
                                    About us
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="m-3">
                        <Row></Row>
                        <Row>
                            <Col>
                                <i class="fa-brands fa-facebook"></i>{" "}
                                <a
                                    href="https://www.facebook.com/ITI.eg"
                                    style={styleHref()}
                                >
                                    Facebook
                                </a>
                            </Col>
                            <Col>
                                <i class="fa-brands fa-linkedin"></i>{" "}
                                <a
                                    href="https://www.linkedin.com/school/information-technology-institute-iti-/"
                                    style={styleHref()}
                                >
                                    Linkedin
                                </a>
                            </Col>

                            <Col>
                                <i class="fa-brands fa-instagram"></i>{" "}
                                <a
                                    href="https://www.instagram.com/iti.channel/"
                                    style={styleHref()}
                                >
                                    Instagram
                                </a>
                            </Col>
                            <Col>
                                <i class="fa-brands fa-youtube"></i>{" "}
                                <a
                                    href="https://www.youtube.com/c/ITIDigitalArtsandDesignAcademy/"
                                    style={styleHref()}
                                >
                                    Youtube
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </p>
                <br />

                <footer className="blockquote-footer">
                    &copy;
                    <cite title="Source Title">2022 Burger Shop</cite>
                </footer>
            </Card.Body>
        </Card>
    );
}

export default Footer;
