import React from "react";
import Popover from ".";
import Button from "components/Button";

export default {
  title: "UI组件/Popover",
  component: Popover,
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="hello">
        <Button>点我</Button>
      </Popover>
    </div>
  );
};

export const Offset = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="hello" offset={{ x: "-25%" }}>
        <Button>点我</Button>
      </Popover>
    </div>
  );
};
