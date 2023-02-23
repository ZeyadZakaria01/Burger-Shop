import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Slider = () => {
    const style = {
        // maxHeight: "calc(100vh - 56px)",
        maxHeight: "46vmax",
    };
    const styleName = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <Carousel style={style}>
            <Carousel.Item interval={1000} style={style}>
                <img
                    className="d-block w-100"
                    src={"/images/b1.jpg"}
                    alt="First slide"
                    style={style}
                />
                <Carousel.Caption>
                    <h3>
                        <Link to={`/products/${1}`} style={styleName}>
                            Spicy burger
                        </Link>
                    </h3>
                    <p>Spicy burger is for Spicy food lovers!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={style}>
                <img
                    className="d-block w-100 "
                    src={"/images/c6.jpg"}
                    alt="Second slide"
                    style={style}
                />
                <Carousel.Caption>
                    <h3>
                        {" "}
                        <Link to={`/products/${13}`} style={styleName}>
                            Three in the box
                        </Link>
                    </h3>
                    <p>This box is for you and your friends to enjoy!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={style}>
                <img
                    className="d-block w-100 "
                    src={"/images/b3.jpg"}
                    alt="Third slide"
                    style={style}
                />
                <Carousel.Caption>
                    <h3>
                        {" "}
                        <Link to={`/products/${3}`} style={styleName}>
                            Special Burger
                        </Link>
                    </h3>
                    <p>Special burger is for limited time!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Slider;
