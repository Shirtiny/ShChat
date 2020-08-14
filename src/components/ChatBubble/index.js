import React from "react";
import PropTypes from "prop-types";
import StyledChatBubble, { Bubble, BubbleTip } from "./style";
import { MessageText, Time } from "components/ChatBubble/style";
import { ReactComponent as BubbleTipIcon } from "assets/icon/bubbleTip.svg";

function ChatBubble({
  children,
  // 是谁发送的
  type = "",
  // 发送时间
  time,
  ...rest
}) {
  return (
    <StyledChatBubble type={type} {...rest}>
      <Bubble>
        <BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  );
}

ChatBubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default ChatBubble;
