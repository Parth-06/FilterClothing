import React, { useContext, useState, useEffect, createContext } from "react";
import Pusher from "pusher-js"

const Cartapi = createContext();

const CartapiProvider = ({children}) =>{
const [apidata, setApidata] = useState([]);

// useEffect(()=>{
//   const pusher = new Pusher('bfad7d924b358ce37229', {
//     cluster: 'ap2'
//   });

  
//   const channel = pusher.subscribe('maintweets');
//   channel.bind('inserted', (data) =>{
//     if(data){
//       console.log(data);
//       setnewData(data)
//     }
  
//   })
// },[])

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


