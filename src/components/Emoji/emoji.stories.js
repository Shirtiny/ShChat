import React from "react";
import Emoji from ".";

export default {
  title: "UI组件/Emoji",
  component: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => {
  return (
    <div>
      <Emoji label="Grinning">😀</Emoji>
      <Emoji label="Smiling">☺️</Emoji>
    </div>
  );
};
