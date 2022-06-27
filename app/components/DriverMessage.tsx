import { useLocation } from "@remix-run/react"
import React, { useState } from "react"
import styled from "styled-components"
import { downloadData } from "~/data/downloadData"

import { WikkiTheme } from "~/styles/ColorStyles"
import WikkiInfo from "./WikkiInfo"
import WikkiTabNav from "./WikkiTabNav"

const DriverMessage = () => {
  const router = useLocation()
  const [selectedTab, setSelectedTab] = useState<string>("Rider")
  const clickTab = (tab: string) => {
    setSelectedTab(tab)
  }

  const tabNames = [{ name: "Rider" }, { name: "Driver" }]
  return (
    <>
      {router.pathname === "/404" ? null : (
        <>
          <Body>
            <Cover>
              <TabBody>
                <TabCover>
                  {tabNames.map((data, index) => (
                    <WikkiTabNav
                      click={() => clickTab(data.name)}
                      key={index}
                      tab={data.name}
                      active={selectedTab === data.name}
                    />
                  ))}
                </TabCover>
              </TabBody>
              {downloadData.map((data, index) => (
                <WikkiInfo
                  key={index}
                  active={selectedTab === data.name}
                  link={data.name}
                  text={data.text}
                  title={data.title}
                  ios={data.ios}
                  android={data.android}
                />
              ))}
            </Cover>
          </Body>
        </>
      )}
    </>
  )
}

const Body = styled.section`
  min-height: 400px;
  width: 100%;
  margin: 0 auto;

  background: ${WikkiTheme.black};
  padding: 40px 24px;
`

const Cover = styled.div`
  display: flex;
  flex-direction: column;
`

const TabBody = styled.section`
  min-height: 72px;
  max-width: 300px;
  margin: 24px auto;
  width: 100%;
  border-radius: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${WikkiTheme.switchBG};
`
const TabCover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export default DriverMessage
