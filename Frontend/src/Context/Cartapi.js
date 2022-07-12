import React, { useContext, useState, useEffect, createContext } from "react";


const Cartapi = createContext();

const CartapiProvider = ({children}) =>{
const [apidata, setApidata] = useState([]);

useEffect(()=>{
    const Fetchcart =async () =>{ 

        const res = await fetch('/cartdata',{
          method: "GET",
          headers:{
            "Content-Type" : "application/json"
          },
        });
      
        var cartdata = await res.json();
        setApidata(cartdata)
        
      }
    Fetchcart();
  
})


return(
    <Cartapi.Provider value={{apidata}}>
        {children}
    </Cartapi.Provider>
    )

}   

export default CartapiProvider;
export const CartVal = () =>{
    return useContext(Cartapi)
}


