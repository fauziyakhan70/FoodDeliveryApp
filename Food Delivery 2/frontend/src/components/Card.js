import React, { useState } from 'react';
import { data } from '../data';
import { useNavigate } from 'react-router-dom'; 
import FoodCard from './FoodCard';
import Search from './Search';
import { useDispatchCart, useCart } from './ContextReducer';


function Card() {
  const [searchQuery, setSearchQuery] = useState('');
  
  

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <Search onSearch={handleSearch} />
        <div className="m-3 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 hover_effect">
          {data.map((res, index) => {
            const { CategoryName, name, img, Price } = res;
            const itemNameLower = name.toLowerCase();

            if (searchQuery && !itemNameLower.includes(searchQuery)) {
              return null;
            }

            return (
              <FoodCard
                key={index}
                CategoryName={CategoryName}
                name={name}
                img={img}
                Price={Price}
                
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
