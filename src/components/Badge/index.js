import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

function Badge({
  children,
  show = false,
  count = 0,
  // count为0时是否显示徽章
  showZero = false,
  ...rest
}) {
  return (
    <StyledBadge
      // 变体 当有children时 变为小点
      variant={children ? "dot" : "default"}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
};

export default Badge;
