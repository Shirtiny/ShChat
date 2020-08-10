import styled, { css } from "styled-components";
import CaretDown from "assets/icon/caret_down.svg";

const StyledSelect = styled.select`
  /* create-react-app 会自动为浏览器配置兼容属性--webkit等 */

  /* 图标 */
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  outline: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark}

  /* IE隐藏图标 */
  ::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
