import React from "react";
import Select from ".";
import Option from "components/Option";

export default {
  title: "UI组件/Select",
  component: Select,
};

export const Default = () => {
  return (
    <Select>
      <Option>选项1</Option>
      <Option>选项2</Option>
    </Select>
  );
};
