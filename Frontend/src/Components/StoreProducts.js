import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const StoreProducts = () => {

    const [user , setUser] = useState({id: "14",
      name: "Harpa Women's Polyester A-Line Midi Dress",  
      price:899,
      mrp:"1099",
      image:"./Images/14/shirt1.jpg",
      image1:"./Images/14/shirt2.jpg",
      image2:"./Images/14/shirt3.jpg",
      image3:"./Images/14/shirt4.jpg",
      cimage1:"./Images/14/cimage1.jpg",
      cimage2:"./Images/14/cimage2.jpg",
      cimage3:"./Images/14/cimage3.jpg",
      inStock: 8,
      fastDelivery: true,
      ratings: 2,
      category: "Women",
      description:""
    })
    const navigate = useNavigate()
   let id, value;
  
    const handleInput = (e)=>{
   
   id = e.target.name;
   value = e.target.value;
  
   setUser({...user, [id]:value})
   console.log(user)
    }
  
    const postData = async(e) =>{
      e.preventDefault();
     
      const {clothes} = user;
      console.log(user)
      const res = await fetch('/productsdata',{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
        user
        })
      });

     }
   
   

  return (
    <div className="regi">
    <div className="regi_name"><h1>Register</h1></div>
    <form className='regi_form' method='POST'>

        <div className="regi_in">
        <input type="text" placeholder="text"  className='regi_input' name="clothes" value={user.clothes} onChange={handleInput} autocomplete="off"/>
        </div>
        
        <div className="regi_button">
        <button className='regi_button_main' onClick={postData}> Register</button>
        <button className='regi_button_main' style={{border: "4px solid rgb(30, 13, 109)"}}  onClick={()=>{navigate("/login")}}> Already Registered? Login</button>
        </div>
    </form>
  
</div>
  )
}

export default StoreProducts