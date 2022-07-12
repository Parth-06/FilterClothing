import React, { memo} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import HeaderFilter from './HeaderFilter';
import LeftBox from './LeftBox';
const ProductSort = React.lazy(()=>import('./ProductSort'))



const Home = () => {
 
  return (
    <>
      
     <HeaderFilter/>
      <div className="main">
      <LeftBox/>
  
        <div className='right_box'> 
      <ProductSort/>
      </div>

      </div>
      </>
   
  )
}

export default memo(Home)