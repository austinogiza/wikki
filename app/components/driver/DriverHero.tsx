import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header2 } from "~/styles/TextStyles"

const DriverHero = () => {
  return (
    <Body>
      <Cover>
        <DriverTitle>Get in the driver’s seat and get paid</DriverTitle>
        <DriverText>
          Make the most of your time on the road on the platform with the
          largest network of active riders.
        </DriverText>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;

  justify-content: center;
  align-items: center;
  min-height: 450px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 32px 16px 16px 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`
const Cover = styled.div`
  color: ${WikkiTheme.black};
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DriverTitle = styled(Header2)`
  text-align: center;
`
const DriverText = styled(Body3)`
  text-align: center;
  margin: 8px 0;
`
export default DriverHero
