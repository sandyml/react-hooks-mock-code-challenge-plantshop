import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // const { plants } = props 

  return (
    <ul className="cards">
      {plants.map(plantObj => 
        <PlantCard key={plantObj.id} plants={plantObj} /> )}
    </ul>
  );
}

export default PlantList;
