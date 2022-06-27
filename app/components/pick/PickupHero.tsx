import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Header1 } from "~/styles/TextStyles"

const PickupHero = () => {
  return (
    <Body>
      {" "}
      <MoreOverlay />
      <Cover>
        <video autoPlay loop playsInline>
          <source
            src="https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.webm"
            type="video/webm"
          />
          <source
            src="https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.mp4"
            type="video/mp4"
          />
        </video>

        <ContactHeader>
          <ContactTitle>Wikki's Pickup is here to help you</ContactTitle>
        </ContactHeader>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: cover;
  }
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
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
const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 4;
`
const ContactTitle = styled(Header1)`
  margin: 8px 0;
  color: ${WikkiTheme.white};
  text-align: center;
`

export default PickupHero
