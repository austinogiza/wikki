var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = __toESM(require("react-dom/server"));
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = import_server.default.renderToString(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react14 = require("@remix-run/react");
var import_nprogress = __toESM(require("nprogress"));
var import_react15 = require("react");

// app/styles/index.css
var styles_default = "/build/_assets/index-4GXYDH4W.css";

// app/styles/nprogress.css
var nprogress_default = "/build/_assets/nprogress-65OK324V.css";

// app/components/DriverMessage.tsx
var import_react5 = require("@remix-run/react");
var import_react6 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));

// app/data/downloadData.tsx
var downloadData = [
  {
    name: "Rider",
    title: "Download Wikki",
    text: "Gain access to real time, affordable high-quality logistics, delivery and pickup directly from your phone.",
    android: "",
    ios: ""
  },
  {
    name: "Driver",
    title: "Download Wikki Driver",
    text: "Gain access to real time, affordable high-quality logistics, delivery and pickup directly from your phone.",
    android: "",
    ios: ""
  }
];

// app/styles/ColorStyles.tsx
var WikkiTheme = {
  primary: "#330066",
  secondary: "#FF9E17",
  white: "#ffffff",
  black: "#000000",
  dark: "#0a0b1a",
  snowWhite: "#FAFAFF",
  smokeWhite: "#FAFAFA",
  red: "#ff0000",
  gray: "#818181",
  yellow: "#FFCE32",
  blue: "#1D63FF",
  lightYelllow: "#FEFAF0",
  darkRed: "#F34646",
  lightPrimary: "#F5EBFF",
  switchBG: "rgba(118, 118, 128, 0.5)",
  userDownload: "#D3EFE6",
  driverDownload: "#F9EFCF",
  businessDownload: "#D7F8D7"
};

// app/components/WikkiInfo.tsx
var import_react3 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));

// app/styles/TextStyles.tsx
var import_styled_components2 = __toESM(require("styled-components"));
var LargeHeader = import_styled_components2.default.h1`
  font-family: "Clash Display Medium";
  font-size: 96px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 48px;
  }
`;
var Header1 = import_styled_components2.default.h1`
  font-family: "Clash Display Medium";
  font-size: 72px;
  font-weight: 400;
  line-height: 1.1;

  @media only screen and (max-width: 750px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 28px;
  }
`;
var Header2 = import_styled_components2.default.h2`
  font-family: "Clash Display Medium";
  font-size: 48px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 28px;
  }
`;
var Header3 = import_styled_components2.default.h3`
  font-family: "Clash Display Medium";
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 21px;
  }
`;
var Header5 = import_styled_components2.default.h4`
  font-family: "Clash Display Medium";
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }
`;
var SubTitle = import_styled_components2.default.h4`
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
`;
var SubTitleSmall = import_styled_components2.default.h5`
  font-family: "Clash Display Medium";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
  }
`;
var Caption = import_styled_components2.default.h6`
  font-family: "Clash Display Regular";
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 11px;
  }
`;
var Body1 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }
`;
var Body2 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 15px;
  }
`;
var Body3 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
  }
`;
var Body4 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

// app/components/WikkiInfo.tsx
var import_framer_motion = require("framer-motion");

// app/styles/ButtonStyles.tsx
var import_react2 = require("@remix-run/react");
var import_styled_components3 = __toESM(require("styled-components"));
var MainButton = import_styled_components3.default.button`
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
`;
var PrimaryButton = import_styled_components3.default.button`
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
`;
var SecondaryButton = import_styled_components3.default.button`
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
`;
var TertiaryButton = import_styled_components3.default.button`
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
`;
var FormButton = (0, import_styled_components3.default)(import_react2.Link)`
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
`;
var CaseButton = import_styled_components3.default.a`
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
`;
var NavbarButton = (0, import_styled_components3.default)(import_react2.Link)`
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
`;
var DownloadButton = import_styled_components3.default.a`
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
`;
var BusinessButton = (0, import_styled_components3.default)(import_react2.Link)`
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
`;

// app/images/appstore.svg
var appstore_default = "/build/_assets/appstore-ZWACUNEJ.svg";

// app/images/playstore.svg
var playstore_default = "/build/_assets/playstore-XLZVLEQK.svg";

// app/components/WikkiInfo.tsx
var WikkiInfo = (props) => {
  const { active, title, text, ios, android } = props;
  return /* @__PURE__ */ import_react3.default.createElement(Body, {
    active
  }, /* @__PURE__ */ import_react3.default.createElement(Cover, null, /* @__PURE__ */ import_react3.default.createElement(InfoLeft, null, " ", /* @__PURE__ */ import_react3.default.createElement(GingerTitle, null, title), /* @__PURE__ */ import_react3.default.createElement(TeaseText, null, text), /* @__PURE__ */ import_react3.default.createElement(GingerRow, null, /* @__PURE__ */ import_react3.default.createElement(CommunityMainButton, {
    href: `${ios}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react3.default.createElement(StoreIcon, {
    src: appstore_default,
    alt: "wikki download"
  }), " App Store"), /* @__PURE__ */ import_react3.default.createElement(CommunityOutlineButton, {
    href: `${android}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react3.default.createElement(StoreIcon, {
    src: playstore_default,
    alt: "wikki download"
  }), " Google Play")))));
};
var Body = (0, import_styled_components4.default)(import_framer_motion.motion.div)`
  min-height: 300px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  margin: 24px auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${(props) => props.active ? "flex" : "none"};
`;
var Cover = import_styled_components4.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
var InfoLeft = import_styled_components4.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var GingerTitle = (0, import_styled_components4.default)(Header3)`
  color: ${WikkiTheme.white};
  margin: 8px 0;
  text-align: center;
`;
var TeaseText = (0, import_styled_components4.default)(Body2)`
  color: ${WikkiTheme.white};
  margin: 0;
  text-align: center;
`;
var GingerRow = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  width: 100%;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
var CommunityMainButton = (0, import_styled_components4.default)(DownloadButton)``;
var CommunityOutlineButton = (0, import_styled_components4.default)(DownloadButton)``;
var StoreIcon = import_styled_components4.default.img`
  width: 32px;
  height: 32px;
  margin: 8px;
`;
var WikkiInfo_default = WikkiInfo;

// app/components/WikkiTabNav.tsx
var import_framer_motion2 = require("framer-motion");
var import_react4 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));
var WikkiTabNav = (props) => {
  const { tab, active, click } = props;
  return /* @__PURE__ */ import_react4.default.createElement(import_framer_motion2.AnimatePresence, null, /* @__PURE__ */ import_react4.default.createElement(Tabs, {
    layout: true,
    transition: { layout: { duration: 1, type: "spring" } },
    active,
    onClick: () => click(tab)
  }, /* @__PURE__ */ import_react4.default.createElement(TabText, {
    layout: "position",
    active
  }, tab)));
};
var Tabs = (0, import_styled_components5.default)(import_framer_motion2.motion.button)`
  cursor: pointer;
  background: ${(props) => props.active ? `${WikkiTheme.white}` : "transparent"};
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
`;
var TabText = (0, import_styled_components5.default)((0, import_framer_motion2.motion)(Header5))`
  color: ${(props) => props.active ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`;
var WikkiTabNav_default = WikkiTabNav;

// app/components/DriverMessage.tsx
var DriverMessage = () => {
  const router = (0, import_react5.useLocation)();
  const [selectedTab, setSelectedTab] = (0, import_react6.useState)("Rider");
  const clickTab = (tab) => {
    setSelectedTab(tab);
  };
  const tabNames = [{ name: "Rider" }, { name: "Driver" }];
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, router.pathname === "/404" ? null : /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(Body5, null, /* @__PURE__ */ import_react6.default.createElement(Cover2, null, /* @__PURE__ */ import_react6.default.createElement(TabBody, null, /* @__PURE__ */ import_react6.default.createElement(TabCover, null, tabNames.map((data, index2) => /* @__PURE__ */ import_react6.default.createElement(WikkiTabNav_default, {
    click: () => clickTab(data.name),
    key: index2,
    tab: data.name,
    active: selectedTab === data.name
  })))), downloadData.map((data, index2) => /* @__PURE__ */ import_react6.default.createElement(WikkiInfo_default, {
    key: index2,
    active: selectedTab === data.name,
    link: data.name,
    text: data.text,
    title: data.title,
    ios: data.ios,
    android: data.android
  }))))));
};
var Body5 = import_styled_components6.default.section`
  min-height: 400px;
  width: 100%;
  margin: 0 auto;

  background: ${WikkiTheme.black};
  padding: 40px 24px;
`;
var Cover2 = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
`;
var TabBody = import_styled_components6.default.section`
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
`;
var TabCover = import_styled_components6.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
var DriverMessage_default = DriverMessage;

// app/components/Footer.tsx
var import_react7 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));

// app/data/FooterData.tsx
var MenuData = [
  { name: "About us", link: "about" },
  { name: "For Businesses", link: "business" },
  { name: "How it works", link: "how-it-works" },
  { name: "How to get started as a driver", link: "driver-requirements" },
  { name: "Contact", link: "contact" }
];
var ProductsData = [
  { name: "Dispatch", link: "dispatch" },
  { name: "Pickup", link: "pick-up" }
];

// app/images/logo.svg
var logo_default = "/build/_assets/logo-ER6L2UUP.svg";

// app/components/Footer.tsx
var import_react8 = require("@remix-run/react");
var Footer = () => {
  const router = (0, import_react8.useLocation)();
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, router.pathname === "/404" ? null : /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(Body6, null, /* @__PURE__ */ import_react7.default.createElement(Cover3, null, /* @__PURE__ */ import_react7.default.createElement(FooterTop, null, " ", /* @__PURE__ */ import_react7.default.createElement(FooterRow, null, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react7.default.createElement(FooterLogo, {
    src: logo_default,
    alt: "Wikki logo"
  }))), /* @__PURE__ */ import_react7.default.createElement(FooterRow, null, /* @__PURE__ */ import_react7.default.createElement(FooterColumn, null, /* @__PURE__ */ import_react7.default.createElement(ColTitle, null, "Menu"), /* @__PURE__ */ import_react7.default.createElement(FooterList, null, MenuData.map((data, index2) => /* @__PURE__ */ import_react7.default.createElement(FooterLinks, {
    key: index2
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: `/${data.link}`
  }, /* @__PURE__ */ import_react7.default.createElement(FooterText, null, data.name)))), " "))), " ", /* @__PURE__ */ import_react7.default.createElement(FooterRow, null, /* @__PURE__ */ import_react7.default.createElement(FooterColumn, null, /* @__PURE__ */ import_react7.default.createElement(ColTitle, null, "Products"), /* @__PURE__ */ import_react7.default.createElement(FooterList, null, ProductsData.map((data, index2) => /* @__PURE__ */ import_react7.default.createElement(FooterLinks, {
    key: index2
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: `/${data.link}`
  }, /* @__PURE__ */ import_react7.default.createElement(FooterText, null, data.name)))), " "))), " ", /* @__PURE__ */ import_react7.default.createElement(FooterRow, null, /* @__PURE__ */ import_react7.default.createElement(FooterColumn, null, /* @__PURE__ */ import_react7.default.createElement(GingerTitle2, null, "Get the app"), " ", /* @__PURE__ */ import_react7.default.createElement(GingerRow2, null, /* @__PURE__ */ import_react7.default.createElement(CommunityMainButton2, {
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react7.default.createElement(StoreIcon2, {
    src: appstore_default,
    alt: "wikki download"
  }), " App Store"), /* @__PURE__ */ import_react7.default.createElement(CommunityOutlineButton2, {
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react7.default.createElement(StoreIcon2, {
    src: playstore_default,
    alt: "wikki download"
  }), " ", "Google Play"))))), /* @__PURE__ */ import_react7.default.createElement(FooterBottom, null, /* @__PURE__ */ import_react7.default.createElement(FooterText, null, "Copyright ", new Date().getFullYear()))))));
};
var Body6 = import_styled_components7.default.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: ${WikkiTheme.black};
`;
var Cover3 = import_styled_components7.default.div`
  max-width: 1232px;
  margin: 24px auto;
  color: ${WikkiTheme.white};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
var FooterTop = import_styled_components7.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-gap: 24px;
  gap: 24px;
  width: 100%;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
var FooterRow = import_styled_components7.default.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
var FooterLogo = import_styled_components7.default.img`
  height: 56px;
  max-width: 141px;
  width: 100%;
`;
var FooterColumn = import_styled_components7.default.div`
  display: flex;
  flex-direction: column;
`;
var ColTitle = (0, import_styled_components7.default)(Header5)``;
var FooterList = import_styled_components7.default.ul`
  margin: 24px 0;
`;
var FooterLinks = import_styled_components7.default.li`
  margin: 10px 0;
  color: ${WikkiTheme.white};
`;
var FooterText = (0, import_styled_components7.default)(SubTitle)`
  cursor: pointer;
  color: ${WikkiTheme.white};
  transition: 0.4s ease-in;

  :hover {
    color: ${WikkiTheme.secondary};
  }
`;
var FooterBottom = import_styled_components7.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px 0;
`;
var GingerTitle2 = (0, import_styled_components7.default)(Header3)`
  color: ${WikkiTheme.white};
  margin: 8px 0;
  text-align: left;
`;
var GingerRow2 = import_styled_components7.default.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;

  margin: 40px auto;
  width: 100%;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
var StoreIcon2 = import_styled_components7.default.img`
  width: 32px;
  height: 32px;
  margin: 8px;
`;
var CommunityMainButton2 = (0, import_styled_components7.default)(DownloadButton)``;
var CommunityOutlineButton2 = (0, import_styled_components7.default)(DownloadButton)``;
var Footer_default = Footer;

// app/components/navbar/NavCover.tsx
var import_react11 = require("@remix-run/react");
var import_react12 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));

// app/components/navbar/Navbar.tsx
var import_react9 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var import_react_device_detect = require("react-device-detect");
var import_react10 = require("@remix-run/react");
var Navbar = () => {
  const [open, setOpen] = (0, import_react9.useState)(false);
  const [currentRoute, setCurrentRoute] = (0, import_react9.useState)(false);
  const router = (0, import_react10.useLocation)();
  const toggle = () => {
    setOpen(!open);
  };
  (0, import_react9.useEffect)(() => {
    if (import_react_device_detect.isMobile && router.pathname === "/" || router.pathname === "/about") {
      setCurrentRoute(false);
    } else {
      setCurrentRoute(true);
    }
    setOpen(false);
  }, [router]);
  return /* @__PURE__ */ import_react9.default.createElement(Body7, {
    routerOpened: currentRoute
  }, /* @__PURE__ */ import_react9.default.createElement(MobileLogo, null, /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react9.default.createElement(Logo, {
    src: logo_default,
    alt: "Wikki logo"
  }))), /* @__PURE__ */ import_react9.default.createElement(MobileToggle, {
    onClick: toggle
  }, /* @__PURE__ */ import_react9.default.createElement(ToggleTop, {
    open,
    routerOpened: currentRoute
  }), /* @__PURE__ */ import_react9.default.createElement(ToggleMiddle, {
    open,
    routerOpened: currentRoute
  }), /* @__PURE__ */ import_react9.default.createElement(ToggleBottom, {
    open,
    routerOpened: currentRoute
  })), /* @__PURE__ */ import_react9.default.createElement(Cover4, {
    open,
    routerOpened: currentRoute
  }, /* @__PURE__ */ import_react9.default.createElement(WikkiLogo, null, /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react9.default.createElement(Logo, {
    src: logo_default,
    alt: "Wikki logo"
  }))), /* @__PURE__ */ import_react9.default.createElement(WikkiLinksCover, null, /* @__PURE__ */ import_react9.default.createElement(WikkiLinks, null, /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/about"
  }, /* @__PURE__ */ import_react9.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react9.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "About Us", " "))), /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/driver-requirements"
  }, /* @__PURE__ */ import_react9.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react9.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "Become A Driver"))), /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react9.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react9.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "How It Works"))), " ", /* @__PURE__ */ import_react9.default.createElement(import_react10.Link, {
    to: "/contact"
  }, /* @__PURE__ */ import_react9.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react9.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "Contact"))))), /* @__PURE__ */ import_react9.default.createElement(NavBut, null, /* @__PURE__ */ import_react9.default.createElement(NavButton, {
    to: "/download"
  }, "Get App"))));
};
var Body7 = import_styled_components8.default.section`
  position: relative;
  @media only screen and (max-width: 800px) {
    background: ${(props) => props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
    height: 100px;
  }
`;
var Cover4 = import_styled_components8.default.div`
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
    transform: ${(props) => props.open ? "translateY(0%)" : "translateY(-2000px)"};
    background: ${(props) => props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
  }
`;
var WikkiLogo = import_styled_components8.default.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
var Logo = import_styled_components8.default.img`
  height: 56px;
  width: 141px;
  cursor: pointer;
`;
var WikkiLinksCover = import_styled_components8.default.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
var WikkiLinks = import_styled_components8.default.ul`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`;
var WikkiHref = import_styled_components8.default.li`
  margin: 12px;
  cursor: pointer;
`;
var LinkText = (0, import_styled_components8.default)(SubTitle)`
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.linkTrue ? `${WikkiTheme.white}` : `${WikkiTheme.black}`};
  :hover {
    color: ${WikkiTheme.secondary};
  }
`;
var NavBut = import_styled_components8.default.div`
  max-width: 200px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin: 32px 0;
  }
`;
var NavButton = (0, import_styled_components8.default)(NavbarButton)``;
var MobileLogo = import_styled_components8.default.div`
  display: none;
  @media only screen and (max-width: 800px) {
    display: flex;
    margin: 0;
    padding: 24px 16px;
    height: 92px;
    max-width: 1232px;
  }
`;
var MobileToggle = import_styled_components8.default.div`
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
`;
var ToggleTop = import_styled_components8.default.span`
  height: 2px;
  width: 100%;
  transition: 0.3s ease-in;
  transform: ${(props) => props.open ? "rotate(-45deg) translate(-3px,2px)" : "rotate(0)"};
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`;
var ToggleMiddle = import_styled_components8.default.span`
  height: 2px;
  margin: 4px 0;
  width: 100%;
  transition: 0.3s ease-in;
  display: ${(props) => props.open ? "none" : "flex"};
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`;
var ToggleBottom = import_styled_components8.default.span`
  transform: ${(props) => props.open ? "rotate(45deg) translate(-4px,-3px)" : "rotate(0)"};
  height: 2px;
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
  width: 100%;
  transition: 0.3s ease-in;
`;
var Navbar_default = Navbar;

// app/components/navbar/NavCover.tsx
var NavCover = () => {
  const router = (0, import_react11.useLocation)();
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, router.pathname === "/404" ? null : /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(Body8, null, /* @__PURE__ */ import_react12.default.createElement(Navbar_default, null))));
};
var Body8 = import_styled_components9.default.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background: transparent;
`;
var NavCover_default = NavCover;

// app/components/BackToTop.tsx
var import_react13 = __toESM(require("react"));
var import_styled_components10 = __toESM(require("styled-components"));
var import_hi = require("react-icons/hi");
var BackToTop = () => {
  const [scrolled, setScrolled] = (0, import_react13.useState)(false);
  const backTo = () => {
    window.scrollTo(0, 0);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  (0, import_react13.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ import_react13.default.createElement(Body9, {
    scrolled,
    onClick: backTo
  }, /* @__PURE__ */ import_react13.default.createElement(Cover5, null, /* @__PURE__ */ import_react13.default.createElement(ScrollText, null)));
};
var Body9 = import_styled_components10.default.div`
  width: 64px;
  height: 64px;
  background: ${WikkiTheme.white};
  border-radius: 50%;
  display: ${(props) => props.scrolled ? "flex" : "none"};
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
`;
var Cover5 = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var ScrollText = (0, import_styled_components10.default)(import_hi.HiOutlineArrowUp)`
  stroke: ${WikkiTheme.black};

  width: 32px;
  height: 32px;
`;
var BackToTop_default = BackToTop;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere",
  "twitter:card": "summary_large_image",
  "twitter:site": "@Wikki",
  "twitter:title": "Request a dispatch or pickup",
  "twitter:description": "Get items and goods delivered and picked up from anywhere",
  "twitter:creator": "@Wikki",
  "twitter:image": "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png",
  "og:description": "Get items and goods delivered and picked up from anywhere",
  "og:image": "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png",
  "og:url": "https://mywikki.com/",
  "og:site_name": "Wikki",
  "og:title": "Request a dispatch or pickup"
});
var links = () => {
  return [
    { rel: "stylesheet", href: nprogress_default },
    { rel: "stylesheet", href: styles_default },
    {
      rel: "icon",
      href: "/favicon.ico"
    }
  ];
};
function App() {
  const transition = (0, import_react14.useTransition)();
  (0, import_react15.useEffect)(() => {
    if (transition.state === "idle")
      import_nprogress.default.done();
    else
      import_nprogress.default.start();
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react14.Meta, null), /* @__PURE__ */ React.createElement(import_react14.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavCover_default, null), /* @__PURE__ */ React.createElement(BackToTop_default, null), /* @__PURE__ */ React.createElement(import_react14.Outlet, null), /* @__PURE__ */ React.createElement(DriverMessage_default, null), /* @__PURE__ */ React.createElement(Footer_default, null), /* @__PURE__ */ React.createElement(import_react14.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react14.Scripts, null), /* @__PURE__ */ React.createElement(import_react14.LiveReload, null)));
}

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\driver-requirements.tsx
var driver_requirements_exports = {};
__export(driver_requirements_exports, {
  default: () => driver_requirements_default,
  meta: () => meta2
});
var import_react21 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));

// app/components/driver/DriverAdvantage.tsx
var import_react16 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));

// app/components/driver/PurposeData.tsx
var driverData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Set your own schedule",
    text: "You\u2019re the boss. You can drive with the wikkki app day or night. Fit driving around your life, not the other way around."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Cheap fees",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Better logistics",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  }
];

// app/images/main.png
var main_default = "/build/_assets/main-WO4APGIB.png";

// app/components/driver/DriverAdvantage.tsx
var DriverAdvantage = () => {
  return /* @__PURE__ */ import_react16.default.createElement(Body10, null, /* @__PURE__ */ import_react16.default.createElement(Cover6, null, /* @__PURE__ */ import_react16.default.createElement(DriverGrid, null, /* @__PURE__ */ import_react16.default.createElement(DriverLeft, null, /* @__PURE__ */ import_react16.default.createElement(DiverCover, null, /* @__PURE__ */ import_react16.default.createElement(DriverTitle, null, "Help solve logistics problem"), /* @__PURE__ */ import_react16.default.createElement(DriverText, null, "Integrate Banky on your web-site to offer fast, secure and seamless online bank transfer payment method. You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there."), /* @__PURE__ */ import_react16.default.createElement(DriverButton, null, "Get started"))), /* @__PURE__ */ import_react16.default.createElement(DriverRight, null, /* @__PURE__ */ import_react16.default.createElement(RightSection, null, /* @__PURE__ */ import_react16.default.createElement(DriverImage, {
    src: main_default,
    alt: "wikki driver requirement"
  })), driverData.map((data, index2) => /* @__PURE__ */ import_react16.default.createElement(RightSection, {
    key: index2
  }, /* @__PURE__ */ import_react16.default.createElement(SectionCover, null, /* @__PURE__ */ import_react16.default.createElement(SectionIcon, null, data.icon), /* @__PURE__ */ import_react16.default.createElement(SectionTitle, null, data.title), /* @__PURE__ */ import_react16.default.createElement(SectionText, null, data.text))))))));
};
var Body10 = import_styled_components11.default.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  width: 100%;
  background: ${WikkiTheme.secondary};
`;
var Cover6 = import_styled_components11.default.div`
  max-width: 1800px;
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DriverGrid = import_styled_components11.default.div`
  display: grid;
  /* height: 100%; */
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
var DriverLeft = import_styled_components11.default.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 550px) {
    min-height: 500px;

    margin: 32px auto;
  }
`;
var DiverCover = import_styled_components11.default.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    margin: 40px 0;
  }
`;
var DriverTitle = (0, import_styled_components11.default)(Header2)`
  margin: 0;
  text-align: left;
`;
var DriverText = (0, import_styled_components11.default)(Body3)`
  text-align: left;
  margin: 16px 0 40px 0;
`;
var DriverButton = (0, import_styled_components11.default)(MainButton)``;
var DriverRight = import_styled_components11.default.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: 500px;
  }
`;
var DriverImage = import_styled_components11.default.img`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
  }
`;
var RightSection = import_styled_components11.default.div`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
  }
`;
var SectionIcon = import_styled_components11.default.div``;
var SectionTitle = (0, import_styled_components11.default)(Header5)`
  text-align: left;
  margin: 32px 0 8px 0;
`;
var SectionText = (0, import_styled_components11.default)(Body3)`
  text-align: left;
  margin: 0;
`;
var SectionCover = import_styled_components11.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
`;
var DriverAdvantage_default = DriverAdvantage;

// app/components/driver/DriverHero.tsx
var import_react17 = __toESM(require("react"));
var import_styled_components12 = __toESM(require("styled-components"));
var DriverHero = () => {
  return /* @__PURE__ */ import_react17.default.createElement(Body11, null, /* @__PURE__ */ import_react17.default.createElement(Cover7, null, /* @__PURE__ */ import_react17.default.createElement(DriverTitle2, null, "Get in the driver\u2019s seat and get paid"), /* @__PURE__ */ import_react17.default.createElement(DriverText2, null, "Make the most of your time on the road on the platform with the largest network of active riders.")));
};
var Body11 = import_styled_components12.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;

  justify-content: center;
  align-items: center;
  min-height: 450px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 32px 16px 16px 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`;
var Cover7 = import_styled_components12.default.div`
  color: ${WikkiTheme.black};
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DriverTitle2 = (0, import_styled_components12.default)(Header2)`
  text-align: center;
`;
var DriverText2 = (0, import_styled_components12.default)(Body3)`
  text-align: center;
  margin: 8px 0;
`;
var DriverHero_default = DriverHero;

// app/components/driver/DriverMessage.tsx
var import_react18 = __toESM(require("react"));
var import_styled_components13 = __toESM(require("styled-components"));
var DriverMessage2 = () => {
  return /* @__PURE__ */ import_react18.default.createElement(Body12, null, /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react18.default.createElement(Cover8, null, /* @__PURE__ */ import_react18.default.createElement(RideText, null, "Ride with us")));
};
var Body12 = import_styled_components13.default.div`
  height: 276px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 200px;
  }
`;
var animation = import_styled_components13.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover8 = import_styled_components13.default.div`
  animation: ${animation} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText = (0, import_styled_components13.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var DriverMessage_default2 = DriverMessage2;

// app/components/driver/DriverRequirements.tsx
var import_react20 = __toESM(require("react"));
var import_styled_components15 = __toESM(require("styled-components"));

// app/components/driver/DriverAccordion.tsx
var import_react19 = __toESM(require("react"));
var import_fi = require("react-icons/fi");
var import_styled_components14 = __toESM(require("styled-components"));
var import_framer_motion3 = require("framer-motion");
var DriverAccordion = (props) => {
  const { number, active, text, content, click } = props;
  return /* @__PURE__ */ import_react19.default.createElement(import_framer_motion3.AnimatePresence, null, /* @__PURE__ */ import_react19.default.createElement(Body13, {
    layout: true,
    onClick: () => click(number)
  }, /* @__PURE__ */ import_react19.default.createElement(Cover9, {
    layout: "position"
  }, /* @__PURE__ */ import_react19.default.createElement(DriverNumber, {
    layout: "position"
  }, /* @__PURE__ */ import_react19.default.createElement(NumberText, {
    layout: "position"
  }, number)), /* @__PURE__ */ import_react19.default.createElement(DriverBody, {
    layout: "position"
  }, /* @__PURE__ */ import_react19.default.createElement(DriverContent, {
    layout: "position"
  }, text), /* @__PURE__ */ import_react19.default.createElement(DriverPara, {
    active
  }, content)), /* @__PURE__ */ import_react19.default.createElement(DriverIcon, {
    layout: "position"
  }, active ? /* @__PURE__ */ import_react19.default.createElement(DriverDown, null) : /* @__PURE__ */ import_react19.default.createElement(DriverUp, null)))));
};
var Body13 = (0, import_styled_components14.default)(import_framer_motion3.motion.div)`
  min-height: 50px;
  max-width: 520px;
  width: 100%;

  margin: 24px 0;
  cursor: pointer;
  border-radius: 24px;
  background: ${WikkiTheme.white};
  padding: 16px;
  outline: none;
  transition: 0.4s all ease-in-out;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var Cover9 = (0, import_styled_components14.default)(import_framer_motion3.motion.div)`
  display: grid;
  grid-template-columns: 48px auto 32px;
  grid-gap: 16px;
  gap: 16px;
  transition: 0.4s ease-in-out;
`;
var DriverNumber = (0, import_styled_components14.default)(import_framer_motion3.motion.div)`
  height: 40px;
  width: 40px;
  transition: 0.4s ease-in-out;

  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 32px;
    width: 32px;
  }
`;
var NumberText = (0, import_styled_components14.default)((0, import_framer_motion3.motion)(Header5))``;
var DriverBody = (0, import_styled_components14.default)(import_framer_motion3.motion.div)`
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-in-out;
`;
var DriverContent = (0, import_styled_components14.default)((0, import_framer_motion3.motion)(Header5))`
  transition: 0.4s ease-in-out;
`;
var DriverPara = (0, import_styled_components14.default)((0, import_framer_motion3.motion)(Body4))`
  margin: 8px 0;
  transition: 0.4s ease-in-out;
  height: ${(props) => props.active ? "100%" : "0px"};
  display: ${(props) => props.active ? "flex" : "none"};
`;
var DriverIcon = (0, import_styled_components14.default)(import_framer_motion3.motion.div)`
  transition: 0.4s ease-in-out;
`;
var DriverUp = (0, import_styled_components14.default)((0, import_framer_motion3.motion)(import_fi.FiChevronUp))`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`;
var DriverDown = (0, import_styled_components14.default)((0, import_framer_motion3.motion)(import_fi.FiChevronDown))`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`;
var DriverAccordion_default = DriverAccordion;

// app/components/driver/RequirementData.tsx
var requirementData = [
  {
    id: 1,
    title: "Download app and sign up",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 2,
    title: "Upload your documents",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 3,
    title: "Upload vehicle details",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 4,
    title: "Activate your account",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  }
];

// app/images/driver2.png
var driver2_default = "/build/_assets/driver2-4CVY7SOR.png";

// app/components/driver/DriverRequirements.tsx
var DriverRequirements = () => {
  const [selected, setSelected] = (0, import_react20.useState)(1);
  const selectRequirement = (number) => {
    if (selected === number) {
      return setSelected(null);
    }
    setSelected(number);
  };
  return /* @__PURE__ */ import_react20.default.createElement(Body14, null, /* @__PURE__ */ import_react20.default.createElement(Cover10, null, /* @__PURE__ */ import_react20.default.createElement(DriverCover, null, " ", /* @__PURE__ */ import_react20.default.createElement(DriverTitle3, null, "Driver\u2019s requirement"), /* @__PURE__ */ import_react20.default.createElement(DriverText3, null, "Wikki is a great way to be your own boss and make money.")), /* @__PURE__ */ import_react20.default.createElement(DriverGrid2, null, /* @__PURE__ */ import_react20.default.createElement(DriverNeeds, null, requirementData.map((data) => /* @__PURE__ */ import_react20.default.createElement(DriverAccordion_default, {
    key: data.id,
    number: data.id,
    text: data.title,
    content: data.text,
    click: () => selectRequirement(data.id),
    active: data.id === selected ? true : false
  }))), /* @__PURE__ */ import_react20.default.createElement(DriverImage2, null, /* @__PURE__ */ import_react20.default.createElement(DriverPhoto, {
    src: driver2_default,
    alt: "wikki"
  })))));
};
var Body14 = import_styled_components15.default.section`
  position: relative;
  z-index: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`;
var Cover10 = import_styled_components15.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  height: 100%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
var DriverCover = import_styled_components15.default.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin: 80px 0;
`;
var DriverTitle3 = (0, import_styled_components15.default)(Header2)`
  text-align: left;
`;
var DriverText3 = (0, import_styled_components15.default)(Body3)`
  text-align: left;
  margin: 8px 0;
`;
var DriverGrid2 = import_styled_components15.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DriverNeeds = import_styled_components15.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
var DriverImage2 = import_styled_components15.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  justify-content: center;
`;
var DriverPhoto = import_styled_components15.default.img`
  min-height: 500px;
  max-height: 700px;
  height: 100%;
  max-width: 627px;
  width: 100%;
  border-radius: 40px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: inherit;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
`;
var DriverRequirements_default = DriverRequirements;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\driver-requirements.tsx
var meta2 = () => ({
  charset: "utf-8",
  title: "Become a driver - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var driver = () => {
  return /* @__PURE__ */ import_react21.default.createElement(Body15, null, /* @__PURE__ */ import_react21.default.createElement(DriverHero_default, null), /* @__PURE__ */ import_react21.default.createElement(DriverAdvantage_default, null), /* @__PURE__ */ import_react21.default.createElement(DriverMessage_default2, null), /* @__PURE__ */ import_react21.default.createElement(DriverRequirements_default, null));
};
var Body15 = import_styled_components16.default.div``;
var driver_requirements_default = driver;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\how-it-works\driver.tsx
var driver_exports = {};
__export(driver_exports, {
  default: () => driver_default,
  meta: () => meta3
});
var import_react22 = __toESM(require("react"));
var import_styled_components17 = __toESM(require("styled-components"));
var import_react23 = require("@remix-run/react");

// app/images/app.png
var app_default = "/build/_assets/app-FN4PRKHT.png";

// app/images/icon.png
var icon_default = "/build/_assets/icon-C76T6UYX.png";

// app/images/bave.svg
var bave_default = "/build/_assets/bave-HY4I543D.svg";

// app/images/pay.png
var pay_default = "/build/_assets/pay-3AVD2MY5.png";

// app/images/route.png
var route_default = "/build/_assets/route-VXW45UB7.png";

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\how-it-works\driver.tsx
var meta3 = () => ({
  charset: "utf-8",
  title: "How it works driver - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var WorksDriver = () => {
  return /* @__PURE__ */ import_react22.default.createElement(Body16, null, /* @__PURE__ */ import_react22.default.createElement(Cover11, null, /* @__PURE__ */ import_react22.default.createElement(WorksSelector, null, /* @__PURE__ */ import_react22.default.createElement(Selector, null, /* @__PURE__ */ import_react22.default.createElement(Driver, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react22.default.createElement(SelectorText, null, "Rider ")), /* @__PURE__ */ import_react22.default.createElement(User, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react22.default.createElement(SelectorText, null, "Driver")))), /* @__PURE__ */ import_react22.default.createElement(WorksRow, null, /* @__PURE__ */ import_react22.default.createElement(TopRow, null, /* @__PURE__ */ import_react22.default.createElement(DownloadSection, null, /* @__PURE__ */ import_react22.default.createElement(DownloadCover, null, /* @__PURE__ */ import_react22.default.createElement(DownloadContent, null, /* @__PURE__ */ import_react22.default.createElement(DownloadNumber, null, /* @__PURE__ */ import_react22.default.createElement(NumberText2, null, "1")), /* @__PURE__ */ import_react22.default.createElement(DownloadText, null, /* @__PURE__ */ import_react22.default.createElement(DownloadTitle, null, "Download the app and sign up"), /* @__PURE__ */ import_react22.default.createElement(Downloadbody, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react22.default.createElement(DownloadApp, null, /* @__PURE__ */ import_react22.default.createElement("img", {
    src: app_default,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react22.default.createElement(BottomRow, null, /* @__PURE__ */ import_react22.default.createElement(SecondRow, null, /* @__PURE__ */ import_react22.default.createElement(SecondMask, {
    src: icon_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react22.default.createElement(BottomCover, null, /* @__PURE__ */ import_react22.default.createElement(SecondContent, null, /* @__PURE__ */ import_react22.default.createElement(SecondNumber, null, /* @__PURE__ */ import_react22.default.createElement(SecondText, null, "2")), /* @__PURE__ */ import_react22.default.createElement(SecondDownload, null, /* @__PURE__ */ import_react22.default.createElement(SecondTitle, null, "Pick up order, and deliver"), /* @__PURE__ */ import_react22.default.createElement(SecondPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react22.default.createElement(SecondImage, null, /* @__PURE__ */ import_react22.default.createElement("img", {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react22.default.createElement(ThirdRow, null, /* @__PURE__ */ import_react22.default.createElement(ThirdMask, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react22.default.createElement(ThirdBottomCover, null, /* @__PURE__ */ import_react22.default.createElement(ThirdContent, null, /* @__PURE__ */ import_react22.default.createElement(ThirdNumber, null, /* @__PURE__ */ import_react22.default.createElement(ThirdText, null, "3")), /* @__PURE__ */ import_react22.default.createElement(ThirdDownload, null, /* @__PURE__ */ import_react22.default.createElement(ThirdTitle, null, "Get paid and cashout"), /* @__PURE__ */ import_react22.default.createElement(ThirdPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react22.default.createElement(ThirdImage, null, /* @__PURE__ */ import_react22.default.createElement("img", {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body16 = import_styled_components17.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px 40px;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
  }
`;
var Cover11 = import_styled_components17.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector = import_styled_components17.default.div`
  height: 64px;
  max-width: 340px;
  margin: 40px auto;
  width: 100%;
  background: ${WikkiTheme.white};
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var User = (0, import_styled_components17.default)(import_react23.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.white};
  background: ${WikkiTheme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var Driver = (0, import_styled_components17.default)(import_react23.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.black};
  background: ${WikkiTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var SelectorText = (0, import_styled_components17.default)(SubTitle)``;
var WorksRow = import_styled_components17.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow = import_styled_components17.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow = import_styled_components17.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DownloadSection = import_styled_components17.default.div`
  max-height: 550px;
  height: 100%;
  min-height: 540px;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  border-radius: 40px;
  background: ${WikkiTheme.white};
`;
var DownloadCover = import_styled_components17.default.div`
  max-width: 972px;
  width: 100%;
  margin: 64px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    margin: 48px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`;
var DownloadContent = import_styled_components17.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber = import_styled_components17.default.span`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var NumberText2 = (0, import_styled_components17.default)(Header5)``;
var DownloadText = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle = (0, import_styled_components17.default)(Header3)``;
var Downloadbody = (0, import_styled_components17.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp = import_styled_components17.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
var SecondRow = import_styled_components17.default.div`
  max-height: 600px;
  height: 100%;
  min-height: 580px;
  max-width: 520px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  background: ${WikkiTheme.lightYelllow};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
var SecondMask = import_styled_components17.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -12px;
  position: absolute;
`;
var ThirdMask = import_styled_components17.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover = import_styled_components17.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent = import_styled_components17.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber = import_styled_components17.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var SecondText = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle = (0, import_styled_components17.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara = (0, import_styled_components17.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage = import_styled_components17.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;
    max-height: 400px;
  }

  img {
    height: 100%;
    width: 100%;
    min-height: 250px;
    max-height: 441px;
    max-width: 441px;
  }
`;
var ThirdRow = import_styled_components17.default.div`
  max-height: 600px;
  height: 100%;
  padding: 20px;
  position: relative;
  min-height: 580px;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background: ${WikkiTheme.darkRed};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var ThirdBottomCover = import_styled_components17.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent = import_styled_components17.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber = import_styled_components17.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var ThirdText = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara = (0, import_styled_components17.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload = import_styled_components17.default.div``;
var ThirdTitle = (0, import_styled_components17.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage = import_styled_components17.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;

  img {
    height: 100%;
    width: 100%;
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;

    max-height: 400px;
  }
`;
var driver_default = WorksDriver;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\how-it-works\index.tsx
var how_it_works_exports = {};
__export(how_it_works_exports, {
  default: () => how_it_works_default,
  meta: () => meta4
});
var import_react24 = __toESM(require("react"));
var import_styled_components18 = __toESM(require("styled-components"));
var import_react25 = require("@remix-run/react");

// app/images/mask.svg
var mask_default = "/build/_assets/mask-OMEBINKE.svg";

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\how-it-works\index.tsx
var meta4 = () => ({
  charset: "utf-8",
  title: "How it works users - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var index = () => {
  return /* @__PURE__ */ import_react24.default.createElement(Body17, null, /* @__PURE__ */ import_react24.default.createElement(Cover12, null, /* @__PURE__ */ import_react24.default.createElement(WorksSelector2, null, /* @__PURE__ */ import_react24.default.createElement(Selector2, null, /* @__PURE__ */ import_react24.default.createElement(User2, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react24.default.createElement(SelectorText2, null, "Rider")), /* @__PURE__ */ import_react24.default.createElement(Driver2, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react24.default.createElement(SelectorText2, null, "Driver")))), /* @__PURE__ */ import_react24.default.createElement(WorksRow2, null, /* @__PURE__ */ import_react24.default.createElement(TopRow2, null, /* @__PURE__ */ import_react24.default.createElement(DownloadSection2, null, /* @__PURE__ */ import_react24.default.createElement(DownloadCover2, null, /* @__PURE__ */ import_react24.default.createElement(DownloadContent2, null, /* @__PURE__ */ import_react24.default.createElement(DownloadNumber2, null, /* @__PURE__ */ import_react24.default.createElement(NumberText3, null, "1")), /* @__PURE__ */ import_react24.default.createElement(DownloadText2, null, /* @__PURE__ */ import_react24.default.createElement(DownloadTitle2, null, "Download the app and sign up"), /* @__PURE__ */ import_react24.default.createElement(Downloadbody2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react24.default.createElement(DownloadApp2, null, /* @__PURE__ */ import_react24.default.createElement(AppImage, {
    src: app_default,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react24.default.createElement(BottomRow2, null, /* @__PURE__ */ import_react24.default.createElement(SecondRow2, null, /* @__PURE__ */ import_react24.default.createElement(SecondMask2, {
    src: mask_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react24.default.createElement(BottomCover2, null, /* @__PURE__ */ import_react24.default.createElement(SecondContent2, null, /* @__PURE__ */ import_react24.default.createElement(SecondNumber2, null, /* @__PURE__ */ import_react24.default.createElement(SecondText2, null, "2")), /* @__PURE__ */ import_react24.default.createElement(SecondDownload2, null, /* @__PURE__ */ import_react24.default.createElement(SecondTitle2, null, "Request a pick", /* @__PURE__ */ import_react24.default.createElement("span", null, "up an"), "d choose destina", /* @__PURE__ */ import_react24.default.createElement("span", null, "tio"), "n"), /* @__PURE__ */ import_react24.default.createElement(SecondPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react24.default.createElement(SecondImage2, null, /* @__PURE__ */ import_react24.default.createElement(SecondLustration, {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react24.default.createElement(ThirdRow2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdMask2, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react24.default.createElement(ThirdBottomCover2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdContent2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdNumber2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdText2, null, "3")), /* @__PURE__ */ import_react24.default.createElement(ThirdDownload2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdTitle2, null, "Get item delivered and make payment"), /* @__PURE__ */ import_react24.default.createElement(ThirdPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react24.default.createElement(ThirdImage2, null, /* @__PURE__ */ import_react24.default.createElement(ThirdLustration, {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body17 = import_styled_components18.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px 40px;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
  }
`;
var Cover12 = import_styled_components18.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector2 = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector2 = import_styled_components18.default.div`
  height: 64px;
  max-width: 340px;
  margin: 40px auto;
  width: 100%;
  background: ${WikkiTheme.white};
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var User2 = (0, import_styled_components18.default)(import_react25.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.white};
  background: ${WikkiTheme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var Driver2 = (0, import_styled_components18.default)(import_react25.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.black};
  background: ${WikkiTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var SelectorText2 = (0, import_styled_components18.default)(SubTitle)``;
var WorksRow2 = import_styled_components18.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow2 = import_styled_components18.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow2 = import_styled_components18.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DownloadSection2 = import_styled_components18.default.div`
  max-height: 550px;
  height: 100%;
  min-height: 540px;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  border-radius: 40px;
  background: ${WikkiTheme.white};
`;
var DownloadCover2 = import_styled_components18.default.div`
  max-width: 972px;
  width: 100%;
  margin: 64px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    margin: 48px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`;
var DownloadContent2 = import_styled_components18.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber2 = import_styled_components18.default.span`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var NumberText3 = (0, import_styled_components18.default)(Header5)``;
var DownloadText2 = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle2 = (0, import_styled_components18.default)(Header3)``;
var Downloadbody2 = (0, import_styled_components18.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp2 = import_styled_components18.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;
`;
var AppImage = import_styled_components18.default.img`
  width: 100%;
  height: 100%;
`;
var SecondRow2 = import_styled_components18.default.div`
  max-height: 600px;
  height: 100%;
  min-height: 580px;
  max-width: 520px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  background: ${WikkiTheme.yellow};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var SecondMask2 = import_styled_components18.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -48px;
  position: absolute;
`;
var ThirdMask2 = import_styled_components18.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover2 = import_styled_components18.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent2 = import_styled_components18.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber2 = import_styled_components18.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var SecondText2 = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle2 = (0, import_styled_components18.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara2 = (0, import_styled_components18.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload2 = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage2 = import_styled_components18.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;
    max-height: 400px;
  }
`;
var SecondLustration = import_styled_components18.default.img`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
`;
var ThirdRow2 = import_styled_components18.default.div`
  max-height: 600px;
  height: 100%;
  padding: 20px;
  position: relative;
  min-height: 580px;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background: ${WikkiTheme.blue};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var ThirdBottomCover2 = import_styled_components18.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent2 = import_styled_components18.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber2 = import_styled_components18.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var ThirdText2 = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara2 = (0, import_styled_components18.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload2 = import_styled_components18.default.div``;
var ThirdTitle2 = (0, import_styled_components18.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage2 = import_styled_components18.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;

    max-height: 400px;
  }
`;
var ThirdLustration = import_styled_components18.default.img`
  height: 100%;
  width: 100%;
`;
var how_it_works_default = index;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\business.tsx
var business_exports = {};
__export(business_exports, {
  default: () => business_default,
  meta: () => meta5
});

// app/components/business/BusinessHero.tsx
var import_react26 = __toESM(require("react"));
var import_styled_components19 = __toESM(require("styled-components"));
var BusinessHero = () => {
  return /* @__PURE__ */ import_react26.default.createElement(Body18, null, /* @__PURE__ */ import_react26.default.createElement(Cover13, null, /* @__PURE__ */ import_react26.default.createElement(ContactHeader, null, /* @__PURE__ */ import_react26.default.createElement(ContactTitle, null, "Wikki loves your business. Wikki means business."), /* @__PURE__ */ import_react26.default.createElement(ContactText, null, "Everyone has their own way of learning and expressing creativity. Apple technology and resources empower every kind of educator \u2014 and every kind of student \u2014 to learn, create, and define their own success. Let\u2019s move the world forward."))));
};
var Body18 = import_styled_components19.default.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
var Cover13 = import_styled_components19.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`;
var ContactHeader = import_styled_components19.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 950px;
  width: 100%;
`;
var ContactTitle = (0, import_styled_components19.default)(Header1)`
  margin: 8px 0;
  text-align: center;
`;
var ContactText = (0, import_styled_components19.default)(Body1)`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;
var BusinessHero_default = BusinessHero;

// app/components/business/BusinessPurpose.tsx
var import_react27 = __toESM(require("react"));
var import_styled_components20 = __toESM(require("styled-components"));
var BusinessPurpose = () => {
  return /* @__PURE__ */ import_react27.default.createElement(Body19, null, /* @__PURE__ */ import_react27.default.createElement(Cover14, null, /* @__PURE__ */ import_react27.default.createElement(WaitingRow, null, /* @__PURE__ */ import_react27.default.createElement(WaitTitle, null, "And even better,")), /* @__PURE__ */ import_react27.default.createElement(DetailsGrid, null, /* @__PURE__ */ import_react27.default.createElement(BusinessRow, null, /* @__PURE__ */ import_react27.default.createElement(GridRight, null, /* @__PURE__ */ import_react27.default.createElement(GridImage, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756114/Customer-review_sok8a2.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react27.default.createElement(GridLeft, null, /* @__PURE__ */ import_react27.default.createElement(RideTitle, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react27.default.createElement(RideText2, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates."))), " ", /* @__PURE__ */ import_react27.default.createElement(BusinessRow, null, /* @__PURE__ */ import_react27.default.createElement(GridRight, null, /* @__PURE__ */ import_react27.default.createElement(GridImage, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-truck-delivery_r8wkyo.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react27.default.createElement(GridLeft, null, /* @__PURE__ */ import_react27.default.createElement(RideTitle, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react27.default.createElement(RideText2, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))), " "));
};
var Body19 = import_styled_components20.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0 0 0;
  background: ${WikkiTheme.smokeWhite};
  color: ${WikkiTheme.black};
`;
var Cover14 = import_styled_components20.default.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  color: ${WikkiTheme.black};
`;
var DetailsGrid = import_styled_components20.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
`;
var BusinessRow = import_styled_components20.default.div`
  max-width: 1232px;
  min-height: 550px;
  display: grid;
  width: 100%;

  background: ${WikkiTheme.white};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  margin: 24px auto;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft = import_styled_components20.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
`;
var RideTitle = (0, import_styled_components20.default)(Header3)`
  color: ${WikkiTheme.black};
`;
var GridRight = import_styled_components20.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
`;
var GridImage = import_styled_components20.default.img`
  max-width: 650px;
  object-fit: cover;
  max-height: 550px;
  min-height: 250px;
  height: 100%;

  width: 100%;
`;
var RideText2 = (0, import_styled_components20.default)(Body2)`
  margin: 16px 0;
`;
var WaitingRow = import_styled_components20.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 32px auto;
`;
var WaitTitle = (0, import_styled_components20.default)(Header1)`
  margin: 16px 0;
  color: ${WikkiTheme.black};
  text-align: center;
`;
var BusinessPurpose_default = BusinessPurpose;

// app/components/business/BusinessRid.tsx
var import_react28 = __toESM(require("react"));
var import_styled_components21 = __toESM(require("styled-components"));
var BusinessRid = () => {
  return /* @__PURE__ */ import_react28.default.createElement(Body20, null, /* @__PURE__ */ import_react28.default.createElement(Cover15, null, /* @__PURE__ */ import_react28.default.createElement(WaitingRow2, null, /* @__PURE__ */ import_react28.default.createElement(WaitTitle2, null, "Get rid of canceled orders and late deliveries"), /* @__PURE__ */ import_react28.default.createElement(WaitText, null, "Everyone has their own way of learning and expressing creativity. Apple technology and resources empower every kind of educator \u2014 and every kind of student \u2014 to learn, create, and define their own success. Let\u2019s move the world forward.")), /* @__PURE__ */ import_react28.default.createElement(DetailsGrid2, null, /* @__PURE__ */ import_react28.default.createElement(GridRight2, null, /* @__PURE__ */ import_react28.default.createElement(GridImage2, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-delivery_zq6i3l.png",
    alt: "use wikki"
  }), /* @__PURE__ */ import_react28.default.createElement(RideTitle2, null, "We help you get rid of late deliveries"), /* @__PURE__ */ import_react28.default.createElement(RideText3, null, "No one likes late deliveries")), " ", /* @__PURE__ */ import_react28.default.createElement(GridRight2, null, /* @__PURE__ */ import_react28.default.createElement(GridImage2, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-truck-delivery_r8wkyo.png",
    alt: "use wikki"
  }), /* @__PURE__ */ import_react28.default.createElement(RideTitle2, null, "We stop canceled orders due to no pickup/dispatch"), /* @__PURE__ */ import_react28.default.createElement(RideText3, null, "No one likes late deliveries")))));
};
var Body20 = import_styled_components21.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  background: ${WikkiTheme.black};
  color: ${WikkiTheme.white};
`;
var Cover15 = import_styled_components21.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.white};
`;
var DetailsGrid2 = import_styled_components21.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var RideTitle2 = (0, import_styled_components21.default)(Header3)`
  color: ${WikkiTheme.white};
  margin: 24px 0 16px 0;
`;
var GridRight2 = import_styled_components21.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 24px auto;
  max-width: 400px;
  width: 100%;
`;
var GridImage2 = import_styled_components21.default.img`
  max-width: 300px;
  border-radius: 0px;
  max-height: 250px;
  min-height: 150px;
  height: 100%;
  outline: none;
  object-fit: contain;
  width: 100%;
`;
var RideText3 = (0, import_styled_components21.default)(Body3)`
  margin: 16px 0;
`;
var WaitingRow2 = import_styled_components21.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 850px;
  margin: 32px auto;
`;
var WaitTitle2 = (0, import_styled_components21.default)(Header2)`
  margin: 16px auto;
  max-width: 600px;
  color: ${WikkiTheme.white};
  text-align: center;
`;
var WaitText = (0, import_styled_components21.default)(Body1)`
  color: ${WikkiTheme.white};
  text-align: center;
`;
var BusinessRid_default = BusinessRid;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\business.tsx
var import_react29 = __toESM(require("react"));
var import_styled_components22 = __toESM(require("styled-components"));
var meta5 = () => ({
  charset: "utf-8",
  title: "Business Using wikki - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var business = () => {
  return /* @__PURE__ */ import_react29.default.createElement(Body21, null, " ", /* @__PURE__ */ import_react29.default.createElement(BusinessHero_default, null), /* @__PURE__ */ import_react29.default.createElement(BusinessRid_default, null), /* @__PURE__ */ import_react29.default.createElement(BusinessPurpose_default, null));
};
var Body21 = import_styled_components22.default.div``;
var business_default = business;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\dispatch.tsx
var dispatch_exports = {};
__export(dispatch_exports, {
  default: () => dispatch_default,
  meta: () => meta6
});

// app/components/dispatch/DispatchHero.tsx
var import_react30 = __toESM(require("react"));
var import_styled_components23 = __toESM(require("styled-components"));
var DispatchHero = () => {
  return /* @__PURE__ */ import_react30.default.createElement(Body22, null, " ", /* @__PURE__ */ import_react30.default.createElement(MoreOverlay, null), /* @__PURE__ */ import_react30.default.createElement(Cover16, null, /* @__PURE__ */ import_react30.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /* @__PURE__ */ import_react30.default.createElement("source", {
    src: "https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.webm",
    type: "video/webm"
  }), /* @__PURE__ */ import_react30.default.createElement("source", {
    src: "https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.mp4",
    type: "video/mp4"
  })), /* @__PURE__ */ import_react30.default.createElement(ContactHeader2, null, /* @__PURE__ */ import_react30.default.createElement(ContactTitle2, null, "Wikki's dispatch is here to help you"))));
};
var Body22 = import_styled_components23.default.section`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: cover;
  }
`;
var Cover16 = import_styled_components23.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
var MoreOverlay = import_styled_components23.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var ContactHeader2 = import_styled_components23.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 4;
`;
var ContactTitle2 = (0, import_styled_components23.default)(Header1)`
  margin: 8px 0;
  color: ${WikkiTheme.white};
  text-align: center;
`;
var DispatchHero_default = DispatchHero;

// app/components/dispatch/DispatchPurpose.tsx
var import_react31 = __toESM(require("react"));
var import_styled_components24 = __toESM(require("styled-components"));
var DispatchPurpose = () => {
  return /* @__PURE__ */ import_react31.default.createElement(Body23, null, /* @__PURE__ */ import_react31.default.createElement(Cover17, null, /* @__PURE__ */ import_react31.default.createElement(WaitingRow3, null, /* @__PURE__ */ import_react31.default.createElement(WaitTitle3, null, "What's better than having items sent out successfully")), /* @__PURE__ */ import_react31.default.createElement(DetailsGrid3, null, /* @__PURE__ */ import_react31.default.createElement(BusinessRow2, null, /* @__PURE__ */ import_react31.default.createElement(GridRight3, null, /* @__PURE__ */ import_react31.default.createElement(GridImage3, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756114/Product-selection_lnodvx.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react31.default.createElement(GridLeft2, null, /* @__PURE__ */ import_react31.default.createElement(RideTitle3, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react31.default.createElement(RideText4, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates."))), " ", /* @__PURE__ */ import_react31.default.createElement(BusinessRow2, null, /* @__PURE__ */ import_react31.default.createElement(GridRight3, null, /* @__PURE__ */ import_react31.default.createElement(GridImage3, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Delivery-robot_pek0pc.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react31.default.createElement(GridLeft2, null, /* @__PURE__ */ import_react31.default.createElement(RideTitle3, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react31.default.createElement(RideText4, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))), " "));
};
var Body23 = import_styled_components24.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`;
var Cover17 = import_styled_components24.default.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
  color: ${WikkiTheme.black};
`;
var DetailsGrid3 = import_styled_components24.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
`;
var BusinessRow2 = import_styled_components24.default.div`
  max-width: 1232px;
  min-height: 450px;
  display: grid;
  width: 100%;

  background: ${WikkiTheme.white};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  margin: 8px auto;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft2 = import_styled_components24.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
`;
var RideTitle3 = (0, import_styled_components24.default)(Header3)`
  color: ${WikkiTheme.black};
`;
var GridRight3 = import_styled_components24.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;
var GridImage3 = import_styled_components24.default.img`
  max-width: 650px;
  object-fit: cover;
  max-height: 550px;
  min-height: 250px;
  height: 100%;

  width: 100%;
`;
var RideText4 = (0, import_styled_components24.default)(Body2)`
  margin: 16px 0;
`;
var WaitingRow3 = import_styled_components24.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 32px auto;
`;
var WaitTitle3 = (0, import_styled_components24.default)(Header2)`
  margin: 16px 0;
  color: ${WikkiTheme.black};
  text-align: center;
`;
var DispatchPurpose_default = DispatchPurpose;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\dispatch.tsx
var import_react32 = __toESM(require("react"));
var import_styled_components25 = __toESM(require("styled-components"));
var meta6 = () => ({
  charset: "utf-8",
  title: "Wikki's Dispatch - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var Dispatch = () => {
  return /* @__PURE__ */ import_react32.default.createElement(Body24, null, /* @__PURE__ */ import_react32.default.createElement(DispatchHero_default, null), /* @__PURE__ */ import_react32.default.createElement(DispatchPurpose_default, null));
};
var Body24 = import_styled_components25.default.section``;
var dispatch_default = Dispatch;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\download.tsx
var download_exports = {};
__export(download_exports, {
  default: () => download_default,
  meta: () => meta7
});

// app/components/download/DownloadHero.tsx
var import_react33 = __toESM(require("react"));
var import_styled_components26 = __toESM(require("styled-components"));
var DownloadHero = () => {
  return /* @__PURE__ */ import_react33.default.createElement(Body25, null, /* @__PURE__ */ import_react33.default.createElement(Cover18, null, /* @__PURE__ */ import_react33.default.createElement(ContactHeader3, null, /* @__PURE__ */ import_react33.default.createElement(ContactTitle3, null, "Wikki downloads"), /* @__PURE__ */ import_react33.default.createElement(ContactText2, null, "Wikki has made it easy for you to get started"))));
};
var Body25 = import_styled_components26.default.section`
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
var Cover18 = import_styled_components26.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`;
var ContactHeader3 = import_styled_components26.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 950px;
  width: 100%;
`;
var ContactTitle3 = (0, import_styled_components26.default)(LargeHeader)`
  margin: 8px 0;
  text-align: center;
`;
var ContactText2 = (0, import_styled_components26.default)(Body1)`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;
var DownloadHero_default = DownloadHero;

// app/components/download/DownloadPlatforms.tsx
var import_react34 = __toESM(require("react"));
var import_styled_components27 = __toESM(require("styled-components"));
var DownloadPlatforms = () => {
  return /* @__PURE__ */ import_react34.default.createElement(Body26, null, /* @__PURE__ */ import_react34.default.createElement(Cover19, null, /* @__PURE__ */ import_react34.default.createElement(DetailsGrid4, null, /* @__PURE__ */ import_react34.default.createElement(GridRight4, null, /* @__PURE__ */ import_react34.default.createElement(UsersCover, null, " ", /* @__PURE__ */ import_react34.default.createElement(GridImage4, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Drone-delivery_pdpfbb.png",
    alt: "use wikki"
  })), /* @__PURE__ */ import_react34.default.createElement(RideTitle4, null, "Wikki User/Companies Mobile app"), /* @__PURE__ */ import_react34.default.createElement("a", {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", /* @__PURE__ */ import_react34.default.createElement(RideText5, null, "Wikki Users/Companies for iOS")), /* @__PURE__ */ import_react34.default.createElement("a", {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", /* @__PURE__ */ import_react34.default.createElement(RideText5, null, "Wikki Users/Companies for Android"))), " ", /* @__PURE__ */ import_react34.default.createElement(GridRight4, null, /* @__PURE__ */ import_react34.default.createElement(Driver3, null, " ", /* @__PURE__ */ import_react34.default.createElement(GridImage4, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Pizza-delivery_py2azx.png",
    alt: "use wikki"
  })), /* @__PURE__ */ import_react34.default.createElement(RideTitle4, null, "Wikki Drivers Mobile app"), /* @__PURE__ */ import_react34.default.createElement("a", {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", /* @__PURE__ */ import_react34.default.createElement(RideText5, null, "Wikki Drivers for iOS")), /* @__PURE__ */ import_react34.default.createElement("a", {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " ", /* @__PURE__ */ import_react34.default.createElement(RideText5, null, "Wikki Drivers for Android"))), " ")));
};
var Body26 = import_styled_components27.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 56px 16px;

  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`;
var Cover19 = import_styled_components27.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.white};
`;
var DetailsGrid4 = import_styled_components27.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  place-items: center;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
  }
`;
var UsersCover = import_styled_components27.default.div`
  max-width: 900px;
  height: 450px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.userDownload};
`;
var Driver3 = import_styled_components27.default.div`
  max-width: 900px;
  height: 450px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.driverDownload};
`;
var RideTitle4 = (0, import_styled_components27.default)(Header3)`
  color: ${WikkiTheme.black};
  margin: 24px 0 16px 0;
`;
var GridRight4 = import_styled_components27.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;

  a {
    color: ${WikkiTheme.blue};
    font-weight: 500;
    transition: 0.3s ease-in;

    :hover {
      color: ${WikkiTheme.secondary};
    }
  }
`;
var GridImage4 = import_styled_components27.default.img`
  max-width: 350px;
  border-radius: 0px;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
var RideText5 = (0, import_styled_components27.default)(Body3)`
  margin: 8px 0;
`;
var DownloadPlatforms_default = DownloadPlatforms;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\download.tsx
var import_react35 = __toESM(require("react"));
var import_styled_components28 = __toESM(require("styled-components"));
var meta7 = () => ({
  charset: "utf-8",
  title: "Download wikki for iOS, Android - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var download = () => {
  return /* @__PURE__ */ import_react35.default.createElement(Body27, null, /* @__PURE__ */ import_react35.default.createElement(DownloadHero_default, null), /* @__PURE__ */ import_react35.default.createElement(DownloadPlatforms_default, null));
};
var Body27 = import_styled_components28.default.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
var download_default = download;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  meta: () => meta8
});
var import_react39 = __toESM(require("react"));
var import_styled_components32 = __toESM(require("styled-components"));

// app/components/contact/ContactForm.tsx
var import_react37 = __toESM(require("react"));
var import_styled_components30 = __toESM(require("styled-components"));
var Yup = __toESM(require("yup"));

// app/styles/InputStyles.tsx
var import_formik = require("formik");
var import_styled_components29 = __toESM(require("styled-components"));
var TextInput = (0, import_styled_components29.default)(import_formik.Field)`
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
`;
var TextArea = (0, import_styled_components29.default)(import_formik.Field)`
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
`;

// app/components/contact/ContactForm.tsx
var import_axios = __toESM(require("axios"));

// app/constants/Constant.tsx
var host = false ? "http://127.0.0.1:8000/" : "https://www.api.mywikki.com/";
var endpoint = `${host}`;
var ContactURL = `${host}api/contact/`;

// app/components/contact/ContactForm.tsx
var import_react_toastify = require("react-toastify");

// app/components/SuccessLoading.tsx
var import_react_spinner_material = __toESM(require("react-spinner-material"));
var import_react36 = __toESM(require("react"));
var SuccessLoading = class extends import_react36.Component {
  render() {
    return /* @__PURE__ */ import_react36.default.createElement("div", null, /* @__PURE__ */ import_react36.default.createElement(import_react_spinner_material.default, {
      radius: 30,
      color: "#fff",
      stroke: 4,
      visible: true
    }));
  }
};

// app/components/contact/ContactForm.tsx
var import_formik2 = require("formik");
var ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required")
  });
  const submitForm = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    import_axios.default.post(ContactURL, { values }).then((res) => {
      import_react_toastify.toast.success("Message sent successfully");
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    }).catch((err) => {
      onSubmitProps.setSubmitting(false);
    });
  };
  return /* @__PURE__ */ import_react37.default.createElement(Body28, null, /* @__PURE__ */ import_react37.default.createElement(Cover20, null, /* @__PURE__ */ import_react37.default.createElement(FormTitle, null, "Send us a message"), /* @__PURE__ */ import_react37.default.createElement(import_formik2.Formik, {
    initialValues: { email: "", name: "", message: "" },
    validationSchema: ContactSchema,
    onSubmit: submitForm
  }, ({
    errors,
    isSubmitting,
    values,
    handleChange,
    handleBlur,
    touched
  }) => /* @__PURE__ */ import_react37.default.createElement(FormForm, null, /* @__PURE__ */ import_react37.default.createElement(FormColumn, null, /* @__PURE__ */ import_react37.default.createElement(FormLabel, {
    htmlFor: "name"
  }, " ", /* @__PURE__ */ import_react37.default.createElement(LabelText, null, "Name")), /* @__PURE__ */ import_react37.default.createElement(FormInput, {
    id: "name",
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "text"
  }), errors.name && touched.name && /* @__PURE__ */ import_react37.default.createElement(FormError, null, /* @__PURE__ */ import_react37.default.createElement(FormErrorText, null, "Your name is required"))), /* @__PURE__ */ import_react37.default.createElement(FormColumn, null, /* @__PURE__ */ import_react37.default.createElement(FormLabel, {
    htmlFor: "email"
  }, " ", /* @__PURE__ */ import_react37.default.createElement(LabelText, null, "Email")), /* @__PURE__ */ import_react37.default.createElement(FormInput, {
    id: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "email"
  }), errors.email && touched.email && /* @__PURE__ */ import_react37.default.createElement(FormError, null, /* @__PURE__ */ import_react37.default.createElement(FormErrorText, null, "Your email is required"))), /* @__PURE__ */ import_react37.default.createElement(FormColumn, null, /* @__PURE__ */ import_react37.default.createElement(FormLabel, {
    htmlFor: "message"
  }, " ", /* @__PURE__ */ import_react37.default.createElement(LabelText, null, "Message")), /* @__PURE__ */ import_react37.default.createElement(FormArea, {
    id: "message",
    value: values.message,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "textarea",
    placeholder: "Type your message"
  }), errors.message && touched.message && /* @__PURE__ */ import_react37.default.createElement(FormError, null, /* @__PURE__ */ import_react37.default.createElement(FormErrorText, null, "Your message is required"))), /* @__PURE__ */ import_react37.default.createElement(FormButtonWrap, null, /* @__PURE__ */ import_react37.default.createElement(FormButtonMain, {
    type: "submit"
  }, isSubmitting ? /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(SuccessLoading, null)) : /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, "Send")))))));
};
var Body28 = import_styled_components30.default.div`
  width: 100%;
  min-height: 900px;
  background: ${WikkiTheme.snowWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  padding: 80px 0;
`;
var Cover20 = import_styled_components30.default.div`
  min-height: 500px;
  max-width: 550px;

  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 0 auto;
  background: ${WikkiTheme.white};
  padding: 16px;
`;
var FormTitle = (0, import_styled_components30.default)(Header3)`
  margin: 40px 0 56px 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 32px 0 40px 0;
  }
`;
var FormForm = (0, import_styled_components30.default)(import_formik2.Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
var FormColumn = import_styled_components30.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 16px auto;
  max-width: 450px;
`;
var LabelText = (0, import_styled_components30.default)(SubTitle)`
  color: ${WikkiTheme.dark};
  margin: 10px 0;
`;
var FormLabel = import_styled_components30.default.label`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormInput = (0, import_styled_components30.default)(TextInput)``;
var FormArea = (0, import_styled_components30.default)(TextArea)``;
var FormError = import_styled_components30.default.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormErrorText = (0, import_styled_components30.default)(SubTitleSmall)`
  color: ${WikkiTheme.red};
`;
var FormButtonWrap = import_styled_components30.default.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var FormButtonMain = (0, import_styled_components30.default)(FormButton)``;
var ContactForm_default = ContactForm;

// app/components/contact/ContactHero.tsx
var import_react38 = __toESM(require("react"));
var import_styled_components31 = __toESM(require("styled-components"));
var ContactHero = () => {
  return /* @__PURE__ */ import_react38.default.createElement(Body29, null, /* @__PURE__ */ import_react38.default.createElement(Cover21, null, /* @__PURE__ */ import_react38.default.createElement(ContactHeader4, null, /* @__PURE__ */ import_react38.default.createElement(ContactTitle4, null, "How can we help?"), /* @__PURE__ */ import_react38.default.createElement(ContactText3, null, "Looking for the solution to your logistics needs or answers? Fill out the contact form and we will be in touch."))));
};
var Body29 = import_styled_components31.default.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
var Cover21 = import_styled_components31.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`;
var ContactHeader4 = import_styled_components31.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
var ContactTitle4 = (0, import_styled_components31.default)(Header1)`
  margin: 8px 0;
  text-align: center;
`;
var ContactText3 = (0, import_styled_components31.default)(Body1)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;
var ContactHero_default = ContactHero;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\contact.tsx
var meta8 = () => ({
  charset: "utf-8",
  title: "Contact Us - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var contact = () => {
  return /* @__PURE__ */ import_react39.default.createElement(Body30, null, /* @__PURE__ */ import_react39.default.createElement(ContactHero_default, null), /* @__PURE__ */ import_react39.default.createElement(ContactForm_default, null));
};
var Body30 = import_styled_components32.default.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
var contact_default = contact;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\pick-up.tsx
var pick_up_exports = {};
__export(pick_up_exports, {
  default: () => pick_up_default,
  meta: () => meta9
});

// app/components/pick/PickupHero.tsx
var import_react40 = __toESM(require("react"));
var import_styled_components33 = __toESM(require("styled-components"));
var PickupHero = () => {
  return /* @__PURE__ */ import_react40.default.createElement(Body31, null, " ", /* @__PURE__ */ import_react40.default.createElement(MoreOverlay2, null), /* @__PURE__ */ import_react40.default.createElement(Cover22, null, /* @__PURE__ */ import_react40.default.createElement("video", {
    autoPlay: true,
    loop: true,
    playsInline: true
  }, /* @__PURE__ */ import_react40.default.createElement("source", {
    src: "https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.webm",
    type: "video/webm"
  }), /* @__PURE__ */ import_react40.default.createElement("source", {
    src: "https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.mp4",
    type: "video/mp4"
  })), /* @__PURE__ */ import_react40.default.createElement(ContactHeader5, null, /* @__PURE__ */ import_react40.default.createElement(ContactTitle5, null, "Wikki's Pickup is here to help you"))));
};
var Body31 = import_styled_components33.default.section`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: cover;
  }
`;
var Cover22 = import_styled_components33.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
var MoreOverlay2 = import_styled_components33.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var ContactHeader5 = import_styled_components33.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 4;
`;
var ContactTitle5 = (0, import_styled_components33.default)(Header1)`
  margin: 8px 0;
  color: ${WikkiTheme.white};
  text-align: center;
`;
var PickupHero_default = PickupHero;

// app/components/pick/PickupPurpose.tsx
var import_react41 = __toESM(require("react"));
var import_styled_components34 = __toESM(require("styled-components"));
var PickupPurpose = () => {
  return /* @__PURE__ */ import_react41.default.createElement(Body32, null, /* @__PURE__ */ import_react41.default.createElement(Cover23, null, /* @__PURE__ */ import_react41.default.createElement(WaitingRow4, null, /* @__PURE__ */ import_react41.default.createElement(WaitTitle4, null, "Sit back while we get your stuffs picked for you.")), /* @__PURE__ */ import_react41.default.createElement(DetailsGrid5, null, /* @__PURE__ */ import_react41.default.createElement(BusinessRow3, null, /* @__PURE__ */ import_react41.default.createElement(GridRight5, null, /* @__PURE__ */ import_react41.default.createElement(GridImage5, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Groceries-delivery_zq6i3l.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react41.default.createElement(GridLeft3, null, /* @__PURE__ */ import_react41.default.createElement(RideTitle5, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react41.default.createElement(RideText6, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates."))), " ", /* @__PURE__ */ import_react41.default.createElement(BusinessRow3, null, /* @__PURE__ */ import_react41.default.createElement(GridRight5, null, /* @__PURE__ */ import_react41.default.createElement(GridImage5, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Order-delivered_dqb2dq.png",
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react41.default.createElement(GridLeft3, null, /* @__PURE__ */ import_react41.default.createElement(RideTitle5, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react41.default.createElement(RideText6, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))), " "));
};
var Body32 = import_styled_components34.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`;
var Cover23 = import_styled_components34.default.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
  color: ${WikkiTheme.black};
`;
var DetailsGrid5 = import_styled_components34.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
`;
var BusinessRow3 = import_styled_components34.default.div`
  max-width: 1232px;
  min-height: 450px;
  display: grid;
  width: 100%;

  background: ${WikkiTheme.white};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  margin: 8px auto;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft3 = import_styled_components34.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
`;
var RideTitle5 = (0, import_styled_components34.default)(Header3)`
  color: ${WikkiTheme.black};
`;
var GridRight5 = import_styled_components34.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;
var GridImage5 = import_styled_components34.default.img`
  max-width: 650px;
  object-fit: cover;
  max-height: 550px;
  min-height: 250px;
  height: 100%;

  width: 100%;
`;
var RideText6 = (0, import_styled_components34.default)(Body2)`
  margin: 16px 0;
`;
var WaitingRow4 = import_styled_components34.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 32px auto;
`;
var WaitTitle4 = (0, import_styled_components34.default)(Header2)`
  margin: 16px 0;
  color: ${WikkiTheme.black};
  text-align: center;
`;
var PickupPurpose_default = PickupPurpose;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\pick-up.tsx
var import_react42 = __toESM(require("react"));
var import_styled_components35 = __toESM(require("styled-components"));
var meta9 = () => ({
  charset: "utf-8",
  title: "Wikki's Pick Up - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var Pickup = () => {
  return /* @__PURE__ */ import_react42.default.createElement(Body33, null, /* @__PURE__ */ import_react42.default.createElement(PickupHero_default, null), /* @__PURE__ */ import_react42.default.createElement(PickupPurpose_default, null));
};
var Body33 = import_styled_components35.default.section``;
var pick_up_default = Pickup;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  meta: () => meta10
});
var import_styled_components41 = __toESM(require("styled-components"));

// app/components/about/AboutBusiness.tsx
var import_react43 = __toESM(require("react"));
var import_styled_components36 = __toESM(require("styled-components"));

// app/images/delivery01.png
var delivery01_default = "/build/_assets/delivery01-BBMAVTUQ.png";

// app/images/delivery02.png
var delivery02_default = "/build/_assets/delivery02-XGBTQ7GE.png";

// app/components/about/AboutBusiness.tsx
var AboutBusiness = () => {
  return /* @__PURE__ */ import_react43.default.createElement(Body34, null, /* @__PURE__ */ import_react43.default.createElement(Cover24, null, /* @__PURE__ */ import_react43.default.createElement(BusinesInfo, null, /* @__PURE__ */ import_react43.default.createElement(BusinessText, null, "What more Do we offer you")), /* @__PURE__ */ import_react43.default.createElement(DetailsGrid6, null, /* @__PURE__ */ import_react43.default.createElement(GridRight6, null, " ", /* @__PURE__ */ import_react43.default.createElement(GridCover, null, /* @__PURE__ */ import_react43.default.createElement(RideTitle6, null, "Track your order"), /* @__PURE__ */ import_react43.default.createElement(RideText7, null, "Real time order & package tracking"))), /* @__PURE__ */ import_react43.default.createElement(GridLeft4, null, /* @__PURE__ */ import_react43.default.createElement(GridCover, null, /* @__PURE__ */ import_react43.default.createElement(RideTitle6, null, "Quick delivery"), /* @__PURE__ */ import_react43.default.createElement(RideText7, null, "Deliver items to your customers without hassle"))))));
};
var Body34 = import_styled_components36.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 24px 0;
  }
`;
var Cover24 = import_styled_components36.default.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var BusinesInfo = import_styled_components36.default.div`
  max-width: 400px;
  width: 100%;
  margin: 32px 0;
`;
var BusinessText = (0, import_styled_components36.default)(Header2)`
  text-transform: capitalize;

  @media only screen and (max-width: 450px) {
    text-align: center;
  }
`;
var DetailsGrid6 = import_styled_components36.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  gap: 16px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 850px) {
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
var GridLeft4 = import_styled_components36.default.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery01_default}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`;
var GridCover = import_styled_components36.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 64px 0;
  z-index: 3;
`;
var RideTitle6 = (0, import_styled_components36.default)(Header3)`
  color: ${WikkiTheme.white};
  margin: 0;
`;
var GridRight6 = import_styled_components36.default.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery02_default}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`;
var RideText7 = (0, import_styled_components36.default)(Body3)`
  margin: 16px 0;
  color: ${WikkiTheme.white};
`;
var AboutBusiness_default = AboutBusiness;

// app/components/about/AboutDelivery.tsx
var import_react44 = __toESM(require("react"));
var import_styled_components37 = __toESM(require("styled-components"));
var AboutDelivery = () => {
  return /* @__PURE__ */ import_react44.default.createElement(Body35, null, /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react44.default.createElement(Cover25, null, /* @__PURE__ */ import_react44.default.createElement(RideText8, null, "Delivery made easy")));
};
var Body35 = import_styled_components37.default.div`
  height: 276px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 200px;
  }
`;
var animation2 = import_styled_components37.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover25 = import_styled_components37.default.div`
  animation: ${animation2} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText8 = (0, import_styled_components37.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var AboutDelivery_default = AboutDelivery;

// app/components/about/AboutDetails.tsx
var import_react45 = __toESM(require("react"));
var import_styled_components38 = __toESM(require("styled-components"));

// app/images/purpose02.png
var purpose02_default = "/build/_assets/purpose02-RLNMTGP4.png";

// app/images/purpose01.png
var purpose01_default = "/build/_assets/purpose01-7HL33MBO.png";

// app/components/about/AboutDetails.tsx
var AboutDetails = () => {
  return /* @__PURE__ */ import_react45.default.createElement(Body36, null, /* @__PURE__ */ import_react45.default.createElement(Cover26, null, /* @__PURE__ */ import_react45.default.createElement(DetailsGrid7, null, /* @__PURE__ */ import_react45.default.createElement(GridLeft5, null, /* @__PURE__ */ import_react45.default.createElement(RideTitle7, null, "Waiting is boring"), /* @__PURE__ */ import_react45.default.createElement(RideText9, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")), /* @__PURE__ */ import_react45.default.createElement(GridRight7, null, /* @__PURE__ */ import_react45.default.createElement(GridImage6, {
    src: purpose02_default,
    alt: "use wikki"
  })), " "), " ", /* @__PURE__ */ import_react45.default.createElement(DetailsGrid7, null, /* @__PURE__ */ import_react45.default.createElement(GridRight7, null, /* @__PURE__ */ import_react45.default.createElement(GridImage6, {
    src: purpose01_default,
    alt: "use wikki"
  })), /* @__PURE__ */ import_react45.default.createElement(GridLeft5, null, /* @__PURE__ */ import_react45.default.createElement(RideTitle7, null, "Our Mission"), /* @__PURE__ */ import_react45.default.createElement(RideText9, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))));
};
var Body36 = import_styled_components38.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 24px 0;
  }
`;
var Cover26 = import_styled_components38.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DetailsGrid7 = import_styled_components38.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft5 = import_styled_components38.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;
var RideTitle7 = (0, import_styled_components38.default)(Header2)``;
var GridRight7 = import_styled_components38.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var GridImage6 = import_styled_components38.default.img`
  max-width: 550px;
  border-radius: 20px;
  max-height: 630px;
  min-height: 300px;
  height: 100%;
  outline: none;
  width: 100%;
`;
var RideText9 = (0, import_styled_components38.default)(Body3)`
  margin: 16px 0;
`;
var AboutDetails_default = AboutDetails;

// app/components/about/AboutHero.tsx
var import_react46 = __toESM(require("react"));
var import_styled_components39 = __toESM(require("styled-components"));
var AboutHero = () => {
  return /* @__PURE__ */ import_react46.default.createElement(Body37, null, /* @__PURE__ */ import_react46.default.createElement(MoreOverlay3, null), /* @__PURE__ */ import_react46.default.createElement(Cover27, null, /* @__PURE__ */ import_react46.default.createElement(MoreTitle, null, "ABOUT WIKKI"), /* @__PURE__ */ import_react46.default.createElement(CoverImage, null, /* @__PURE__ */ import_react46.default.createElement(AboutImage, {
    src: main_default,
    alt: "the wikki my wikki"
  })), /* @__PURE__ */ import_react46.default.createElement(CoverDets, null, /* @__PURE__ */ import_react46.default.createElement(CoverTitle, null, "Robust delivery and pickup for Nigeria"), /* @__PURE__ */ import_react46.default.createElement(CoverText, null, "Wikki is a technology company on a mission to power the digital economy in Africa, using open banking as a layer for financial data, identity data, and bank transfer payments for businesses."))));
};
var Body37 = import_styled_components39.default.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  color: ${WikkiTheme.white};
  width: 100%;

  margin: 0;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay3 = import_styled_components39.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${WikkiTheme.primary};
  height: 500px;
  @media only screen and (max-width: 650px) {
    height: 300px;
  }
`;
var Cover27 = import_styled_components39.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1232px;
  width: 100%;
  margin: 120px auto 80px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 650px) {
    margin: 92px auto 56 auto;
  }
`;
var MoreTitle = (0, import_styled_components39.default)(Header1)`
  margin: 16px 0;
  text-align: left;
  @media only screen and (max-width: 650px) {
    margin: 8px 0;
  }
`;
var CoverImage = import_styled_components39.default.div`
  min-height: 350px;
  max-width: 1232px;
  width: 100%;
  margin: 48px auto;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
    margin: 24px auto;
  }
`;
var AboutImage = import_styled_components39.default.img`
  width: 100%;
  min-height: 350px;
  object-fit: cover;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
  }
`;
var CoverDets = import_styled_components39.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 24px auto;
  @media only screen and (max-width: 650px) {
    max-width: 500px;
  }
`;
var CoverTitle = (0, import_styled_components39.default)(Header1)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var CoverText = (0, import_styled_components39.default)(Body2)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var AboutHero_default = AboutHero;

// app/components/about/AboutPurpose.tsx
var import_react47 = __toESM(require("react"));
var import_styled_components40 = __toESM(require("styled-components"));

// app/components/about/PurposeData.tsx
var purposeData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M20 23.3333H21.6667C23.5 23.3333 25 21.8333 25 20V3.33334H10C7.5 3.33334 5.31668 4.71666 4.18335 6.74999",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 28.3333C3.33337 31.1 5.56671 33.3333 8.33337 33.3333H10C10 31.5 11.5 30 13.3334 30C15.1667 30 16.6667 31.5 16.6667 33.3333H23.3334C23.3334 31.5 24.8334 30 26.6667 30C28.5 30 30 31.5 30 33.3333H31.6667C34.4334 33.3333 36.6667 31.1 36.6667 28.3333V23.3333H31.6667C30.75 23.3333 30 22.5833 30 21.6667V16.6667C30 15.75 30.75 15 31.6667 15H33.8167L30.9667 10.0167C30.3667 8.98336 29.2668 8.33334 28.0668 8.33334H25V20C25 21.8333 23.5 23.3333 21.6667 23.3333H20",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M13.3333 36.6667C15.1743 36.6667 16.6667 35.1743 16.6667 33.3333C16.6667 31.4924 15.1743 30 13.3333 30C11.4924 30 10 31.4924 10 33.3333C10 35.1743 11.4924 36.6667 13.3333 36.6667Z",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M26.6667 36.6667C28.5077 36.6667 30 35.1743 30 33.3333C30 31.4924 28.5077 30 26.6667 30C24.8258 30 23.3334 31.4924 23.3334 33.3333C23.3334 35.1743 24.8258 36.6667 26.6667 36.6667Z",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M36.6667 20V23.3333H31.6667C30.75 23.3333 30 22.5833 30 21.6667V16.6667C30 15.75 30.75 15 31.6667 15H33.8166L36.6667 20Z",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 13.3333H13.3334",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 18.3333H10",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 23.3333H6.66671",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    title: "Fast delivery",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.00004 5H35C35.4421 5 35.866 5.17559 36.1786 5.48816C36.4911 5.80072 36.6667 6.22464 36.6667 6.66667V33.3333C36.6667 33.7754 36.4911 34.1993 36.1786 34.5118C35.866 34.8244 35.4421 35 35 35H5.00004C4.55801 35 4.13409 34.8244 3.82153 34.5118C3.50897 34.1993 3.33337 33.7754 3.33337 33.3333V6.66667C3.33337 6.22464 3.50897 5.80072 3.82153 5.48816C4.13409 5.17559 4.55801 5 5.00004 5V5ZM6.66671 8.33333V31.6667H33.3334V8.33333H6.66671ZM14.1667 23.3333H23.3334C23.5544 23.3333 23.7664 23.2455 23.9226 23.0893C24.0789 22.933 24.1667 22.721 24.1667 22.5C24.1667 22.279 24.0789 22.067 23.9226 21.9107C23.7664 21.7545 23.5544 21.6667 23.3334 21.6667H16.6667C15.5616 21.6667 14.5018 21.2277 13.7204 20.4463C12.939 19.6649 12.5 18.6051 12.5 17.5C12.5 16.3949 12.939 15.3351 13.7204 14.5537C14.5018 13.7723 15.5616 13.3333 16.6667 13.3333H18.3334V10H21.6667V13.3333H25.8334V16.6667H16.6667C16.4457 16.6667 16.2337 16.7545 16.0775 16.9107C15.9212 17.067 15.8334 17.279 15.8334 17.5C15.8334 17.721 15.9212 17.933 16.0775 18.0893C16.2337 18.2455 16.4457 18.3333 16.6667 18.3333H23.3334C24.4384 18.3333 25.4983 18.7723 26.2797 19.5537C27.0611 20.3351 27.5 21.3949 27.5 22.5C27.5 23.6051 27.0611 24.6649 26.2797 25.4463C25.4983 26.2277 24.4384 26.6667 23.3334 26.6667H21.6667V30H18.3334V26.6667H14.1667V23.3333Z",
      fill: "white"
    })),
    title: "Cheap fees",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.28345 12.4L20.0001 20.9166L34.6167 12.4499",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M20.0001 36.0166V20.8999",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M36.0167 15.2833V24.7167C36.0167 24.8001 36.0167 24.8666 36.0001 24.95C34.8334 23.9333 33.3334 23.3334 31.6667 23.3334C30.1 23.3334 28.65 23.8834 27.5 24.8C25.9667 26.0167 25 27.9 25 30C25 31.25 25.35 32.4334 25.9667 33.4334C26.1167 33.7 26.3 33.95 26.5 34.1834L23.4501 35.8667C21.5501 36.9334 18.45 36.9334 16.55 35.8667L7.65003 30.9334C5.63337 29.8167 3.9834 27.0167 3.9834 24.7167V15.2833C3.9834 12.9833 5.63337 10.1834 7.65003 9.0667L16.55 4.13333C18.45 3.06666 21.5501 3.06666 23.4501 4.13333L32.35 9.0667C34.3667 10.1834 36.0167 12.9833 36.0167 15.2833Z",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M38.3333 30C38.3333 31.25 37.9834 32.4333 37.3667 33.4333C37.0167 34.0333 36.5667 34.5667 36.05 35C34.8833 36.05 33.35 36.6667 31.6667 36.6667C29.2333 36.6667 27.1166 35.3667 25.9666 33.4333C25.35 32.4333 25 31.25 25 30C25 27.9 25.9667 26.0167 27.5 24.8C28.65 23.8833 30.1 23.3333 31.6667 23.3333C35.35 23.3333 38.3333 26.3167 38.3333 30Z",
      stroke: "white",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M33.45 31.7333L29.9166 28.2166",
      stroke: "white",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M33.4166 28.2667L29.8833 31.7833",
      stroke: "white",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    title: "Better logistics",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  }
];

// app/images/pointcard.gif
var pointcard_default = "/build/_assets/pointcard-J2HSU7TO.gif";

// app/components/about/AboutPurpose.tsx
var AboutPurpose = () => {
  return /* @__PURE__ */ import_react47.default.createElement(Body38, null, /* @__PURE__ */ import_react47.default.createElement(MoreOverlay4, null), /* @__PURE__ */ import_react47.default.createElement(Cover28, null, /* @__PURE__ */ import_react47.default.createElement(MoreTitle2, null, "Our Purpose"), /* @__PURE__ */ import_react47.default.createElement(DetailsGrid8, null, purposeData.map((data, index2) => /* @__PURE__ */ import_react47.default.createElement(PurposeRow, {
    key: index2
  }, " ", /* @__PURE__ */ import_react47.default.createElement(PurposeIcon, null, data.icon), /* @__PURE__ */ import_react47.default.createElement(MoreSub, null, data.title), /* @__PURE__ */ import_react47.default.createElement(MoreText, null, data.text))))));
};
var Body38 = import_styled_components40.default.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  color: ${WikkiTheme.white};
  width: 100%;
  padding: 16px;
  background: url(${pointcard_default}) no-repeat center center/cover;
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay4 = import_styled_components40.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover28 = import_styled_components40.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1000px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var MoreSub = (0, import_styled_components40.default)(Header5)`
  text-align: left;
`;
var MoreTitle2 = (0, import_styled_components40.default)(Header1)`
  margin: 16px 0;
  text-align: center;
`;
var MoreText = (0, import_styled_components40.default)(Body3)`
  text-align: left;
  margin: 16px 0;
`;
var DetailsGrid8 = import_styled_components40.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
  @media only screen and (max-width: 650px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var PurposeRow = import_styled_components40.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var PurposeIcon = import_styled_components40.default.span`
  width: 40px;
  height: 40px;
  margin: 32px 0;
`;
var AboutPurpose_default = AboutPurpose;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\about.tsx
var meta10 = () => ({
  charset: "utf-8",
  title: "About Wikki - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var about = () => {
  return /* @__PURE__ */ React.createElement(Body39, null, /* @__PURE__ */ React.createElement(AboutHero_default, null), /* @__PURE__ */ React.createElement(AboutPurpose_default, null), /* @__PURE__ */ React.createElement(AboutDelivery_default, null), /* @__PURE__ */ React.createElement(AboutDetails_default, null), /* @__PURE__ */ React.createElement(AboutBusiness_default, null));
};
var Body39 = import_styled_components41.default.section``;
var about_default = about;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react55 = __toESM(require("react"));
var import_styled_components48 = __toESM(require("styled-components"));

// app/components/home/DoMore.tsx
var import_react48 = __toESM(require("react"));
var import_styled_components42 = __toESM(require("styled-components"));
var DoMore = () => {
  return /* @__PURE__ */ import_react48.default.createElement(Body40, null, /* @__PURE__ */ import_react48.default.createElement(MoreOverlay5, null), /* @__PURE__ */ import_react48.default.createElement(Cover29, null, /* @__PURE__ */ import_react48.default.createElement(MoreSub2, null, "Do more with wikki"), /* @__PURE__ */ import_react48.default.createElement(MoreTitle3, null, "Designed for the next billion users and riders"), /* @__PURE__ */ import_react48.default.createElement(MoreText2, null, "Beautifully easy to use software to accept card payments on your phone, and grow your business anywhere on the planet")));
};
var Body40 = import_styled_components42.default.section`
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  color: ${WikkiTheme.white};
  width: 100%;
  padding: 16px;
  background: url(${pointcard_default}) no-repeat center center/cover;
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay5 = import_styled_components42.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover29 = import_styled_components42.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 800px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var MoreSub2 = (0, import_styled_components42.default)(Header5)`
  text-align: center;
`;
var MoreTitle3 = (0, import_styled_components42.default)(Header1)`
  margin: 16px 0 24px 0;
  text-align: center;
`;
var MoreText2 = (0, import_styled_components42.default)(Body3)`
  text-align: center;
`;
var DoMore_default = DoMore;

// app/components/home/HomeBusiness.tsx
var import_styled_components43 = __toESM(require("styled-components"));

// app/images/business.png
var business_default2 = "/build/_assets/business-YXBNYLKH.png";

// app/components/home/HomeBusiness.tsx
var import_ai = require("react-icons/ai");

// app/images/heart.png
var heart_default = "/build/_assets/heart-VROQXYGP.png";

// app/components/home/HomeBusiness.tsx
var HomeBusiness = () => {
  return /* @__PURE__ */ React.createElement(Body41, null, /* @__PURE__ */ React.createElement(Cover30, null, /* @__PURE__ */ React.createElement(CaseGrid, null, /* @__PURE__ */ React.createElement(CaseRowUsers, null, /* @__PURE__ */ React.createElement(MoreOverlay6, null), /* @__PURE__ */ React.createElement(RowContent, null, /* @__PURE__ */ React.createElement(CaseTitle, null, "Wikki ", /* @__PURE__ */ React.createElement(Lovesvg, {
    src: heart_default,
    alt: "wikki heart"
  }), " businesses & companies.", " "), " ", /* @__PURE__ */ React.createElement(CaseText, null, "Wikki feels just like the Apple devices employees know and love \u2014 and they all work together seamlessly. Copy and paste across devices. Use Handoff to start an email on one device and finish on another. And pick up calls anywhere."), /* @__PURE__ */ React.createElement(CaseButtonLink, {
    to: "/business"
  }, "Learn what we have ready for businessess ", /* @__PURE__ */ React.createElement(BusinessIcon, null)))))));
};
var Body41 = import_styled_components43.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  min-height: 600px;
  background: ${WikkiTheme.smokeWhite};
  width: 100%;
  padding: 144px 16px;
  @media only screen and (max-width: 650px) {
    min-height: 450px;
    padding: 64px 16px;
  }
`;
var MoreOverlay6 = import_styled_components43.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover30 = import_styled_components43.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
var CaseGrid = import_styled_components43.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var CaseRowUsers = import_styled_components43.default.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1232px;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  padding: 16px;
  background: url(${business_default2}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    height: 500px;
  }
`;
var RowContent = import_styled_components43.default.div`
  position: relative;
  z-index: 2;

  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${WikkiTheme.white};
  flex-direction: column;
  margin: 40px auto;
  max-width: 700px;
`;
var CaseTitle = (0, import_styled_components43.default)(Header2)`
  text-align: center;
  margin: 8px 0;
`;
var CaseText = (0, import_styled_components43.default)(Body2)`
  text-align: center;
  margin: 0;
`;
var CaseButtonLink = (0, import_styled_components43.default)(BusinessButton)`
  margin: 48px 0;
`;
var Lovesvg = import_styled_components43.default.img`
  height: 40px;
  width: 40px;
`;
var BusinessIcon = (0, import_styled_components43.default)(import_ai.AiOutlinePlusCircle)`
  height: 32px;
  width: 32px;
  margin: 0 0 0 8px;
  stroke: ${WikkiTheme.white};
  color: ${WikkiTheme.white};
`;
var HomeBusiness_default = HomeBusiness;

// app/components/home/HomeHero.tsx
var import_react49 = __toESM(require("react"));
var import_styled_components44 = __toESM(require("styled-components"));

// app/images/herobg.png
var herobg_default = "/build/_assets/herobg-AUMVWSZB.png";

// app/images/device.png
var device_default = "/build/_assets/device-QG2P5VD4.png";

// app/components/home/HomeHero.tsx
var HomeHero = () => {
  return /* @__PURE__ */ import_react49.default.createElement(Body42, null, /* @__PURE__ */ import_react49.default.createElement(Cover31, null, /* @__PURE__ */ import_react49.default.createElement(InfoLeft2, null, /* @__PURE__ */ import_react49.default.createElement(GingerTitle3, null, "Move items and goods instantly with low fees."), /* @__PURE__ */ import_react49.default.createElement(TeaseText2, null, "Get items delivered and picked up in minutes!"), /* @__PURE__ */ import_react49.default.createElement(GingerRow3, null, /* @__PURE__ */ import_react49.default.createElement(CommunityMainButton3, {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react49.default.createElement(StoreIcon3, {
    src: appstore_default,
    alt: "wikki download"
  }), " App Store"), /* @__PURE__ */ import_react49.default.createElement(CommunityOutlineButton3, {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ import_react49.default.createElement(StoreIcon3, {
    src: playstore_default,
    alt: "wikki download"
  }), " Google Play")), /* @__PURE__ */ import_react49.default.createElement(HeroImage, {
    src: device_default,
    alt: "wikki device"
  }))));
};
var Body42 = import_styled_components44.default.div`
  height: 900px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  background: url(${herobg_default}) no-repeat center center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
var Cover31 = import_styled_components44.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
var InfoLeft2 = import_styled_components44.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var GingerTitle3 = (0, import_styled_components44.default)(Header1)`
  color: ${WikkiTheme.white};
  margin: 8px 0;
  text-align: center;
`;
var TeaseText2 = (0, import_styled_components44.default)(Body2)`
  color: ${WikkiTheme.white};
  margin: 0;
  text-align: center;
`;
var GingerRow3 = import_styled_components44.default.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  width: 100%;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
var CommunityMainButton3 = (0, import_styled_components44.default)(DownloadButton)``;
var CommunityOutlineButton3 = (0, import_styled_components44.default)(DownloadButton)``;
var StoreIcon3 = import_styled_components44.default.img`
  width: 32px;
  height: 32px;
  margin: 8px;
`;
var HeroImage = import_styled_components44.default.img`
  height: 998px;
  max-width: 500px;
  width: 100%;
  margin: 24px auto -800px auto;
`;
var HomeHero_default = HomeHero;

// app/components/home/HomeWaiting.tsx
var import_react50 = __toESM(require("react"));
var import_styled_components45 = __toESM(require("styled-components"));
var HomeWaiting = () => {
  return /* @__PURE__ */ import_react50.default.createElement(Body43, null, /* @__PURE__ */ import_react50.default.createElement(Cover32, null, /* @__PURE__ */ import_react50.default.createElement(WaitingRow5, null, /* @__PURE__ */ import_react50.default.createElement(WaitSub, null, "Why Wikki?"), /* @__PURE__ */ import_react50.default.createElement(WaitTitle5, null, "Because - Waiting is boring"), /* @__PURE__ */ import_react50.default.createElement(WaitText2, null, "We know how annoying it can be waiting for your meal, order, package or pickup to be delivered same day.")), /* @__PURE__ */ import_react50.default.createElement(DetailsGrid9, null, /* @__PURE__ */ import_react50.default.createElement(GridRight8, null, /* @__PURE__ */ import_react50.default.createElement(GridImage7, {
    src: purpose01_default,
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react50.default.createElement(GridLeft6, null, /* @__PURE__ */ import_react50.default.createElement(RideTitle8, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react50.default.createElement(RideText10, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")), /* @__PURE__ */ import_react50.default.createElement(GridRight8, null, /* @__PURE__ */ import_react50.default.createElement(GridImage7, {
    src: purpose01_default,
    alt: "use wikki"
  })), " ", /* @__PURE__ */ import_react50.default.createElement(GridLeft6, null, /* @__PURE__ */ import_react50.default.createElement(RideTitle8, null, "Robust delivery and pickup"), /* @__PURE__ */ import_react50.default.createElement(RideText10, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")), /* @__PURE__ */ import_react50.default.createElement(GridRight8, null, /* @__PURE__ */ import_react50.default.createElement(GridImage7, {
    src: purpose01_default,
    alt: "use wikki"
  })), /* @__PURE__ */ import_react50.default.createElement(GridLeft6, null, /* @__PURE__ */ import_react50.default.createElement(RideTitle8, null, "Our Mission"), /* @__PURE__ */ import_react50.default.createElement(RideText10, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates."))), " "));
};
var Body43 = import_styled_components45.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background: ${WikkiTheme.black};
  color: ${WikkiTheme.white};
`;
var Cover32 = import_styled_components45.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  color: ${WikkiTheme.white};
`;
var DetailsGrid9 = import_styled_components45.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 56px;
  gap: 56px;
  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 32px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft6 = import_styled_components45.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.white};
  width: 100%;
`;
var RideTitle8 = (0, import_styled_components45.default)(Header2)`
  color: ${WikkiTheme.white};
`;
var GridRight8 = import_styled_components45.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
var GridImage7 = import_styled_components45.default.img`
  max-width: 550px;
  border-radius: 20px;
  max-height: 630px;
  min-height: 200px;

  outline: none;
  width: 100%;
`;
var RideText10 = (0, import_styled_components45.default)(Body3)`
  margin: 8px 0;
`;
var WaitingRow5 = import_styled_components45.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 32px auto;
`;
var WaitSub = (0, import_styled_components45.default)(SubTitle)`
  color: ${WikkiTheme.white};
  text-align: center;
`;
var WaitTitle5 = (0, import_styled_components45.default)(Header1)`
  margin: 16px 0;
  color: ${WikkiTheme.white};
  text-align: center;
`;
var WaitText2 = (0, import_styled_components45.default)(Body1)`
  color: ${WikkiTheme.white};
  text-align: center;
`;
var HomeWaiting_default = HomeWaiting;

// app/components/home/UseCases.tsx
var import_styled_components46 = __toESM(require("styled-components"));

// app/images/user.png
var user_default = "/build/_assets/user-EQZPLLFN.png";

// app/images/driver.png
var driver_default2 = "/build/_assets/driver-SVOSRCIB.png";

// app/components/home/UseCases.tsx
var import_react51 = require("@remix-run/react");
var UseCases = () => {
  return /* @__PURE__ */ React.createElement(Body44, null, /* @__PURE__ */ React.createElement(Cover33, null, /* @__PURE__ */ React.createElement(MoreTitle4, null, "Discover Wikki Usecases"), /* @__PURE__ */ React.createElement(CaseGrid2, null, /* @__PURE__ */ React.createElement(CaseRowUsers2, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay7, null), /* @__PURE__ */ React.createElement(RowContent2, null, /* @__PURE__ */ React.createElement(CaseTitle2, null, "For Dispatch"), /* @__PURE__ */ React.createElement(import_react51.Link, {
    to: "/dispatch"
  }, /* @__PURE__ */ React.createElement(CaseButtonLink2, null, "Learn more")))), /* @__PURE__ */ React.createElement(CaseRowDrivers, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay7, null), /* @__PURE__ */ React.createElement(RowContent2, null, /* @__PURE__ */ React.createElement(CaseTitle2, null, "For pickups"), /* @__PURE__ */ React.createElement(import_react51.Link, {
    to: "/pick-up"
  }, /* @__PURE__ */ React.createElement(CaseButtonLink2, null, "Learn more")))))));
};
var Body44 = import_styled_components46.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 144px 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
    margin: 64px 0;
  }
`;
var MoreOverlay7 = import_styled_components46.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover33 = import_styled_components46.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
var MoreTitle4 = (0, import_styled_components46.default)(Header2)`
  margin: 16px 0 64px 0;
  text-align: left;

  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`;
var CaseGrid2 = import_styled_components46.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var CaseRowUsers2 = import_styled_components46.default.div`
  max-height: 700px;
  display: flex;
  align-items: flex-end;

  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  padding: 16px;
  background: url(${user_default}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`;
var RowContent2 = import_styled_components46.default.div`
  position: relative;
  z-index: 2;

  width: 100%;
  display: flex;
  color: ${WikkiTheme.white};
  flex-direction: column;
  margin: 0 40px 32px 40px;
  @media only screen and (max-width: 650px) {
    margin: 56px 24px;
  }
  a {
    margin: 32px 0;
    @media only screen and (max-width: 650px) {
      margin: 24px 0;
    }
  }
`;
var CaseTitle2 = (0, import_styled_components46.default)(Header3)``;
var CaseButtonLink2 = (0, import_styled_components46.default)(CaseButton)``;
var CaseRowDrivers = import_styled_components46.default.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 2;
  padding: 16px;
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;

  border-radius: 20px;
  background: url(${driver_default2}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`;
var UseCases_default = UseCases;

// app/container/LayoutHead.js
var import_react52 = __toESM(require("react"));
var LayoutHead = ({ title }) => {
  return /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, /* @__PURE__ */ import_react52.default.createElement("title", null, title, " -"), /* @__PURE__ */ import_react52.default.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    name: "title",
    content: `${title} - Request a dispatch or pickup`
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    name: "description",
    content: "Request a dispatch or pickup"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "og:url",
    content: "https://mywikki.com/"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "og:title",
    content: `${title} - Request a dispatch or pickup`
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "og:description",
    content: "Request a dispatch or pickup"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "og:image",
    content: "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "twitter:url",
    content: "https://mywikki.com/"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "twitter:title",
    content: `${title} - Request a dispatch or pickup`
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "twitter:description",
    content: "Request a dispatch or pickup"
  }), /* @__PURE__ */ import_react52.default.createElement("meta", {
    property: "twitter:image",
    content: "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png"
  }), /* @__PURE__ */ import_react52.default.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }));
};
var LayoutHead_default = LayoutHead;

// app/components/home/HomeStarted.tsx
var import_react53 = __toESM(require("react"));
var import_styled_components47 = __toESM(require("styled-components"));
var import_react54 = require("@remix-run/react");
var HomeStarted = () => {
  return /* @__PURE__ */ import_react53.default.createElement(Body45, null, /* @__PURE__ */ import_react53.default.createElement(Cover34, null, " ", /* @__PURE__ */ import_react53.default.createElement(MoreTitle5, null, "Get Started with Wikki"), /* @__PURE__ */ import_react53.default.createElement(DetailsGrid10, null, /* @__PURE__ */ import_react53.default.createElement(GridRight9, null, /* @__PURE__ */ import_react53.default.createElement(UsersCover2, null, " ", /* @__PURE__ */ import_react53.default.createElement(GridImage8, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756116/Drone-delivery_pdpfbb.png",
    alt: "use wikki"
  })), /* @__PURE__ */ import_react53.default.createElement(RideTitle9, null, "For users"), /* @__PURE__ */ import_react53.default.createElement(import_react54.Link, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react53.default.createElement(RideText11, null, "Learn More"))), " ", /* @__PURE__ */ import_react53.default.createElement(GridRight9, null, /* @__PURE__ */ import_react53.default.createElement(Driver4, null, " ", /* @__PURE__ */ import_react53.default.createElement(GridImage8, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Pizza-delivery_py2azx.png",
    alt: "use wikki"
  })), /* @__PURE__ */ import_react53.default.createElement(RideTitle9, null, "For drivers"), /* @__PURE__ */ import_react53.default.createElement(import_react54.Link, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react53.default.createElement(RideText11, null, "Learn More"))), " ", /* @__PURE__ */ import_react53.default.createElement(GridRight9, null, /* @__PURE__ */ import_react53.default.createElement(Companies, null, " ", /* @__PURE__ */ import_react53.default.createElement(GridImage8, {
    src: "https://res.cloudinary.com/dvoezroy8/image/upload/v1648756110/Order-delivered_dqb2dq.png",
    alt: "use wikki"
  })), /* @__PURE__ */ import_react53.default.createElement(RideTitle9, null, "For businesses"), /* @__PURE__ */ import_react53.default.createElement(import_react54.Link, {
    to: "/business"
  }, /* @__PURE__ */ import_react53.default.createElement(RideText11, null, "Learn More"))), " ")));
};
var Body45 = import_styled_components47.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  max-width: 1232px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 56px 16px;

  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
`;
var Cover34 = import_styled_components47.default.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WikkiTheme.black};
`;
var MoreTitle5 = (0, import_styled_components47.default)(Header2)`
  margin: 16px 0 64px 0;
  text-align: left;

  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`;
var DetailsGrid10 = import_styled_components47.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  place-items: center;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
  }
  @media only screen and (max-width: 550px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
  }
`;
var UsersCover2 = import_styled_components47.default.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.userDownload};
`;
var Driver4 = import_styled_components47.default.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.driverDownload};
`;
var Companies = import_styled_components47.default.div`
  max-width: 900px;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${WikkiTheme.businessDownload};
`;
var RideTitle9 = (0, import_styled_components47.default)(Header3)`
  color: ${WikkiTheme.black};
  margin: 24px 0 16px 0;
`;
var GridRight9 = import_styled_components47.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;
var GridImage8 = import_styled_components47.default.img`
  max-width: 350px;
  border-radius: 0px;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
var RideText11 = (0, import_styled_components47.default)(SubTitle)`
  margin: 8px 0;
  font-weight: 500;
  color: ${WikkiTheme.black};
  cursor: pointer;
  border-bottom: 1px solid ${WikkiTheme.black};
`;
var HomeStarted_default = HomeStarted;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\index.tsx
var import_gsap = __toESM(require("gsap/dist/gsap"));
var import_ScrollTrigger = require("gsap/dist/ScrollTrigger");
var Home = () => {
  (0, import_react55.useEffect)(() => {
    import_gsap.default.registerPlugin(import_ScrollTrigger.ScrollTrigger);
  }, []);
  return /* @__PURE__ */ import_react55.default.createElement(Body46, null, /* @__PURE__ */ import_react55.default.createElement(LayoutHead_default, {
    title: ""
  }), /* @__PURE__ */ import_react55.default.createElement(HomeHero_default, null), /* @__PURE__ */ import_react55.default.createElement(HomeWaiting_default, null), /* @__PURE__ */ import_react55.default.createElement(UseCases_default, null), /* @__PURE__ */ import_react55.default.createElement(HomeBusiness_default, null), /* @__PURE__ */ import_react55.default.createElement(HomeStarted_default, null), /* @__PURE__ */ import_react55.default.createElement(DoMore_default, null));
};
var Body46 = import_styled_components48.default.div``;
var routes_default = Home;

// route:C:\Users\Augustine Ogiza\Documents\Development\remix\wikki\app\routes\$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  meta: () => meta11
});
var import_react56 = __toESM(require("react"));
var import_styled_components49 = __toESM(require("styled-components"));
var meta11 = () => ({
  charset: "utf-8",
  title: "Page Not Found - Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",
  description: "Get items and goods delivered and picked up from anywhere"
});
var NotFound = () => {
  return /* @__PURE__ */ import_react56.default.createElement(Body47, null, /* @__PURE__ */ import_react56.default.createElement(Cover35, null, /* @__PURE__ */ import_react56.default.createElement(ContactHeader6, null, /* @__PURE__ */ import_react56.default.createElement(ContactTitle6, null, "Error:404"), /* @__PURE__ */ import_react56.default.createElement(NotFoundButton, {
    to: "/"
  }, "Go back Home"), /* @__PURE__ */ import_react56.default.createElement(ContactTitle6, null, "Error:404"))));
};
var Body47 = import_styled_components49.default.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
var Cover35 = import_styled_components49.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`;
var ContactHeader6 = import_styled_components49.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 950px;
  width: 100%;
`;
var ContactTitle6 = (0, import_styled_components49.default)(Header2)`
  margin: 8px 0;
  text-align: center;
`;
var NotFoundButton = (0, import_styled_components49.default)(FormButton)``;
var __default = NotFound;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "5e6db3e0", "entry": { "module": "/build/entry.client-P2GW7QPY.js", "imports": ["/build/_shared/chunk-PZ2Z7HGX.js", "/build/_shared/chunk-ZQ6LOEEF.js", "/build/_shared/chunk-2ADOHOB6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2JKT4IZ3.js", "imports": ["/build/_shared/chunk-O6COTU67.js", "/build/_shared/chunk-VCUBTWAC.js", "/build/_shared/chunk-D7HEMV6S.js", "/build/_shared/chunk-CGQXD2ES.js", "/build/_shared/chunk-QP6U2JFG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$-H4GHHFKH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-DCW4C4LA.js", "imports": ["/build/_shared/chunk-H5I6YVBX.js", "/build/_shared/chunk-MZGYASWF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business": { "id": "routes/business", "parentId": "root", "path": "business", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business-6S3IJMA2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-QDTFTSQQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dispatch": { "id": "routes/dispatch", "parentId": "root", "path": "dispatch", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dispatch-WEXXX6K3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/download": { "id": "routes/download", "parentId": "root", "path": "download", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/download-QBH74TA2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/driver-requirements": { "id": "routes/driver-requirements", "parentId": "root", "path": "driver-requirements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/driver-requirements-WPNCIASZ.js", "imports": ["/build/_shared/chunk-MZGYASWF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/driver": { "id": "routes/how-it-works/driver", "parentId": "root", "path": "how-it-works/driver", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/how-it-works/driver-ZAVOCF3O.js", "imports": ["/build/_shared/chunk-FO4CBTCW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/index": { "id": "routes/how-it-works/index", "parentId": "root", "path": "how-it-works", "index": true, "caseSensitive": void 0, "module": "/build/routes/how-it-works/index-DSRXXU7F.js", "imports": ["/build/_shared/chunk-FO4CBTCW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WCJC6WA6.js", "imports": ["/build/_shared/chunk-H5I6YVBX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pick-up": { "id": "routes/pick-up", "parentId": "root", "path": "pick-up", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pick-up-WWTF7XUX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5E6DB3E0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/driver-requirements": {
    id: "routes/driver-requirements",
    parentId: "root",
    path: "driver-requirements",
    index: void 0,
    caseSensitive: void 0,
    module: driver_requirements_exports
  },
  "routes/how-it-works/driver": {
    id: "routes/how-it-works/driver",
    parentId: "root",
    path: "how-it-works/driver",
    index: void 0,
    caseSensitive: void 0,
    module: driver_exports
  },
  "routes/how-it-works/index": {
    id: "routes/how-it-works/index",
    parentId: "root",
    path: "how-it-works",
    index: true,
    caseSensitive: void 0,
    module: how_it_works_exports
  },
  "routes/business": {
    id: "routes/business",
    parentId: "root",
    path: "business",
    index: void 0,
    caseSensitive: void 0,
    module: business_exports
  },
  "routes/dispatch": {
    id: "routes/dispatch",
    parentId: "root",
    path: "dispatch",
    index: void 0,
    caseSensitive: void 0,
    module: dispatch_exports
  },
  "routes/download": {
    id: "routes/download",
    parentId: "root",
    path: "download",
    index: void 0,
    caseSensitive: void 0,
    module: download_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/pick-up": {
    id: "routes/pick-up",
    parentId: "root",
    path: "pick-up",
    index: void 0,
    caseSensitive: void 0,
    module: pick_up_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
