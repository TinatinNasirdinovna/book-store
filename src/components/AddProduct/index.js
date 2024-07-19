import React, { useContext, useState } from "react";
import { BookStoreContext } from "../../context";

const AddProduct = () => {
  const { productAll, setProductAll } = useContext(BookStoreContext);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productDescripton, setProductDescriptoin] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };

  const addToProduct = () => {
    if (
      productName.trim() === "" ||
      productCategory.trim() === "" ||
      productPrice.trim() === "" ||
      productDescripton.trim() === "" ||
      productImg === ""
    ) {
      console.log("helziy");
    } else {
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        name: productName,
        category: productCategory,
        price: productPrice,
        url: productImg,
        description: productDescripton,
        quantity: 1,
      };
      let res = [...productAll, newProduct];
      setProductAll(res);
      localStorage.setItem('books', JSON.stringify(res))
    }
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductDescriptoin("");
    setProductImg("");
  };

  // console.log(productAll);

  return (
    <div id="addProduct">
      <div className="container">
        <div className="addProduct">
          <input onChange={onChange} type="file" className="addProduct--file" />
          <div className="addProduct--rigth">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="  Product Name"
              className="addProduct--rigth__name"
            />
            <div className="addProduct--rigth__flex">
              <input
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                type="text"
                placeholder="  Category"
                className="addProduct--rigth__flex--category"
              />
              <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                placeholder="  Price"
                className="addProduct--rigth__flex--price"
              />
            </div>
            <textarea
              value={productDescripton}
              onChange={(e) => setProductDescriptoin(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=" Product Descripton"
            ></textarea>
            <button onClick={addToProduct}>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
