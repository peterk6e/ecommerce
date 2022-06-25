import React, {
  CreateContext,
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(flase);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(initialState);
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQuantities, qty }}
    >
      {children}
    </Context.Provider>
  );
};
