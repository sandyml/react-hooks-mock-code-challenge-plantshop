import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
 
// const baseURL = "http://localhost:6001";
// const plantsURL = "http://localhost:6001/plants";
 
// DELIVERABLES:
 // When the app starts, I can see all plants. (done.)
 // I can add a new plant to the page by submitting the form. (done.)
 // I can mark a plant as "sold out". (done.)
 // I can search for plants by their name and see a filtered list of plants. (done.)

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
