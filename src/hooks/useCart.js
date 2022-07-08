import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];

    for (const key in savedCart) {
      const addedproduct = products.find((product) => product.key === key);

      if (addedproduct) {
        const quantity = savedCart[key];
        addedproduct.quantity = quantity;
        storedCart.push(addedproduct);
      }
    }
    setCart(storedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
