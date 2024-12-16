import React from "react";
import { clearCart, removeItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";
import { closeModal } from "./utils/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h1>Remove all items</h1>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            CONFIRM
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            CANCEL
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
