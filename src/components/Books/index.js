import React, { useContext, useState } from "react";
import { BookStoreContext } from "../../context";
import { MdDelete } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const Books = () => {
  const { productAll, setProductAll, basket, setBasket, currency } =
    useContext(BookStoreContext);
  const [selectedPraducts, setSelectedPraducts] = useState("");
  const [count, setCount] = useState(3);
  const [showItem, setShowBtn] = useState(false);
  const nav = useNavigate();

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

  let res = productAll.sort((a, b) => {
    if (selectedPraducts === "A-Z") {
      return a.name.trim().localeCompare(b.name.trim());
    } else if (selectedPraducts === "Z-A") {
      return b.name.trim().localeCompare(a.name.trim());
    } else if (selectedPraducts === "all") {
      return a.name.trim().localeCompare(b.name.trim());
    }
  });

  const deleteBook = (idx) => {
    let filtered = res.filter((el) => el.id !== idx);
    setProductAll(filtered);
    localStorage.setItem("books", JSON.stringify(filtered));
  };

  // console.log(basket, 'basket')
  const addBasket = (data) => {
    let findElem = basket.some((el) => el.id === data.id);
    setShowBtn(findElem);
    if(findElem) {
      let result = basket.map(el => el.id === data.id ? {...el, quantity: el.quantity+1} : el)
      setBasket(result)
    } else {
      const res = [...basket, data];
      setBasket(res);
      // localStorage.setItem("basket", JSON.stringify(res));
    }
   
  };
  return (
    <div id="books">
      <div className="container">
        {productAll.length ? (
          <>
            <div className="selection">
              <h1>Возможно, Вам понравится</h1>
              <select onChange={(e) => setSelectedPraducts(e.target.value)}>
                <option value="all">All</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
            <div className="books">
              <>
                {res.slice(0, count).map((el) => (
                  <div className="books--card">
                    <Link to={`/bookDetails/${el.id}`}>
                      <img src={el.url} alt="img" />
                    </Link>
                    <div className="books--card__price">
                      <h3>{el.price * valuta} {changePrice}</h3>
                      <a>
                        <MdDelete onClick={() => deleteBook(el.id)} />
                       
                          <HiOutlineShoppingCart
                            onClick={() => addBasket(el)}
                          />
                      
                      </a>
                    </div>
                    <p>{el.name}</p>
                  </div>
                ))}
                {productAll.length > count ? (
                  <button
                    className="books--btn"
                    onClick={() => setCount(count + 3)}
                  >
                    more
                  </button>
                ) : productAll.length < 3 ? null : (
                  <button className="books--btn" onClick={() => setCount(3)}>
                    short
                  </button>
                )}
              </>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Books;
