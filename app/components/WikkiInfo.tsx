import React, { FC } from "react"
import styled from "styled-components"
import { Body2, Header3 } from "~/styles/TextStyles"
import { motion } from "framer-motion"
import { WikkiTheme } from "~/styles/ColorStyles"
import { DownloadButton } from "~/styles/ButtonStyles"
import appstore from "~/images/appstore.svg"
import playstore from "~/images/playstore.svg"
interface InfoProps {
  text: string
  title: string
  link: string
  ios: string
  android: string
}

interface TrueProps {
  active: boolean
}

const WikkiInfo: FC<TrueProps & InfoProps> = (props) => {
  const { active, title, text, ios, android } = props
  return (
    <Body active={active}>
      <Cover>
        <InfoLeft>
          {" "}
          <GingerTitle>{title}</GingerTitle>
          <TeaseText>{text}</TeaseText>
          <GingerRow>
            <CommunityMainButton
              href={`${ios}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreIcon src={appstore} alt="wikki download" /> App Store
            </CommunityMainButton>

            <CommunityOutlineButton
              href={`${android}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreIcon src={playstore} alt="wikki download" /> Google Play
            </CommunityOutlineButton>
          </GingerRow>
        </InfoLeft>
      </Cover>
    </Body>
  )
}
const Body = styled(motion.div)<TrueProps>`
  min-height: 300px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  margin: 24px auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.active ? "flex" : "none")};
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const InfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const GingerTitle = styled(Header3)`
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

  @media only screen and (max-width: 400px) {
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

export default WikkiInfo
