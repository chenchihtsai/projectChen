import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import "../style/products.css"

const Products = () => {
  const history = useHistory();
  const [pr, setPr] = useState([]);
  const click = () => {
    history.replace("/Create");
  };
  const clickDelete = (idToDelete) => {
    let productsArray = JSON.parse(localStorage.getItem("products") || "[]");
    productsArray = productsArray.filter((x) => x.id != idToDelete);
    localStorage.setItem("products", JSON.stringify(productsArray));
    setPr(JSON.parse(localStorage.getItem("products") || "[]"));
  };
  

  useLayoutEffect(() => {
    setPr(JSON.parse(localStorage.getItem("products") || "[]"));
  }, []);

  return (
    <div className="craeate">
      <button
        className="buttonAdd"
        onClick={(e) => {
          click();
        }}
      >
        Add
      </button>
      <ul>
        {pr.map((el, i) => (
          <div>
            <li className="listProduts" key={`productsArray${i}`}>{el.name}
            <button className="buttonDelete" onClick={() => clickDelete(el.id)}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
