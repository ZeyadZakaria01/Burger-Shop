import React, { Component } from "react";
import Slider from "./slider";
import CardMenu from "./menu";

class Home extends Component {
    state = {};

    render() {
        const { products, onAddToCart } = this.props;
        return (
            <React.Fragment>
                <Slider />
                <CardMenu products={products} onAddToCart={onAddToCart} />
            </React.Fragment>
        );
    }
}

export default Home;
