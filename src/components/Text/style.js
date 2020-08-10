import styled, { css } from "styled-components";

const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeVariants = {
  xxsmall: css`
    font-size: ${({ theme }) => theme.xxsmall};
  `,
  xsmall: css`
    font-size: ${({ theme }) => theme.xsmall};
  `,
  small: css`
    font-size: ${({ theme }) => theme.small};
  `,
  normal: css`
    font-size: ${({ theme }) => theme.normal};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.medium};
  `,
  large: css`
    font-size: ${({ theme }) => theme.large};
  `,
  xlarge: css`
    font-size: ${({ theme }) => theme.xlarge};
  `,
  xxlarge: css`
    font-size: ${({ theme }) => theme.xxlarge};
  `,
};

const StyledText = styled.span`
  /* font-size */
  ${({ size }) => sizeVariants[size] || sizeVariants.normal}
  /* color opacity*/
  ${({ type }) => typeVariants[type]}
  /* font-weight */
  ${({ bold }) => bold && `font-weight: 500`}
`;

export default StyledText;
