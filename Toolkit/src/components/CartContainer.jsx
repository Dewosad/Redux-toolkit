import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../utils/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  return (
    <>
      {amount < 1 ? (
        <section className="cart">
          <header>
            <h2>your cart</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>your cart</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                Total <span>${total.toFixed(2)}</span>
              </h4>
            </div>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(openModal())}
            >
              Clear Cart
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CartContainer;
