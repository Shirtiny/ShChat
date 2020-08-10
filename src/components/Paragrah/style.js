import styled, { css } from "styled-components";
import StyledText from "components/Text/style";

// 直接使用Text的样式
const StyledParagrah = styled(StyledText)`
  /* 是否显示省略号 */
  ${({ ellipsis }) => ellipsis && css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

export default StyledParagrah;
