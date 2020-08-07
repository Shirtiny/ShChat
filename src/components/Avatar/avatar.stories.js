import React from "react";
import Avatar from ".";

export default {
  title: "UI组件/Avatar",
  component: Avatar,
};

export const Default = () => {
  return <Avatar />;
};

export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar />
      <Avatar size="48px" />
      <Avatar size="56px" />
      <Avatar size="64px" />
      <Avatar size="72px" />
    </div>
  );
};

export const Status = () => {
  return (
    <div className="row-elements">
      <Avatar status="on" />
      <Avatar status="other" />
    </div>
  );
};

export const StatusIconSize = () => {
  return (
    <div className="row-elements">
      <Avatar status="on" statusIconSize="8px" />
      <Avatar status="off" statusIconSize="12px" />
    </div>
  );
};
