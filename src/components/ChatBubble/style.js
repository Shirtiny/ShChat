import styled, { css } from "styled-components";
import Paragrah from "components/Paragrah";
import Icon from "components/Icon";
import Text from "components/Text";

const Time = styled(Paragrah).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

// 小尾巴
const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`;

const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`;

const MessageText = styled(Text)``;

// 消息类型 变体 别人发的还是我发的
const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;
    }

    path {
      fill: ${({ theme }) => theme.primaryColor};
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({type}) => type && typeVariants[type]}
`;

export default StyledChatBubble;

export { Time, BubbleTip, Bubble, MessageText };
