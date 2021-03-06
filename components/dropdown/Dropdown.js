import React from 'react'

import MenuItems from "./MenuItems";







const Dropdown = ({
    submenus,
    dropdown,
    depthLevel
}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel> 1 ? "" : "dropdownSubmenu";
    return ( 
        <ul className = {
            `dropdown ${dropdownClass} ${dropdown ? "show" : ""}`
        } 
        > 
        {
            submenus.map((submenu, index) => ( 
                <MenuItems 
                items = {submenu}
                key = {index}
                depthLevel = {depthLevel}
                />
            ))
        } 
        </ul>
    );
};

export default Dropdown;