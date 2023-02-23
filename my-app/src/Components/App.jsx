import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";
import About from "./about";
import Contact from "./contact";
import NotFound from "./notFound";
import ProductDetails from "./productDetails";
class App extends Component {
    state = {
        products: [],
    };
    async componentDidMount() {
        const { data } = await axios.get("http://localhost:3000/products");
        this.setState({ products: data });
    }

    handleDelete = async (product) => {
        const oldProducts = [...this.state.products];
        //State
        //Clone
        //Edit
        const products = this.state.products.filter((p) => p.id !== product.id);
        //Set state
        this.setState({ products });
        try {
            //Call B
            await axios.delete("http://localhost:3000/products/" + product.id);
        } catch (ex) {
            toast("Cant Delete");
            this.setState({ products: oldProducts });
        }
    };
    handleDeleteCart = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        //Edit
        products.splice(index, 1);
        //Set State
        this.setState({ products });
    };
    handleReset = () => {
        // 1st step Clone
        const products = [...this.state.products];
        // 2nd step Edit
        products.map((p) => {
            p.count = 0;
            p.selected = false;
            return p;
        });
        // 3rd step Set state
        this.setState(products);
    };
    handleIncrement = (product) => {
        // 1st step Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        // 2nd step Edit
        products[index].count++;
        // 3rd step Set state
        this.setState({ products });
    };
    handleAddToCart = (product) => {
        // 1st step Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        // 2nd step Edit
        products[index].selected = true;
        products[index].count++;
        // 3rd step Set state
        this.setState({ products });
    };
    handleCartCount = () => {
        let count = 0;
        // eslint-disable-next-line
        this.state.products.map((product) => {
            count += product.count;
        });
        return count;
    };
    render() {
        return (
            <React.StrictMode>
                <ToastContainer />
                <NavBar productsCount={this.handleCartCount()} />

                <main className="main.container">
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <Home
                                    products={this.state.products}
                                    onAddToCart={this.handleAddToCart}
                                />
                            }
                        />
                        <Route
                            path="/menu"
                            element={
                                <Menu
                                    products={this.state.products}
                                    onAddToCart={this.handleAddToCart}
                                />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <ShoppingCart
                                    products={this.state.products.filter(
                                        (p) => p.selected
                                    )}
                                    onIncrement={this.handleIncrement}
                                    onDelete={this.handleDeleteCart}
                                    onReset={this.handleReset}
                                />
                            }
                            props={true}
                        />

                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/products/:id"
                            element={
                                <ProductDetails
                                    products={this.state.products}
                                />
                            }
                        />

                        <Route
                            path="/"
                            element={<Navigate replace to="/home" />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default App;
