import { menuItems } from "/src/menuItems";
import { useState } from 'react'
import styles from "./app.module.css";
import MenuItems from "./MenuItems";
import Hamburger from "hamburger-react";

const Navbar = () => {
    return ( 
        <nav>
        <ul className={styles.menus}> 
            {
                menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems 
                    items = {menu}
                    key = {index}
                    depthLevel = {depthLevel}
                    />;
                })
            } 
        </ul> 
        </nav>
    );
};

export default Navbar;