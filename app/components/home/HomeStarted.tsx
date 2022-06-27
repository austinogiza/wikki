import React from "react"
import styled from "styled-components"
import { Header2, Header3, SubTitle } from "~/styles/TextStyles"
import { Link } from "@remix-run/react"
import { WikkiTheme } from "~/styles/ColorStyles"

const HomeStarted = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <MoreTitle>Get Started with Wikki</MoreTitle>
        <DetailsGrid>
          <GridRight>
            <UsersCover>
              {" "}
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Drone-delivery_pdpfbb.png"
                alt="use wikki"
              />
            </UsersCover>
            <RideTitle>For users</RideTitle>
            <Link to="/how-it-works">
              <RideText>Learn More</RideText>
            </Link>
          </GridRight>{" "}
          <GridRight>
            <Driver>
              {" "}
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Pizza-delivery_py2azx.png"
                alt="use wikki"
              />
            </Driver>
            <RideTitle>For drivers</RideTitle>
            <Link to="/how-it-works/driver">
              <RideText>Learn More</RideText>
            </Link>
          </GridRight>{" "}
          <GridRight>
            <Companies>
              {" "}
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Order-delivered_dqb2dq.png"
                alt="use wikki"
              />
            </Companies>
            <RideTitle>For businesses</RideTitle>
            <Link to="/business">
              <RideText>Learn More</RideText>
            </Link>
          </GridRight>{" "}
        </DetailsGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 56px 16px;

  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`

const Cover = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.black};
`
const MoreTitle = styled(Header2)`
  margin: 16px 0 64px 0;
  text-align: left;

  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  place-items: center;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
  }
  @media only screen and (max-width: 550px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
  }
`

const UsersCover = styled.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.userDownload};
`

const Driver = styled.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.driverDownload};
`
const Companies = styled.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.businessDownload};
`
const RideTitle = styled(Header3)`
  color: ${WikkiTheme.black};
  margin: 24px 0 16px 0;
`

const GridRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`

const GridImage = styled.img`
  max-width: 350px;
  border-radius: 0px;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const RideText = styled(SubTitle)`
  margin: 8px 0;
  font-weight: 500;
  color: ${WikkiTheme.black};
  cursor: pointer;
  border-bottom: 1px solid ${WikkiTheme.black};
`

export default HomeStarted
