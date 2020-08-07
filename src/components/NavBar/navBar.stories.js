import React from "react";
import NavBar, { MenuItem } from ".";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "页面组件/NavBar",
  component: NavBar,
};

export const Default = () => {
  return <NavBar />;
};

export const Menu = () => <MenuItem showBadge active icon={faCommentDots} />;
