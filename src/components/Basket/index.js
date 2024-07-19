import React, { useContext } from "react";
import { BookStoreContext } from "../../context";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket, setBasket, currency, setCurrency } =
    useContext(BookStoreContext);
  console.log(basket);

  let valuta = 1;
  let changePrice = "USD";
  if (currency === "som") {
    valuta = 89.51;
    changePrice = "KGZ";
  } else if (currency === "euro") {
    valuta = 0.92;
    changePrice = "EUR";
  } else if (currency === "rub") {
    valuta = 92.14;
    changePrice = "RUB";
  } else if (currency === "tenge") {
    valuta = 450.48;
    changePrice = "KZT";
  }

  const delBtn = (idx) => {
    let filtered = basket.filter((el) => el.id !== idx);
    setBasket(filtered);
  };

  const plusBtn = (idx) => {
    let changed = basket.map((el) =>
      el.id === idx ? { ...el, quantity: el.quantity + 1 } : el
    );
    setBasket(changed);
  };

  const minusBtn = (idx) => {
    let changed = basket.map((el) =>
      el.id === idx
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    setBasket(changed);
  };

  let totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
    <div id="basket">
      <div className="container">
        <h1>Basket </h1>
        <div className="basket">
          {basket.length ? (
            <>
              {basket.map((el) => (
                <div className="basket--card">
                  <h2 onClick={() => delBtn(el.id)}>X</h2>
                  <img src={el.url} alt="img" />
                  <div className="basket--card__price">
                    <h3>
                      {el.price * el.quantity * valuta} {changePrice}
                    </h3>
                  </div>
                  <p>{el.name}</p>
                  <div className="basket--card__btns">
                    <button onClick={() => plusBtn(el.id)}>+</button>
                    <span>{el.quantity}</span>
                    <button onClick={() => minusBtn(el.id)}>-</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <span style={{ fontSize: "32px" }}>product not found !</span>
          )}
        </div>
        <h3>
          Total Price : {totalPrice * valuta} {changePrice}сом
        </h3>
      </div>
    </div>
  );
};

export default Basket;
