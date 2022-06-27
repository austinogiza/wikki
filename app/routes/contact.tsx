import React from "react"

import styled from "styled-components"
import ContactForm from "~/components/contact/ContactForm"
import ContactHero from "~/components/contact/ContactHero"

import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Contact Us - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const contact = () => {
  return (
    <Body>
      <ContactHero />
      <ContactForm />
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export default contact
