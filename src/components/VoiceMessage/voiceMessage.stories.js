import React from "react";
import VoiceMessage from ".";

export default {
  title: "UI组件/VoiceMessage",
  component: VoiceMessage,
};

export const Default = () => {
  return <VoiceMessage time="01:25" />;
};

export const Mine = () => {
  return <VoiceMessage time="01:25" type="mine" />;
};
