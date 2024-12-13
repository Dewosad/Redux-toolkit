import React from "react";
import { CartIcon } from "../assets/icons";
import { useSelector } from "react-redux"; //hook used to access store

const Navbar = () => {
  //   console.log(
  //     useSelector((store) => {
  //       console.log(store);
  //     })
  //   );
  //use useSelector to pass the funciton to access store
  const { amount } = useSelector((store) => store.cart); //destructure
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
