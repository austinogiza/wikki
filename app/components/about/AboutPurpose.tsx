import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header5, Header1 } from "~/styles/TextStyles"
import { purposeData } from "./PurposeData"
import pointcard from "~/images/pointcard.gif"

const AboutPurpose = () => {
  return (
    <Body>
      <MoreOverlay />
      <Cover>
        <MoreTitle>Our Purpose</MoreTitle>

        <DetailsGrid>
          {purposeData.map((data, index) => (
            <PurposeRow key={index}>
              {" "}
              <PurposeIcon>{data.icon}</PurposeIcon>
              <MoreSub>{data.title}</MoreSub>
              <MoreText>{data.text}</MoreText>
            </PurposeRow>
          ))}
        </DetailsGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  color: ${WikkiTheme.white};
  width: 100%;
  padding: 16px;
  background: url(${pointcard}) no-repeat center center/cover;
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
  background: rgba(0, 0, 0, 0.5);
`
const Cover = styled.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1000px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MoreSub = styled(Header5)`
  text-align: left;
`
const MoreTitle = styled(Header1)`
  margin: 16px 0;
  text-align: center;
`
const MoreText = styled(Body3)`
  text-align: left;
  margin: 16px 0;
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
  @media only screen and (max-width: 650px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`

const PurposeRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PurposeIcon = styled.span`
  width: 40px;
  height: 40px;
  margin: 32px 0;
`
export default AboutPurpose
