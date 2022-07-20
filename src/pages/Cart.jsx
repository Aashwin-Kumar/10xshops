import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { AiFillStar } from "react-icons/ai";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (itemsid) => {
    dispatch(remove(itemsid));
    alert("Are You Sure, You Want To Remove The Item?");
  };

  return (
    <div className="d-grid gap-3 container py-5">
      {products &&
        products.map((items) => (
          <div className="row justify-content-center">
            <div className=" col-md-12 col-xl-10">
              <div className="card border-0">
                <div className="card-body mb-lg-5 mt-lg-5">
                  <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-5 col-xl-5">
                      <div className="">
                        <img
                          src={items.image}
                          className="w-100"
                          alt="product"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-6 border-sm-start-none  my-4 text-center">
                      <h2>{items.title}</h2>
                      <p>
                        <span className="fs-3 text-warning">
                          <AiFillStar />
                        </span>
                        {items.rating.rate}
                      </p>
                      <p>{items.description}</p>
                      <h3>${items.price}</h3>
                      <div className="d-grid gap-3 pt-4">
                        <button className="btn btn-outline-success">
                          Buy Now
                        </button>
                        <button
                          className="btn btn-outline-danger "
                          onClick={() => handleRemove(items.id)}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
