import React from "react";
import qs from "query-string";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const ProductDetails = (props) => {
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = props.products.filter((c) => c.id === +id)[0];
    console.log(location);
    console.log(qs.parse(location.search));
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
    return (
        <React.Fragment>
            <Navbar bg="light" variant="light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Product details
                    </NavLink>
                </div>
            </Navbar>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={`/images/${product.category}${handleImageId(
                        product.category,
                        product.id
                    )}.jpg`}
                />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{`${product.description} `}</Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            Price of this item is
                            {` ${product.price} LE`}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            You have {product.count} of this item in cart
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Go Back
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default ProductDetails;
