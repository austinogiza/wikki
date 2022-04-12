import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body2, Header1 } from "~/styles/TextStyles"
import main from "~/images/main.png"
const AboutHero = () => {
  return (
    <Body>
      <MoreOverlay />
      <Cover>
        <MoreTitle>ABOUT WIKKI</MoreTitle>
        <CoverImage>
          <AboutImage src={main} alt="the wikki my wikki" />
        </CoverImage>
        <CoverDets>
          <CoverTitle>Robust delivery and pickup for Nigeria</CoverTitle>
          <CoverText>
            Wikki is a technology company on a mission to power the digital
            economy in Africa, using open banking as a layer for financial data,
            identity data, and bank transfer payments for businesses.
          </CoverText>
        </CoverDets>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  color: ${WikkiTheme.white};
  width: 100%;

  margin: 0;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`

const MoreOverlay = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${WikkiTheme.primary};
  height: 500px;
  @media only screen and (max-width: 650px) {
    height: 300px;
  }
`
const Cover = styled.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1232px;
  width: 100%;
  margin: 120px auto 80px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 650px) {
    margin: 92px auto 56 auto;
  }
`

const MoreTitle = styled(Header1)`
  margin: 16px 0;
  text-align: left;
  @media only screen and (max-width: 650px) {
    margin: 8px 0;
  }
`

const CoverImage = styled.div`
  min-height: 350px;
  max-width: 1232px;
  width: 100%;
  margin: 48px auto;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
    margin: 24px auto;
  }
`
const AboutImage = styled.img`
  width: 100%;
  min-height: 350px;
  object-fit: cover;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
  }
`
const CoverDets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 24px auto;
  @media only screen and (max-width: 650px) {
    max-width: 500px;
  }
`
const CoverTitle = styled(Header1)`
  text-align: center;
  color: ${WikkiTheme.black};
`
const CoverText = styled(Body2)`
  text-align: center;
  color: ${WikkiTheme.black};
`
export default AboutHero
