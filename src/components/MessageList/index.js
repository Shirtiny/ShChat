import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import Filter from "components/Filter";
import Option from "components/Option";
import Select from "components/Select";
import Button from "components/Button";
import Icon from "components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "components/Input";
import MessageCard from "components/MessageCard";
import img1 from "assets/imgs/face-male-1.jpg";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <Input.Search />
      <ChatFilter />
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <MessageCard
            key={index}
            active={index === 3}
            replied={index % 3 === 0}
            avatarSrc={img1}
            name="用户名"
            avatarStatus="online"
            statusText="在线"
            time="3 小时之前"
            message="messageList组件展示"
            unreadCount={3}
          />
        ))}
      </ChatList>
    </StyledMessageList>
  );
}

function ChatFilter() {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="创建会话">
        <Button shape="circle">
          <FontAwesomeIcon icon={faPlus} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
