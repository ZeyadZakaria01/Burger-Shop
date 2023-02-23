import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

class ShoppingCart extends Component {
    render() {
        const { products, onDelete, onIncrement, onReset } = this.props;
        const handleImageId = (category, id) => {
            switch (category) {
                case "b":
                    return id;
                case "p":
                    return id % 13;
                case "d":
                    return id % 22;
                case "a":
                    return id % 19;

                case "c":
                    return id % 7;

                default:
                    return;
            }
        };
        const getClasses = (product) => {
            return product.count === 0
                ? "badge bg-warning m-2"
                : "badge bg-primary m-2";
        };

        const renderProducts = (products) => {
            if (products.length === 0)
                return (
                    <Card style={{ width: "30rem" }}>
                        <Card.Img
                            variant="top"
                            src="/images/TurtleBurger.jpg"
                        />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Your cart is empty, Please add products to your
                                shopping cart.
                            </Card.Text>

                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/menu"
                            >
                                <Button variant="secondary">Go to Menu</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                );
        };
        return (
            <React.Fragment>
                <Navbar className bg="light" variant="light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand">
                            Shopping Cart
                        </NavLink>
                    </div>
                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={onReset}
                    >
                        Reset
                    </button>
                </Navbar>
                {renderProducts(products)}
                <Row xs={1} md={3} className="g-3 m-1">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <Card key={product.id}>
                                <Card.Img
                                    variant="top"
                                    src={`/images/${
                                        product.category
                                    }${handleImageId(
                                        product.category,
                                        product.id
                                    )}.jpg`}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {" "}
                                        <Link to={`/products/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </Card.Title>
                                    <Card.Text>
                                        {`${product.description} `}
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>
                                            Price of this item
                                            <span className="badge bg-primary m-2">{`${product.price} LE`}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Number of items is
                                            <span
                                                className={getClasses(product)}
                                            >
                                                {product.count}
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            To add more items
                                            <span
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    onIncrement(product)
                                                }
                                                className="badge bg-primary m-2"
                                            >
                                                <i className="fa-solid fa-plus "></i>{" "}
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            To delete this item
                                            <span
                                                style={{
                                                    cursor: "pointer",
                                                    // color: "#0d6efd",
                                                }}
                                                onClick={() =>
                                                    onDelete(product)
                                                }
                                            >
                                                <span
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        onIncrement(product)
                                                    }
                                                    className="badge bg-primary m-2"
                                                >
                                                    <i className="fa-solid fa-trash "></i>
                                                </span>
                                            </span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        );
    }
}

export default ShoppingCart;
