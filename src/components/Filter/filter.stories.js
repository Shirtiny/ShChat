import React from "react";
import Filter from ".";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import { ReactComponent as PlusSvg } from "assets/icon/plus.svg";
import Button from "components/Button";


export default {
  title: "UI组件/Filter",
  component: Filter,
};

export const Default = () => {
  return (
    <Filter>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="创建会话">
        <Button shape="circle">
          <Icon icon={PlusSvg} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>
  );
};
