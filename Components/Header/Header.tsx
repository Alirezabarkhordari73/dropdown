"use client";
import React from "react";
import MenuItems from "../MenuItems/MenuItems";

const navdata = [
  {
    id: 1,
    title: "nav1",
    submenu: [
      {
        id: 1,
        title: "subnav1",
        submenu: [{ id: 1, title: "subnav1", submenu: [] }],
      },
    ],
  },
  {
    id: 2,
    title: "nav2",
    submenu: [
      {
        id: 1,
        title: "subnav2",
        submenu: [{ id: 1, title: "subnav2", submenu: [] }],
      },
    ],
  },
  ,
];

const Header = () => {
  return (
    <nav className="nav-area">
      <ul className="menus">
        {navdata.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Header;
