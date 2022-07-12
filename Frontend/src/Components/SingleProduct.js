import React,{memo} from 'react'
import { Link } from "react-router-dom";

const SingleProduct = memo(({prod, cartdata}) => {


  return (
   <Link style={{ color: "black", textDecoration: "none", listStyleType: "none" }}to="/productpage" state={{data: prod, cartdata: cartdata}}>
    <div className="card">
  
    <div className="card_image">
        <img src={prod.image} alt={""}/>
    </div>
    <div className="card_body">
        <p className="card_title">{prod.name}</p>
      
          {
            prod.ratings===1?
            (
              <p className="card_des">
              <i className="fas fa-star"></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              </p>
            ): prod.ratings === 2 ?
            (
              <p className="card_des">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              <i className="fas fa-star" style={{color: "silver"}}></i>
              </p>
            ): prod.ratings === 3 ?
            (
              <p className="card_des">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
                 </p>
            ):  prod.ratings === 4 ?
            (
              <p className="card_des">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
                </p>
            ):
            (
              <p className="card_des">
           <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
                 </p>
            )
           
            
          }
         
       {prod.fastDelivery ? (<div className="card_des" style={{fontWeight:"700"}}>Fast Delivery</div>):(<div className="card_des" style={{fontWeight:"700"}}>Deliverd in 4 days</div>)}
        <p className="price">₹ {prod.price} <del style={{fontSize:"15px",  color:" rgb(78, 75, 75)"}}>₹ {prod.mrp}</del></p>
    </div>       
</div>
</Link>
  )
})

export default memo(SingleProduct)    