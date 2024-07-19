import React, { useContext } from "react";
import { BookStoreContext } from "../../context";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { productAll, setProductAll, currency } = useContext(BookStoreContext);

  const { bookId } = useParams();

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

  const findedElem = productAll.find((el) => el.id === +bookId);
  const plusBtn = (idx) => {
    let min = productAll.map(el => el.id === idx ? {...el, quantity: el.quantity+1} : el)
    setProductAll(min)
  }

  const minusBtn = (idx) => {
    let plus = productAll.map(el => el.id === idx ? {...el, quantity: el.quantity > 1 ? el.quantity-1 : 1} : el)
    setProductAll(plus)
  }
  return (
    <div id="bookDetails">
      <div className="container">
        <div className="bookDetails">
          <img src={findedElem?.url} alt="img" />
          <div className="bookDetails--content">
            <h1>{findedElem?.name}</h1>
            <span> Цена: {findedElem?.price * findedElem?.quantity * valuta} {changePrice}</span>
            <h2>Жанр: {findedElem?.category}</h2>
            <div className="bookDetails--content__btns">
              <button onClick={() => plusBtn(findedElem.id)}>+</button>
              <span>{findedElem?.quantity}</span>
              <button onClick={() => minusBtn(findedElem?.id)}>-</button>
            </div>
            <h4>Описание</h4>
            <p>{findedElem?.description}</p>
            {/* <button className="bookDetails--content__addBasket">Добавить в корзину</button> */}
            <button className="bookDetails--content__addBasket">Купить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
