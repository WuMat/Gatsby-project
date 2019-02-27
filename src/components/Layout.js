import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import ContentLeft from "../components/Content-left"
import ContentRight from "../components/Content-right"
import Header from "./Header"
import Menu from "./menu"

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
`

const LayoutWrapper = styled.div`
  max-width: 1900px;
  min-width: 1200px;
  margin: 0 auto;
`

const Layout = ({ children, titleHeader }) => (
  <>
    <GlobalStyle />
    <LayoutWrapper>
      <Menu />
      <Header titleHeader={titleHeader} />
      <ContentLeft />
      <ContentRight />
    </LayoutWrapper>
  </>
)
export default Layout
