import styled, { css } from "styled-components";

// 可复用css
const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
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
    ${({ size }) => circleMixinFunc("white", size)}

    transform: scale(2);
  }

  ::after {
    ${({ theme, size, status }) =>
      circleMixinFunc(status === "on" ? theme.green : theme.gray, size)}
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
