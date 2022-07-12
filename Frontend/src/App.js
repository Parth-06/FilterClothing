import React, { createContext, Suspense, useEffect, useReducer } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Spinner from './Components/Spinner';
import CartapiProvider from './Context/Cartapi';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import {initialstate, reducer} from "./Context/Reducer"
import Profile from './Components/Profile';
const ProductPage = React.lazy(()=>import('./Components/ProductPage'))
const Cart = React.lazy(()=>import('./Components/Cart'))
const Logout = React.lazy(()=>import('./Components/Logout'))
const Register = React.lazy(()=>import('./Components/Register'))
const Login = React.lazy(()=>import('./Components/Login'))
const Home = React.lazy(()=>import('./Components/Home'))
const Header = React.lazy(()=>import('./Components/Header'))
export const UserContext = createContext();
const Routing = ()=>{
return(
  <CartapiProvider>
  <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/productpage" element={<ProductPage/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/logout" element={<Logout/>}/>
  <Route path="/men" element={<Men/>}/>
  <Route path="/women" element={<Women/>}/>
  <Route path="/kids" element={<Kids/>}/>
  <Route path="/profile" element={<Profile/>}/>
  </Routes>
 </CartapiProvider>
)


} 


function App() {
const [logoutstate,logoutdispatch]= useReducer(reducer, initialstate)
const location = useLocation();
const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/cart"){
      navigate("/")
    }
  }, [])


  return (
    <>
      <UserContext.Provider value={{logoutstate, logoutdispatch}}>
 
      <Routing/>

     </UserContext.Provider>
     <ToastContainer  position= "top-center"
      autoClose={20}
      hideProgressBar= {true}
      closeOnClick= {true}
      pauseOnHover= {true}
      draggable= {true}
      progress= {0}
      theme= 'colored'/>
      </>
  );
}

export default App;
