---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%= name %> from ".";

export default {
  title: "UI组件/<%= name %>",
  component: <%= name %>,
};

export const Default = () => {
  return <<%= name %> />;
};