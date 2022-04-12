import styled from "styled-components"
import AboutBusiness from "~/components/about/AboutBusiness"
import AboutDelivery from "~/components/about/AboutDelivery"
import AboutDetails from "~/components/about/AboutDetails"
import AboutHero from "~/components/about/AboutHero"
import AboutPurpose from "~/components/about/AboutPurpose"
import { MetaFunction } from "@remix-run/node"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "About Wikki - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
})
const about = () => {
  return (
    <Body>
      <AboutHero />
      <AboutPurpose />
      <AboutDelivery />
      <AboutDetails />
      <AboutBusiness />
    </Body>
  )
}
const Body = styled.section``
export default about
