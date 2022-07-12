import React, { useEffect, useState,memo, useContext} from 'react'
import { CartState } from '../Context/Context';
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate} from 'react-router-dom';
import { CartVal } from '../Context/Cartapi';
import { UserContext } from '../App';


const CheckToken = () =>{
  const navigate = useNavigate()
const {logoutdispatch} = useContext(UserContext)
  useEffect(() => {
    const Callmainpage = async () => {
     
      try {
          const res = await fetch("/home", {
              method: "GET",
              headers: {

                  "Content-Type": "application/json",
                  Accept: "application/json"
              },
              credentials: "include"
          });
           await res.json();
           logoutdispatch({type:"USER", payload:true})
          if (!res.status === 200) {
              const error = new Error(res.error);
              throw error;
              
          }
      } catch (err) {
          console.log(err);
          toast.error("Please Login For Better Experience")
          navigate("/login");      
      }
  }
    Callmainpage()
},[]);

}




const Cart = () => {
  const [total , setTotal] = useState();
  const { dispatch} = CartState();
  const { apidata } = CartVal();
  const [ndata , setndata] = useState(apidata)
  CheckToken();



const deletec =async (prodid) =>{
  
  const res = await fetch('/deletedata',{
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },

    body:JSON.stringify({
     prodid 
    })
    
  });
  const data = await res.json();
  if (res.status === 422 || !data){
    console.log("invalid")
  }else{
    toast.success("Deleted")
    
  } 
 
}



  useEffect(() => {
    setTotal(ndata.reduce((acc, curr)=> acc + Number (curr.price)* curr.qty, 0 ))
     
    },[ndata])
       const update = (id) =>{
        console.log(id)
        const newItem = ndata.filter((item) => {
           return id !== item.id;
         
        })
        
        setndata(newItem)
      }


     const add =async (e,qty,id) =>{
      e.preventDefault();
      const addv = qty+1;
      
    let quantity = parseInt(addv);
    let prod_id = id.toString();

    const res =await fetch('/changeQty',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
  
      body:JSON.stringify({
        prod_id, quantity
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data){
      console.log("invalid")
    }else{
      toast.success("Quantity Updated")
      
    } 
  setndata(
      ndata.map((item)=>{
        if(item.id === id){
          return{...item, qty: quantity}
        }
        return item
      })
     )
     }

     const minus =async (e,qty,id) =>{
      e.preventDefault();
      if(qty === 1){
        toast.error("Quantity cannot be zero")
      }else{
        const addv = qty-1;
        let quantity = parseInt(addv);
      let prod_id = id.toString();
  
      const res =await fetch('/changeQty',{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
    
        body:JSON.stringify({
          prod_id, quantity
        })
      });
      const data = await res.json();
      if (res.status === 422 || !data){
        console.log("invalid")
      }else{
        toast.success("Quantity Updated")
        
      } 
    setndata(
        ndata.map((item)=>{
          if(item.id === id){
            return{...item, qty: quantity}
          }
          return item
        })
       )
      }
     
     
     }
  return (
    <>
   
    <div className="cart_page" id="cart_page">
    <div className="shopping_cart">
        <h2>Shopping Cart</h2>
        <span><p>Price</p></span>
        {
          ndata.map((prod)=>{
            return(
            
              <div className="shopping_cartleft" key={prod.id}>
              <div className="left_image">
              <Link to="/productpage" state={{data: prod}}  style={{ color: "black", textDecoration: "none", listStyleType: "none" }}>
                  <LazyLoadImage src={prod.image} alt={prod.name}/>
                  </Link>
              </div>
              <div className="right_details">
              <Link to="/productpage" state={{data: prod}}  style={{ color: "black", textDecoration: "none", listStyleType: "none"}}><h3>{prod.name} </h3></Link>
              <div className="end_price_mobile">
                  <h3>₹ {prod.price}</h3>
              </div>
                  <h6>Eligible for FREE Shipping</h6>
                  <h6 style={{color: "green"}}> {!prod.inStock ? "out of stock" : "In Stock"}</h6>
         <div className="del_qty">
              <div className="delete">
                  
              <h7 onClick={()=>{(deletec(prod.id));
              (update(prod.id))   (dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod,
                  }))
              
    
        }}>Delete</h7></div>
        <div className="product_qty">
            
            <button className="qty_btn" onClick={(e)=>minus(e,prod.qty,prod.id)}>-</button>
             <div className='qty_num'>{prod.qty}</div>
            <button className="qty_btn" onClick={(e)=>add(e,prod.qty,prod.id)}>+</button>
        </div> 
        </div>
              <h5>₹ {prod.price}</h5>
              </div>
              <div className="end_price">
                  <h3>₹ {prod.price}</h3>
              </div>
             
          </div>
       
            )
          }
          )
        
         
        }
            
      
     <h4>Subtotal ({ndata.length} item): ₹{total}</h4>
    </div>

    <div className="price_cart">
         <p><i className="fas fa-smile-wink"></i>Yay, Your order is eligible for FREE Delivery.</p>
        <h3>Subtotal ({ndata.length} item): ₹{total}</h3>
        <button type="button" onClick={()=>(toast.success("Order Placed 😊"))}>Proceed to Buy</button>
    </div>
</div>

</>

  )
  
}

export default memo(Cart)