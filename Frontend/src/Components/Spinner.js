import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Spinner = () => {
    const [loading, setloading] = useState(false)
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },2000)
    },[])
  return (
    <ClipLoader color={'#F5A623'} loading={loading} size={150} width={100} height={100}/>
  )
}

export default Spinner