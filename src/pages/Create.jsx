import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  
  const onClick = () => {
    let productsArray = JSON.parse(localStorage.getItem("products") || "[]");
    let id_to_add = 0;
    let i, k, id;
    if (productsArray.length == 0) {
      id_to_add = 1;
    } else {
      for (i = 0; i < productsArray.length; i++) {
        for (k = 0; k < (productsArray.length - i); k++) {
          if (productsArray[k].id >= id_to_add) {            
            id_to_add = productsArray[k].id + 1;
          }
        }
      }
    }
    let testVar = {
      name: name,
      amount: amount,
      price: price,
      image: image,
      category: category,
      id: id_to_add,
    };
    productsArray.push(testVar);
    localStorage.setItem("products", JSON.stringify(productsArray));
    history.replace("/products");
  };

  return (
    <div>
      <h1>Product</h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        amount="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="price">price</label>
      <input
        id="price"
        type="number"
        step="0.01"
        min="0"
        max="1000"
        price="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="image">Image</label>
      <input
        id="image"
        type="text"
        image="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="number"
        category="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />{" "}
      <br />
      <button
        className="button"
        onClick={(e) => {
          onClick();
        }}
      >
        Acept
      </button>
    </div>
  );
};

export default Create;
