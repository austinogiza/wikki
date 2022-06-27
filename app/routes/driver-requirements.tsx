import { MetaFunction } from "@remix-run/node"
import React from "react"

import styled from "styled-components"
import DriverAdvantage from "~/components/driver/DriverAdvantage"
import DriverHero from "~/components/driver/DriverHero"
import DriverMessage from "~/components/driver/DriverMessage"
import DriverRequirements from "~/components/driver/DriverRequirements"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Become a driver - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const driver = () => {
  return (
    <Body>
      <DriverHero />
      <DriverAdvantage />
      <DriverMessage />
      <DriverRequirements />
    </Body>
  )
}
const Body = styled.div``
export default driver
