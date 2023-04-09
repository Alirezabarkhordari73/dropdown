import React from "react";
import MenuItems from "../MenuItems/MenuItems";

type Props = {
  submenus: { id: number; title: string; submenu: [] }[];
  dropdown: boolean;
  depthLevel: number;
};

const DropDown = ({ submenus, dropdown, depthLevel }: Props) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default DropDown;
