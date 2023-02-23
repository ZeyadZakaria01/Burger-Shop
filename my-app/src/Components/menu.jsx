import React, { Component } from "react";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBarMenu from "./navbarMenu";
class cardMenu extends Component {
    state = {
        sorting: "",
    };

    render() {
        const { products, onAddToCart } = this.props;

        const style = (product) => {
            return !product.selected
                ? { color: "red", cursor: "pointer" }
                : { color: "blue", cursor: "pointer" };
        };
        const handleCartText = (selected) => {
            if (!selected) {
                return <span>Add to cart</span>;
            } else return <span>Added to cart</span>;
        };
        const handleFilter = (s) => {
            this.setState({ sorting: s });
        };

        let burgerId = 0,
            pizzaId = 0,
            drinksId = 0,
            appetizerId = 0,
            comboId = 0;
        const handleImageId = (category) => {
            switch (category) {
                case "b":
                    burgerId++;
                    return burgerId;
                case "p":
                    pizzaId++;
                    return pizzaId;
                case "d":
                    drinksId++;
                    return drinksId;
                case "a":
                    appetizerId++;
                    return appetizerId;

                case "c":
                    comboId++;
                    return comboId;

                default:
                    return;
            }
        };
        return (
            <React.Fragment>
                <NavBarMenu onFilter={handleFilter} />
                <Row xs={1} md={3} className="g-4">
                    {products
                        .filter((product) => {
                            return product.category.includes(
                                this.state.sorting
                            );
                        })
                        .map((product) => (
                            <Col key={product.id}>
                                <Card key={product.id}>
                                    <Card.Img
                                        variant="top"
                                        src={`/images/${
                                            product.category
                                        }${handleImageId(
                                            product.category
                                        )}.jpg`}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {" "}
                                            <Link
                                                to={`/products/${product.id}`}
                                                style={style(product)}
                                            >
                                                {product.name}
                                            </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {`${product.description} `}
                                            <br />
                                            <span
                                                style={style(product)}
                                                onClick={() =>
                                                    onAddToCart(product)
                                                }
                                            >
                                                {handleCartText(
                                                    product.selected
                                                )}
                                                <i className="fa-solid fa-cart-plus m-2"></i>
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </React.Fragment>
        );
    }
}

export default cardMenu;
