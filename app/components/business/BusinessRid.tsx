import React from "react"
import styled from "styled-components"
import { Header2, Body3, Header3, Body1 } from "~/styles/TextStyles"

import { WikkiTheme } from "~/styles/ColorStyles"
const BusinessRid = () => {
  return (
    <Body>
      <Cover>
        <WaitingRow>
          <WaitTitle>Get rid of canceled orders and late deliveries</WaitTitle>
          <WaitText>
            Everyone has their own way of learning and expressing creativity.
            Apple technology and resources empower every kind of educator — and
            every kind of student — to learn, create, and define their own
            success. Let’s move the world forward.
          </WaitText>
        </WaitingRow>
        <DetailsGrid>
          <GridRight>
            <GridImage
              src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-delivery_zq6i3l.png"
              alt="use wikki"
            />
            <RideTitle>We help you get rid of late deliveries</RideTitle>
            <RideText>No one likes late deliveries</RideText>
          </GridRight>{" "}
          <GridRight>
            <GridImage
              src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-truck-delivery_r8wkyo.png"
              alt="use wikki"
            />
            <RideTitle>
              We stop canceled orders due to no pickup/dispatch
            </RideTitle>
            <RideText>No one likes late deliveries</RideText>
          </GridRight>
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
  max-width: 1232px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  background: ${WikkiTheme.black};
  color: ${WikkiTheme.white};
`

const Cover = styled.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.white};
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`

const RideTitle = styled(Header3)`
  color: ${WikkiTheme.white};
  margin: 24px 0 16px 0;
`

const GridRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 24px auto;
  max-width: 400px;
  width: 100%;
`

const GridImage = styled.img`
  max-width: 300px;
  border-radius: 0px;
  max-height: 250px;
  min-height: 150px;
  height: 100%;
  outline: none;
  object-fit: contain;
  width: 100%;
`
const RideText = styled(Body3)`
  margin: 16px 0;
`
const WaitingRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 850px;
  margin: 32px auto;
`

const WaitTitle = styled(Header2)`
  margin: 16px auto;
  max-width: 600px;
  color: ${WikkiTheme.white};
  text-align: center;
`
const WaitText = styled(Body1)`
  color: ${WikkiTheme.white};
  text-align: center;
`
export default BusinessRid
