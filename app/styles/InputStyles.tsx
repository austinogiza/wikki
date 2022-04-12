import { Field } from "formik"
import styled from "styled-components"
import { WikkiTheme } from "./ColorStyles"

export const TextInput = styled(Field)`
  height: 56px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.lightPrimary};
  border-radius: 32px;
  outline: none;
  padding: 19px 24px;
  border: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  color: ${WikkiTheme.dark};
  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
  ::placeholder {
    font-family: "Clash Display Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
    color: ${WikkiTheme.gray};
    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`

export const TextArea = styled(Field)`
  height: 250px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.lightPrimary};
  border-radius: 32px;
  outline: none;
  padding: 19px 24px;
  border: none;
  resize: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  color: ${WikkiTheme.dark};
  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
  ::placeholder {
    font-family: "Clash Display Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
    color: ${WikkiTheme.gray};
    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`
