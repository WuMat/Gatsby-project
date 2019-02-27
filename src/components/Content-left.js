import React from "react"
import styled from "styled-components"

import Img from "../images/fot.jpg"

const ContentWrapper = styled.div`
  width: 850px;
  position: relative;
  margin: 120px auto;
  display: flex;
  justify-content: space-between;
`
const ImageStyled = styled.div`
  // position: relative;

  img {
    height: 400px;
    width: 500px;
  }
`
const WhoWeStyled = styled.div`
  position: absolute;
  top: -70px;
  font-size: 20px;
  font-weight: bold;

  :after {
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    background-color: gray;
    width: 500px;
    font-weight: bold;
  }
`
const DescriptionStyled = styled.div`
  width: 250px;

  p {
    margin-top: 0;
    font-size: 25px;
  }
`

const ContentLeft = props => (
  <ContentWrapper>
    <WhoWeStyled>Who We Are</WhoWeStyled>
    <ImageStyled>
      <img src={Img} />
    </ImageStyled>
    <DescriptionStyled>
      <p>Lorem Ipsum</p>
      jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
      poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego
      drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później
      zaczął być używany przemyśle elektronicznym, pozostając praktycznie
      niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją
      arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z
      zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do
      realizacji druków na komputerach osobistych, jak Aldus PageMaker
    </DescriptionStyled>
  </ContentWrapper>
)

export default ContentLeft
