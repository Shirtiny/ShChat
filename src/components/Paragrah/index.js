import React from "react";
import PropTypes from "prop-types";
import StyledParagrah from "./style";

function Paragrah({
  children,
  // 单行超长段落是否显示省略号
  ellipsis,
  ...rest
}) {
  return (
    <StyledParagrah
      // 渲染为p标签
      as="p"
      ellipsis={ellipsis}
      {...rest}
    >
      {children}
    </StyledParagrah>
  );
}

Paragrah.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
};

export default Paragrah;
