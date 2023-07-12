import React from "react";
import "./Footer.css";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="mainT" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <span>2023 airbnb, Inc.</span>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Privacy</li>
        <li>Your Privacy Choices</li>
        <li>Destinations</li>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
      <TbWorld
              fontSize={20}
            />
        <li>English(US)</li>
        <li>Privacy</li>
        <li>Your Privacy Choices</li>
        <li>Destinations</li>
      </div>
    </div>
  );
};

export default Footer;
