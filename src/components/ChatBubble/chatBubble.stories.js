import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";

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

export const WithVoiceMessage = () => {
  return (
    <>
      <ChatBubble time="昨天 下午14:26">
        <VoiceMessage time="01:24" />
      </ChatBubble>
      <ChatBubble time="昨天 下午14:26" type="mine">
        <VoiceMessage time="01:24" type="mine" />
      </ChatBubble>
    </>
  );
};
