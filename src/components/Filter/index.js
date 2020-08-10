import React from "react";
import PropTypes from "prop-types";
import StyledFilter, { Filters, Action } from "./style";
import Text from "components/Text";

function Filter({ children, ...rest }) {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}

Filter.Filters = ({ children, lable, ...rest }) => (
  <Filters {...rest}>
    <Text type="secondary">{lable}: </Text>
    {children}
  </Filters>
);

Filter.Action = ({children, label, ...rest}) => (
  <Action {...rest}>
    <Text type="secondary">{label}</Text>
    {children}
  </Action>
)

Filter.propTypes = {
  children: PropTypes.any,
};

export default Filter;
