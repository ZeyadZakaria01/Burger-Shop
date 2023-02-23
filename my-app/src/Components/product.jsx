import React from "react"; //imrc+Tab
import { Link } from "react-router-dom";

const Product = (props) => {
    const getClasses = () => {
        return props.product.count === 0
            ? "badge bg-warning m-2"
            : "badge bg-primary m-2";
    };
    return (
        <div className="row">
            <div className="col-3">
                <Link to={`/products/${props.product.id}`}>
                    {props.product.name}
                </Link>
            </div>
            <div className="col">
                <span className={getClasses()}>{props.product.count}</span>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => props.onIncrement(props.product)}
                    className="badge bg-primary m-2"
                >
                    <i className="fa-solid fa-plus {getClasses()}"></i>{" "}
                </span>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => props.onDelete(props.product)}
                >
                    <i className="fa-solid fa-trash m-2"></i>
                </span>
            </div>
        </div>
    );
};
export default Product;
