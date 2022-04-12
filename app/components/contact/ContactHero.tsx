import React from "react"
import styled from "styled-components"
import { Body1, Header1 } from "~/styles/TextStyles"

const ContactHero = () => {
  return (
    <Body>
      <Cover>
        <ContactHeader>
          <ContactTitle>How can we help?</ContactTitle>
          <ContactText>
            Looking for the solution to your logistics needs or answers? Fill
            out the contact form and we will be in touch.
          </ContactText>
        </ContactHeader>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  min-height: 400px;
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
`
const ContactTitle = styled(Header1)`
  margin: 8px 0;
  text-align: center;
`
const ContactText = styled(Body1)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`
export default ContactHero
