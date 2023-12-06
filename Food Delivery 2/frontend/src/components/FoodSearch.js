import React, { useState, useEffect } from "react";
import { data } from "../data.js"; // Import your data
// Update the path to match the actual location of your FoodSearch component

function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    const filteredResults = data.filter((food) => {
      
      food.CategoryName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log(filteredResults);
    setFilteredData(filteredResults);
  };

  // ...

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Attach the onSubmit event handler here */}
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-outline-success text-white bg-success"
          type="submit"
          onClick={handleSubmit}
           // Use type "submit" for the button
        >
            Search</button>
      </form>

      {/* Display the search results */}
      <div>
        {filteredData.map((food) => (
          <div key={food.id}>
            <h2>{food.name}</h2>
            <img src={food.img} alt={food.name} />
            <p>{food.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSearch;
