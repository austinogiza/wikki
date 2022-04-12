import { motion, AnimatePresence } from "framer-motion"
import React, { FC } from "react"

import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"

import { Header5 } from "~/styles/TextStyles"

interface TabStyleProps {
  active?: boolean
}
interface TabProps {
  tab: string
  click: (tab: string) => void
}

const WikkiTabNav: FC<TabProps & TabStyleProps> = (props) => {
  const { tab, active, click } = props
  return (
    <AnimatePresence>
      <Tabs
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        active={active}
        onClick={() => click(tab)}
      >
        <TabText layout="position" active={active}>
          {tab}
        </TabText>
      </Tabs>
    </AnimatePresence>
  )
}

const Tabs = styled(motion.button)<TabStyleProps>`
  cursor: pointer;
  background: ${(props) =>
    props.active ? `${WikkiTheme.white}` : "transparent"};
  margin: 8px 0;
  height: 64px;
  max-width: 140px;
  border: none;
  outline: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  :hover {
    outline: none;
  }
  :focus {
    outline: none;
  }
  :focus-within {
    outline: none;
  }
`

const TabText = styled(motion(Header5))<TabStyleProps>`
  color: ${(props) =>
    props.active ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`
export default WikkiTabNav
