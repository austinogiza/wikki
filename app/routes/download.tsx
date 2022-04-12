import DownloadHero from "~/components/download/DownloadHero"
import DownloadPlatforms from "~/components/download/DownloadPlatforms"

import React from "react"
import styled from "styled-components"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Download wikki for iOS, Android - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const download = () => {
  return (
    <Body>
      <DownloadHero />
      <DownloadPlatforms />
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export default download
