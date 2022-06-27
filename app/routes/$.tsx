import { Link } from "@remix-run/react"
import React from "react"
import styled from "styled-components"
import { FormButton } from "~/styles/ButtonStyles"
import { Header2 } from "~/styles/TextStyles"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Page Not Found - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const NotFound = () => {
  return (
    <Body>
      <Cover>
        <ContactHeader>
          <ContactTitle>Error:404</ContactTitle>

          <Link to="/">
            {" "}
            <NotFoundButton>Go back Home</NotFoundButton>
          </Link>

          <ContactTitle>Error:404</ContactTitle>
        </ContactHeader>
      </Cover>
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 100vh;
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
const ContactTitle = styled(Header2)`
  margin: 8px 0;
  text-align: center;
`

const NotFoundButton = styled(FormButton)``
export default NotFound
