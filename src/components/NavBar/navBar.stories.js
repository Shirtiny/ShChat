import React from "react";
import NavBar, { MenuItem } from ".";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";

export default {
  title: "页面组件/NavBar",
  component: NavBar,
};

export const Default = () => {
  return <NavBar />;
};

export const MenuItemBlock = () => (
  <div className="row-elements">
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem showBadge active icon={faCommentDots} />
    </div>
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem icon={faCommentDots} />
    </div>
  </div>
);
