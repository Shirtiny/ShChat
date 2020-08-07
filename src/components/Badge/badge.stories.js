import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI组件/Badge",
  component: Badge,
};

export const Default = () => {
  return <Badge count={5} />;
};

export const Dot = () => <Badge show variant="dot"></Badge>;

export const WithIcon = () => (
  <Badge show variant="dot">
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
  </Badge>
);
