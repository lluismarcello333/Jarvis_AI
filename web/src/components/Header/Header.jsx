import React from "react";
import "./Header.css";
import Avatar from "../../assets/icons/iconJarvis.png";
import UserAvatar from "../../assets/icons/Iron_Man.png";  

function Header() {
  return (
    <div className="header">
      <img src={UserAvatar} alt="User Avatar" />
      <h1>J-A-R-V-I-S</h1>
      <img src={Avatar} alt="Avatar" />
    </div>
  );
}

export default Header;
