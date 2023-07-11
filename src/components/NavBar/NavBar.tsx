import React from "react";
// import SearchIcon from "../../assets/icons/searchIcon.png";
import Logo2 from "../../assets/images/airbnb_logo2-r.png";
import { FiSearch } from "react-icons/fi";
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
          <img src={Logo2} alt="" width={30} height={30} />
          <span>airbnb</span>
          {/* <img src='/assets/airbnb_logo.png' alt="" className="icon" /> */}
        </div>
        {/* Middle */}
        {/* <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full "> */}
        <div
          className="middle"
          style={{
            display: "flex",
            width: "28%",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <input
            type="search"
            placeholder=""
            // className="py-2.5 w-[20rem] rounded-full outline-0"
            className="search"
            style={{
              borderRadius: "26px",
              height: "50px",
              width: "100%",
              border: "1px solid lightGrey",
            }}
          />
          {/* <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600"> */}
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
            {/* <img
              src={SearchIcon}
              width={25}
              height={25}
              style={{ borderRadius: "12px" }}
              alt=""
            /> */}
             <div style={{background:'#ff5a60', borderRadius:'50%', width:'30px', height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <FiSearch color="white" fontSize={14} fontWeight='900'/>
            </div>
          </div>
          {/* <div className="bg-[#ff5a60] p-2 rounded-full mr-2"> */}
          <div className="icon-search">
            {/* <FiSearch className="text-white w-full" /> */}
          </div>
        </div>
        {/* Right */}
        {/* <div className="flex items-center pr-3  font-semibold text-gray-600"> */}
        <div
          className="text"
          style={{
            border: "1px solid violet",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <p className="text-[17px]">Rent House</p> */}
          <p className="p">Rent House</p>
          {/* <div className="flex items-center mx-8 gap-1"> */}
          <div className="icon2">
            {/* <BiWorld className="" /> */}
            <div className="">EN</div>
          </div>

          {/* <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out"> */}
          <div className="action" style={{ border: "1px solid blue" }}>
            <p>Sign in</p>
            {/* <BiUser className="text-[22px]" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
