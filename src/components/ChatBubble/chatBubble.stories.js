import React from "react";
import ChatBubble from ".";

export default {
  title: "UI组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const Default = () => {
  return <ChatBubble time="昨天 下午14:26">默认消息</ChatBubble>;
};
export const Mine = () => {
  return (
    <ChatBubble type="mine" time="昨天 下午14:26">
      我发送的消息
    </ChatBubble>
  );
};
