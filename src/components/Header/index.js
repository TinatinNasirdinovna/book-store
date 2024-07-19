import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BookStoreContext } from "../../context";
import Admin from "../Admin";

const Header = () => {
  const { modal, basket, setModal, setCurrency } = useContext(BookStoreContext);
  const [inputValue, setInputValue] = useState('')
  const nav = useNavigate()
  console.log(inputValue);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <h1>BOOKShop</h1>
          </Link>
          <select
            className="header--valuta"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="rub">RUB</option>
            <option value="euro">EUR</option>
            <option value="som">KGZ</option>
            <option value="tenge">KZT</option>
            <option selected value="dollar">
              USD
            </option>
          </select>
          <div className="header--nav">
            <div className="header--nav__search">
              <input type="text" placeholder="Search here" onChange={(e) => setInputValue(e.target.value) } />
              <span>
                <IoIosSearch />
              </span>
              <button className="header--nav__search--btn" onClick={() => nav(`/search/${inputValue}`)}>search</button>
            </div>
            <div className="header--nav__icons">
              <Link to={"/basket"}>
                <div className="header--nav__icons--basket">
                  <span>
                    <MdLocalGroceryStore />
                  </span>
                  <span>
                    Корзина{" "}
                    {basket.length ? (
                      <span style={{ color: "red" }}>{basket.length}</span>
                    ) : null}
                  </span>
                </div>
              </Link>
              <Link onClick={() => setModal(true)}>
                <div className="header--nav__icons--admin">
                  <span>
                    <FaRegUserCircle />
                  </span>
                  <span>Админ</span>
                </div>
              </Link>
            </div>
            {modal ? <Admin /> : null}
          </div>
        </div>
      </div>
      {modal ? (
        <div className="bg" onClick={() => setModal(false)}></div>
      ) : null}
    </div>
  );
};

export default Header;
