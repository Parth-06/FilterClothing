import React, {  useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartState } from '../Context/Context';
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';
import { CartVal } from '../Context/Cartapi';
import { UserContext } from '../App';


const ProductPage = () => {
  const {  state:{cart} , dispatch  } = CartState();
  const location = useLocation();
  const { data } = location.state;
  const [selected, setSelected] = useState(data.image)
  const { apidata } = CartVal();
  const {logoutdispatch} = useContext(UserContext)
 

  const deletec = async (prodid) => {

    const res = await fetch('/deletedata', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        prodid
      })
    });

    const data = await res.json();
    if (res.status === 422 || !data) {

      console.log("invalid")
    } else {
      toast.error("Removed From Bag")
    }
  }

const addedCart = async() =>{

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
           dispatch({
            type: 'ADD_TO_CART',
            payload: data, 
          })
          toast.success("Added To Bag")
          if (!res.status === 200) {
              const error = new Error(res.error);
              throw error;
              
          }
      } catch (err) {
          console.log(err);
          toast.error("Please Login For Better Experience")
          // navigate("/login");      
      }
  
}
  return (
    <>
      
      <div className="container" id="container">
        <div className="contwo">
        <div className="small_img">
            <img src={data.image} onMouseEnter={() => { setSelected(data.image) }} alt={data.name} className="secimg"/>
            <img src={data.image1} onMouseEnter={() => { setSelected(data.image1) }} alt={data.name} className="secimg" />
            <img src={data.image2} onMouseEnter={() => { setSelected(data.image2) }} alt={data.image3} className="secimg" />
            <img src={data.image3} onMouseEnter={() => { setSelected(data.image3) }} alt={data.name} className="secimg" />

          </div>
          <div className="main_img">
            <img src={selected} alt={data.name} height= {"35rem"}/>
          </div>
        </div>
 

        <div className="product_detail">
          <h3>{data.name} </h3>
          <div className="rate">
          {
            data.ratings===1?
            (
              <p className="card_dess">
              <i className="fas fa-star"></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              </p>
            ): data.ratings === 2 ?
            (
              <p className="card_dess">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              </p>
            ): data.ratings === 3 ?
            (
              <p className="card_dess">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
                 </p>
            ):  data.ratings === 4 ?
            (
              <p className="card_dess">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
                </p>
            ):
            (
              <p className="card_dess">
           <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
                 </p>
            )
           
            
          }
          </div>
          <div className="price_container">
            <div className="price_main">
           <h4> ₹ {data.price} </h4>
            </div>
            <div className="price_mrp">
              <h4 style={{textDecoration:"line-through"}}> ₹{data.mrp}</h4>
            </div>
          </div>
          <div className="incl">
            <h2>Inclusive of all taxes</h2>
          </div>
       
          <div className="offer_title">
            <i className="fas fa-tags fa-1x"></i>
            <h4>Offers:</h4>
          </div>

          <div className="offer">
            <div className="offerone">
              <h4>Cashback</h4>
              <h5>NA</h5>
            </div>
            <div className="offerone">
              <h4>Bank Offer</h4>
              <h5>10% Instant Discount up to INR 1500
              </h5>
            </div>
            <div className="offerone">
              <h4>Partner Offers</h4>
              <h5>Get GST invoice and save up to 28% on business purchases. </h5>
            </div>
          </div>
          <div className="product_buttons">
          {
              cart.length === 0 ?
             apidata.some(p => p.id === data.id) ? (
                <button onClick={() => deletec(data.id)
                  (dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: data,
                  }))
                }
                  type="button" className="Addcart">Remove from Cart</button>
              ) : (<button onClick={() => {addedCart()
              
              }} type="button" disabled={!data.inStock} className="Addcart"> {!data.inStock ? "out of stock" : "Add to Bag"}<i style={{color:"black"}}className="fas fa-shopping-bag" >  </i></button>)
              : 
              cart.some(p => p.id === data.id) ? (
                <button onClick={() => deletec(data.id)
                  (dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: data,
                  }))
                }
                  type="button" className="Addcart">Remove from Cart</button>
              ) : (<button onClick={() => {addedCart()
              
              }} type="button" disabled={!data.inStock} className="Addcart"> {!data.inStock ? "out of stock" : "Add to Bag"}<i style={{color:"black"}}className="fas fa-shopping-bag" >  </i></button>)
            }
          </div>

          <div className="product_description">
            <h4>Product Description:</h4>
            <h5>
             {data.description}
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage