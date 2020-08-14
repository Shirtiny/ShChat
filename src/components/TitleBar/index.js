import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import avatarImg from "assets/imgs/face-male-1.jpg";
import Paragrah from "components/Paragrah";
import Text from "components/Text";
import Icon from "components/Icon";
import { ReactComponent as Call } from "assets/icon/call.svg";
import { ReactComponent as Camera } from "assets/icon/camera.svg";
import { ReactComponent as Options } from "assets/icon/options.svg";

function TitleBar({ status = "off", src = avatarImg, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status={status} src={src} />
      <Title>
        <Paragrah size="large">用户名</Paragrah>
        <Paragrah type="secondary">
          <Text>离线</Text>
          <Text> 最后阅读： 3小时前</Text>
        </Paragrah>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} icon={Camera} />
        <Icon opacity={0.3} icon={Options} />
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
