import React, { useEffect, useState } from "react";
import { BookStoreContext } from ".";

const RootContext = ({ children }) => {
  const [productAll, setProductAll] = useState([]);
  const [modal, setModal] = useState(false);
  const [basket, setBasket] = useState([])
  const [currency, setCurrency] = useState('')

  const local = () => {
    let res = JSON.parse(localStorage.getItem("books")) || [];
    let result = JSON.parse(localStorage.getItem("basket")) || [];

    setProductAll(res);
    setBasket(result);
  };

  console.log(basket);
  useEffect(() => {
    local();
  }, []);

  return (
    <BookStoreContext.Provider
      value={{
        productAll,
        modal,
        basket,
        currency,
        setCurrency,
        setBasket,
        setModal,
        setProductAll,
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default RootContext;
