import React from "react"
import styled, { keyframes } from "styled-components"
import { LargeHeader } from "~/styles/TextStyles"

const AboutDelivery = () => {
  return (
    <Body>
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>{" "}
      <Cover>
        <RideText>Delivery made easy</RideText>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  height: 276px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 200px;
  }
`
const animation = keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`
const Cover = styled.div`
  animation: ${animation} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const RideText = styled(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`

export default AboutDelivery
