import React from "react"
import styled from "styled-components"

import { Body2, Header1 } from "~/styles/TextStyles"
import herobg from "~/images/herobg.png"
import appstore from "~/images/appstore.svg"
import playstore from "~/images/playstore.svg"
import device from "~/images/device.png"
import { WikkiTheme } from "~/styles/ColorStyles"
import { DownloadButton } from "~/styles/ButtonStyles"

const HomeHero = () => {
  return (
    <Body>
      <Cover>
        <InfoLeft>
          <GingerTitle>
            Move items and goods instantly with low fees.
          </GingerTitle>
          <TeaseText>Get items delivered and picked up in minutes!</TeaseText>
          <GingerRow>
            <CommunityMainButton
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreIcon src={appstore} alt="wikki download" /> App Store
            </CommunityMainButton>

            <CommunityOutlineButton
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreIcon src={playstore} alt="wikki download" /> Google Play
            </CommunityOutlineButton>
          </GingerRow>
          <HeroImage src={device} alt="wikki device" />
        </InfoLeft>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  height: 900px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  background: url(${herobg}) no-repeat center center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`
const InfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const GingerTitle = styled(Header1)`
  color: ${WikkiTheme.white};
  margin: 8px 0;
  text-align: center;
`

const TeaseText = styled(Body2)`
  color: ${WikkiTheme.white};
  margin: 0;
  text-align: center;
`

const GingerRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  width: 100%;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`
const CommunityMainButton = styled(DownloadButton)``
const CommunityOutlineButton = styled(DownloadButton)``

const StoreIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 8px;
`
const HeroImage = styled.img`
  height: 998px;
  max-width: 500px;
  width: 100%;
  margin: 24px auto -800px auto;
`
export default HomeHero
