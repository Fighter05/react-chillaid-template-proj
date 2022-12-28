import React from 'react'
import './Navbar.css'
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

function Navbar() {
  return (
    <div className="nav-area">
        <a href="/#" className="logo">
        <span className="C"><b>C</b></span>HILL<span className="A"><b>A</b></span>ID
        </a>
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
      </div>
  )
}

export default Navbar