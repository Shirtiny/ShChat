import styled, { css } from "styled-components";
import { circle } from "utils/mixins";

// 通用样式
const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;
  ${circle(color, size)}
`;

// 头像组件样式
const StyledAvatar = styled.div`
  position: relative;
`;

//头像旁边的状态图标
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({ size, statusIconBgColor }) => circleMixinFunc(statusIconBgColor, size)}

    transform: scale(2);
  }

  ::after {
    ${({ theme, size, status, statusIconOffColor }) =>
      circleMixinFunc(status === "on" ? theme.green : statusIconOffColor, size)}
  }
`;

// 头像容器 蒙版
const AvatarClip = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

//头像的图片
const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

// 默认导出头像组件样式
export default StyledAvatar;

//以命名导出子样式组件
export { StatusIcon, AvatarClip, AvatarImage };
