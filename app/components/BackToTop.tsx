import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { HiOutlineArrowUp } from "react-icons/hi"

interface ScrollProps {
  scrolled?: boolean
}
const BackToTop = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  const backTo = () => {
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <Body scrolled={scrolled} onClick={backTo}>
      <Cover>
        <ScrollText />
      </Cover>
    </Body>
  )
}
const Body = styled.div<ScrollProps>`
  width: 64px;
  height: 64px;
  background: ${WikkiTheme.white};
  border-radius: 50%;
  display: ${(props) => (props.scrolled ? "flex" : "none")};
  position: fixed;
  bottom: 30px;
  cursor: pointer;
  right: 30px;
  z-index: 80;
  border: 2px solid ${WikkiTheme.black};
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    width: 56px;
    height: 56px;
  }
  :focus {
    outline: 2px solid ${WikkiTheme.primary};
    outline-offset: 3px;
  }
  :hover {
    outline: 2px solid ${WikkiTheme.primary};
    outline-offset: 3px;
  }
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ScrollText = styled(HiOutlineArrowUp)`
  stroke: ${WikkiTheme.black};

  width: 32px;
  height: 32px;
`
export default BackToTop
