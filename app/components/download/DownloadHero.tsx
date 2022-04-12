import React from "react"
import styled from "styled-components"
import { Body1, LargeHeader } from "~/styles/TextStyles"

const DownloadHero = () => {
  return (
    <Body>
      <Cover>
        <ContactHeader>
          <ContactTitle>Wikki downloads</ContactTitle>
          <ContactText>
            Wikki has made it easy for you to get started
          </ContactText>
        </ContactHeader>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`
const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 950px;
  width: 100%;
`
const ContactTitle = styled(LargeHeader)`
  margin: 8px 0;
  text-align: center;
`
const ContactText = styled(Body1)`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`
export default DownloadHero
