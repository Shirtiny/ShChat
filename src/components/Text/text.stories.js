import React from "react";
import Text from ".";

export default {
  title: "排版/Text",
  component: Text,
};

export const Default = () => {
  return (
    <div className="row-elements">
      <Text>默认文本</Text>
      <Text bold>加粗文本</Text>
    </div>
  );
};

export const Colors = () => {
  return (
    <div className="row-elements">
      <Text type="primary">主要文本</Text>
      <Text type="secondary">次要文本</Text>
      <Text type="danger">警示文本</Text>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="row-elements">
      <Text size="xxsmall">大小为 xxsmall 的文本</Text>
      <Text size="xsmall">大小为 xsmall 的文本</Text>
      <Text size="small">大小为 small 的文本</Text>
      <Text size="normal">大小为 normal 的文本</Text>
      <Text size="medium">大小为 medium 的文本</Text>
      <Text size="large">大小为 large 的文本</Text>
      <Text size="xlarge">大小为 xlarge 的文本</Text>
      <Text size="xxlarge">大小为 xxlarge 的文本</Text>
    </div>
  );
};
