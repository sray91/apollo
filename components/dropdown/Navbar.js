import React from 'react'

import { menuItems } from "/src/menuItems";
import MenuItems from "./MenuItems";

import styles from '/src/pagestyle.module.css';




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