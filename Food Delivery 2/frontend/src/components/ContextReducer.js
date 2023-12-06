

import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        
        return [...state, action.payload];
      case 'REMOVE_FROM_CART':
       
        return state.filter((item, index) => index !== action.payload);
      default:
        return state;
    }
  };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
