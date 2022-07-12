import React,{createContext, useContext, useReducer} from 'react'
import { cartReducer, productReducer } from './Reducer';
import products from '../Components/Fakedata';

const Cart = createContext();

const Context = ({children}) => {

const [state, dispatch] = useReducer(cartReducer, {
    data : products,
    cart: []
})



const [productState, productDispatch] = useReducer(productReducer,{
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
})

  return (

   <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
    {children}
   </Cart.Provider>

  )
}

export default Context
export const CartState = () =>{
    return useContext(Cart)
}