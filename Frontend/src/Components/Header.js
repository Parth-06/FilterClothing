import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import { CartVal } from "../Context/Cartapi";

const Header = () => {
  const { newData } = CartVal();
  const { productDispatch } = CartState();
  const [sidebar, setsidebar] = useState(false);
  const [apidata, setApidata] = useState([]);
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

  const showSidebar = () => {
    setsidebar(!sidebar);
  };
  const hidesidebar = () => {
    setsidebar(false);
    productDispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <>
      <div className="main_header">
        <div className="right_items">
          <Link
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            to="/"
            className="for_link"
            style={{ color: "orange" }}
          >
            {" "}
            <span className="logo">
              {" "}
              <h1>FilterClothing</h1>{" "}
            </span>
          </Link>

          <Link
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            to="/men"
            className="for_link"
          >
            <li>Men</li>
          </Link>

          <Link
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            to="/women"
            className="for_link"
          >
            <li>Women</li>
          </Link>
          <Link
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            to="/kids"
            className="for_link"
          >
            {" "}
            <li>Kids</li>
          </Link>
        </div>
        <div className="left_items">
          <div className="search_section">
            <li
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
              className="search_bar1"
            >
              {" "}
              <input
                type="text"
                className="search_bar1"
                placeholder="Search Here for Clothes & More. "
              />
            </li>
            <i className="fas fa-search fa-lg"></i>
          </div>
          <div className="routes">
            <Link
              onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
              to="/profile"
            >
              {" "}
              <i className="fas fa-user-alt"></i>
            </Link>

            <Link
              to="/cart"
              onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
              style={{ textDecoration: "none", listStyleType: "none" }}
              state={{ data: apidata }}
            >
              {" "}
              <i className="fas fa-shopping-bag"> </i>
            </Link>
            <Link
              to="/cart"
              onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
              style={{ textDecoration: "none", listStyleType: "none" }}
              state={{ data: apidata }}
            >
              <div className="cart_num"> {apidata.length}</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mobile_header">
        <i className="fas fa-bars" onClick={showSidebar}></i>
        <div className="upper_sidebar">
          <div className="mai_side">
            {sidebar && (
              <div className="upper_sidebar">
                <div className="mainn_side">
                  <div className="one" onClick={hidesidebar}></div>
                  <div className="side_ul">
                    <ul className="nav_ul">
                      <div class="upper_menu">
                        <i className="fas fa-user fa-lg"></i>
                        <h4>Welcome</h4>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                      <div class="menu">
                        <ul onClick={hidesidebar}>
                          <Link to="/" className="menua" onClick={hidesidebar}>
                            <i className="fas fa-home"></i>{" "}
                            <li onClick={hidesidebar}>Home</li>
                          </Link>
                          <Link to="/cart" className="menua">
                            <i
                              className="fas fa-luggage-cart"
                              state={{ data: apidata }}
                            ></i>{" "}
                            <li>Bag</li>
                          </Link>
                          <Link to="/profile" className="menua">
                            <i className="fas fa-address-card"></i>{" "}
                            <li>Profile</li>
                          </Link>
                        </ul>
                        <div className="category">
                          <i className="fas fa-filter fa-lg"></i>
                          <h2>Shop by Category</h2>
                        </div>
                        <ul onClick={hidesidebar}>
                          <Link to="/men" className="menua">
                            <i className="fas fa-male fa-1x"></i>
                            <li>Men</li>
                          </Link>
                          <Link to="/women" className="menua">
                            {" "}
                            <i className="fas fa-female"></i>
                            <li>Women</li>
                          </Link>
                          <Link to="/kids" className="menua">
                            <i className="fas fa-baby"></i>
                            <li>Kids</li>
                          </Link>
                          <Link to="/logout" className="menua">
                            {" "}
                            <i
                              className="fas fa-user fa-lg"
                              style={{
                                marginRight: "10px",
                                paddingTop: "20px",
                                color: "chocolate",
                              }}
                            ></i>
                            <li>Logout</li>
                          </Link>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="logo">
          <Link
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            to="/"
            style={{
              color: "orange",
              textDecoration: "none",
              listStyleType: "none",
              cursor: "pointer",
            }}
          >
            {" "}
            <span className="logo">
              {" "}
              <h1>FilterClothing</h1>{" "}
            </span>
          </Link>
        </div>
        <div className="routes">
          <Link to="/profile">
            {" "}
            <i className="fas fa-user-alt"></i>
          </Link>
          <Link
            to="/cart"
            style={{ textDecoration: "none", listStyleType: "none" }}
            state={{ data: apidata }}
          >
            {" "}
            <i className="fas fa-shopping-bag"> </i>
          </Link>
          <Link
            to="/cart"
            style={{ textDecoration: "none", listStyleType: "none" }}
            state={{ data: apidata }}
          >
            <div className="cart_num"> {apidata.length}</div>
          </Link>
        </div>
      </div>
      <div className="mobile_header_two">
        <div className="search_section">
          <li
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            className="search_bar1"
          >
            {" "}
            <input
              type="text"
              className="search_bar1"
              placeholder="Search Here for Clothes & More. "
            />
          </li>
          <i className="fas fa-search fa-lg"></i>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
