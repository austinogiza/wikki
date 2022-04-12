import React, { useEffect } from "react"
import styled from "styled-components"
import DoMore from "~/components/home/DoMore"
import HomeBusiness from "~/components/home/HomeBusiness"
import HomeHero from "~/components/home/HomeHero"
import HomeWaiting from "~/components/home/HomeWaiting"
import UseCases from "~/components/home/UseCases"
import LayoutHead from "~/container/LayoutHead"
import HomeStarted from "~/components/home/HomeStarted"
import gsap from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])
  return (
    <Body>
      <LayoutHead title="" />
      <HomeHero />
      <HomeWaiting />

      <UseCases />

      <HomeBusiness />
      <HomeStarted />
      <DoMore />
    </Body>
  )
}
const Body = styled.div``
export default Home
