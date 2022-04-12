import React, { useState } from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body3, Header2 } from "~/styles/TextStyles"
import DriverAccordion from "./DriverAccordion"
import { requirementData } from "./RequirementData"
import driver2 from "~/images/driver2.png"
const DriverRequirements = () => {
  const [selected, setSelected] = useState<number | null>(1)

  const selectRequirement = (number: number) => {
    if (selected === number) {
      return setSelected(null)
    }
    setSelected(number)
  }
  return (
    <Body>
      <Cover>
        <DriverCover>
          {" "}
          <DriverTitle>Driver’s requirement</DriverTitle>
          <DriverText>
            Wikki is a great way to be your own boss and make money.
          </DriverText>
        </DriverCover>
        <DriverGrid>
          <DriverNeeds>
            {requirementData.map((data) => (
              <DriverAccordion
                key={data.id}
                number={data.id}
                text={data.title}
                content={data.text}
                click={() => selectRequirement(data.id)}
                active={data.id === selected ? true : false}
              />
            ))}
          </DriverNeeds>
          <DriverImage>
            <DriverPhoto src={driver2} alt="wikki" />
          </DriverImage>
        </DriverGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  position: relative;
  z-index: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`
const Cover = styled.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  height: 100%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const DriverCover = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin: 80px 0;
`
const DriverTitle = styled(Header2)`
  text-align: left;
`
const DriverText = styled(Body3)`
  text-align: left;
  margin: 8px 0;
`

const DriverGrid = styled.div`
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
const DriverNeeds = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`
const DriverImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  justify-content: center;
`
const DriverPhoto = styled.img`
  min-height: 500px;
  max-height: 700px;
  height: 100%;
  max-width: 627px;
  width: 100%;
  border-radius: 40px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: inherit;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
`
export default DriverRequirements
