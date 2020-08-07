import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";
import StyledAvatar from "components/Avatar/style";

const StyledMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* 导航高亮条 */
    ${activeBar()}

    /* 不高亮时 取消高度 */
    ${({ active }) => (active ? "" : `&::before, &::after {height: 0}`)}
  }
`;

// 菜单图标
// 使用styled函数 定义某个react组件的样式  此react组件必须含有className属性
const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  /* 没有active时 透明度为0.3 */
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  height: 100vh;
  width: 100px;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  /* 设置头像的style */
  ${StyledAvatar} {
    justify-self: center;
  }
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export default StyledNavBar;

export { StyledMenuItem, MenuIcon, MenuItems };
