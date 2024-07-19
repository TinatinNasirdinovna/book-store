import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Hero from "./components/Hero";
import Admin from "./components/Admin";
import Basket from "./components/Basket";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import BookDetails from "./components/BookDetails";
import Search from "./components/Search";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/search/:searchName" element={<Search/>} />
        <Route path="/bookDetails/:bookId" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
