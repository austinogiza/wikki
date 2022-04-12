import React from "react"
import styled from "styled-components"
import { MainButton } from "~/styles/ButtonStyles"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header2, Header5 } from "~/styles/TextStyles"
import { driverData } from "./PurposeData"
import main from "~/images/main.png"
const DriverAdvantage = () => {
  return (
    <Body>
      <Cover>
        <DriverGrid>
          <DriverLeft>
            <DiverCover>
              <DriverTitle>Help solve logistics problem</DriverTitle>
              <DriverText>
                Integrate Banky on your web-site to offer fast, secure and
                seamless online bank transfer payment method. You could receive
                payments straight into your company bank account or open a Banky
                merchant account and collect funds there.
              </DriverText>
              <DriverButton>Get started</DriverButton>
            </DiverCover>
          </DriverLeft>
          <DriverRight>
            <RightSection>
              <DriverImage src={main} alt="wikki driver requirement" />
            </RightSection>
            {driverData.map((data, index) => (
              <RightSection key={index}>
                <SectionCover>
                  <SectionIcon>{data.icon}</SectionIcon>
                  <SectionTitle>{data.title}</SectionTitle>
                  <SectionText>{data.text}</SectionText>
                </SectionCover>
              </RightSection>
            ))}
          </DriverRight>
        </DriverGrid>
      </Cover>
    </Body>
  )
}

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  width: 100%;
  background: ${WikkiTheme.secondary};
`
const Cover = styled.div`
  max-width: 1800px;
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DriverGrid = styled.div`
  display: grid;
  /* height: 100%; */
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const DriverLeft = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 550px) {
    min-height: 500px;

    margin: 32px auto;
  }
`
const DiverCover = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    margin: 40px 0;
  }
`
const DriverTitle = styled(Header2)`
  margin: 0;
  text-align: left;
`
const DriverText = styled(Body3)`
  text-align: left;
  margin: 16px 0 40px 0;
`
const DriverButton = styled(MainButton)``
const DriverRight = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: 500px;
  }
`
const DriverImage = styled.img`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
  }
`
const RightSection = styled.div`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
  }
`
const SectionIcon = styled.div``
const SectionTitle = styled(Header5)`
  text-align: left;
  margin: 32px 0 8px 0;
`
const SectionText = styled(Body3)`
  text-align: left;
  margin: 0;
`
const SectionCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
`

export default DriverAdvantage
