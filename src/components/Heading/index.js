import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./style";

// 直接用的 h1-h6 html标签
function Heading({
  children,
  // 标题级别 1-6
  level = 1,
  ...rest
}) {
  return (
    <StyledHeading
      // 动态取h1到h6 标签
      as={`h${level}`}
      {...rest}
    >
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
