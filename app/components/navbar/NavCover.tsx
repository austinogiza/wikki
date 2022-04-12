import { useLocation } from "@remix-run/react"
import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"

const NavCover = () => {
  const router = useLocation()
  return (
    <>
      {router.pathname === "/404" ? null : (
        <>
          <Body>
            <Navbar />
          </Body>
        </>
      )}
    </>
  )
}
const Body = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background: transparent;
`
export default NavCover
