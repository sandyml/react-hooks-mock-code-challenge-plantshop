import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// const baseURL = 'http://localhost:6001';
const plantsURL = 'http://localhost:6001/plants';

function PlantPage() {
  const [plants, setPlants] = useState([]) // start w empty array because we know we will use it as an array when we use fetch, another way for us to visualize it 
  const [searchPlantValue, setSearchPlantValue] = useState('')
  
  // to get to some plants in the state variable, i will need to use useEffect and do fetch 
  useEffect(() => {
    fetch(plantsURL)
    .then(resp => resp.json()) // resp -> resp.json invoked 
    .then(setPlants) // this way is easier than the bottom one and not much work 
    // .then(plantsDataArray => setPlants(plantsDataArray)) // plants array, setPlants invoked and pass it in an argument of plantsDataArray
  }, [])

  // function/const for add plant to the state 
  const addPlantToState = plant => {
    setPlants([plant, ...plants]) // will show us new plant that will be uploaded on top rather than the bottom of the page 
  }

  // function search 
  const searchValue  = (e) => {
    // console.log("In PlantPage to test for search", e.target.value)
    setSearchPlantValue(e.target.value)
  }

  // function for search 
  // const plantsSearched = plants.filter(plantObj => {
  //   if(searchPlantValue === '') {
  //     return true 
  //   } else if (plantObj.name.toLowerCase().includes(searchPlantValue.toLowerCase())) {
  //     return false
  //   } else {
  //     return true
  //   }
  // })
  // cleaner and simple look return boolean true false 
  // const plantsSearched = plants.filter(
  //   obj => obj.name.toLowerCase().includes(searchPlantValue.toLowerCase()
  //   )
  // )

  // another way to do search return boolean true or false 
  const plantsSearched = plants.filter(plantObj => {
    const lowerName = plantObj.name.toLowerCase()
    const lowerSearch = searchPlantValue.toLowerCase()
    return lowerName.includes(lowerSearch)
  })

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search searchValue={searchValue} />
      <PlantList plants={plantsSearched} /> 
    </main>
  );
}

export default PlantPage;
