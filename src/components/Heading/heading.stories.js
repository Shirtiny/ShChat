import React from "react";
import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const Default = () => {
  return <Heading>默认标题 h1</Heading>;
};

export const Levels = () => {
  return (
    <>
      <Heading level={1}>标题 h1</Heading>
      <Heading level={2}>标题 h2</Heading>
      <Heading level={3}>标题 h3</Heading>
      <Heading level={4}>标题 h4</Heading>
      <Heading level={5}>标题 h5</Heading>
      <Heading level={6}>标题 h6</Heading>
    </>
  )
}