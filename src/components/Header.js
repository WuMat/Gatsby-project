import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import logo from "../images/fot.jpg"

const HeaderStyled = styled.div`
  position: relative;
  height: 400px;

  img {
    position: absolute;
    width: 100%;
    height: 400px;
  }
`
const WrapperStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
`

const Header = ({ titleHeader }) => (
  <>
    <HeaderStyled>
      <img src={logo} />
      <WrapperStyled>{titleHeader.toUpperCase()}</WrapperStyled>
    </HeaderStyled>
  </>
)

export default Header

Header.propTypes = {
  titleHeader: PropTypes.string,
}

Header.defaultProps = {
  titleHeader: "Header",
}
