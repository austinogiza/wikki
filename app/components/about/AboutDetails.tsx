import React from "react"
import styled from "styled-components"
import { Header2, Body3 } from "~/styles/TextStyles"
import purpose02 from "~/images/purpose02.png"
import purpose01 from "~/images/purpose01.png"
const AboutDetails = () => {
  return (
    <Body>
      <Cover>
        <DetailsGrid>
          <GridLeft>
            <RideTitle>Waiting is boring</RideTitle>
            <RideText>
              We know how hard it can be to start building your client base,
              especially as a student. We built Clutch to be a safe space for
              students to build out their side-hustles and get support from
              their classmates.
            </RideText>
          </GridLeft>
          <GridRight>
            <GridImage src={purpose02} alt="use wikki" />
          </GridRight>{" "}
        </DetailsGrid>{" "}
        <DetailsGrid>
          <GridRight>
            <GridImage src={purpose01} alt="use wikki" />
          </GridRight>
          <GridLeft>
            <RideTitle>Our Mission</RideTitle>
            <RideText>
              We know how hard it can be to start building your client base,
              especially as a student. We built Clutch to be a safe space for
              students to build out their side-hustles and get support from
              their classmates.
            </RideText>
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
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`

const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`

const RideTitle = styled(Header2)``

const GridRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GridImage = styled.img`
  max-width: 550px;
  border-radius: 20px;
  max-height: 630px;
  min-height: 300px;
  height: 100%;
  outline: none;
  width: 100%;
`
const RideText = styled(Body3)`
  margin: 16px 0;
`

export default AboutDetails
