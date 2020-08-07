import React from "react";
import PropTypes from "prop-types";
import img1 from "assets/imgs/face-male-1.jpg";
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from "./style";

function Avatar({
  src = img1,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="头像" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string, //.isRequired
  size: PropTypes.string,
  status: PropTypes.oneOf(["on", "off"]),
  statusIconSize: PropTypes.string
};

export default Avatar;
