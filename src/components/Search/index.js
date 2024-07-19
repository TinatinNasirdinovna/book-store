import React, { useContext } from "react";
import { BookStoreContext } from "../../context";
import { useParams } from "react-router-dom";

const Search = () => {
  const { productAll, currency } = useContext(BookStoreContext);
  const { searchName } = useParams();


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
  const filteredElem = productAll.filter((el) => el.name === searchName);
  console.log(filteredElem);
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {filteredElem.map((el) => (
            <div className="search--card">
              <img src={el.url} alt="img" />
              <span>
                The name of book : <h4> {el.name.toUpperCase()}</h4>
              </span>
              <h2> Price :{el.price * valuta} {changePrice}</h2>
              <h3>{el.des}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
