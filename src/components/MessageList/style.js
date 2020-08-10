import styled, { css } from "styled-components";
import StyledMessageCard from "components/MessageCard/style";

const StyledMessageList = styled.div``;

const ChatList = styled.div`
  ${StyledMessageCard} {
    margin-bottom: 20px;
  }
`;

export default StyledMessageList;
export { ChatList };
