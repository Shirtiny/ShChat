import React from "react";
import "styled-components/macro";
// import PropTypes from "prop-types";
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";

import img1 from "assets/imgs/face-male-1.jpg";
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar
        src={img1}
        status="off"
        statusIconBgColor="#292F4C"
        statusIconOffColor="white"
      />
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots} />
        <MenuItem icon={faUsers} />
        <MenuItem icon={faFolder} />
        <MenuItem icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem icon={faCog} css={`
          align-self: end;
        `}/>
      </MenuItems>
    </StyledNavBar>
  );
}

// 导航内的菜单项
function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {};

export default NavBar;
export { MenuItem };
