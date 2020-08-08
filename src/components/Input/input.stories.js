import React from "react";
import Input from ".";
import Icon from "components/Icon";
import { ReactComponent as ClipIcon } from "assets/icon/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";

export default {
  title: "UI组件/Input",
  component: Input,
};

export const Default = () => {
  return <Input />;
};

export const WithIcon = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc" />}
    suffix={<Icon icon={SmileIcon} color="#cccccc" />}
  />
);

export const Search = () => <Input.Search />;
