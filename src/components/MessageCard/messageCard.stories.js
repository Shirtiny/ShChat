import React from "react";
import MessageCard from ".";
import avatarImg from "assets/imgs/face-male-1.jpg";

export default {
  title: "UI组件/MessageCard",
  component: MessageCard,
};

export const Default = () => {
  return (
    <MessageCard
      avatarSrc={avatarImg}
      name="用户名"
      avatarStatus="on"
      statusText="在线"
      time="3 小时之前"
      message="大家好，这是messageCard组件"
      unreadCount={2}
    />
  );
};

export const Status = () => {
  return (
    <>
      <MessageCard
        active
        avatarSrc={avatarImg}
        name="用户名"
        avatarStatus="on"
        statusText="在线"
        time="3 小时之前"
        message="大家好，这是messageCard组件"
        unreadCount={2}
      />
      <MessageCard
        replied
        avatarSrc={avatarImg}
        name="用户名"
        avatarStatus="on"
        statusText="在线"
        time="3 小时之前"
        message="大家好，这是messageCard组件"
        unreadCount={2}
      />
      <MessageCard
        replied
        active
        avatarSrc={avatarImg}
        name="用户名"
        avatarStatus="on"
        statusText="在线"
        time="3 小时之前"
        message="大家好，这是messageCard组件"
        unreadCount={2}
      />
    </>
  );
};
