import styled from "styled-components"

import { WikkiTheme } from "~/styles/ColorStyles"
import { Header2, Header3 } from "~/styles/TextStyles"
import user from "~/images/user.png"
import driver from "~/images/driver.png"
import { CaseButton } from "~/styles/ButtonStyles"
import { Link } from "@remix-run/react"

const UseCases = () => {
  return (
    <Body>
      <Cover>
        <MoreTitle>Discover Wikki Usecases</MoreTitle>
        <CaseGrid>
          <CaseRowUsers>
            {" "}
            <MoreOverlay />
            <RowContent>
              <CaseTitle>For Dispatch</CaseTitle>
              <Link to="/dispatch">
                <CaseButtonLink>Learn more</CaseButtonLink>
              </Link>
            </RowContent>
          </CaseRowUsers>
          <CaseRowDrivers>
            {" "}
            <MoreOverlay />
            <RowContent>
              <CaseTitle>For pickups</CaseTitle>
              <Link to="/pick-up">
                <CaseButtonLink>Learn more</CaseButtonLink>
              </Link>
            </RowContent>
          </CaseRowDrivers>
        </CaseGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 144px 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
    margin: 64px 0;
  }
`
const MoreOverlay = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`

const Cover = styled.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`

const MoreTitle = styled(Header2)`
  margin: 16px 0 64px 0;
  text-align: left;

  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`
const CaseGrid = styled.div`
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
const CaseRowUsers = styled.div`
  max-height: 700px;
  display: flex;
  align-items: flex-end;

  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  padding: 16px;
  background: url(${user}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`

const RowContent = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  display: flex;
  color: ${WikkiTheme.white};
  flex-direction: column;
  margin: 0 40px 32px 40px;
  @media only screen and (max-width: 650px) {
    margin: 56px 24px;
  }
  a {
    margin: 32px 0;
    @media only screen and (max-width: 650px) {
      margin: 24px 0;
    }
  }
`
const CaseTitle = styled(Header3)``
const CaseButtonLink = styled(CaseButton)``
const CaseRowDrivers = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 2;
  padding: 16px;
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;

  border-radius: 20px;
  background: url(${driver}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`
export default UseCases
