import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {UserContext } from "../App"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Logout = () => {
  const {logoutstate, logoutdispatch} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{  
        const Logoutpage = async () => {
            try {
                const res = await fetch("/logout", {
                    method: "GET",
                    headers: {
    
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    credentials: "include"
                });
                // const data = await res.json();
                logoutdispatch({type:"USER", payload:false})
                navigate("/login")
                toast.error("Logout")
                if (!res.status === 200) {

                    const error = new Error(res.error);
                    throw error;
                }
            } catch (err) {
                console.log(err);
                console.warn(err.responseText)
                
            }
        }
        Logoutpage();
    })
  return (
    <>
    </>
  )
}

export default Logout