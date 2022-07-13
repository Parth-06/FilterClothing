import React, { useState } from 'react'
import { CartState } from '../Context/Context';


const LeftBox = () => {
    const{productState:{ byStock, byFastDelivery, sort}, productDispatch} = CartState();
    const [crating, setcrating] = useState("")
  return (
    
    <div className='left_box' >
            <div className="filter_title">
                <h4>FILTERS</h4>
                <div className="clear" onClick={()=>(productDispatch({type: "CLEAR_FILTERS"}))}>Clear All</div>
            </div>
          
            <div className="border_two">
          <div className="border"></div>
            <div className="filter_title_two">
                <h4>By PRICE</h4>
                <div className="radio_box">
                <input type="radio" className = "radio_in" onChange={()=>productDispatch({type: "SORT_BY_PRICE", payload: "lowtohigh"})} checked={sort === "lowtohigh" ? true : false}/>
                <label htmlFor="price1"> Low to high</label><br/>

                <input type="radio"  className = "radio_in"onChange={()=>productDispatch({type: "SORT_BY_PRICE", payload: "hightolow"})} checked={sort === "hightolow" ? true : false}/>
                <label htmlFor="price1"> High to Low</label><br/>
              
            </div>
            </div>
            <div className="border"></div>
            <div className="filter_title_two">
                <h4>By Preference</h4>
                <form className="radio_box">
                <input type="checkbox" className = "radio_in"  onChange={()=>productDispatch({type: "FILTER_BY_STOCK"})} checked={byStock} />
                <label> Include Out of Stock</label><br/>
                <input type="checkbox" className = "radio_in"  onChange={()=>productDispatch({type: "FILTER_BY_DELIVERY"})} checked={byFastDelivery} />
                <label>  Fast Delivery Only</label><br/>
        
            </form>
            </div>
            <div className="border"></div>
               <div className="filter_title_two">
                <h4>By Customer Review</h4>
                <div className="radio_box">
            <div style={{display:"flex", cursor:"pointer"}} onClick={()=>{(productDispatch({type: "FILTER_BY_RATING", payload: 4}))(setcrating("four"))}} className = "radio_in">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <h4 style={crating === "black" ? {color:"black"} : crating === "four" ? {color:"orange"} : {color:"black"}}> &nbsp;& UP</h4>
            </div>
            <div  style={{display:"flex", cursor:"pointer"}} onClick={()=>{(productDispatch({type: "FILTER_BY_RATING", payload: 3}))(setcrating("three"))} } className = "radio_in">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <h4 style={crating === "black" ? {color:"black"} : crating === "three" ? {color:"orange"} : {color:"black"}}> &nbsp;& UP</h4>
            </div>
            <div  style={{display:"flex", cursor:"pointer"}} onClick={()=>{(productDispatch({type: "FILTER_BY_RATING", payload: 2}))(setcrating("two"))} }className = "radio_in">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <h4 style={crating === "black" ? {color:"black"} : crating === "two" ? {color:"orange"} : {color:"black"}}> &nbsp;& UP</h4>
            </div>
            <div style={{display:"flex",cursor:"pointer"}} onClick={()=>{(productDispatch({type: "FILTER_BY_RATING", payload: 1}))(setcrating("one"))} } className = "radio_in">
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <i className="fas fa-star" style={{color: "silver"}}></i>
            <h4 style={crating === "black" ? {color:"black"} : crating === "one" ? {color:"orange"} : {color:"black"}}> &nbsp;& UP</h4>

</div>
            </div>
            </div>
            <div className="border"></div>
        
            </div>
        </div>
  )
}

export default LeftBox