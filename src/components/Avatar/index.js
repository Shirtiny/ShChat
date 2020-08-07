import React from "react";
import PropTypes from "prop-types";
import img1 from "assets/imgs/face-male-1.jpg";
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from "./style";

function Avatar({
  src = img1,
  size = "48px",
  status,
  statusIconSize = "8px",
  statusIconBgColor = "white",
  statusIconOffColor = "rgba(24, 28, 47, 0.2)",
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon
          status={status}
          size={statusIconSize}
          statusIconBgColor={statusIconBgColor}
          statusIconOffColor={statusIconOffColor}
        ></StatusIcon>
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
  statusIconSize: PropTypes.string,
};

export default Avatar;
