import styled, { css } from "styled-components";
import StyledButton from "components/Button/style";
import StyledIcon from "components/Icon/style";
import StyledText from "components/Text/style";

const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;

      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    & > ${StyledIcon} path {
      fill: white;
    }

    & > ${StyledText} {
      color: white;
    }
  `,
};

const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;

  /* 第一个子元素 按钮 */
  & > *:first-child {
    /* 禁止缩小 */
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledVoiceMessage;
