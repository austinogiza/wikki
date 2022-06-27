import React from "react"
import styled from "styled-components"
import { Header3, Body3, Header2 } from "~/styles/TextStyles"
import delivery from "~/images/delivery01.png"
import delivery02 from "~/images/delivery02.png"
import { WikkiTheme } from "~/styles/ColorStyles"
const AboutBusiness = () => {
  return (
    <Body>
      <Cover>
        <BusinesInfo>
          <BusinessText>What more Do we offer you</BusinessText>
        </BusinesInfo>
        <DetailsGrid>
          <GridRight>
            {" "}
            <GridCover>
              <RideTitle>Track your order</RideTitle>
              <RideText>Real time order & package tracking</RideText>
            </GridCover>
          </GridRight>
          <GridLeft>
            <GridCover>
              <RideTitle>Quick delivery</RideTitle>
              <RideText>
                Deliver items to your customers without hassle
              </RideText>
            </GridCover>
          </GridLeft>
        </DetailsGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 24px 0;
  }
`

const Cover = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const BusinesInfo = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 32px 0;
`
const BusinessText = styled(Header2)`
  text-transform: capitalize;

  @media only screen and (max-width: 450px) {
    text-align: center;
  }
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  gap: 16px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 850px) {
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`

const GridLeft = styled.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`

const GridCover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 64px 0;
  z-index: 3;
`

const RideTitle = styled(Header3)`
  color: ${WikkiTheme.white};
  margin: 0;
`

const GridRight = styled.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery02}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`

const RideText = styled(Body3)`
  margin: 16px 0;
  color: ${WikkiTheme.white};
`

export default AboutBusiness
