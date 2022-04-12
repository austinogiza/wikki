import React from "react"
import styled from "styled-components"
import { Body2, Header2, Header3 } from "~/styles/TextStyles"

import { WikkiTheme } from "~/styles/ColorStyles"
const DispatchPurpose = () => {
  return (
    <Body>
      <Cover>
        <WaitingRow>
          <WaitTitle>
            What's better than having items sent out successfully
          </WaitTitle>
        </WaitingRow>
        <DetailsGrid>
          <BusinessRow>
            <GridRight>
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756114/Product-selection_lnodvx.png"
                alt="use wikki"
              />
            </GridRight>{" "}
            <GridLeft>
              <RideTitle>Robust delivery and pickup</RideTitle>
              <RideText>
                We know how hard it can be to start building your client base,
                especially as a student. We built Clutch to be a safe space for
                students to build out their side-hustles and get support from
                their classmates.
              </RideText>
            </GridLeft>
          </BusinessRow>{" "}
          <BusinessRow>
            <GridRight>
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Delivery-robot_pek0pc.png"
                alt="use wikki"
              />
            </GridRight>{" "}
            <GridLeft>
              <RideTitle>Robust delivery and pickup</RideTitle>
              <RideText>
                We know how hard it can be to start building your client base,
                especially as a student. We built Clutch to be a safe space for
                students to build out their side-hustles and get support from
                their classmates.
              </RideText>
            </GridLeft>
          </BusinessRow>
        </DetailsGrid>{" "}
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`

const Cover = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
  color: ${WikkiTheme.black};
`
const DetailsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
`
const BusinessRow = styled.div`
  max-width: 1232px;
  min-height: 450px;
  display: grid;
  width: 100%;

  background: ${WikkiTheme.white};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  margin: 8px auto;
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
const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
`

const RideTitle = styled(Header3)`
  color: ${WikkiTheme.black};
`

const GridRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`

const GridImage = styled.img`
  max-width: 650px;
  object-fit: cover;
  max-height: 550px;
  min-height: 250px;
  height: 100%;

  width: 100%;
`
const RideText = styled(Body2)`
  margin: 16px 0;
`
const WaitingRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 32px auto;
`

const WaitTitle = styled(Header2)`
  margin: 16px 0;
  color: ${WikkiTheme.black};
  text-align: center;
`

export default DispatchPurpose
