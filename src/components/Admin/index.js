import React, { useContext, useState } from "react";
import { BookStoreContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [password, setPassword] = useState("");
  const { modal, setModal } = useContext(BookStoreContext);
  const nav = useNavigate();
  const error = () =>
    toast.error("🦄 Неверный пароль!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const navigate = () => {
    if (password === "123") {
      nav(`/addProduct`);
      setModal(false);
    } else {
      error();
    }
    setPassword('')
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h3 onClick={() => setModal(false)}>X</h3>
          <input
            type="password"
            value={password}
            placeholder="Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => navigate()}>SIGN IN</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
