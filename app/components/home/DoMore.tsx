import React from "react"
import styled from "styled-components"
import pointcard from "~/images/pointcard.gif"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header5, Header1 } from "~/styles/TextStyles"
const DoMore = () => {
  return (
    <Body>
      <MoreOverlay />
      <Cover>
        <MoreSub>Do more with wikki</MoreSub>
        <MoreTitle>Designed for the next billion users and riders</MoreTitle>
        <MoreText>
          Beautifully easy to use software to accept card payments on your
          phone, and grow your business anywhere on the planet
        </MoreText>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
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
  max-width: 800px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MoreSub = styled(Header5)`
  text-align: center;
`
const MoreTitle = styled(Header1)`
  margin: 16px 0 24px 0;
  text-align: center;
`
const MoreText = styled(Body3)`
  text-align: center;
`
export default DoMore
