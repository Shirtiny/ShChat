import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import StyledPopover, { Content, Triangle, Target } from "./style";

function Popover({
  children,
  content,
  onVisible,
  onHide,
  offset = {},
  ...rest
}) {
  // 是否显示
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    visible ? onHide && onHide() : onVisible && onVisible();
    setVisible(!visible);
  }, [visible, onVisible, onHide]);

  return (
    <StyledPopover {...rest} onClick={handleClick}>
      <Content offset={offset} visible={visible}>
        {content}
      </Content>
      <Triangle offset={offset} visible={visible} />
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  obHide: PropTypes.func,
};

export default Popover;
