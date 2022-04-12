import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header3, Header5, SubTitle } from "~/styles/TextStyles"
import { Link } from "@remix-run/react"
import { MetaFunction } from "@remix-run/node"
import app from "~/images/app.png"
import icon from "~/images/icon.png"
import bave from "~/images/bave.svg"
import pay from "~/images/pay.png"
import route from "~/images/route.png"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "How it works driver - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const WorksDriver = () => {
  return (
    <Body>
      <Cover>
        <WorksSelector>
          <Selector>
            <Driver to="/how-it-works">
              <SelectorText>Rider </SelectorText>
            </Driver>

            <User to="/how-it-works/driver">
              <SelectorText>Driver</SelectorText>
            </User>
          </Selector>
        </WorksSelector>

        <WorksRow>
          <TopRow>
            <DownloadSection>
              <DownloadCover>
                <DownloadContent>
                  <DownloadNumber>
                    <NumberText>1</NumberText>
                  </DownloadNumber>
                  <DownloadText>
                    <DownloadTitle>Download the app and sign up</DownloadTitle>
                    <Downloadbody>
                      You can drive and make as much as you want. And, the more
                      you drive, the more you could make. Plus, your fares get
                      automatically deposited weekly.
                    </Downloadbody>
                  </DownloadText>
                </DownloadContent>
                <DownloadApp>
                  <img src={app} alt="use wikki my wikki" />
                </DownloadApp>
              </DownloadCover>
            </DownloadSection>
          </TopRow>
          <BottomRow>
            <SecondRow>
              <SecondMask src={icon} alt="use wikki my wikki" />
              <BottomCover>
                <SecondContent>
                  <SecondNumber>
                    <SecondText>2</SecondText>
                  </SecondNumber>
                  <SecondDownload>
                    <SecondTitle>Pick up order, and deliver</SecondTitle>
                    <SecondPara>
                      You can drive and make as much as you want. And, the more
                      you drive, the more you could make. Plus, your fares get
                      automatically deposited weekly.
                    </SecondPara>
                  </SecondDownload>
                </SecondContent>
                <SecondImage>
                  <img src={route} alt="mywikki use wikki" />
                </SecondImage>
              </BottomCover>
            </SecondRow>{" "}
            <ThirdRow>
              <ThirdMask src={bave} alt="use wikki my wikki" />
              <ThirdBottomCover>
                <ThirdContent>
                  <ThirdNumber>
                    <ThirdText>3</ThirdText>
                  </ThirdNumber>
                  <ThirdDownload>
                    <ThirdTitle>Get paid and cashout</ThirdTitle>
                    <ThirdPara>
                      You can drive and make as much as you want. And, the more
                      you drive, the more you could make. Plus, your fares get
                      automatically deposited weekly.
                    </ThirdPara>
                  </ThirdDownload>
                </ThirdContent>
                <ThirdImage>
                  <img src={pay} alt="mywikki use wikki" />
                </ThirdImage>
              </ThirdBottomCover>
            </ThirdRow>
          </BottomRow>
        </WorksRow>
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
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px 40px;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
  }
`
const Cover = styled.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WorksSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Selector = styled.div`
  height: 64px;
  max-width: 340px;
  margin: 40px auto;
  width: 100%;
  background: ${WikkiTheme.white};
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const User = styled(Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.white};
  background: ${WikkiTheme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Driver = styled(Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.black};
  background: ${WikkiTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SelectorText = styled(SubTitle)``
const WorksRow = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TopRow = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`
const DownloadSection = styled.div`
  max-height: 550px;
  height: 100%;
  min-height: 540px;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  border-radius: 40px;
  background: ${WikkiTheme.white};
`
const DownloadCover = styled.div`
  max-width: 972px;
  width: 100%;
  margin: 64px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    margin: 48px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`
const DownloadContent = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`
const DownloadNumber = styled.span`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`
const NumberText = styled(Header5)``
const DownloadText = styled.div`
  display: flex;
  flex-direction: column;
`
const DownloadTitle = styled(Header3)``
const Downloadbody = styled(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
const DownloadApp = styled.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`

const SecondRow = styled.div`
  max-height: 600px;
  height: 100%;
  min-height: 580px;
  max-width: 520px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  background: ${WikkiTheme.lightYelllow};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const SecondMask = styled.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -12px;
  position: absolute;
`

const ThirdMask = styled.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`
const BottomCover = styled.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`
const SecondContent = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`
const SecondNumber = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`
const SecondText = styled.div`
  display: flex;
  flex-direction: column;
`
const SecondTitle = styled(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`
const SecondPara = styled(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
const SecondDownload = styled.div`
  display: flex;
  flex-direction: column;
`
const SecondImage = styled.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;
    max-height: 400px;
  }

  img {
    height: 100%;
    width: 100%;
    min-height: 250px;
    max-height: 441px;
    max-width: 441px;
  }
`

const ThirdRow = styled.div`
  max-height: 600px;
  height: 100%;
  padding: 20px;
  position: relative;
  min-height: 580px;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background: ${WikkiTheme.darkRed};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`
const ThirdBottomCover = styled.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`
const ThirdContent = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`

const ThirdNumber = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`
const ThirdText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`
const ThirdPara = styled(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
const ThirdDownload = styled.div``
const ThirdTitle = styled(Header3)`
  color: ${WikkiTheme.white};
`
const ThirdImage = styled.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;

  img {
    height: 100%;
    width: 100%;
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;

    max-height: 400px;
  }
`

export default WorksDriver
