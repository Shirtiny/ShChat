import styled, { css } from "styled-components";

const StyledIcon = styled.div`
  /*svg是行内元素 设置行内flex */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")}
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")}
  }
`;

export default StyledIcon;
