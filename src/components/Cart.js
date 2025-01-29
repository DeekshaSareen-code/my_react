import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //Dispatch an action to clear the cart
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-centre m-4 p-4">
      <h1 className=" text-center text-2xl font-bold">Cart</h1>
      <div className="w-4/12 m-auto">
        <button
          className="bg-black text-white rounded-lg p-2 m-2"
          onClick={handleClearCart}
          hidden={cartItems.length === 0}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Your cart is empty. Add items!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
