import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoStyled = styled.div`
  color: #e23d45;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
`

const MenuStyled = styled.div`
  width: 100%;
  background-color: #dfe0ce;
  height: 50px;
  display: flex;
  justify-content: space-between;
`
const NavigationWrapper = styled.ul`
  display: flex;
  height: 100%;
  margin: 0px;
`
const Item = styled.li`
  list-style-type: none;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  width: 80px;
  display: block;
  text-decoration: none;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  transition: all 0.5s;
  :hover {
    font-size: 19px;
    background-color: #ced0bd;
  }

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    right: 0px;
    background: black;
  }

  :last-child::after {
    display: none;
  }
`

const Menu = () => {
  return (
    <MenuStyled>
      <LogoStyled>Logo</LogoStyled>
      <NavigationWrapper>
        <StyledLink to="/" activeStyle={{ backgroundColor: "#ced0bd" }}>
          <Item>Home</Item>
        </StyledLink>

        <StyledLink
          to="/products/"
          activeStyle={{ backgroundColor: "#ced0bd" }}
        >
          <Item>Products</Item>
        </StyledLink>

        <StyledLink to="/about/" activeStyle={{ backgroundColor: "#ced0bd" }}>
          <Item>About</Item>
        </StyledLink>

        <StyledLink to="/contact/" activeStyle={{ backgroundColor: "#ced0bd" }}>
          <Item>Contact</Item>
        </StyledLink>
      </NavigationWrapper>
    </MenuStyled>
  )
}

export default Menu
