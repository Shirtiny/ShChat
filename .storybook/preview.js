import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import "story.css";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

// 配置预览选项
addParameters({
  options: {
    showRoots: true,
  },
});
