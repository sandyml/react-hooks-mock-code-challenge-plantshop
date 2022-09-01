import React, { useState } from "react";

function PlantCard({ plants }) {
  const [inStock, setInStock] = useState(true)

  // function for stock and out of stock back and forth
  const changeStockAvailability = () => {
    setInStock(!inStock)
  }


  return (
    <li className="card">
      <img src={plants.image} alt={"plant name"} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {inStock ? (
        <button onClick={changeStockAvailability} className="primary">In Stock</button>
      ) : (
        <button onClick={changeStockAvailability}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
