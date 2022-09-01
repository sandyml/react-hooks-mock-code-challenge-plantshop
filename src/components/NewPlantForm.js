import React, { useState } from "react";

// useState for three inputs: name, image, price 
  // need onChange to invoke function, passing argument to setName, setImage, setPrice
    // need to pass and event to it but we don't need to pass it we want to pass the use type 
    // keeping track of what the use types in with state 
// then after when I am ready to submit I can create a new plant -- need function to do that 

function NewPlantForm({ addPlantToState }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  // function/const for setName 
  const plantName = (e) => {
    setName(e.target.value)
  }

  // function/const for setImage 
  const plantImage = (e) => {
    setImage(e.target.value)
  }

  // function/const for setPrice 
  const plantPrice = (e) => {
    setPrice(e.target.value)
  }
  
  // function/const for submit
  const createNewPlant = (e) => {
    e.preventDefault()
    // console.log(e)
    const newPlant = { name, image, price } // name of the key is the same as the name of the variable it points to 
    addPlantToState(newPlant) // invoke function and pass in argument of our new plant 
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={createNewPlant}>
        <input onClick={plantName} type="text" name="name" placeholder="Plant name" />
        <input onClick={plantImage} type="text" name="image" placeholder="Image URL" />
        <input onClick={plantPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
