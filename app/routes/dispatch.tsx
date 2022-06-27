import DispatchHero from "~/components/dispatch/DispatchHero"
import DispatchPurpose from "~/components/dispatch/DispatchPurpose"

import React from "react"
import styled from "styled-components"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Wikki's Dispatch - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const Dispatch = () => {
  return (
    <Body>
      <DispatchHero />
      <DispatchPurpose />
    </Body>
  )
}
const Body = styled.section``
export default Dispatch
