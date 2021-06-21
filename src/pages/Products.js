import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <React.Fragment>
      <h1>Products!!!</h1>
      <ul>
        <li>
          <Link to="/products/book">Book</Link>{" "}
        </li>
        <li>
          <Link to="/products/pen">Pen</Link>
        </li>
        <li>
          <Link to="/products/pencil">Pencil</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Products;
