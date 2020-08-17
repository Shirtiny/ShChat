import styled, { css } from "styled-components";
import theme from "theme";

const Content = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;
  bottom: calc(100% + 12px);

  ${({ offset }) =>
    offset && `transform: translate(${offset.x || 0}, ${offset.y || 0});`}

  ${({ visible }) => !visible && `display: none`};
`;

// 倒三角
const Triangle = styled.div`
  position: absolute;
  /* 宽高为0 使边框直接围成了正方形 */
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  /* 上边框有颜色 */
  border-color: ${({ theme }) => theme.background} transparent transparent
    transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  ${({ offset }) => offset && `transform: translateY(${offset.y || 0});`}

  ${({ visible }) => !visible && `display: none`};
`;

const Target = styled.div``;

const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export default StyledPopover;

export { Content, Target, Triangle };
