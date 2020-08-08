import React from "react";
import PropTypes from "prop-types";
import StyledInput, { Prefix, InputContainer, Suffix } from "./style";
import Icon from "components/Icon";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import { useTheme } from "styled-components";

function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

// 搜索框
function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  // styled-componets的主题
  const theme = useTheme();
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
      }
      {...rest}
    />
  );
}

// 把search组件 作为input的子组件导出
Input.Search = Search;

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
