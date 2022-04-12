import styled from "styled-components"
import business from "~/images/business.png"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Header2, Body2 } from "~/styles/TextStyles"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { BusinessButton } from "~/styles/ButtonStyles"

import heart from "~/images/heart.png"
const HomeBusiness = () => {
  return (
    <Body>
      <Cover>
        <CaseGrid>
          <CaseRowUsers>
            <MoreOverlay />
            <RowContent>
              <CaseTitle>
                Wikki <Lovesvg src={heart} alt="wikki heart" /> businesses &
                companies.{" "}
              </CaseTitle>{" "}
              <CaseText>
                Wikki feels just like the Apple devices employees know and love
                — and they all work together seamlessly. Copy and paste across
                devices. Use Handoff to start an email on one device and finish
                on another. And pick up calls anywhere.
              </CaseText>
              <CaseButtonLink to="/business">
                Learn what we have ready for businessess <BusinessIcon />
              </CaseButtonLink>
            </RowContent>
          </CaseRowUsers>
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

  min-height: 600px;
  background: ${WikkiTheme.smokeWhite};
  width: 100%;
  padding: 144px 16px;
  @media only screen and (max-width: 650px) {
    min-height: 450px;
    padding: 64px 16px;
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

const CaseGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CaseRowUsers = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1232px;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  padding: 16px;
  background: url(${business}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    height: 500px;
  }
`

const RowContent = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${WikkiTheme.white};
  flex-direction: column;
  margin: 40px auto;
  max-width: 700px;
`
const CaseTitle = styled(Header2)`
  text-align: center;
  margin: 8px 0;
`
const CaseText = styled(Body2)`
  text-align: center;
  margin: 0;
`
const CaseButtonLink = styled(BusinessButton)`
  margin: 48px 0;
`

const Lovesvg = styled.img`
  height: 40px;
  width: 40px;
`
const BusinessIcon = styled(AiOutlinePlusCircle)`
  height: 32px;
  width: 32px;
  margin: 0 0 0 8px;
  stroke: ${WikkiTheme.white};
  color: ${WikkiTheme.white};
`
export default HomeBusiness
