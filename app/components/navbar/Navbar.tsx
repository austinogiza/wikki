import React, { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "~/images/logo.svg"
import { SubTitle } from "~/styles/TextStyles"
import { WikkiTheme } from "~/styles/ColorStyles"
import { NavbarButton } from "~/styles/ButtonStyles"
import { isMobile } from "react-device-detect"
import { useLocation, Link } from "@remix-run/react"

interface LinkProps {
  linkTrue?: boolean
}

interface MobileProps {
  open?: boolean
  routerOpened?: boolean
}
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [currentRoute, setCurrentRoute] = useState<boolean>(false)

  const router = useLocation()

  const toggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if ((isMobile && router.pathname === "/") || router.pathname === "/about") {
      setCurrentRoute(false)
    } else {
      setCurrentRoute(true)
    }

    setOpen(false)
  }, [router])
  return (
    <Body routerOpened={currentRoute}>
      <MobileLogo>
        <Link to="/">
          <Logo src={logo} alt="Wikki logo" />
        </Link>
      </MobileLogo>
      <MobileToggle onClick={toggle}>
        <ToggleTop open={open} routerOpened={currentRoute} />
        <ToggleMiddle open={open} routerOpened={currentRoute} />
        <ToggleBottom open={open} routerOpened={currentRoute} />
      </MobileToggle>
      <Cover open={open} routerOpened={currentRoute}>
        <WikkiLogo>
          <Link to="/">
            <Logo src={logo} alt="Wikki logo" />
          </Link>
        </WikkiLogo>
        <WikkiLinksCover>
          <WikkiLinks>
            {/* <>
              {router.pathname === "/" ? null : (
                <>
                  <Link to="/">
                    <WikkiHref>
                      <LinkText
                        linkTrue={
                          router.pathname === "/" ||
                          router.pathname === "/about"
                            ? true
                            : false
                        }
                      >
                        Home
                      </LinkText>
                    </WikkiHref>
                  </Link>
                </>
              )}
            </> */}
            <Link to="/about">
              <WikkiHref>
                <LinkText
                  linkTrue={
                    router.pathname === "/" || router.pathname === "/about"
                      ? true
                      : false
                  }
                >
                  About Us{" "}
                </LinkText>
              </WikkiHref>
            </Link>
            <Link to="/driver-requirements">
              <WikkiHref>
                <LinkText
                  linkTrue={
                    router.pathname === "/" || router.pathname === "/about"
                      ? true
                      : false
                  }
                >
                  Become A Driver
                </LinkText>
              </WikkiHref>
            </Link>
            <Link to="/how-it-works">
              <WikkiHref>
                <LinkText
                  linkTrue={
                    router.pathname === "/" || router.pathname === "/about"
                      ? true
                      : false
                  }
                >
                  How It Works
                </LinkText>
              </WikkiHref>
            </Link>{" "}
            <Link to="/contact">
              <WikkiHref>
                <LinkText
                  linkTrue={
                    router.pathname === "/" || router.pathname === "/about"
                      ? true
                      : false
                  }
                >
                  Contact
                </LinkText>
              </WikkiHref>
            </Link>
          </WikkiLinks>
        </WikkiLinksCover>

        <NavBut>
          <NavButton to="/download">Get App</NavButton>
        </NavBut>
      </Cover>
    </Body>
  )
}
const Body = styled.section<MobileProps>`
  position: relative;
  @media only screen and (max-width: 800px) {
    background: ${(props) =>
      props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
    height: 100px;
  }
`

const Cover = styled.div<MobileProps>`
  margin: 24px auto;
  padding: 16px;
  height: 92px;
  max-width: 1232px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: flex-start;
    height: 100vh;
    transform: ${(props) =>
      props.open ? "translateY(0%)" : "translateY(-2000px)"};
    background: ${(props) =>
      props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
  }
`
const WikkiLogo = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 56px;
  width: 141px;
  cursor: pointer;
`

const WikkiLinksCover = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const WikkiLinks = styled.ul`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`
const WikkiHref = styled.li`
  margin: 12px;
  cursor: pointer;
`
const LinkText = styled(SubTitle)<LinkProps>`
  transition: all 0.4s ease-in-out;
  color: ${(props) =>
    props.linkTrue ? `${WikkiTheme.white}` : `${WikkiTheme.black}`};
  :hover {
    color: ${WikkiTheme.secondary};
  }
`
const NavBut = styled.div`
  max-width: 200px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin: 32px 0;
  }
`
const NavButton = styled(NavbarButton)``

const MobileLogo = styled.div`
  display: none;
  @media only screen and (max-width: 800px) {
    display: flex;
    margin: 0;
    padding: 24px 16px;
    height: 92px;
    max-width: 1232px;
  }
`
const MobileToggle = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 48px;
  position: absolute;
  top: 32px;
  width: 100%;
  right: 24px;
  z-index: 10;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`
const ToggleTop = styled.span<MobileProps>`
  height: 2px;
  width: 100%;
  transition: 0.3s ease-in;
  transform: ${(props) =>
    props.open ? "rotate(-45deg) translate(-3px,2px)" : "rotate(0)"};
  background: ${(props) =>
    props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`
const ToggleMiddle = styled.span<MobileProps>`
  height: 2px;
  margin: 4px 0;
  width: 100%;
  transition: 0.3s ease-in;
  display: ${(props) => (props.open ? "none" : "flex")};
  background: ${(props) =>
    props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`
const ToggleBottom = styled.span<MobileProps>`
  transform: ${(props) =>
    props.open ? "rotate(45deg) translate(-4px,-3px)" : "rotate(0)"};
  height: 2px;
  background: ${(props) =>
    props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
  width: 100%;
  transition: 0.3s ease-in;
`
export default Navbar
