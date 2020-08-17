/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";

import { ReactComponent as ClipIcon } from "assets/icon/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icon/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icon/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icon/options.svg";
import Button from "components/Button";
import Emoji from "components/Emoji";
import Popover from "components/Popover";
import { useTheme } from "styled-components";

function Footer({ children, ...rest }) {
  const [emojiActive, setEmojiActive] = useState(false);
  const theme = useTheme();

  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="输入要说的话"
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onVisible={() => setEmojiActive(true)}
              onHide={() => setEmojiActive(false)}
            >
              <Icon icon={SmileIcon} />
            </Popover>
            <Icon
              icon={MicrophoneIcon}
              color={emojiActive ? undefined : theme.gray3}
            />
            <Button size="52px" shape="circle">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: "translateX(-2px)" }}
              />
            </Button>
          </IconContainer>
        }
      />
      {children}
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="Smiling">😊</Emoji>
      <Emoji label="Grinning">😀</Emoji>
      <Emoji label="Thumbs Up">👍</Emoji>
      <Emoji label="Index Finger Pointing Up">☝️</Emoji>
      <Emoji label="Okay">👌</Emoji>
      <Emoji label="Please">🙏</Emoji>
      <Emoji label="Kissing Lips">💋</Emoji>
      <Emoji label="Angry">😠</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

export default Footer;
