import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTools, getCartItems } from "./utils/cartSlice";
import Modal from "./modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTools());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <p className="text-[50px] leading-10 text-black">...is Loading</p>
        </div>
      ) : (
        <main>
          {isOpen && <Modal />}
          <Navbar />
          <CartContainer />
        </main>
      )}
    </div>
  );
}

export default App;
