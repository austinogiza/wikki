import React from "react"
import styled from "styled-components"
import { Body3, Header3 } from "~/styles/TextStyles"

import { WikkiTheme } from "~/styles/ColorStyles"
const DownloadPlatforms = () => {
  return (
    <Body>
      <Cover>
        <DetailsGrid>
          <GridRight>
            <UsersCover>
              {" "}
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Drone-delivery_pdpfbb.png"
                alt="use wikki"
              />
            </UsersCover>
            <RideTitle>Wikki User/Companies Mobile app</RideTitle>
            <a href="" target="_blank" rel="noopener noreferrer">
              {" "}
              <RideText>Wikki Users/Companies for iOS</RideText>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              {" "}
              <RideText>Wikki Users/Companies for Android</RideText>
            </a>
          </GridRight>{" "}
          <GridRight>
            <Driver>
              {" "}
              <GridImage
                src="https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Pizza-delivery_py2azx.png"
                alt="use wikki"
              />
            </Driver>
            <RideTitle>Wikki Drivers Mobile app</RideTitle>
            <a href="" target="_blank" rel="noopener noreferrer">
              {" "}
              <RideText>Wikki Drivers for iOS</RideText>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              {" "}
              <RideText>Wikki Drivers for Android</RideText>
            </a>
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
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.white};
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  place-items: center;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
  }
`

const UsersCover = styled.div`
  max-width: 900px;
  height: 450px;
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
  height: 450px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.driverDownload};
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

  a {
    color: ${WikkiTheme.blue};
    font-weight: 500;
    transition: 0.3s ease-in;

    :hover {
      color: ${WikkiTheme.secondary};
    }
  }
`

const GridImage = styled.img`
  max-width: 350px;
  border-radius: 0px;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const RideText = styled(Body3)`
  margin: 8px 0;
`

export default DownloadPlatforms
