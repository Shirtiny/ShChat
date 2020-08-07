import React from "react";
import Icon from ".";
// 导入svg图标
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";


export default {
  title: "UI组件/Icon",
  component: Icon,
};

export const Default = () => {
  return <Icon icon={SmileIcon} />;
};

export const Colors = () => {
  return <Icon icon={SmileIcon} color="#cccccc" />;
};

export const Sizes = () => {
  return <Icon icon={SmileIcon} width={48} height={48} />;
};

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faFolder} />;
};
