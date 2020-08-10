import React from "react";
import Button from ".";
import Icon from "components/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as PlusSvg } from "assets/icon/plus.svg";

export default {
  title: "UI组件/Button",
  component: Button,
};

export const Default = () => {
  return <Button>默认按钮</Button>;
};

export const Shapes = () => {
  return (
    <div className="row-elements">
      <Button shape="rect">方形按钮</Button>
      <Button shape="circle">
        <Icon icon={PlusSvg} width={12} height={12} />
      </Button>
      <Button shape="circle">
        <FontAwesomeIcon icon={faPlus} width={12} height={12} />
      </Button>
    </div>
  );
};
