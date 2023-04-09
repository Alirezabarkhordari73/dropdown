import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";

type MenuObject = {
  items: {
    id: number;
    title: string;
    submenu: {
      id: number;
      title: string;
      submenu: [];
    }[];
  };
  depthLevel: number;
};

const MenuItems = ({ items, depthLevel }: MenuObject) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li
      className="menu-items"
      onMouseLeave={() => setDropdown((prev) => !prev)}
      onMouseEnter={() => setDropdown((prev) => !prev)}
    >
      {items.submenu.length > 0 ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <DropDown
            submenus={items?.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <button type="button" aria-haspopup="menu">
          {items.title}
          {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </button>
      )}
    </li>
  );
};

export default MenuItems;
