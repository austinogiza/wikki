import React from "react"

import styled from "styled-components"
import { MenuData, ProductsData } from "~/data/FooterData"
import logo from "~/images/logo.svg"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Header3, Header5, SubTitle } from "~/styles/TextStyles"
import appstore from "~/images/appstore.svg"
import playstore from "~/images/playstore.svg"
import { DownloadButton } from "~/styles/ButtonStyles"
import { Link, useLocation } from "@remix-run/react"
const Footer = () => {
  const router = useLocation()
  return (
    <>
      {router.pathname === "/404" ? null : (
        <>
          <Body>
            <Cover>
              <FooterTop>
                {" "}
                <FooterRow>
                  <Link to="/">
                    <FooterLogo src={logo} alt="Wikki logo" />
                  </Link>
                </FooterRow>
                <FooterRow>
                  <FooterColumn>
                    <ColTitle>Menu</ColTitle>
                    <FooterList>
                      {MenuData.map((data: any, index: number) => (
                        <FooterLinks key={index}>
                          <Link to={`/${data.link}`}>
                            <FooterText>{data.name}</FooterText>
                          </Link>
                        </FooterLinks>
                      ))}{" "}
                    </FooterList>
                  </FooterColumn>
                </FooterRow>{" "}
                <FooterRow>
                  <FooterColumn>
                    <ColTitle>Products</ColTitle>
                    <FooterList>
                      {ProductsData.map((data, index) => (
                        <FooterLinks key={index}>
                          <Link to={`/${data.link}`}>
                            <FooterText>{data.name}</FooterText>
                          </Link>
                        </FooterLinks>
                      ))}{" "}
                    </FooterList>
                  </FooterColumn>
                </FooterRow>{" "}
                <FooterRow>
                  <FooterColumn>
                    <GingerTitle>Get the app</GingerTitle>{" "}
                    <GingerRow>
                      <CommunityMainButton
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StoreIcon src={appstore} alt="wikki download" /> App
                        Store
                      </CommunityMainButton>

                      <CommunityOutlineButton
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StoreIcon src={playstore} alt="wikki download" />{" "}
                        Google Play
                      </CommunityOutlineButton>
                    </GingerRow>
                  </FooterColumn>
                </FooterRow>
              </FooterTop>
              <FooterBottom>
                <FooterText>Copyright {new Date().getFullYear()}</FooterText>
              </FooterBottom>
            </Cover>
          </Body>
        </>
      )}
    </>
  )
}

const Body = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: ${WikkiTheme.black};
`
const Cover = styled.div`
  max-width: 1232px;
  margin: 24px auto;
  color: ${WikkiTheme.white};
  width: 100%;
  display: flex;
  flex-direction: column;
`
const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-gap: 24px;
  gap: 24px;
  width: 100%;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const FooterRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const FooterLogo = styled.img`
  height: 56px;
  max-width: 141px;
  width: 100%;
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const ColTitle = styled(Header5)``
const FooterList = styled.ul`
  margin: 24px 0;
`
const FooterLinks = styled.li`
  margin: 10px 0;
  color: ${WikkiTheme.white};
`
const FooterText = styled(SubTitle)`
  cursor: pointer;
  color: ${WikkiTheme.white};
  transition: 0.4s ease-in;

  :hover {
    color: ${WikkiTheme.secondary};
  }
`
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px 0;
`

const GingerTitle = styled(Header3)`
  color: ${WikkiTheme.white};
  margin: 8px 0;
  text-align: left;
`
const GingerRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;

  margin: 40px auto;
  width: 100%;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`

const StoreIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 8px;
`
const CommunityMainButton = styled(DownloadButton)``
const CommunityOutlineButton = styled(DownloadButton)``
export default Footer
