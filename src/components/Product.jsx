import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../store/cartSlice";
import { AiFillStar } from "react-icons/ai";

export const Product = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setItems(data);
      setLoading(true);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          {loading ? (
            items &&
            items.map((product) => (
              <div
                className="col-sm-6 col-md-3 col-lg-3 mb-4 mt-5"
                key={product.id}
              >
                <div className="card text-center h-100 p-3 border-0 shadow-lg">
                  <Link to={`/product/${product.id}`}>
                    <img
                      onClick={() => handleAdd(product)}
                      src={product.image}
                      className="card-img-top"
                      alt="products"
                      height="240px"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 15)}..
                    </h5>
                    <p className="card-text">{product.discription}</p>

                    <p className="fs-5">{product.price} $</p>
                    <p>
                      <span className="fs-5">
                        <span className="fs-3 text-warning">
                          <AiFillStar />{" "}
                        </span>{" "}
                        {product.rating.rate}
                      </span>
                    </p>
                    <button
                      className="btn btn-outline-warning fw-normal"
                      onClick={() => handleAdd(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-grow mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
