import React, { useContext, useState, useEffect, createContext } from "react";
import Pusher from "pusher-js";

const Cartapi = createContext();

const CartapiProvider = ({ children }) => {
  const [apidata, setApidata] = useState([]);
  const [newData, setnewData] = useState([]);

  useEffect(() => {
    const Fetchcart = async () => {
      const res = await fetch("/cartdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      var cartdata = await res.json();
      setApidata(cartdata);
    };
    Fetchcart();
  }, [newData]);

  useEffect(() => {
    const pusher = new Pusher("aed0814fdeed2c64933c", {
      cluster: "ap2",
    });

    const channelmain = pusher.subscribe("updatesomthing");
    channelmain.bind("updated", (dataa) => {
      if (dataa) {
        console.log(dataa);
        setnewData(dataa);
      }
    });
  }, []);

  return <Cartapi.Provider value={{ apidata }}>{children}</Cartapi.Provider>;
};

export default CartapiProvider;
export const CartVal = () => {
  return useContext(Cartapi);
};
