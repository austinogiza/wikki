import BusinessHero from "~/components/business/BusinessHero"
import BusinessPurpose from "~/components/business/BusinessPurpose"
import BusinessRid from "~/components/business/BusinessRid"
import React from "react"
import styled from "styled-components"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Business Using wikki - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const business = () => {
  return (
    <Body>
      {" "}
      <BusinessHero />
      <BusinessRid />
      <BusinessPurpose />
    </Body>
  )
}

const Body = styled.div``
export default business
