import React from "react"
import styled from "styled-components"
import { Body1, Header1 } from "~/styles/TextStyles"

const BusinessHero = () => {
  return (
    <Body>
      <Cover>
        <ContactHeader>
          <ContactTitle>
            Wikki loves your business. Wikki means business.
          </ContactTitle>
          <ContactText>
            Everyone has their own way of learning and expressing creativity.
            Apple technology and resources empower every kind of educator — and
            every kind of student — to learn, create, and define their own
            success. Let’s move the world forward.
          </ContactText>
        </ContactHeader>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  min-height: 600px;
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
const ContactTitle = styled(Header1)`
  margin: 8px 0;
  text-align: center;
`
const ContactText = styled(Body1)`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`
export default BusinessHero
