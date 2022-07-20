import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-transparant col-12">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h4 className="fs-2 fw-light text-danger">
                10XSHOP
                <div className="fs-6 text-center text-dark">
                  Buy. Think. Grow.
                </div>
              </h4>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse col-lg-3 col-md-3 col-xl-3 mb-2"
            id="navbarSupportedContent"
          >
            <div className="d-flex">
              <ul className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  <h4 className="fw-light">HOME</h4>
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <h4 className="fw-light">PRODUCTS</h4>
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <h4 className="fw-light fs-4 border-0 bg-transparent">
                    <AiOutlineShoppingCart />
                    {items.length}
                  </h4>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
