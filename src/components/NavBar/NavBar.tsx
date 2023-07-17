import React from "react";
import { FiSearch } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 40px",
        }}
      >
        {/* Left */}
        {/* <div className="  h-20  flex"> */}
        <div
          className="logo-container"
          style={{
            display: "flex",
            color: "#FF3856",
            flexDirection: "row",
            gap: "7px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={Logo2} alt="" width={30} height={30} /> */}
          <Link to="/">
            <img
              src="/assets/icons/airbnb_logo2-r.png"
              width={30}
              height={30}
              alt=""
              className="icon"
            />
          </Link>
          <span>airbnb</span>
          {/* <img src='/assets/airbnb_logo.png' alt="" className="icon" /> */}
        </div>
        {/* Middle */}
        <div
          className="middle"
          style={{
            display: "flex",
            width: "28%",
            justifyContent: "center",
            alignItems: "center",
            // position: "relative",
          }}
        >
          <input
            type="search"
            placeholder=""
            className="search"
            style={{
              borderRadius: "26px",
              height: "50px",
              width: "100%",
              border: "1px solid lightGrey",
              position: "relative",
            }}
          />
          <div
            className="butto"
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <button className="first">Anywhere</button>
            <button className="second">Any week</button>
            <button className="third">Add guests</button>
            <div
              style={{
                background: "#ff5a60",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FiSearch color="white" fontSize={14} fontWeight="900" />
            </div>
          </div>
        </div>
        {/* Right */}
        <div
          className="text"
          style={{
            // border: "1px solid violet",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            height: "50px",
          }}
        >
          <div
            className="icon2"
            // style={{
            //   border: "1px solid red",
            //   height: "80%",
            //   borderRadius: "26px",
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "center",
            //   width: "135px",
            //   alignItems: "center",
            // }}
          >
            <p className="p">Become a Host</p>
          </div>
          <div
            className="icon2"
            // style={{
            //   border: "1px solid red",
            //   height: "80%",
            //   width: "40px",
            //   borderRadius: "50%",
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            <TbWorld fontSize={20} />
          </div>

          {/* <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out"> */}
          <div
            className="action"
            style={{
              borderRadius: "26px",
              width: "60px",
              height: "90%",
              border: "1px solid lightGrey",
              gap: "10px",
              padding: "0 10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FaBars fontSize={14} />
            <img
              src="/assets/icons/user.png"
              alt=""
              width={30}
              height={30}
              style={{ background: "red" }}
            />
            {/* <p>Sign in</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
