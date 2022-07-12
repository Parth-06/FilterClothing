import React, { useState } from 'react'
import { CartState } from '../Context/Context';
import FilterMobile from './FilterMobile';
const HeaderFilter = () => {
    const [filterbar, setfilterbar] = useState(false)
    const { productDispatch } = CartState();
  return (
    <>
        <div className="filter_area">
       <div className="all_filters" >
        <h3 onClick={()=> {setfilterbar(!filterbar)}}><i className="fas fa-sort"></i>Filters</h3>
       </div>
       <div className="clean_filters" onClick={()=>(productDispatch({type: "CLEAR_FILTERS"}))}>
        <h4><i className="fas fa-minus-circle"></i>Clear Filters</h4></div>
      </div>
      <div className="main_filters">
        {
          filterbar &&
           <div >
            <ul className="main_filter_area">
            <div className="close_filter" onClick={()=> {setfilterbar(false)}}>
            <i className="fas fa-times"></i>
            </div>
            <div className="filter_for_mobile">
            <FilterMobile/>
            </div>
           
            <div className="closeFilter" onClick={()=> {setfilterbar(false)}}></div>
            </ul>
           
                  </div>
        }
      </div>
    </>
  )
}

export default HeaderFilter