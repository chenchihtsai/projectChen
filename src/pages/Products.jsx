import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
//hooks
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
        className="button"
        onClick={(e) => {
          click();
        }}
      >
        Add
      </button>
      <ul>
        {pr.map((el, i) => (
          <div>
            <li key={`productsArray${i}`}>{el.name}</li>
            <button onClick={() => clickDelete(el.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
