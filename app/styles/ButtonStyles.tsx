import { Link } from "@remix-run/react"
import styled from "styled-components"
import { WikkiTheme } from "./ColorStyles"

export const MainButton = styled.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.primary};
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PrimaryButton = styled.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.primary};
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`

export const SecondaryButton = styled.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.secondary};
  color: ${WikkiTheme.primary};
  border-radius: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TertiaryButton = styled.button`
  height: 56px;
  max-width: 200px;
  width: 100%;
  background: ${WikkiTheme.primary};
  cursor: pointer;
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormButton = styled.button`
  height: 56px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.dark};
  cursor: pointer;
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CaseButton = styled.a`
  height: 64px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
  border-radius: 16px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;

  :hover {
    background: ${WikkiTheme.secondary};
    color: ${WikkiTheme.black};
  }
  @media only screen and (max-width: 550px) {
    font-size: 14px;
    height: 48px;
  }
`
export const NavbarButton = styled(Link)`
  height: 56px;
  max-width: 200px;
  width: 100%;
  background: ${WikkiTheme.white};
  cursor: pointer;
  color: ${WikkiTheme.primary};
  border-radius: 32px;
  border: 2px solid ${WikkiTheme.primary};

  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  :after {
    position: absolute;
    content: "";
    z-index: -1;
    outline: none;
    transition: all 0.4s ease-in-out;
    transform: rotate(10deg);
    height: 56px;
    max-width: 200px;
    width: 100%;
    background: ${WikkiTheme.white};
    cursor: pointer;
    color: ${WikkiTheme.primary};
    border: 2px solid ${WikkiTheme.primary};

    border-radius: 32px;
  }

  :hover {
    ::after {
      transform: rotate(0deg);
    }
  }
`

export const DownloadButton = styled.a`
  height: 64px;
  max-width: 200px;
  width: 100%;
  background: ${WikkiTheme.dark};
  cursor: pointer;
  color: ${WikkiTheme.white};
  border-radius: 32px;
  margin: 8px;
  border: none;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;

  :hover {
    background: ${WikkiTheme.secondary};
    color: ${WikkiTheme.black};
  }

  @media only screen and (max-width: 400px) {
    max-width: 400px;
  }
`

export const BusinessButton = styled(Link)`
  height: 64px;
  max-width: 441px;
  width: 100%;
  background: transparent;
  color: ${WikkiTheme.white};
  border: 2px solid ${WikkiTheme.white};
  border-radius: 40px;
  outline: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;

  :hover {
    background: ${WikkiTheme.dark};
    color: ${WikkiTheme.white};
  }
  @media only screen and (max-width: 550px) {
    font-size: 14px;
    height: 48px;
  }
`
