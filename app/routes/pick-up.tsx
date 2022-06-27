import PickupHero from "~/components/pick/PickupHero"
import PickupPurpose from "~/components/pick/PickupPurpose"

import React from "react"
import styled from "styled-components"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Wikki's Pick Up - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const Pickup = () => {
  return (
    <Body>
      <PickupHero />
      <PickupPurpose />
    </Body>
  )
}
const Body = styled.section``
export default Pickup
