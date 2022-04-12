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
var host = true ? "http://127.0.0.1:8000/" : "https://www.api.mywikki.com/";
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
var assets_manifest_default = { "version": "8bba4ce0", "entry": { "module": "/build/entry.client-DFBZ4MJG.js", "imports": ["/build/_shared/chunk-TF7DY7FC.js", "/build/_shared/chunk-KGQ3CDVM.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UBJQQ4NC.js", "imports": ["/build/_shared/chunk-VN4LSI7L.js", "/build/_shared/chunk-YW4BGDS4.js", "/build/_shared/chunk-GL3FUHZJ.js", "/build/_shared/chunk-S4BJS3FA.js", "/build/_shared/chunk-TPYWPXAN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$-JZJUMSXY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-5VNP3UFD.js", "imports": ["/build/_shared/chunk-DEHO773S.js", "/build/_shared/chunk-YEIK3RGF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business": { "id": "routes/business", "parentId": "root", "path": "business", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business-QEF2XEHO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-QP6PNBVO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dispatch": { "id": "routes/dispatch", "parentId": "root", "path": "dispatch", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dispatch-IM2YAG3F.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/download": { "id": "routes/download", "parentId": "root", "path": "download", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/download-3CNVYZJ5.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/driver-requirements": { "id": "routes/driver-requirements", "parentId": "root", "path": "driver-requirements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/driver-requirements-3EGNDOMB.js", "imports": ["/build/_shared/chunk-YEIK3RGF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/driver": { "id": "routes/how-it-works/driver", "parentId": "root", "path": "how-it-works/driver", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/how-it-works/driver-G525LYPX.js", "imports": ["/build/_shared/chunk-R44LRKOS.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/index": { "id": "routes/how-it-works/index", "parentId": "root", "path": "how-it-works", "index": true, "caseSensitive": void 0, "module": "/build/routes/how-it-works/index-7IJB75P6.js", "imports": ["/build/_shared/chunk-R44LRKOS.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YC2QL5PR.js", "imports": ["/build/_shared/chunk-DEHO773S.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pick-up": { "id": "routes/pick-up", "parentId": "root", "path": "pick-up", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pick-up-7KCDKFMY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8BBA4CE0.js" };

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
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVtaXhcXHdpa2tpXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0RyaXZlck1lc3NhZ2UudHN4IiwgIi4uL2FwcC9kYXRhL2Rvd25sb2FkRGF0YS50c3giLCAiLi4vYXBwL3N0eWxlcy9Db2xvclN0eWxlcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2lra2lJbmZvLnRzeCIsICIuLi9hcHAvc3R5bGVzL1RleHRTdHlsZXMudHN4IiwgIi4uL2FwcC9zdHlsZXMvQnV0dG9uU3R5bGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9XaWtraVRhYk5hdi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsICIuLi9hcHAvZGF0YS9Gb290ZXJEYXRhLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvTmF2Q292ZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0JhY2tUb1RvcC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxBdWd1c3RpbmUgT2dpemFcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXHJlbWl4XFx3aWtraVxcYXBwXFxyb3V0ZXNcXGRyaXZlci1yZXF1aXJlbWVudHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJBZHZhbnRhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9QdXJwb3NlRGF0YS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZHJpdmVyL0RyaXZlckhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJNZXNzYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyUmVxdWlyZW1lbnRzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyQWNjb3JkaW9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kcml2ZXIvUmVxdWlyZW1lbnREYXRhLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVtaXhcXHdpa2tpXFxhcHBcXHJvdXRlc1xcaG93LWl0LXdvcmtzXFxkcml2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZW1peFxcd2lra2lcXGFwcFxccm91dGVzXFxob3ctaXQtd29ya3NcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVtaXhcXHdpa2tpXFxhcHBcXHJvdXRlc1xcYnVzaW5lc3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2J1c2luZXNzL0J1c2luZXNzSGVyby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYnVzaW5lc3MvQnVzaW5lc3NQdXJwb3NlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9idXNpbmVzcy9CdXNpbmVzc1JpZC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxBdWd1c3RpbmUgT2dpemFcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXHJlbWl4XFx3aWtraVxcYXBwXFxyb3V0ZXNcXGRpc3BhdGNoLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kaXNwYXRjaC9EaXNwYXRjaEhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Rpc3BhdGNoL0Rpc3BhdGNoUHVycG9zZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxBdWd1c3RpbmUgT2dpemFcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXHJlbWl4XFx3aWtraVxcYXBwXFxyb3V0ZXNcXGRvd25sb2FkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kb3dubG9hZC9Eb3dubG9hZEhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Rvd25sb2FkL0Rvd25sb2FkUGxhdGZvcm1zLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVtaXhcXHdpa2tpXFxhcHBcXHJvdXRlc1xcY29udGFjdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0Rm9ybS50c3giLCAiLi4vYXBwL3N0eWxlcy9JbnB1dFN0eWxlcy50c3giLCAiLi4vYXBwL2NvbnN0YW50cy9Db25zdGFudC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3VjY2Vzc0xvYWRpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEhlcm8udHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZW1peFxcd2lra2lcXGFwcFxccm91dGVzXFxwaWNrLXVwLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9waWNrL1BpY2t1cEhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BpY2svUGlja3VwUHVycG9zZS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxBdWd1c3RpbmUgT2dpemFcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXHJlbWl4XFx3aWtraVxcYXBwXFxyb3V0ZXNcXGFib3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hYm91dC9BYm91dEJ1c2luZXNzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hYm91dC9BYm91dERlbGl2ZXJ5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hYm91dC9BYm91dERldGFpbHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0SGVyby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYWJvdXQvQWJvdXRQdXJwb3NlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hYm91dC9QdXJwb3NlRGF0YS50c3giLCAicm91dGU6QzpcXFVzZXJzXFxBdWd1c3RpbmUgT2dpemFcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXHJlbWl4XFx3aWtraVxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0RvTW9yZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaG9tZS9Ib21lQnVzaW5lc3MudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvSG9tZUhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvSG9tZVdhaXRpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvVXNlQ2FzZXMudHN4IiwgIi4uL2FwcC9jb250YWluZXIvTGF5b3V0SGVhZC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0hvbWVTdGFydGVkLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVtaXhcXHdpa2tpXFxhcHBcXHJvdXRlc1xcJC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlbWl4XFxcXHdpa2tpXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlbWl4XFxcXHdpa2tpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZHJpdmVyLXJlcXVpcmVtZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXGhvdy1pdC13b3Jrc1xcXFxkcml2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVtaXhcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxob3ctaXQtd29ya3NcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVtaXhcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxidXNpbmVzcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXGRpc3BhdGNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlbWl4XFxcXHdpa2tpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZG93bmxvYWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVtaXhcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxjb250YWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlbWl4XFxcXHdpa2tpXFxcXGFwcFxcXFxyb3V0ZXNcXFxccGljay11cC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXGFib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZW1peFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXCQudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kcml2ZXItcmVxdWlyZW1lbnRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kcml2ZXItcmVxdWlyZW1lbnRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRyaXZlci1yZXF1aXJlbWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2hvdy1pdC13b3Jrcy9kcml2ZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvdy1pdC13b3Jrcy9kcml2ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG93LWl0LXdvcmtzL2RyaXZlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG93LWl0LXdvcmtzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob3ctaXQtd29ya3MvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG93LWl0LXdvcmtzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYnVzaW5lc3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2J1c2luZXNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJ1c2luZXNzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9kaXNwYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGlzcGF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGlzcGF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2Rvd25sb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kb3dubG9hZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkb3dubG9hZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9waWNrLXVwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9waWNrLXVwXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBpY2stdXBcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzLyRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzLyRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcblxuICBsZXQgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICAgKVxuICApXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlVGFncygpXG4gIG1hcmt1cCA9IG1hcmt1cC5yZXBsYWNlKFwiX19TVFlMRVNfX1wiLCBzdHlsZXMpXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvaW5kZXguY3NzXCJcbmltcG9ydCBuUHJvZ3Jlc3NTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL25wcm9ncmVzcy5jc3NcIlxuaW1wb3J0IERyaXZlck1lc3NhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9Ecml2ZXJNZXNzYWdlXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9Gb290ZXJcIlxuaW1wb3J0IE5hdkNvdmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvbmF2YmFyL05hdkNvdmVyXCJcbmltcG9ydCBCYWNrVG9Ub3AgZnJvbSBcIn4vY29tcG9uZW50cy9CYWNrVG9Ub3BcIlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcblxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcbiAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cbiAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAV2lra2lcIixcbiAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwiUmVxdWVzdCBhIGRpc3BhdGNoIG9yIHBpY2t1cFwiLFxuICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjpcbiAgICBcIkdldCBpdGVtcyBhbmQgZ29vZHMgZGVsaXZlcmVkIGFuZCBwaWNrZWQgdXAgZnJvbSBhbnl3aGVyZVwiLFxuICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBXaWtraVwiLFxuICBcInR3aXR0ZXI6aW1hZ2VcIjpcbiAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2b2V6cm95OC9pbWFnZS91cGxvYWQvdjE2NDk1NDUxNDUvZmF2aWNvbl9oZnFucWcucG5nXCIsXG4gIFwib2c6ZGVzY3JpcHRpb25cIjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcbiAgXCJvZzppbWFnZVwiOlxuICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0OTU0NTE0NS9mYXZpY29uX2hmcW5xZy5wbmdcIixcbiAgXCJvZzp1cmxcIjogXCJodHRwczovL215d2lra2kuY29tL1wiLFxuICBcIm9nOnNpdGVfbmFtZVwiOiBcIldpa2tpXCIsXG4gIFwib2c6dGl0bGVcIjogXCJSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXG59KVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIC8vIGlmIHlvdSBhbHJlYWR5IGhhdmUgb25lIG9ubHkgYWRkIHRoaXMgc3R5bGVzaGVldCB0byB5b3VyIGxpc3Qgb2YgbGlua3NcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IG5Qcm9ncmVzc1N0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgLy8geyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBsb2NvY3NzIH0sXG5cbiAgICB7XG4gICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgaHJlZjogXCIvZmF2aWNvbi5pY29cIixcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSBcImlkbGVcIikgTlByb2dyZXNzLmRvbmUoKVxuICAgIGVsc2UgTlByb2dyZXNzLnN0YXJ0KClcbiAgfSwgW3RyYW5zaXRpb24uc3RhdGVdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fU1RZTEVTX19cIiA6IG51bGx9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE5hdkNvdmVyIC8+XG4gICAgICAgIDxCYWNrVG9Ub3AgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8RHJpdmVyTWVzc2FnZSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IGRvd25sb2FkRGF0YSB9IGZyb20gXCJ+L2RhdGEvZG93bmxvYWREYXRhXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgV2lra2lJbmZvIGZyb20gXCIuL1dpa2tpSW5mb1wiXHJcbmltcG9ydCBXaWtraVRhYk5hdiBmcm9tIFwiLi9XaWtraVRhYk5hdlwiXHJcblxyXG5jb25zdCBEcml2ZXJNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJSaWRlclwiKVxyXG4gIGNvbnN0IGNsaWNrVGFiID0gKHRhYjogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYih0YWIpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0YWJOYW1lcyA9IFt7IG5hbWU6IFwiUmlkZXJcIiB9LCB7IG5hbWU6IFwiRHJpdmVyXCIgfV1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvNDA0XCIgPyBudWxsIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgPENvdmVyPlxyXG4gICAgICAgICAgICAgIDxUYWJCb2R5PlxyXG4gICAgICAgICAgICAgICAgPFRhYkNvdmVyPlxyXG4gICAgICAgICAgICAgICAgICB7dGFiTmFtZXMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxXaWtraVRhYk5hdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IGNsaWNrVGFiKGRhdGEubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFiPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkVGFiID09PSBkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYkNvdmVyPlxyXG4gICAgICAgICAgICAgIDwvVGFiQm9keT5cclxuICAgICAgICAgICAgICB7ZG93bmxvYWREYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxXaWtraUluZm9cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZFRhYiA9PT0gZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBsaW5rPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2RhdGEudGV4dH1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIGlvcz17ZGF0YS5pb3N9XHJcbiAgICAgICAgICAgICAgICAgIGFuZHJvaWQ9e2RhdGEuYW5kcm9pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ292ZXI+XHJcbiAgICAgICAgICA8L0JvZHk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBwYWRkaW5nOiA0MHB4IDI0cHg7XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmNvbnN0IFRhYkJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtaW4taGVpZ2h0OiA3MnB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc3dpdGNoQkd9O1xyXG5gXHJcbmNvbnN0IFRhYkNvdmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRHJpdmVyTWVzc2FnZVxyXG4iLCAiZXhwb3J0IGNvbnN0IGRvd25sb2FkRGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlJpZGVyXCIsXHJcbiAgICB0aXRsZTogXCJEb3dubG9hZCBXaWtraVwiLFxyXG4gICAgdGV4dDogXCJHYWluIGFjY2VzcyB0byByZWFsIHRpbWUsIGFmZm9yZGFibGUgaGlnaC1xdWFsaXR5IGxvZ2lzdGljcywgZGVsaXZlcnkgYW5kIHBpY2t1cCBkaXJlY3RseSBmcm9tIHlvdXIgcGhvbmUuXCIsXHJcbiAgICBhbmRyb2lkOiBcIlwiLFxyXG4gICAgaW9zOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEcml2ZXJcIixcclxuICAgIHRpdGxlOiBcIkRvd25sb2FkIFdpa2tpIERyaXZlclwiLFxyXG4gICAgdGV4dDogXCJHYWluIGFjY2VzcyB0byByZWFsIHRpbWUsIGFmZm9yZGFibGUgaGlnaC1xdWFsaXR5IGxvZ2lzdGljcywgZGVsaXZlcnkgYW5kIHBpY2t1cCBkaXJlY3RseSBmcm9tIHlvdXIgcGhvbmUuXCIsXHJcbiAgICBhbmRyb2lkOiBcIlwiLFxyXG4gICAgaW9zOiBcIlwiLFxyXG4gIH0sXHJcbl1cclxuIiwgImV4cG9ydCBjb25zdCBXaWtraVRoZW1lID0ge1xyXG4gIHByaW1hcnk6IFwiIzMzMDA2NlwiLFxyXG4gIHNlY29uZGFyeTogXCIjRkY5RTE3XCIsXHJcbiAgd2hpdGU6IFwiI2ZmZmZmZlwiLFxyXG4gIGJsYWNrOiBcIiMwMDAwMDBcIixcclxuICBkYXJrOiBcIiMwYTBiMWFcIixcclxuICBzbm93V2hpdGU6IFwiI0ZBRkFGRlwiLFxyXG4gIHNtb2tlV2hpdGU6IFwiI0ZBRkFGQVwiLFxyXG4gIHJlZDogXCIjZmYwMDAwXCIsXHJcbiAgZ3JheTogXCIjODE4MTgxXCIsXHJcbiAgeWVsbG93OiBcIiNGRkNFMzJcIixcclxuICBibHVlOiBcIiMxRDYzRkZcIixcclxuICBsaWdodFllbGxsb3c6IFwiI0ZFRkFGMFwiLFxyXG4gIGRhcmtSZWQ6IFwiI0YzNDY0NlwiLFxyXG4gIGxpZ2h0UHJpbWFyeTogXCIjRjVFQkZGXCIsXHJcbiAgc3dpdGNoQkc6IFwicmdiYSgxMTgsIDExOCwgMTI4LCAwLjUpXCIsXHJcbiAgdXNlckRvd25sb2FkOiBcIiNEM0VGRTZcIixcclxuICBkcml2ZXJEb3dubG9hZDogXCIjRjlFRkNGXCIsXHJcbiAgYnVzaW5lc3NEb3dubG9hZDogXCIjRDdGOEQ3XCIsXHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQm9keTIsIEhlYWRlcjMgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IERvd25sb2FkQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcbmltcG9ydCBhcHBzdG9yZSBmcm9tIFwifi9pbWFnZXMvYXBwc3RvcmUuc3ZnXCJcclxuaW1wb3J0IHBsYXlzdG9yZSBmcm9tIFwifi9pbWFnZXMvcGxheXN0b3JlLnN2Z1wiXHJcbmludGVyZmFjZSBJbmZvUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBsaW5rOiBzdHJpbmdcclxuICBpb3M6IHN0cmluZ1xyXG4gIGFuZHJvaWQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVHJ1ZVByb3BzIHtcclxuICBhY3RpdmU6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgV2lra2lJbmZvOiBGQzxUcnVlUHJvcHMgJiBJbmZvUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIHRpdGxlLCB0ZXh0LCBpb3MsIGFuZHJvaWQgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxJbmZvTGVmdD5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxHaW5nZXJUaXRsZT57dGl0bGV9PC9HaW5nZXJUaXRsZT5cclxuICAgICAgICAgIDxUZWFzZVRleHQ+e3RleHR9PC9UZWFzZVRleHQ+XHJcbiAgICAgICAgICA8R2luZ2VyUm93PlxyXG4gICAgICAgICAgICA8Q29tbXVuaXR5TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGhyZWY9e2Ake2lvc31gfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3RvcmVJY29uIHNyYz17YXBwc3RvcmV9IGFsdD1cIndpa2tpIGRvd25sb2FkXCIgLz4gQXBwIFN0b3JlXHJcbiAgICAgICAgICAgIDwvQ29tbXVuaXR5TWFpbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxDb21tdW5pdHlPdXRsaW5lQnV0dG9uXHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7YW5kcm9pZH1gfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3RvcmVJY29uIHNyYz17cGxheXN0b3JlfSBhbHQ9XCJ3aWtraSBkb3dubG9hZFwiIC8+IEdvb2dsZSBQbGF5XHJcbiAgICAgICAgICAgIDwvQ29tbXVuaXR5T3V0bGluZUJ1dHRvbj5cclxuICAgICAgICAgIDwvR2luZ2VyUm93PlxyXG4gICAgICAgIDwvSW5mb0xlZnQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQobW90aW9uLmRpdik8VHJ1ZVByb3BzPmBcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuYWN0aXZlID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBJbmZvTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgR2luZ2VyVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFRlYXNlVGV4dCA9IHN0eWxlZChCb2R5MilgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgR2luZ2VyUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb21tdW5pdHlNYWluQnV0dG9uID0gc3R5bGVkKERvd25sb2FkQnV0dG9uKWBgXHJcbmNvbnN0IENvbW11bml0eU91dGxpbmVCdXR0b24gPSBzdHlsZWQoRG93bmxvYWRCdXR0b24pYGBcclxuXHJcbmNvbnN0IFN0b3JlSWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWtraUluZm9cclxuIiwgImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBMYXJnZUhlYWRlciA9IHN0eWxlZC5oMWBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogOTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRlcjEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIyID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjMgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyNSA9IHN0eWxlZC5oNGBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJUaXRsZVNtYWxsID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2FwdGlvbiA9IHN0eWxlZC5oNmBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IFJlZ3VsYXJcIjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2R5MSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2R5MyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHk0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5gXHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwiLi9Db2xvclN0eWxlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG1heC13aWR0aDogMTgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnByaW1hcnl9O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFByaW1hcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zZWNvbmRhcnl9O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUucHJpbWFyeX07XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGVydGlhcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtQnV0dG9uID0gc3R5bGVkKExpbmspYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5kYXJrfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhc2VCdXR0b24gPSBzdHlsZWQuYWBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiAxODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc2Vjb25kYXJ5fTtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBOYXZiYXJCdXR0b24gPSBzdHlsZWQoTGluaylgXHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuXHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJHtXaWtraVRoZW1lLnByaW1hcnl9O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHtXaWtraVRoZW1lLnByaW1hcnl9O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgfVxyXG5cclxuICA6aG92ZXIge1xyXG4gICAgOjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERvd25sb2FkQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmRhcmt9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc2Vjb25kYXJ5fTtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXNpbmVzc0J1dHRvbiA9IHN0eWxlZChMaW5rKWBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiA0NDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5kYXJrfTtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbiIsICJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcblxyXG5pbXBvcnQgeyBIZWFkZXI1IH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuaW50ZXJmYWNlIFRhYlN0eWxlUHJvcHMge1xyXG4gIGFjdGl2ZT86IGJvb2xlYW5cclxufVxyXG5pbnRlcmZhY2UgVGFiUHJvcHMge1xyXG4gIHRhYjogc3RyaW5nXHJcbiAgY2xpY2s6ICh0YWI6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBXaWtraVRhYk5hdjogRkM8VGFiUHJvcHMgJiBUYWJTdHlsZVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGFiLCBhY3RpdmUsIGNsaWNrIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIGxheW91dFxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgbGF5b3V0OiB7IGR1cmF0aW9uOiAxLCB0eXBlOiBcInNwcmluZ1wiIH0gfX1cclxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGljayh0YWIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRhYlRleHQgbGF5b3V0PVwicG9zaXRpb25cIiBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICB7dGFifVxyXG4gICAgICAgIDwvVGFiVGV4dD5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBUYWJzID0gc3R5bGVkKG1vdGlvbi5idXR0b24pPFRhYlN0eWxlUHJvcHM+YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IGAke1dpa2tpVGhlbWUud2hpdGV9YCA6IFwidHJhbnNwYXJlbnRcIn07XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiAxNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICA6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIDpmb2N1cy13aXRoaW4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRhYlRleHQgPSBzdHlsZWQobW90aW9uKEhlYWRlcjUpKTxUYWJTdHlsZVByb3BzPmBcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5hY3RpdmUgPyBgJHtXaWtraVRoZW1lLmJsYWNrfWAgOiBgJHtXaWtraVRoZW1lLndoaXRlfWB9O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFdpa2tpVGFiTmF2XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgTWVudURhdGEsIFByb2R1Y3RzRGF0YSB9IGZyb20gXCJ+L2RhdGEvRm9vdGVyRGF0YVwiXHJcbmltcG9ydCBsb2dvIGZyb20gXCJ+L2ltYWdlcy9sb2dvLnN2Z1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXIzLCBIZWFkZXI1LCBTdWJUaXRsZSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IGFwcHN0b3JlIGZyb20gXCJ+L2ltYWdlcy9hcHBzdG9yZS5zdmdcIlxyXG5pbXBvcnQgcGxheXN0b3JlIGZyb20gXCJ+L2ltYWdlcy9wbGF5c3RvcmUuc3ZnXCJcclxuaW1wb3J0IHsgRG93bmxvYWRCdXR0b24gfSBmcm9tIFwifi9zdHlsZXMvQnV0dG9uU3R5bGVzXCJcclxuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VMb2NhdGlvbigpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiLzQwNFwiID8gbnVsbCA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICAgIDxDb3Zlcj5cclxuICAgICAgICAgICAgICA8Rm9vdGVyVG9wPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEZvb3RlclJvdz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlckxvZ28gc3JjPXtsb2dvfSBhbHQ9XCJXaWtraSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Gb290ZXJSb3c+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xUaXRsZT5NZW51PC9Db2xUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtNZW51RGF0YS5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyTGlua3Mga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtkYXRhLmxpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyVGV4dD57ZGF0YS5uYW1lfTwvRm9vdGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTGlua3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvb3RlckNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRm9vdGVyUm93PntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb290ZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXJDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbFRpdGxlPlByb2R1Y3RzPC9Db2xUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtQcm9kdWN0c0RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyTGlua3Mga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvJHtkYXRhLmxpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyVGV4dD57ZGF0YS5uYW1lfTwvRm9vdGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTGlua3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvb3RlckNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvRm9vdGVyUm93PntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb290ZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXJDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdpbmdlclRpdGxlPkdldCB0aGUgYXBwPC9HaW5nZXJUaXRsZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEdpbmdlclJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb21tdW5pdHlNYWluQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RvcmVJY29uIHNyYz17YXBwc3RvcmV9IGFsdD1cIndpa2tpIGRvd25sb2FkXCIgLz4gQXBwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbW11bml0eU1haW5CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbW11bml0eU91dGxpbmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9yZUljb24gc3JjPXtwbGF5c3RvcmV9IGFsdD1cIndpa2tpIGRvd25sb2FkXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBQbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbW11bml0eU91dGxpbmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HaW5nZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9vdGVyQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb290ZXJSb3c+XHJcbiAgICAgICAgICAgICAgPC9Gb290ZXJUb3A+XHJcbiAgICAgICAgICAgICAgPEZvb3RlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJUZXh0PkNvcHlyaWdodCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvRm9vdGVyVGV4dD5cclxuICAgICAgICAgICAgICA8L0Zvb3RlckJvdHRvbT5cclxuICAgICAgICAgICAgPC9Db3Zlcj5cclxuICAgICAgICAgIDwvQm9keT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm9keSA9IHN0eWxlZC5mb290ZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEyMzJweDtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuY29uc3QgRm9vdGVyVG9wID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAyNHB4O1xyXG4gIGdhcDogMjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIH1cclxuYFxyXG5jb25zdCBGb290ZXJSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBGb290ZXJMb2dvID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbWF4LXdpZHRoOiAxNDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBGb290ZXJDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBDb2xUaXRsZSA9IHN0eWxlZChIZWFkZXI1KWBgXHJcbmNvbnN0IEZvb3Rlckxpc3QgPSBzdHlsZWQudWxgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbmBcclxuY29uc3QgRm9vdGVyTGlua3MgPSBzdHlsZWQubGlgXHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZChTdWJUaXRsZSlgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuc2Vjb25kYXJ5fTtcclxuICB9XHJcbmBcclxuY29uc3QgRm9vdGVyQm90dG9tID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDI0cHggMDtcclxuYFxyXG5cclxuY29uc3QgR2luZ2VyVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gXHJcbmNvbnN0IEdpbmdlclJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcblxyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3RvcmVJY29uID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbmBcclxuY29uc3QgQ29tbXVuaXR5TWFpbkJ1dHRvbiA9IHN0eWxlZChEb3dubG9hZEJ1dHRvbilgYFxyXG5jb25zdCBDb21tdW5pdHlPdXRsaW5lQnV0dG9uID0gc3R5bGVkKERvd25sb2FkQnV0dG9uKWBgXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCAiZXhwb3J0IGNvbnN0IE1lbnVEYXRhID0gW1xyXG4gIHsgbmFtZTogXCJBYm91dCB1c1wiLCBsaW5rOiBcImFib3V0XCIgfSxcclxuICB7IG5hbWU6IFwiRm9yIEJ1c2luZXNzZXNcIiwgbGluazogXCJidXNpbmVzc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkhvdyBpdCB3b3Jrc1wiLCBsaW5rOiBcImhvdy1pdC13b3Jrc1wiIH0sXHJcbiAgeyBuYW1lOiBcIkhvdyB0byBnZXQgc3RhcnRlZCBhcyBhIGRyaXZlclwiLCBsaW5rOiBcImRyaXZlci1yZXF1aXJlbWVudHNcIiB9LFxyXG4gIHsgbmFtZTogXCJDb250YWN0XCIsIGxpbms6IFwiY29udGFjdFwiIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzRGF0YSA9IFtcclxuICB7IG5hbWU6IFwiRGlzcGF0Y2hcIiwgbGluazogXCJkaXNwYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIlBpY2t1cFwiLCBsaW5rOiBcInBpY2stdXBcIiB9LFxyXG5dXHJcbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxyXG5cclxuY29uc3QgTmF2Q292ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlTG9jYXRpb24oKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi80MDRcIiA/IG51bGwgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCb2R5PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8L0JvZHk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgTmF2Q292ZXJcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgbG9nbyBmcm9tIFwifi9pbWFnZXMvbG9nby5zdmdcIlxyXG5pbXBvcnQgeyBTdWJUaXRsZSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IE5hdmJhckJ1dHRvbiB9IGZyb20gXCJ+L3N0eWxlcy9CdXR0b25TdHlsZXNcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCJcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXHJcblxyXG5pbnRlcmZhY2UgTGlua1Byb3BzIHtcclxuICBsaW5rVHJ1ZT86IGJvb2xlYW5cclxufVxyXG5cclxuaW50ZXJmYWNlIE1vYmlsZVByb3BzIHtcclxuICBvcGVuPzogYm9vbGVhblxyXG4gIHJvdXRlck9wZW5lZD86IGJvb2xlYW5cclxufVxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRSb3V0ZSwgc2V0Q3VycmVudFJvdXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VMb2NhdGlvbigpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKChpc01vYmlsZSAmJiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiKSB8fCByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCIpIHtcclxuICAgICAgc2V0Q3VycmVudFJvdXRlKGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFJvdXRlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3BlbihmYWxzZSlcclxuICB9LCBbcm91dGVyXSlcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHkgcm91dGVyT3BlbmVkPXtjdXJyZW50Um91dGV9PlxyXG4gICAgICA8TW9iaWxlTG9nbz5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgIDxMb2dvIHNyYz17bG9nb30gYWx0PVwiV2lra2kgbG9nb1wiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L01vYmlsZUxvZ28+XHJcbiAgICAgIDxNb2JpbGVUb2dnbGUgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICA8VG9nZ2xlVG9wIG9wZW49e29wZW59IHJvdXRlck9wZW5lZD17Y3VycmVudFJvdXRlfSAvPlxyXG4gICAgICAgIDxUb2dnbGVNaWRkbGUgb3Blbj17b3Blbn0gcm91dGVyT3BlbmVkPXtjdXJyZW50Um91dGV9IC8+XHJcbiAgICAgICAgPFRvZ2dsZUJvdHRvbSBvcGVuPXtvcGVufSByb3V0ZXJPcGVuZWQ9e2N1cnJlbnRSb3V0ZX0gLz5cclxuICAgICAgPC9Nb2JpbGVUb2dnbGU+XHJcbiAgICAgIDxDb3ZlciBvcGVuPXtvcGVufSByb3V0ZXJPcGVuZWQ9e2N1cnJlbnRSb3V0ZX0+XHJcbiAgICAgICAgPFdpa2tpTG9nbz5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICA8TG9nbyBzcmM9e2xvZ299IGFsdD1cIldpa2tpIGxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvV2lra2lMb2dvPlxyXG4gICAgICAgIDxXaWtraUxpbmtzQ292ZXI+XHJcbiAgICAgICAgICA8V2lra2lMaW5rcz5cclxuICAgICAgICAgICAgey8qIDw+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdpa2tpSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVHJ1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1dpa2tpSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+ICovfVxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxXaWtraUhyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1RleHRcclxuICAgICAgICAgICAgICAgICAgbGlua1RydWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgfHwgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBYm91dCBVc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvTGlua1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9XaWtraUhyZWY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZHJpdmVyLXJlcXVpcmVtZW50c1wiPlxyXG4gICAgICAgICAgICAgIDxXaWtraUhyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1RleHRcclxuICAgICAgICAgICAgICAgICAgbGlua1RydWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgfHwgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCZWNvbWUgQSBEcml2ZXJcclxuICAgICAgICAgICAgICAgIDwvTGlua1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9XaWtraUhyZWY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvaG93LWl0LXdvcmtzXCI+XHJcbiAgICAgICAgICAgICAgPFdpa2tpSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaW5rVGV4dFxyXG4gICAgICAgICAgICAgICAgICBsaW5rVHJ1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiB8fCByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhvdyBJdCBXb3Jrc1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rVGV4dD5cclxuICAgICAgICAgICAgICA8L1dpa2tpSHJlZj5cclxuICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxXaWtraUhyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1RleHRcclxuICAgICAgICAgICAgICAgICAgbGlua1RydWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgfHwgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L0xpbmtUZXh0PlxyXG4gICAgICAgICAgICAgIDwvV2lra2lIcmVmPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1dpa2tpTGlua3M+XHJcbiAgICAgICAgPC9XaWtraUxpbmtzQ292ZXI+XHJcblxyXG4gICAgICAgIDxOYXZCdXQ+XHJcbiAgICAgICAgICA8TmF2QnV0dG9uIHRvPVwiL2Rvd25sb2FkXCI+R2V0IEFwcDwvTmF2QnV0dG9uPlxyXG4gICAgICAgIDwvTmF2QnV0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb248TW9iaWxlUHJvcHM+YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMucm91dGVyT3BlbmVkID8gYCR7V2lra2lUaGVtZS53aGl0ZX1gIDogYCR7V2lra2lUaGVtZS5wcmltYXJ5fWB9O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdjxNb2JpbGVQcm9wcz5gXHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMub3BlbiA/IFwidHJhbnNsYXRlWSgwJSlcIiA6IFwidHJhbnNsYXRlWSgtMjAwMHB4KVwifTtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5yb3V0ZXJPcGVuZWQgPyBgJHtXaWtraVRoZW1lLndoaXRlfWAgOiBgJHtXaWtraVRoZW1lLnByaW1hcnl9YH07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFdpa2tpTG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmBcclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHdpZHRoOiAxNDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFdpa2tpTGlua3NDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFdpa2tpTGlua3MgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYFxyXG5jb25zdCBXaWtraUhyZWYgPSBzdHlsZWQubGlgXHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5jb25zdCBMaW5rVGV4dCA9IHN0eWxlZChTdWJUaXRsZSk8TGlua1Byb3BzPmBcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5saW5rVHJ1ZSA/IGAke1dpa2tpVGhlbWUud2hpdGV9YCA6IGAke1dpa2tpVGhlbWUuYmxhY2t9YH07XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuc2Vjb25kYXJ5fTtcclxuICB9XHJcbmBcclxuY29uc3QgTmF2QnV0ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBOYXZCdXR0b24gPSBzdHlsZWQoTmF2YmFyQnV0dG9uKWBgXHJcblxyXG5jb25zdCBNb2JpbGVMb2dvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMzJweDtcclxuICB9XHJcbmBcclxuY29uc3QgTW9iaWxlVG9nZ2xlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDQ4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICByaWdodDogMjRweDtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbmBcclxuY29uc3QgVG9nZ2xlVG9wID0gc3R5bGVkLnNwYW48TW9iaWxlUHJvcHM+YFxyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMub3BlbiA/IFwicm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0zcHgsMnB4KVwiIDogXCJyb3RhdGUoMClcIn07XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5yb3V0ZXJPcGVuZWQgPyBgJHtXaWtraVRoZW1lLmJsYWNrfWAgOiBgJHtXaWtraVRoZW1lLndoaXRlfWB9O1xyXG5gXHJcbmNvbnN0IFRvZ2dsZU1pZGRsZSA9IHN0eWxlZC5zcGFuPE1vYmlsZVByb3BzPmBcclxuICBoZWlnaHQ6IDJweDtcclxuICBtYXJnaW46IDRweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLm9wZW4gPyBcIm5vbmVcIiA6IFwiZmxleFwiKX07XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5yb3V0ZXJPcGVuZWQgPyBgJHtXaWtraVRoZW1lLmJsYWNrfWAgOiBgJHtXaWtraVRoZW1lLndoaXRlfWB9O1xyXG5gXHJcbmNvbnN0IFRvZ2dsZUJvdHRvbSA9IHN0eWxlZC5zcGFuPE1vYmlsZVByb3BzPmBcclxuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMub3BlbiA/IFwicm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTRweCwtM3B4KVwiIDogXCJyb3RhdGUoMClcIn07XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5yb3V0ZXJPcGVuZWQgPyBgJHtXaWtraVRoZW1lLmJsYWNrfWAgOiBgJHtXaWtraVRoZW1lLndoaXRlfWB9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgSGlPdXRsaW5lQXJyb3dVcCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXHJcblxyXG5pbnRlcmZhY2UgU2Nyb2xsUHJvcHMge1xyXG4gIHNjcm9sbGVkPzogYm9vbGVhblxyXG59XHJcbmNvbnN0IEJhY2tUb1RvcCA9ICgpID0+IHtcclxuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBiYWNrVG8gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcclxuICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNjcm9sbGVkKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keSBzY3JvbGxlZD17c2Nyb2xsZWR9IG9uQ2xpY2s9e2JhY2tUb30+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8U2Nyb2xsVGV4dCAvPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdjxTY3JvbGxQcm9wcz5gXHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuc2Nyb2xsZWQgPyBcImZsZXhcIiA6IFwibm9uZVwiKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogODA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgfVxyXG4gIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgJHtXaWtraVRoZW1lLnByaW1hcnl9O1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAke1dpa2tpVGhlbWUucHJpbWFyeX07XHJcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgU2Nyb2xsVGV4dCA9IHN0eWxlZChIaU91dGxpbmVBcnJvd1VwKWBcclxuICBzdHJva2U6ICR7V2lra2lUaGVtZS5ibGFja307XHJcblxyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBCYWNrVG9Ub3BcclxuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IERyaXZlckFkdmFudGFnZSBmcm9tIFwifi9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJBZHZhbnRhZ2VcIlxyXG5pbXBvcnQgRHJpdmVySGVybyBmcm9tIFwifi9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJIZXJvXCJcclxuaW1wb3J0IERyaXZlck1lc3NhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyTWVzc2FnZVwiXHJcbmltcG9ydCBEcml2ZXJSZXF1aXJlbWVudHMgZnJvbSBcIn4vY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyUmVxdWlyZW1lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xyXG4gIGNoYXJzZXQ6IFwidXRmLThcIixcclxuICB0aXRsZTogXCJCZWNvbWUgYSBkcml2ZXIgLSBSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXHJcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxyXG5cclxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcclxufSlcclxuY29uc3QgZHJpdmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPERyaXZlckhlcm8gLz5cclxuICAgICAgPERyaXZlckFkdmFudGFnZSAvPlxyXG4gICAgICA8RHJpdmVyTWVzc2FnZSAvPlxyXG4gICAgICA8RHJpdmVyUmVxdWlyZW1lbnRzIC8+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YGBcclxuZXhwb3J0IGRlZmF1bHQgZHJpdmVyXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBNYWluQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5MywgSGVhZGVyMiwgSGVhZGVyNSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IHsgZHJpdmVyRGF0YSB9IGZyb20gXCIuL1B1cnBvc2VEYXRhXCJcclxuaW1wb3J0IG1haW4gZnJvbSBcIn4vaW1hZ2VzL21haW4ucG5nXCJcclxuY29uc3QgRHJpdmVyQWR2YW50YWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxEcml2ZXJHcmlkPlxyXG4gICAgICAgICAgPERyaXZlckxlZnQ+XHJcbiAgICAgICAgICAgIDxEaXZlckNvdmVyPlxyXG4gICAgICAgICAgICAgIDxEcml2ZXJUaXRsZT5IZWxwIHNvbHZlIGxvZ2lzdGljcyBwcm9ibGVtPC9Ecml2ZXJUaXRsZT5cclxuICAgICAgICAgICAgICA8RHJpdmVyVGV4dD5cclxuICAgICAgICAgICAgICAgIEludGVncmF0ZSBCYW5reSBvbiB5b3VyIHdlYi1zaXRlIHRvIG9mZmVyIGZhc3QsIHNlY3VyZSBhbmRcclxuICAgICAgICAgICAgICAgIHNlYW1sZXNzIG9ubGluZSBiYW5rIHRyYW5zZmVyIHBheW1lbnQgbWV0aG9kLiBZb3UgY291bGQgcmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgcGF5bWVudHMgc3RyYWlnaHQgaW50byB5b3VyIGNvbXBhbnkgYmFuayBhY2NvdW50IG9yIG9wZW4gYSBCYW5reVxyXG4gICAgICAgICAgICAgICAgbWVyY2hhbnQgYWNjb3VudCBhbmQgY29sbGVjdCBmdW5kcyB0aGVyZS5cclxuICAgICAgICAgICAgICA8L0RyaXZlclRleHQ+XHJcbiAgICAgICAgICAgICAgPERyaXZlckJ1dHRvbj5HZXQgc3RhcnRlZDwvRHJpdmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0RpdmVyQ292ZXI+XHJcbiAgICAgICAgICA8L0RyaXZlckxlZnQ+XHJcbiAgICAgICAgICA8RHJpdmVyUmlnaHQ+XHJcbiAgICAgICAgICAgIDxSaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERyaXZlckltYWdlIHNyYz17bWFpbn0gYWx0PVwid2lra2kgZHJpdmVyIHJlcXVpcmVtZW50XCIgLz5cclxuICAgICAgICAgICAgPC9SaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgIHtkcml2ZXJEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UmlnaHRTZWN0aW9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25Db3Zlcj5cclxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25JY29uPntkYXRhLmljb259PC9TZWN0aW9uSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT57ZGF0YS50aXRsZX08L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25UZXh0PntkYXRhLnRleHR9PC9TZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VjdGlvbkNvdmVyPlxyXG4gICAgICAgICAgICAgIDwvUmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRHJpdmVyUmlnaHQ+XHJcbiAgICAgICAgPC9Ecml2ZXJHcmlkPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zZWNvbmRhcnl9O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDE4MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVyR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEcml2ZXJMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEyMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERpdmVyQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEcml2ZXJUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYFxyXG5jb25zdCBEcml2ZXJUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTZweCAwIDQwcHggMDtcclxuYFxyXG5jb25zdCBEcml2ZXJCdXR0b24gPSBzdHlsZWQoTWFpbkJ1dHRvbilgYFxyXG5jb25zdCBEcml2ZXJSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBEcml2ZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBSaWdodFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY3Rpb25JY29uID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZChIZWFkZXI1KWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMzJweCAwIDhweCAwO1xyXG5gXHJcbmNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5jb25zdCBTZWN0aW9uQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcml2ZXJBZHZhbnRhZ2VcclxuIiwgImV4cG9ydCBjb25zdCBkcml2ZXJEYXRhID0gW1xyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgIGhlaWdodD1cIjQxXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQwIDQxXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTEyIDQuNUMxMS40Njk2IDQuNSAxMC45NjA5IDQuNzEwNzEgMTAuNTg1OCA1LjA4NTc5QzEwLjIxMDcgNS40NjA4NiAxMCA1Ljk2OTU3IDEwIDYuNVY4LjVIOEM2LjkzOTEzIDguNSA1LjkyMTcyIDguOTIxNDMgNS4xNzE1NyA5LjY3MTU3QzQuNDIxNDMgMTAuNDIxNyA0IDExLjQzOTEgNCAxMi41VjMyLjVDNCAzMy41NjA5IDQuNDIxNDMgMzQuNTc4MyA1LjE3MTU3IDM1LjMyODRDNS45MjE3MiAzNi4wNzg2IDYuOTM5MTMgMzYuNSA4IDM2LjVIMzJDMzMuMDYwOSAzNi41IDM0LjA3ODMgMzYuMDc4NiAzNC44Mjg0IDM1LjMyODRDMzUuNTc4NiAzNC41NzgzIDM2IDMzLjU2MDkgMzYgMzIuNVYxMi41QzM2IDExLjQzOTEgMzUuNTc4NiAxMC40MjE3IDM0LjgyODQgOS42NzE1N0MzNC4wNzgzIDguOTIxNDMgMzMuMDYwOSA4LjUgMzIgOC41SDMwVjYuNUMzMCA1Ljk2OTU3IDI5Ljc4OTMgNS40NjA4NiAyOS40MTQyIDUuMDg1NzlDMjkuMDM5MSA0LjcxMDcxIDI4LjUzMDQgNC41IDI4IDQuNUMyNy40Njk2IDQuNSAyNi45NjA5IDQuNzEwNzEgMjYuNTg1OCA1LjA4NTc5QzI2LjIxMDcgNS40NjA4NiAyNiA1Ljk2OTU3IDI2IDYuNVY4LjVIMTRWNi41QzE0IDUuOTY5NTcgMTMuNzg5MyA1LjQ2MDg2IDEzLjQxNDIgNS4wODU3OUMxMy4wMzkxIDQuNzEwNzEgMTIuNTMwNCA0LjUgMTIgNC41Wk0xMiAxNC41QzExLjQ2OTYgMTQuNSAxMC45NjA5IDE0LjcxMDcgMTAuNTg1OCAxNS4wODU4QzEwLjIxMDcgMTUuNDYwOSAxMCAxNS45Njk2IDEwIDE2LjVDMTAgMTcuMDMwNCAxMC4yMTA3IDE3LjUzOTEgMTAuNTg1OCAxNy45MTQyQzEwLjk2MDkgMTguMjg5MyAxMS40Njk2IDE4LjUgMTIgMTguNUgyOEMyOC41MzA0IDE4LjUgMjkuMDM5MSAxOC4yODkzIDI5LjQxNDIgMTcuOTE0MkMyOS43ODkzIDE3LjUzOTEgMzAgMTcuMDMwNCAzMCAxNi41QzMwIDE1Ljk2OTYgMjkuNzg5MyAxNS40NjA5IDI5LjQxNDIgMTUuMDg1OEMyOS4wMzkxIDE0LjcxMDcgMjguNTMwNCAxNC41IDI4IDE0LjVIMTJaXCJcclxuICAgICAgICAgIGZpbGw9XCJibGFja1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgdGl0bGU6IFwiU2V0IHlvdXIgb3duIHNjaGVkdWxlXCIsXHJcbiAgICB0ZXh0OiBcIllvdVx1MjAxOXJlIHRoZSBib3NzLiBZb3UgY2FuIGRyaXZlIHdpdGggdGhlIHdpa2traSBhcHAgZGF5IG9yIG5pZ2h0LiBGaXQgZHJpdmluZyBhcm91bmQgeW91ciBsaWZlLCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICBoZWlnaHQ9XCI0MVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA0MCA0MVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgZD1cIk0xMiA0LjVDMTEuNDY5NiA0LjUgMTAuOTYwOSA0LjcxMDcxIDEwLjU4NTggNS4wODU3OUMxMC4yMTA3IDUuNDYwODYgMTAgNS45Njk1NyAxMCA2LjVWOC41SDhDNi45MzkxMyA4LjUgNS45MjE3MiA4LjkyMTQzIDUuMTcxNTcgOS42NzE1N0M0LjQyMTQzIDEwLjQyMTcgNCAxMS40MzkxIDQgMTIuNVYzMi41QzQgMzMuNTYwOSA0LjQyMTQzIDM0LjU3ODMgNS4xNzE1NyAzNS4zMjg0QzUuOTIxNzIgMzYuMDc4NiA2LjkzOTEzIDM2LjUgOCAzNi41SDMyQzMzLjA2MDkgMzYuNSAzNC4wNzgzIDM2LjA3ODYgMzQuODI4NCAzNS4zMjg0QzM1LjU3ODYgMzQuNTc4MyAzNiAzMy41NjA5IDM2IDMyLjVWMTIuNUMzNiAxMS40MzkxIDM1LjU3ODYgMTAuNDIxNyAzNC44Mjg0IDkuNjcxNTdDMzQuMDc4MyA4LjkyMTQzIDMzLjA2MDkgOC41IDMyIDguNUgzMFY2LjVDMzAgNS45Njk1NyAyOS43ODkzIDUuNDYwODYgMjkuNDE0MiA1LjA4NTc5QzI5LjAzOTEgNC43MTA3MSAyOC41MzA0IDQuNSAyOCA0LjVDMjcuNDY5NiA0LjUgMjYuOTYwOSA0LjcxMDcxIDI2LjU4NTggNS4wODU3OUMyNi4yMTA3IDUuNDYwODYgMjYgNS45Njk1NyAyNiA2LjVWOC41SDE0VjYuNUMxNCA1Ljk2OTU3IDEzLjc4OTMgNS40NjA4NiAxMy40MTQyIDUuMDg1NzlDMTMuMDM5MSA0LjcxMDcxIDEyLjUzMDQgNC41IDEyIDQuNVpNMTIgMTQuNUMxMS40Njk2IDE0LjUgMTAuOTYwOSAxNC43MTA3IDEwLjU4NTggMTUuMDg1OEMxMC4yMTA3IDE1LjQ2MDkgMTAgMTUuOTY5NiAxMCAxNi41QzEwIDE3LjAzMDQgMTAuMjEwNyAxNy41MzkxIDEwLjU4NTggMTcuOTE0MkMxMC45NjA5IDE4LjI4OTMgMTEuNDY5NiAxOC41IDEyIDE4LjVIMjhDMjguNTMwNCAxOC41IDI5LjAzOTEgMTguMjg5MyAyOS40MTQyIDE3LjkxNDJDMjkuNzg5MyAxNy41MzkxIDMwIDE3LjAzMDQgMzAgMTYuNUMzMCAxNS45Njk2IDI5Ljc4OTMgMTUuNDYwOSAyOS40MTQyIDE1LjA4NThDMjkuMDM5MSAxNC43MTA3IDI4LjUzMDQgMTQuNSAyOCAxNC41SDEyWlwiXHJcbiAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIHRpdGxlOiBcIkNoZWFwIGZlZXNcIixcclxuICAgIHRleHQ6IFwiTmV3IHdvcmxkIGZpbmFuY2lhbCBsaXRlcmFjeSBmb3IgdGhlIGZ1dHVyZSBvZiB3b3JrLiBHaXZpbmcgdGhlIHlvdXRoIHRoZSBjb25maWRlbmNlIHRvIGZvbGxvdyB0aGVpciBjYWxsaW5nLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDFcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDFcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGQ9XCJNMTIgNC41QzExLjQ2OTYgNC41IDEwLjk2MDkgNC43MTA3MSAxMC41ODU4IDUuMDg1NzlDMTAuMjEwNyA1LjQ2MDg2IDEwIDUuOTY5NTcgMTAgNi41VjguNUg4QzYuOTM5MTMgOC41IDUuOTIxNzIgOC45MjE0MyA1LjE3MTU3IDkuNjcxNTdDNC40MjE0MyAxMC40MjE3IDQgMTEuNDM5MSA0IDEyLjVWMzIuNUM0IDMzLjU2MDkgNC40MjE0MyAzNC41NzgzIDUuMTcxNTcgMzUuMzI4NEM1LjkyMTcyIDM2LjA3ODYgNi45MzkxMyAzNi41IDggMzYuNUgzMkMzMy4wNjA5IDM2LjUgMzQuMDc4MyAzNi4wNzg2IDM0LjgyODQgMzUuMzI4NEMzNS41Nzg2IDM0LjU3ODMgMzYgMzMuNTYwOSAzNiAzMi41VjEyLjVDMzYgMTEuNDM5MSAzNS41Nzg2IDEwLjQyMTcgMzQuODI4NCA5LjY3MTU3QzM0LjA3ODMgOC45MjE0MyAzMy4wNjA5IDguNSAzMiA4LjVIMzBWNi41QzMwIDUuOTY5NTcgMjkuNzg5MyA1LjQ2MDg2IDI5LjQxNDIgNS4wODU3OUMyOS4wMzkxIDQuNzEwNzEgMjguNTMwNCA0LjUgMjggNC41QzI3LjQ2OTYgNC41IDI2Ljk2MDkgNC43MTA3MSAyNi41ODU4IDUuMDg1NzlDMjYuMjEwNyA1LjQ2MDg2IDI2IDUuOTY5NTcgMjYgNi41VjguNUgxNFY2LjVDMTQgNS45Njk1NyAxMy43ODkzIDUuNDYwODYgMTMuNDE0MiA1LjA4NTc5QzEzLjAzOTEgNC43MTA3MSAxMi41MzA0IDQuNSAxMiA0LjVaTTEyIDE0LjVDMTEuNDY5NiAxNC41IDEwLjk2MDkgMTQuNzEwNyAxMC41ODU4IDE1LjA4NThDMTAuMjEwNyAxNS40NjA5IDEwIDE1Ljk2OTYgMTAgMTYuNUMxMCAxNy4wMzA0IDEwLjIxMDcgMTcuNTM5MSAxMC41ODU4IDE3LjkxNDJDMTAuOTYwOSAxOC4yODkzIDExLjQ2OTYgMTguNSAxMiAxOC41SDI4QzI4LjUzMDQgMTguNSAyOS4wMzkxIDE4LjI4OTMgMjkuNDE0MiAxNy45MTQyQzI5Ljc4OTMgMTcuNTM5MSAzMCAxNy4wMzA0IDMwIDE2LjVDMzAgMTUuOTY5NiAyOS43ODkzIDE1LjQ2MDkgMjkuNDE0MiAxNS4wODU4QzI5LjAzOTEgMTQuNzEwNyAyOC41MzA0IDE0LjUgMjggMTQuNUgxMlpcIlxyXG4gICAgICAgICAgZmlsbD1cImJsYWNrXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICB0aXRsZTogXCJCZXR0ZXIgbG9naXN0aWNzXCIsXHJcbiAgICB0ZXh0OiBcIk5ldyB3b3JsZCBmaW5hbmNpYWwgbGl0ZXJhY3kgZm9yIHRoZSBmdXR1cmUgb2Ygd29yay4gR2l2aW5nIHRoZSB5b3V0aCB0aGUgY29uZmlkZW5jZSB0byBmb2xsb3cgdGhlaXIgY2FsbGluZy5cIixcclxuICB9LFxyXG5dXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjIgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5jb25zdCBEcml2ZXJIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxEcml2ZXJUaXRsZT5HZXQgaW4gdGhlIGRyaXZlclx1MjAxOXMgc2VhdCBhbmQgZ2V0IHBhaWQ8L0RyaXZlclRpdGxlPlxyXG4gICAgICAgIDxEcml2ZXJUZXh0PlxyXG4gICAgICAgICAgTWFrZSB0aGUgbW9zdCBvZiB5b3VyIHRpbWUgb24gdGhlIHJvYWQgb24gdGhlIHBsYXRmb3JtIHdpdGggdGhlXHJcbiAgICAgICAgICBsYXJnZXN0IG5ldHdvcmsgb2YgYWN0aXZlIHJpZGVycy5cclxuICAgICAgICA8L0RyaXZlclRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweCAxNnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERyaXZlclRpdGxlID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEcml2ZXJUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBEcml2ZXJIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBMYXJnZUhlYWRlciB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IERyaXZlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI3NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgYW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG5cclxuIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG5cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBSaWRlVGV4dCA9IHN0eWxlZChMYXJnZUhlYWRlcilgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW46IDQwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyaXZlck1lc3NhZ2VcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEJvZHkzLCBIZWFkZXIyIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgRHJpdmVyQWNjb3JkaW9uIGZyb20gXCIuL0RyaXZlckFjY29yZGlvblwiXHJcbmltcG9ydCB7IHJlcXVpcmVtZW50RGF0YSB9IGZyb20gXCIuL1JlcXVpcmVtZW50RGF0YVwiXHJcbmltcG9ydCBkcml2ZXIyIGZyb20gXCJ+L2ltYWdlcy9kcml2ZXIyLnBuZ1wiXHJcbmNvbnN0IERyaXZlclJlcXVpcmVtZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KDEpXHJcblxyXG4gIGNvbnN0IHNlbGVjdFJlcXVpcmVtZW50ID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IG51bWJlcikge1xyXG4gICAgICByZXR1cm4gc2V0U2VsZWN0ZWQobnVsbClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkKG51bWJlcilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPERyaXZlckNvdmVyPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPERyaXZlclRpdGxlPkRyaXZlclx1MjAxOXMgcmVxdWlyZW1lbnQ8L0RyaXZlclRpdGxlPlxyXG4gICAgICAgICAgPERyaXZlclRleHQ+XHJcbiAgICAgICAgICAgIFdpa2tpIGlzIGEgZ3JlYXQgd2F5IHRvIGJlIHlvdXIgb3duIGJvc3MgYW5kIG1ha2UgbW9uZXkuXHJcbiAgICAgICAgICA8L0RyaXZlclRleHQ+XHJcbiAgICAgICAgPC9Ecml2ZXJDb3Zlcj5cclxuICAgICAgICA8RHJpdmVyR3JpZD5cclxuICAgICAgICAgIDxEcml2ZXJOZWVkcz5cclxuICAgICAgICAgICAge3JlcXVpcmVtZW50RGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICA8RHJpdmVyQWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICBudW1iZXI9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNlbGVjdFJlcXVpcmVtZW50KGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXtkYXRhLmlkID09PSBzZWxlY3RlZCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRHJpdmVyTmVlZHM+XHJcbiAgICAgICAgICA8RHJpdmVySW1hZ2U+XHJcbiAgICAgICAgICAgIDxEcml2ZXJQaG90byBzcmM9e2RyaXZlcjJ9IGFsdD1cIndpa2tpXCIgLz5cclxuICAgICAgICAgIDwvRHJpdmVySW1hZ2U+XHJcbiAgICAgICAgPC9Ecml2ZXJHcmlkPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zbm93V2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgRHJpdmVyQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG5gXHJcbmNvbnN0IERyaXZlclRpdGxlID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmBcclxuY29uc3QgRHJpdmVyVGV4dCA9IHN0eWxlZChCb2R5MylgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDhweCAwO1xyXG5gXHJcblxyXG5jb25zdCBEcml2ZXJHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERyaXZlck5lZWRzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEcml2ZXJQaG90byA9IHN0eWxlZC5pbWdgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjI3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRHJpdmVyUmVxdWlyZW1lbnRzXHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBGaUNoZXZyb25Eb3duLCBGaUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBCb2R5NCwgSGVhZGVyNSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmludGVyZmFjZSBPcGVuUHJvcHMge1xyXG4gIGFjdGl2ZT86IGJvb2xlYW5cclxufVxyXG5pbnRlcmZhY2UgRHJpdmVyUHJvcHMge1xyXG4gIG51bWJlcj86IG51bWJlclxyXG4gIHRleHQ/OiBzdHJpbmdcclxuICBjb250ZW50Pzogc3RyaW5nXHJcbiAgY2xpY2s6IChudW1iZXI6IGFueSkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEcml2ZXJBY2NvcmRpb246IEZDPERyaXZlclByb3BzICYgT3BlblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbnVtYmVyLCBhY3RpdmUsIHRleHQsIGNvbnRlbnQsIGNsaWNrIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8Qm9keSBsYXlvdXQgb25DbGljaz17KCkgPT4gY2xpY2sobnVtYmVyKX0+XHJcbiAgICAgICAgPENvdmVyIGxheW91dD1cInBvc2l0aW9uXCI+XHJcbiAgICAgICAgICA8RHJpdmVyTnVtYmVyIGxheW91dD1cInBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgIDxOdW1iZXJUZXh0IGxheW91dD1cInBvc2l0aW9uXCI+e251bWJlcn08L051bWJlclRleHQ+XHJcbiAgICAgICAgICA8L0RyaXZlck51bWJlcj5cclxuICAgICAgICAgIDxEcml2ZXJCb2R5IGxheW91dD1cInBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgIDxEcml2ZXJDb250ZW50IGxheW91dD1cInBvc2l0aW9uXCI+e3RleHR9PC9Ecml2ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8RHJpdmVyUGFyYSBhY3RpdmU9e2FjdGl2ZX0+e2NvbnRlbnR9PC9Ecml2ZXJQYXJhPlxyXG4gICAgICAgICAgPC9Ecml2ZXJCb2R5PlxyXG4gICAgICAgICAgPERyaXZlckljb24gbGF5b3V0PVwicG9zaXRpb25cIj5cclxuICAgICAgICAgICAge2FjdGl2ZSA/IDxEcml2ZXJEb3duIC8+IDogPERyaXZlclVwIC8+fVxyXG4gICAgICAgICAgPC9Ecml2ZXJJY29uPlxyXG4gICAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDwvQm9keT5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gMzJweDtcclxuICBncmlkLWdhcDogMTZweDtcclxuICBnYXA6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5jb25zdCBEcml2ZXJOdW1iZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBOdW1iZXJUZXh0ID0gc3R5bGVkKG1vdGlvbihIZWFkZXI1KSlgYFxyXG5jb25zdCBEcml2ZXJCb2R5ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xyXG5gXHJcbmNvbnN0IERyaXZlckNvbnRlbnQgPSBzdHlsZWQobW90aW9uKEhlYWRlcjUpKWBcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xyXG5gXHJcbmNvbnN0IERyaXZlclBhcmEgPSBzdHlsZWQobW90aW9uKEJvZHk0KSk8T3BlblByb3BzPmBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLmFjdGl2ZSA/IFwiMTAwJVwiIDogXCIwcHhcIil9O1xyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuYWN0aXZlID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xyXG5gXHJcbmNvbnN0IERyaXZlckljb24gPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5jb25zdCBEcml2ZXJVcCA9IHN0eWxlZChtb3Rpb24oRmlDaGV2cm9uVXApKWBcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5jb25zdCBEcml2ZXJEb3duID0gc3R5bGVkKG1vdGlvbihGaUNoZXZyb25Eb3duKSlgXHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRHJpdmVyQWNjb3JkaW9uXHJcbiIsICJleHBvcnQgY29uc3QgcmVxdWlyZW1lbnREYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiRG93bmxvYWQgYXBwIGFuZCBzaWduIHVwXCIsXHJcbiAgICB0ZXh0OiBcIkdvdCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBhIHNtYXJ0cGhvbmU/IEdyZWF0LCBub3cgdGVsbCB1cyBhIGJpdCBtb3JlIGFib3V0IHlvdXJzZWxmIGFuZCB3ZSdsbCBnZXQgeW91IHN0YXJ0ZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIlVwbG9hZCB5b3VyIGRvY3VtZW50c1wiLFxyXG4gICAgdGV4dDogXCJHb3QgYW4gZW1haWwgYWRkcmVzcyBhbmQgYSBzbWFydHBob25lPyBHcmVhdCwgbm93IHRlbGwgdXMgYSBiaXQgbW9yZSBhYm91dCB5b3Vyc2VsZiBhbmQgd2UnbGwgZ2V0IHlvdSBzdGFydGVkLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJVcGxvYWQgdmVoaWNsZSBkZXRhaWxzXCIsXHJcbiAgICB0ZXh0OiBcIkdvdCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBhIHNtYXJ0cGhvbmU/IEdyZWF0LCBub3cgdGVsbCB1cyBhIGJpdCBtb3JlIGFib3V0IHlvdXJzZWxmIGFuZCB3ZSdsbCBnZXQgeW91IHN0YXJ0ZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIkFjdGl2YXRlIHlvdXIgYWNjb3VudFwiLFxyXG4gICAgdGV4dDogXCJHb3QgYW4gZW1haWwgYWRkcmVzcyBhbmQgYSBzbWFydHBob25lPyBHcmVhdCwgbm93IHRlbGwgdXMgYSBiaXQgbW9yZSBhYm91dCB5b3Vyc2VsZiBhbmQgd2UnbGwgZ2V0IHlvdSBzdGFydGVkLlwiLFxyXG4gIH0sXHJcbl1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5MywgSGVhZGVyMywgSGVhZGVyNSwgU3ViVGl0bGUgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXHJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxyXG5pbXBvcnQgYXBwIGZyb20gXCJ+L2ltYWdlcy9hcHAucG5nXCJcclxuaW1wb3J0IGljb24gZnJvbSBcIn4vaW1hZ2VzL2ljb24ucG5nXCJcclxuaW1wb3J0IGJhdmUgZnJvbSBcIn4vaW1hZ2VzL2JhdmUuc3ZnXCJcclxuaW1wb3J0IHBheSBmcm9tIFwifi9pbWFnZXMvcGF5LnBuZ1wiXHJcbmltcG9ydCByb3V0ZSBmcm9tIFwifi9pbWFnZXMvcm91dGUucG5nXCJcclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XHJcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxyXG4gIHRpdGxlOiBcIkhvdyBpdCB3b3JrcyBkcml2ZXIgLSBSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXHJcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxyXG5cclxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcclxufSlcclxuY29uc3QgV29ya3NEcml2ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFdvcmtzU2VsZWN0b3I+XHJcbiAgICAgICAgICA8U2VsZWN0b3I+XHJcbiAgICAgICAgICAgIDxEcml2ZXIgdG89XCIvaG93LWl0LXdvcmtzXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdG9yVGV4dD5SaWRlciA8L1NlbGVjdG9yVGV4dD5cclxuICAgICAgICAgICAgPC9Ecml2ZXI+XHJcblxyXG4gICAgICAgICAgICA8VXNlciB0bz1cIi9ob3ctaXQtd29ya3MvZHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdG9yVGV4dD5Ecml2ZXI8L1NlbGVjdG9yVGV4dD5cclxuICAgICAgICAgICAgPC9Vc2VyPlxyXG4gICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICA8L1dvcmtzU2VsZWN0b3I+XHJcblxyXG4gICAgICAgIDxXb3Jrc1Jvdz5cclxuICAgICAgICAgIDxUb3BSb3c+XHJcbiAgICAgICAgICAgIDxEb3dubG9hZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERvd25sb2FkQ292ZXI+XHJcbiAgICAgICAgICAgICAgICA8RG93bmxvYWRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclRleHQ+MTwvTnVtYmVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWRUaXRsZT5Eb3dubG9hZCB0aGUgYXBwIGFuZCBzaWduIHVwPC9Eb3dubG9hZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGRyaXZlIGFuZCBtYWtlIGFzIG11Y2ggYXMgeW91IHdhbnQuIEFuZCwgdGhlIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIHlvdSBkcml2ZSwgdGhlIG1vcmUgeW91IGNvdWxkIG1ha2UuIFBsdXMsIHlvdXIgZmFyZXMgZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5IGRlcG9zaXRlZCB3ZWVrbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvRG93bmxvYWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Eb3dubG9hZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RG93bmxvYWRBcHA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcHB9IGFsdD1cInVzZSB3aWtraSBteSB3aWtraVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Rvd25sb2FkQXBwPlxyXG4gICAgICAgICAgICAgIDwvRG93bmxvYWRDb3Zlcj5cclxuICAgICAgICAgICAgPC9Eb3dubG9hZFNlY3Rpb24+XHJcbiAgICAgICAgICA8L1RvcFJvdz5cclxuICAgICAgICAgIDxCb3R0b21Sb3c+XHJcbiAgICAgICAgICAgIDxTZWNvbmRSb3c+XHJcbiAgICAgICAgICAgICAgPFNlY29uZE1hc2sgc3JjPXtpY29ufSBhbHQ9XCJ1c2Ugd2lra2kgbXkgd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgIDxCb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8U2Vjb25kTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRUZXh0PjI8L1NlY29uZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2Vjb25kTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICA8U2Vjb25kRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY29uZFRpdGxlPlBpY2sgdXAgb3JkZXIsIGFuZCBkZWxpdmVyPC9TZWNvbmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kUGFyYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY29uZFBhcmE+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2Vjb25kRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlY29uZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyb3V0ZX0gYWx0PVwibXl3aWtraSB1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWNvbmRJbWFnZT5cclxuICAgICAgICAgICAgICA8L0JvdHRvbUNvdmVyPlxyXG4gICAgICAgICAgICA8L1NlY29uZFJvdz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxUaGlyZFJvdz5cclxuICAgICAgICAgICAgICA8VGhpcmRNYXNrIHNyYz17YmF2ZX0gYWx0PVwidXNlIHdpa2tpIG15IHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICA8VGhpcmRCb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgICAgIDxUaGlyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGlyZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGhpcmRUZXh0PjM8L1RoaXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9UaGlyZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFRoaXJkRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoaXJkVGl0bGU+R2V0IHBhaWQgYW5kIGNhc2hvdXQ8L1RoaXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoaXJkUGFyYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L1RoaXJkUGFyYT5cclxuICAgICAgICAgICAgICAgICAgPC9UaGlyZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgPC9UaGlyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VGhpcmRJbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BheX0gYWx0PVwibXl3aWtraSB1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaGlyZEltYWdlPlxyXG4gICAgICAgICAgICAgIDwvVGhpcmRCb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgPC9UaGlyZFJvdz5cclxuICAgICAgICAgIDwvQm90dG9tUm93PlxyXG4gICAgICAgIDwvV29ya3NSb3c+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHggNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc25vd1doaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogOTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFdvcmtzU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiAzNDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBVc2VyID0gc3R5bGVkKExpbmspYFxyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXgtd2lkdGg6IDE1NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTRweCA1NnB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVyID0gc3R5bGVkKExpbmspYFxyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXgtd2lkdGg6IDE1NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTRweCA1NnB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdG9yVGV4dCA9IHN0eWxlZChTdWJUaXRsZSlgYFxyXG5jb25zdCBXb3Jrc1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBUb3BSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b21Sb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNDBweDtcclxuICBnYXA6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgZ3JpZC1nYXA6IDI0cHg7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcbmBcclxuY29uc3QgRG93bmxvYWRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTQwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBEb3dubG9hZENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDk3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNjRweCBhdXRvIDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDcycHg7XHJcbiAgZ2FwOiA3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAzNnB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDhweCBhdXRvIDAgYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDM2cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICBncmlkLWdhcDogMzJweDtcclxuICBnYXA6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBOdW1iZXJUZXh0ID0gc3R5bGVkKEhlYWRlcjUpYGBcclxuY29uc3QgRG93bmxvYWRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuY29uc3QgRG93bmxvYWRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBgXHJcbmNvbnN0IERvd25sb2FkYm9keSA9IHN0eWxlZChCb2R5MylgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkQXBwID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDcyMXB4O1xyXG4gIG1heC13aWR0aDogMzYxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5saWdodFllbGxsb3d9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU2Vjb25kTWFzayA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogMjEzcHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB0b3A6IC0xMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYFxyXG5cclxuY29uc3QgVGhpcmRNYXNrID0gc3R5bGVkLmltZ2BcclxuICBsZWZ0OiAtNDBweDtcclxuICBoZWlnaHQ6IDI3N3B4O1xyXG4gIHdpZHRoOiA0NDhweDtcclxuICB0b3A6IC0zMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYFxyXG5jb25zdCBCb3R0b21Db3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA0ODFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW46IDQ4cHggYXV0byAwIGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAzMnB4IGF1dG8gMCBhdXRvO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAzMnB4O1xyXG4gIGdhcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kTnVtYmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBTZWNvbmRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRQYXJhID0gc3R5bGVkKEJvZHkzKWBcclxuICBtYXJnaW46IDI0cHggMDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kRG93bmxvYWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBTZWNvbmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MXB4O1xyXG4gIG1heC13aWR0aDogNDQxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDQxcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQ0MXB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgVGhpcmRSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA1ODBweDtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuZGFya1JlZH07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkQm90dG9tQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNDgxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMCBhdXRvO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvIDAgYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAzMnB4O1xyXG4gIGdhcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0bztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRoaXJkTnVtYmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcbmNvbnN0IFRoaXJkUGFyYSA9IHN0eWxlZChCb2R5MylgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkRG93bmxvYWQgPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgVGhpcmRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBUaGlyZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNDQxcHg7XHJcbiAgbWF4LXdpZHRoOiA0NDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzRHJpdmVyXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjMsIEhlYWRlcjUsIFN1YlRpdGxlIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxyXG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCJcclxuaW1wb3J0IGFwcCBmcm9tIFwifi9pbWFnZXMvYXBwLnBuZ1wiXHJcbmltcG9ydCBiYXZlIGZyb20gXCJ+L2ltYWdlcy9iYXZlLnN2Z1wiXHJcbmltcG9ydCBtYXNrIGZyb20gXCJ+L2ltYWdlcy9tYXNrLnN2Z1wiXHJcbmltcG9ydCByb3V0ZSBmcm9tIFwifi9pbWFnZXMvcm91dGUucG5nXCJcclxuaW1wb3J0IHBheSBmcm9tIFwifi9pbWFnZXMvcGF5LnBuZ1wiXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcclxuICBjaGFyc2V0OiBcInV0Zi04XCIsXHJcbiAgdGl0bGU6IFwiSG93IGl0IHdvcmtzIHVzZXJzIC0gUmVxdWVzdCBhIGRpc3BhdGNoIG9yIHBpY2t1cFwiLFxyXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcclxuXHJcbiAgZGVzY3JpcHRpb246IFwiR2V0IGl0ZW1zIGFuZCBnb29kcyBkZWxpdmVyZWQgYW5kIHBpY2tlZCB1cCBmcm9tIGFueXdoZXJlXCIsXHJcbn0pXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxXb3Jrc1NlbGVjdG9yPlxyXG4gICAgICAgICAgPFNlbGVjdG9yPlxyXG4gICAgICAgICAgICA8VXNlciB0bz1cIi9ob3ctaXQtd29ya3NcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0b3JUZXh0PlJpZGVyPC9TZWxlY3RvclRleHQ+XHJcbiAgICAgICAgICAgIDwvVXNlcj5cclxuXHJcbiAgICAgICAgICAgIDxEcml2ZXIgdG89XCIvaG93LWl0LXdvcmtzL2RyaXZlclwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RvclRleHQ+RHJpdmVyPC9TZWxlY3RvclRleHQ+XHJcbiAgICAgICAgICAgIDwvRHJpdmVyPlxyXG4gICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICA8L1dvcmtzU2VsZWN0b3I+XHJcblxyXG4gICAgICAgIDxXb3Jrc1Jvdz5cclxuICAgICAgICAgIDxUb3BSb3c+XHJcbiAgICAgICAgICAgIDxEb3dubG9hZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERvd25sb2FkQ292ZXI+XHJcbiAgICAgICAgICAgICAgICA8RG93bmxvYWRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclRleHQ+MTwvTnVtYmVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWRUaXRsZT5Eb3dubG9hZCB0aGUgYXBwIGFuZCBzaWduIHVwPC9Eb3dubG9hZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGRyaXZlIGFuZCBtYWtlIGFzIG11Y2ggYXMgeW91IHdhbnQuIEFuZCwgdGhlIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIHlvdSBkcml2ZSwgdGhlIG1vcmUgeW91IGNvdWxkIG1ha2UuIFBsdXMsIHlvdXIgZmFyZXMgZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5IGRlcG9zaXRlZCB3ZWVrbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvRG93bmxvYWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Eb3dubG9hZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RG93bmxvYWRBcHA+XHJcbiAgICAgICAgICAgICAgICAgIDxBcHBJbWFnZSBzcmM9e2FwcH0gYWx0PVwidXNlIHdpa2tpIG15IHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRG93bmxvYWRBcHA+XHJcbiAgICAgICAgICAgICAgPC9Eb3dubG9hZENvdmVyPlxyXG4gICAgICAgICAgICA8L0Rvd25sb2FkU2VjdGlvbj5cclxuICAgICAgICAgIDwvVG9wUm93PlxyXG4gICAgICAgICAgPEJvdHRvbVJvdz5cclxuICAgICAgICAgICAgPFNlY29uZFJvdz5cclxuICAgICAgICAgICAgICA8U2Vjb25kTWFzayBzcmM9e21hc2t9IGFsdD1cInVzZSB3aWtraSBteSB3aWtraVwiIC8+XHJcbiAgICAgICAgICAgICAgPEJvdHRvbUNvdmVyPlxyXG4gICAgICAgICAgICAgICAgPFNlY29uZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWNvbmROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY29uZFRleHQ+MjwvU2Vjb25kVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9TZWNvbmROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWNvbmREb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0IGEgcGljazxzcGFuPnVwIGFuPC9zcGFuPmQgY2hvb3NlIGRlc3RpbmFcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnRpbzwvc3Bhbj5uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWNvbmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kUGFyYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY29uZFBhcmE+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2Vjb25kRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlY29uZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWNvbmRMdXN0cmF0aW9uIHNyYz17cm91dGV9IGFsdD1cIm15d2lra2kgdXNlIHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU2Vjb25kSW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9Cb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgPC9TZWNvbmRSb3c+e1wiIFwifVxyXG4gICAgICAgICAgICA8VGhpcmRSb3c+XHJcbiAgICAgICAgICAgICAgPFRoaXJkTWFzayBzcmM9e2JhdmV9IGFsdD1cInVzZSB3aWtraSBteSB3aWtraVwiIC8+XHJcbiAgICAgICAgICAgICAgPFRoaXJkQm90dG9tQ292ZXI+XHJcbiAgICAgICAgICAgICAgICA8VGhpcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8VGhpcmROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoaXJkVGV4dD4zPC9UaGlyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGhpcmROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGlyZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaGlyZFRpdGxlPkdldCBpdGVtIGRlbGl2ZXJlZCBhbmQgbWFrZSBwYXltZW50PC9UaGlyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaGlyZFBhcmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGRyaXZlIGFuZCBtYWtlIGFzIG11Y2ggYXMgeW91IHdhbnQuIEFuZCwgdGhlIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIHlvdSBkcml2ZSwgdGhlIG1vcmUgeW91IGNvdWxkIG1ha2UuIFBsdXMsIHlvdXIgZmFyZXMgZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5IGRlcG9zaXRlZCB3ZWVrbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaGlyZFBhcmE+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGhpcmREb3dubG9hZD5cclxuICAgICAgICAgICAgICAgIDwvVGhpcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFRoaXJkSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGlyZEx1c3RyYXRpb24gc3JjPXtwYXl9IGFsdD1cIm15d2lra2kgdXNlIHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvVGhpcmRJbWFnZT5cclxuICAgICAgICAgICAgICA8L1RoaXJkQm90dG9tQ292ZXI+XHJcbiAgICAgICAgICAgIDwvVGhpcmRSb3c+XHJcbiAgICAgICAgICA8L0JvdHRvbVJvdz5cclxuICAgICAgICA8L1dvcmtzUm93PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnNub3dXaGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDk2cHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBXb3Jrc1NlbGVjdG9yID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBTZWxlY3RvciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1heC13aWR0aDogMzQwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgVXNlciA9IHN0eWxlZChMaW5rKWBcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWF4LXdpZHRoOiAxNTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggNTZweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERyaXZlciA9IHN0eWxlZChMaW5rKWBcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWF4LXdpZHRoOiAxNTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggNTZweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RvclRleHQgPSBzdHlsZWQoU3ViVGl0bGUpYGBcclxuY29uc3QgV29ya3NSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgVG9wUm93ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQm90dG9tUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDU0MHB4O1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuY29uc3QgRG93bmxvYWRDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA5NzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDY0cHggYXV0byAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA3MnB4O1xyXG4gIGdhcDogNzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMzZweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAzNnB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBEb3dubG9hZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG87XHJcbiAgZ3JpZC1nYXA6IDMycHg7XHJcbiAgZ2FwOiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEb3dubG9hZE51bWJlciA9IHN0eWxlZC5zcGFuYFxyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICB9XHJcbmBcclxuY29uc3QgTnVtYmVyVGV4dCA9IHN0eWxlZChIZWFkZXI1KWBgXHJcbmNvbnN0IERvd25sb2FkVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcbmNvbnN0IERvd25sb2FkVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgYFxyXG5jb25zdCBEb3dubG9hZGJvZHkgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMjRweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEb3dubG9hZEFwcCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA3MjFweDtcclxuICBtYXgtd2lkdGg6IDM2MXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmNvbnN0IEFwcEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmBcclxuY29uc3QgU2Vjb25kUm93ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnllbGxvd307XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTZWNvbmRNYXNrID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAyMTNweDtcclxuICByaWdodDogNHB4O1xyXG4gIHRvcDogLTQ4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gXHJcblxyXG5jb25zdCBUaGlyZE1hc2sgPSBzdHlsZWQuaW1nYFxyXG4gIGxlZnQ6IC00MHB4O1xyXG4gIGhlaWdodDogMjc3cHg7XHJcbiAgd2lkdGg6IDQ0OHB4O1xyXG4gIHRvcDogLTMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gXHJcbmNvbnN0IEJvdHRvbUNvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDQ4MXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbjogNDhweCBhdXRvIDAgYXV0bztcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDMycHggYXV0byAwIGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG87XHJcbiAgZ3JpZC1nYXA6IDMycHg7XHJcbiAgZ2FwOiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmROdW1iZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcbmNvbnN0IFNlY29uZFRpdGxlID0gc3R5bGVkKEhlYWRlcjMpYFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZFBhcmEgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMjRweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmREb3dubG9hZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcbmNvbnN0IFNlY29uZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNDQxcHg7XHJcbiAgbWF4LXdpZHRoOiA0NDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRMdXN0cmF0aW9uID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNDQxcHg7XHJcbiAgbWF4LXdpZHRoOiA0NDFweDtcclxuYFxyXG5cclxuY29uc3QgVGhpcmRSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA1ODBweDtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuYmx1ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkQm90dG9tQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNDgxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMCBhdXRvO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvIDAgYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAzMnB4O1xyXG4gIGdhcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0bztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRoaXJkTnVtYmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcbmNvbnN0IFRoaXJkUGFyYSA9IHN0eWxlZChCb2R5MylgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkRG93bmxvYWQgPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgVGhpcmRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBUaGlyZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNDQxcHg7XHJcbiAgbWF4LXdpZHRoOiA0NDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmRMdXN0cmF0aW9uID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuIiwgImltcG9ydCBCdXNpbmVzc0hlcm8gZnJvbSBcIn4vY29tcG9uZW50cy9idXNpbmVzcy9CdXNpbmVzc0hlcm9cIlxyXG5pbXBvcnQgQnVzaW5lc3NQdXJwb3NlIGZyb20gXCJ+L2NvbXBvbmVudHMvYnVzaW5lc3MvQnVzaW5lc3NQdXJwb3NlXCJcclxuaW1wb3J0IEJ1c2luZXNzUmlkIGZyb20gXCJ+L2NvbXBvbmVudHMvYnVzaW5lc3MvQnVzaW5lc3NSaWRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCJcclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XHJcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxyXG4gIHRpdGxlOiBcIkJ1c2luZXNzIFVzaW5nIHdpa2tpIC0gUmVxdWVzdCBhIGRpc3BhdGNoIG9yIHBpY2t1cFwiLFxyXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcclxuXHJcbiAgZGVzY3JpcHRpb246IFwiR2V0IGl0ZW1zIGFuZCBnb29kcyBkZWxpdmVyZWQgYW5kIHBpY2tlZCB1cCBmcm9tIGFueXdoZXJlXCIsXHJcbn0pXHJcbmNvbnN0IGJ1c2luZXNzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8QnVzaW5lc3NIZXJvIC8+XHJcbiAgICAgIDxCdXNpbmVzc1JpZCAvPlxyXG4gICAgICA8QnVzaW5lc3NQdXJwb3NlIC8+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBkZWZhdWx0IGJ1c2luZXNzXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MSwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IEJ1c2luZXNzSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Q29udGFjdEhlYWRlcj5cclxuICAgICAgICAgIDxDb250YWN0VGl0bGU+XHJcbiAgICAgICAgICAgIFdpa2tpIGxvdmVzIHlvdXIgYnVzaW5lc3MuIFdpa2tpIG1lYW5zIGJ1c2luZXNzLlxyXG4gICAgICAgICAgPC9Db250YWN0VGl0bGU+XHJcbiAgICAgICAgICA8Q29udGFjdFRleHQ+XHJcbiAgICAgICAgICAgIEV2ZXJ5b25lIGhhcyB0aGVpciBvd24gd2F5IG9mIGxlYXJuaW5nIGFuZCBleHByZXNzaW5nIGNyZWF0aXZpdHkuXHJcbiAgICAgICAgICAgIEFwcGxlIHRlY2hub2xvZ3kgYW5kIHJlc291cmNlcyBlbXBvd2VyIGV2ZXJ5IGtpbmQgb2YgZWR1Y2F0b3IgXHUyMDE0IGFuZFxyXG4gICAgICAgICAgICBldmVyeSBraW5kIG9mIHN0dWRlbnQgXHUyMDE0IHRvIGxlYXJuLCBjcmVhdGUsIGFuZCBkZWZpbmUgdGhlaXIgb3duXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MuIExldFx1MjAxOXMgbW92ZSB0aGUgd29ybGQgZm9yd2FyZC5cclxuICAgICAgICAgIDwvQ29udGFjdFRleHQ+XHJcbiAgICAgICAgPC9Db250YWN0SGVhZGVyPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDcycHggMCAwIDA7XHJcbmBcclxuY29uc3QgQ29udGFjdEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IENvbnRhY3RUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBDb250YWN0VGV4dCA9IHN0eWxlZChCb2R5MSlgXHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQnVzaW5lc3NIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMSwgSGVhZGVyMyB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5jb25zdCBCdXNpbmVzc1B1cnBvc2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFdhaXRpbmdSb3c+XHJcbiAgICAgICAgICA8V2FpdFRpdGxlPkFuZCBldmVuIGJldHRlciw8L1dhaXRUaXRsZT5cclxuICAgICAgICA8L1dhaXRpbmdSb3c+XHJcbiAgICAgICAgPERldGFpbHNHcmlkPlxyXG4gICAgICAgICAgPEJ1c2luZXNzUm93PlxyXG4gICAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICAgIDxHcmlkSW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2b2V6cm95OC9pbWFnZS91cGxvYWQvdjE2NDg3NTYxMTQvQ3VzdG9tZXItcmV2aWV3X3NvazhhMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgICA8UmlkZVRpdGxlPlJvYnVzdCBkZWxpdmVyeSBhbmQgcGlja3VwPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICAgIGVzcGVjaWFsbHkgYXMgYSBzdHVkZW50LiBXZSBidWlsdCBDbHV0Y2ggdG8gYmUgYSBzYWZlIHNwYWNlIGZvclxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgICA8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgICAgPC9CdXNpbmVzc1Jvdz57XCIgXCJ9XHJcbiAgICAgICAgICA8QnVzaW5lc3NSb3c+XHJcbiAgICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9Hcm9jZXJpZXMtdHJ1Y2stZGVsaXZlcnlfcjh3a3lvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ1c2Ugd2lra2lcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZFJpZ2h0PntcIiBcIn1cclxuICAgICAgICAgICAgPEdyaWRMZWZ0PlxyXG4gICAgICAgICAgICAgIDxSaWRlVGl0bGU+Um9idXN0IGRlbGl2ZXJ5IGFuZCBwaWNrdXA8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgICA8UmlkZVRleHQ+XHJcbiAgICAgICAgICAgICAgICBXZSBrbm93IGhvdyBoYXJkIGl0IGNhbiBiZSB0byBzdGFydCBidWlsZGluZyB5b3VyIGNsaWVudCBiYXNlLFxyXG4gICAgICAgICAgICAgICAgZXNwZWNpYWxseSBhcyBhIHN0dWRlbnQuIFdlIGJ1aWx0IENsdXRjaCB0byBiZSBhIHNhZmUgc3BhY2UgZm9yXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50cyB0byBidWlsZCBvdXQgdGhlaXIgc2lkZS1odXN0bGVzIGFuZCBnZXQgc3VwcG9ydCBmcm9tXHJcbiAgICAgICAgICAgICAgICB0aGVpciBjbGFzc21hdGVzLlxyXG4gICAgICAgICAgICAgIDwvUmlkZVRleHQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgICA8L0J1c2luZXNzUm93PlxyXG4gICAgICAgIDwvRGV0YWlsc0dyaWQ+e1wiIFwifVxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNjRweCAwIDAgMDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc21va2VXaGl0ZX07XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDY0cHggMDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuYFxyXG5jb25zdCBEZXRhaWxzR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIG1hcmdpbjogNjRweCAwOyAqL1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcbmNvbnN0IEJ1c2luZXNzUm93ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEyMzJweDtcclxuICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcmlkTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuYFxyXG5cclxuY29uc3QgR3JpZFJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA2NHB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IFJpZGVUZXh0ID0gc3R5bGVkKEJvZHkyKWBcclxuICBtYXJnaW46IDE2cHggMDtcclxuYFxyXG5jb25zdCBXYWl0aW5nUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBXYWl0VGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXNpbmVzc1B1cnBvc2VcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IEhlYWRlcjIsIEJvZHkzLCBIZWFkZXIzLCBCb2R5MSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5jb25zdCBCdXNpbmVzc1JpZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8V2FpdGluZ1Jvdz5cclxuICAgICAgICAgIDxXYWl0VGl0bGU+R2V0IHJpZCBvZiBjYW5jZWxlZCBvcmRlcnMgYW5kIGxhdGUgZGVsaXZlcmllczwvV2FpdFRpdGxlPlxyXG4gICAgICAgICAgPFdhaXRUZXh0PlxyXG4gICAgICAgICAgICBFdmVyeW9uZSBoYXMgdGhlaXIgb3duIHdheSBvZiBsZWFybmluZyBhbmQgZXhwcmVzc2luZyBjcmVhdGl2aXR5LlxyXG4gICAgICAgICAgICBBcHBsZSB0ZWNobm9sb2d5IGFuZCByZXNvdXJjZXMgZW1wb3dlciBldmVyeSBraW5kIG9mIGVkdWNhdG9yIFx1MjAxNCBhbmRcclxuICAgICAgICAgICAgZXZlcnkga2luZCBvZiBzdHVkZW50IFx1MjAxNCB0byBsZWFybiwgY3JlYXRlLCBhbmQgZGVmaW5lIHRoZWlyIG93blxyXG4gICAgICAgICAgICBzdWNjZXNzLiBMZXRcdTIwMTlzIG1vdmUgdGhlIHdvcmxkIGZvcndhcmQuXHJcbiAgICAgICAgICA8L1dhaXRUZXh0PlxyXG4gICAgICAgIDwvV2FpdGluZ1Jvdz5cclxuICAgICAgICA8RGV0YWlsc0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICA8R3JpZEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9Hcm9jZXJpZXMtZGVsaXZlcnlfenE2aTNsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5XZSBoZWxwIHlvdSBnZXQgcmlkIG9mIGxhdGUgZGVsaXZlcmllczwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+Tm8gb25lIGxpa2VzIGxhdGUgZGVsaXZlcmllczwvUmlkZVRleHQ+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICA8R3JpZEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9Hcm9jZXJpZXMtdHJ1Y2stZGVsaXZlcnlfcjh3a3lvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5cclxuICAgICAgICAgICAgICBXZSBzdG9wIGNhbmNlbGVkIG9yZGVycyBkdWUgdG8gbm8gcGlja3VwL2Rpc3BhdGNoXHJcbiAgICAgICAgICAgIDwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+Tm8gb25lIGxpa2VzIGxhdGUgZGVsaXZlcmllczwvUmlkZVRleHQ+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD5cclxuICAgICAgICA8L0RldGFpbHNHcmlkPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweDtcclxuXHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBEZXRhaWxzR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBtYXJnaW46IDY0cHggMDsgKi9cclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBtYXJnaW46IDI0cHggMCAxNnB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcblxyXG5jb25zdCBHcmlkSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5gXHJcbmNvbnN0IFdhaXRpbmdSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogODUwcHg7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IFdhaXRUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBXYWl0VGV4dCA9IHN0eWxlZChCb2R5MSlgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEJ1c2luZXNzUmlkXHJcbiIsICJpbXBvcnQgRGlzcGF0Y2hIZXJvIGZyb20gXCJ+L2NvbXBvbmVudHMvZGlzcGF0Y2gvRGlzcGF0Y2hIZXJvXCJcclxuaW1wb3J0IERpc3BhdGNoUHVycG9zZSBmcm9tIFwifi9jb21wb25lbnRzL2Rpc3BhdGNoL0Rpc3BhdGNoUHVycG9zZVwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCJcclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XHJcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxyXG4gIHRpdGxlOiBcIldpa2tpJ3MgRGlzcGF0Y2ggLSBSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXHJcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxyXG5cclxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcclxufSlcclxuY29uc3QgRGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8RGlzcGF0Y2hIZXJvIC8+XHJcbiAgICAgIDxEaXNwYXRjaFB1cnBvc2UgLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYGBcclxuZXhwb3J0IGRlZmF1bHQgRGlzcGF0Y2hcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXIxIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuY29uc3QgRGlzcGF0Y2hIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8TW9yZU92ZXJsYXkgLz5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDx2aWRlbyBhdXRvUGxheSBsb29wIHBsYXlzSW5saW5lPlxyXG4gICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2QxbnllemgxeXM4d2ZvLmNsb3VkZnJvbnQubmV0L3N0YXRpYy9Mb29waW5nX1ZpZGVvcy9DYXJlZXJzL1ViZXIrV2Vic2l0ZStMb29wKzEwODAud2VibVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDFueWV6aDF5czh3Zm8uY2xvdWRmcm9udC5uZXQvc3RhdGljL0xvb3BpbmdfVmlkZW9zL0NhcmVlcnMvVWJlcitXZWJzaXRlK0xvb3ArMTA4MC5tcDRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC92aWRlbz5cclxuXHJcbiAgICAgICAgPENvbnRhY3RIZWFkZXI+XHJcbiAgICAgICAgICA8Q29udGFjdFRpdGxlPldpa2tpJ3MgZGlzcGF0Y2ggaXMgaGVyZSB0byBoZWxwIHlvdTwvQ29udGFjdFRpdGxlPlxyXG4gICAgICAgIDwvQ29udGFjdEhlYWRlcj5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuY29uc3QgQ29udGFjdEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA0O1xyXG5gXHJcbmNvbnN0IENvbnRhY3RUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGF0Y2hIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMiwgSGVhZGVyMyB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5jb25zdCBEaXNwYXRjaFB1cnBvc2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFdhaXRpbmdSb3c+XHJcbiAgICAgICAgICA8V2FpdFRpdGxlPlxyXG4gICAgICAgICAgICBXaGF0J3MgYmV0dGVyIHRoYW4gaGF2aW5nIGl0ZW1zIHNlbnQgb3V0IHN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgPC9XYWl0VGl0bGU+XHJcbiAgICAgICAgPC9XYWl0aW5nUm93PlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxCdXNpbmVzc1Jvdz5cclxuICAgICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgICA8R3JpZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm9lenJveTgvaW1hZ2UvdXBsb2FkL3YxNjQ4NzU2MTE0L1Byb2R1Y3Qtc2VsZWN0aW9uX2xub2R2eC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgICA8UmlkZVRpdGxlPlJvYnVzdCBkZWxpdmVyeSBhbmQgcGlja3VwPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICAgIGVzcGVjaWFsbHkgYXMgYSBzdHVkZW50LiBXZSBidWlsdCBDbHV0Y2ggdG8gYmUgYSBzYWZlIHNwYWNlIGZvclxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgICA8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgICAgPC9CdXNpbmVzc1Jvdz57XCIgXCJ9XHJcbiAgICAgICAgICA8QnVzaW5lc3NSb3c+XHJcbiAgICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExNi9EZWxpdmVyeS1yb2JvdF9wZWswcGMucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInVzZSB3aWtraVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgICAgPFJpZGVUaXRsZT5Sb2J1c3QgZGVsaXZlcnkgYW5kIHBpY2t1cDwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5cclxuICAgICAgICAgICAgICAgIFdlIGtub3cgaG93IGhhcmQgaXQgY2FuIGJlIHRvIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgY2xpZW50IGJhc2UsXHJcbiAgICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzIHRvIGJ1aWxkIG91dCB0aGVpciBzaWRlLWh1c3RsZXMgYW5kIGdldCBzdXBwb3J0IGZyb21cclxuICAgICAgICAgICAgICAgIHRoZWlyIGNsYXNzbWF0ZXMuXHJcbiAgICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9HcmlkTGVmdD5cclxuICAgICAgICAgIDwvQnVzaW5lc3NSb3c+XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD57XCIgXCJ9XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG5gXHJcbmNvbnN0IERldGFpbHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogbWFyZ2luOiA2NHB4IDA7ICovXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuY29uc3QgQnVzaW5lc3NSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNDBweDtcclxuICBnYXA6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHggYXV0bztcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgR3JpZExlZnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBSaWRlVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG5gXHJcblxyXG5jb25zdCBHcmlkSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogNjUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBSaWRlVGV4dCA9IHN0eWxlZChCb2R5MilgXHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbmBcclxuY29uc3QgV2FpdGluZ1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDMycHggYXV0bztcclxuYFxyXG5cclxuY29uc3QgV2FpdFRpdGxlID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGF0Y2hQdXJwb3NlXHJcbiIsICJpbXBvcnQgRG93bmxvYWRIZXJvIGZyb20gXCJ+L2NvbXBvbmVudHMvZG93bmxvYWQvRG93bmxvYWRIZXJvXCJcclxuaW1wb3J0IERvd25sb2FkUGxhdGZvcm1zIGZyb20gXCJ+L2NvbXBvbmVudHMvZG93bmxvYWQvRG93bmxvYWRQbGF0Zm9ybXNcIlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xyXG4gIGNoYXJzZXQ6IFwidXRmLThcIixcclxuICB0aXRsZTogXCJEb3dubG9hZCB3aWtraSBmb3IgaU9TLCBBbmRyb2lkIC0gUmVxdWVzdCBhIGRpc3BhdGNoIG9yIHBpY2t1cFwiLFxyXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcclxuXHJcbiAgZGVzY3JpcHRpb246IFwiR2V0IGl0ZW1zIGFuZCBnb29kcyBkZWxpdmVyZWQgYW5kIHBpY2tlZCB1cCBmcm9tIGFueXdoZXJlXCIsXHJcbn0pXHJcbmNvbnN0IGRvd25sb2FkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPERvd25sb2FkSGVybyAvPlxyXG4gICAgICA8RG93bmxvYWRQbGF0Zm9ybXMgLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgZG93bmxvYWRcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IEJvZHkxLCBMYXJnZUhlYWRlciB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IERvd25sb2FkSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Q29udGFjdEhlYWRlcj5cclxuICAgICAgICAgIDxDb250YWN0VGl0bGU+V2lra2kgZG93bmxvYWRzPC9Db250YWN0VGl0bGU+XHJcbiAgICAgICAgICA8Q29udGFjdFRleHQ+XHJcbiAgICAgICAgICAgIFdpa2tpIGhhcyBtYWRlIGl0IGVhc3kgZm9yIHlvdSB0byBnZXQgc3RhcnRlZFxyXG4gICAgICAgICAgPC9Db250YWN0VGV4dD5cclxuICAgICAgICA8L0NvbnRhY3RIZWFkZXI+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNzJweCAwIDAgMDtcclxuYFxyXG5jb25zdCBDb250YWN0SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgQ29udGFjdFRpdGxlID0gc3R5bGVkKExhcmdlSGVhZGVyKWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBDb250YWN0VGV4dCA9IHN0eWxlZChCb2R5MSlgXHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MywgSGVhZGVyMyB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5jb25zdCBEb3dubG9hZFBsYXRmb3JtcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8RGV0YWlsc0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICA8VXNlcnNDb3Zlcj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExNi9Ecm9uZS1kZWxpdmVyeV9wZHBmYmIucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInVzZSB3aWtraVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Vc2Vyc0NvdmVyPlxyXG4gICAgICAgICAgICA8UmlkZVRpdGxlPldpa2tpIFVzZXIvQ29tcGFuaWVzIE1vYmlsZSBhcHA8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPFJpZGVUZXh0Pldpa2tpIFVzZXJzL0NvbXBhbmllcyBmb3IgaU9TPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8UmlkZVRleHQ+V2lra2kgVXNlcnMvQ29tcGFuaWVzIGZvciBBbmRyb2lkPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPERyaXZlcj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9QaXp6YS1kZWxpdmVyeV9weTJhengucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInVzZSB3aWtraVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Ecml2ZXI+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+V2lra2kgRHJpdmVycyBNb2JpbGUgYXBwPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5XaWtraSBEcml2ZXJzIGZvciBpT1M8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5XaWtraSBEcml2ZXJzIGZvciBBbmRyb2lkPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgIDwvRGV0YWlsc0dyaWQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDEyMzJweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzJweCAxNnB4IDU2cHggMTZweDtcclxuXHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBEZXRhaWxzR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJzQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS51c2VyRG93bmxvYWR9O1xyXG5gXHJcblxyXG5jb25zdCBEcml2ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5kcml2ZXJEb3dubG9hZH07XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBtYXJnaW46IDI0cHggMCAxNnB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuYmx1ZX07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xyXG5cclxuICAgIDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuc2Vjb25kYXJ5fTtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IFJpZGVUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICBtYXJnaW46IDhweCAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZFBsYXRmb3Jtc1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEZvcm1cIlxyXG5pbXBvcnQgQ29udGFjdEhlcm8gZnJvbSBcIn4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RIZXJvXCJcclxuXHJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcclxuICBjaGFyc2V0OiBcInV0Zi04XCIsXHJcbiAgdGl0bGU6IFwiQ29udGFjdCBVcyAtIFJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBcIixcclxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXHJcblxyXG4gIGRlc2NyaXB0aW9uOiBcIkdldCBpdGVtcyBhbmQgZ29vZHMgZGVsaXZlcmVkIGFuZCBwaWNrZWQgdXAgZnJvbSBhbnl3aGVyZVwiLFxyXG59KVxyXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvbnRhY3RIZXJvIC8+XHJcbiAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IHsgVGV4dElucHV0LCBUZXh0QXJlYSB9IGZyb20gXCJ+L3N0eWxlcy9JbnB1dFN0eWxlc1wiXHJcbmltcG9ydCB7IFN1YlRpdGxlU21hbGwsIEhlYWRlcjMsIFN1YlRpdGxlIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBDb250YWN0VVJMIH0gZnJvbSBcIn4vY29uc3RhbnRzL0NvbnN0YW50XCJcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxyXG5pbXBvcnQgU3VjY2Vzc0xvYWRpbmcgZnJvbSBcIn4vY29tcG9uZW50cy9TdWNjZXNzTG9hZGluZ1wiXHJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5cclxuaW1wb3J0IHR5cGUgeyBGb3JtaWtIZWxwZXJzIH0gZnJvbSBcImZvcm1pa1wiXHJcbmludGVyZmFjZSBWYWx1ZXMge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBtZXNzYWdlOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBDb250YWN0U2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIG5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG5cclxuICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gICAgbWVzc2FnZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9ICh2YWx1ZXM6IFZhbHVlcywgb25TdWJtaXRQcm9wczogRm9ybWlrSGVscGVyczxWYWx1ZXM+KSA9PiB7XHJcbiAgICBvblN1Ym1pdFByb3BzLnNldFN1Ym1pdHRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KENvbnRhY3RVUkwsIHsgdmFsdWVzIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIG9uU3VibWl0UHJvcHMuc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICBvblN1Ym1pdFByb3BzLnJlc2V0Rm9ybSgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgb25TdWJtaXRQcm9wcy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Rm9ybVRpdGxlPlNlbmQgdXMgYSBtZXNzYWdlPC9Gb3JtVGl0bGU+XHJcbiAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogXCJcIiwgbmFtZTogXCJcIiwgbWVzc2FnZTogXCJcIiB9fVxyXG4gICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Q29udGFjdFNjaGVtYX1cclxuICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXRGb3JtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtRm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWxUZXh0Pk5hbWU8L0xhYmVsVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXM9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yVGV4dD5Zb3VyIG5hbWUgaXMgcmVxdWlyZWQ8L0Zvcm1FcnJvclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUVycm9yPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbFRleHQ+RW1haWw8L0xhYmVsVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhcz1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JUZXh0PllvdXIgZW1haWwgaXMgcmVxdWlyZWQ8L0Zvcm1FcnJvclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUVycm9yPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPExhYmVsVGV4dD5NZXNzYWdlPC9MYWJlbFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubWVzc2FnZSAmJiB0b3VjaGVkLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JUZXh0PllvdXIgbWVzc2FnZSBpcyByZXF1aXJlZDwvRm9ybUVycm9yVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtRXJyb3I+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybUNvbHVtbj5cclxuICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbldyYXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbk1haW4gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3VjY2Vzc0xvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8PlNlbmQ8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbk1haW4+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uV3JhcD5cclxuICAgICAgICAgICAgPC9Gb3JtRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zbm93V2hpdGV9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDY0cHggMDtcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcbmNvbnN0IEZvcm1UaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBtYXJnaW46IDQwcHggMCA1NnB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMzJweCAwIDQwcHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgRm9ybUZvcm0gPSBzdHlsZWQoRm9ybSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgRm9ybUNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuYFxyXG5jb25zdCBMYWJlbFRleHQgPSBzdHlsZWQoU3ViVGl0bGUpYFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuZGFya307XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbmBcclxuY29uc3QgRm9ybUxhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5gXHJcbmNvbnN0IEZvcm1JbnB1dCA9IHN0eWxlZChUZXh0SW5wdXQpYGBcclxuY29uc3QgRm9ybUFyZWEgPSBzdHlsZWQoVGV4dEFyZWEpYGBcclxuXHJcbmNvbnN0IEZvcm1FcnJvciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmBcclxuY29uc3QgRm9ybUVycm9yVGV4dCA9IHN0eWxlZChTdWJUaXRsZVNtYWxsKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLnJlZH07XHJcbmBcclxuY29uc3QgRm9ybUJ1dHRvbldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBGb3JtQnV0dG9uTWFpbiA9IHN0eWxlZChGb3JtQnV0dG9uKWBgXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXHJcbiIsICJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwiLi9Db2xvclN0eWxlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgVGV4dElucHV0ID0gc3R5bGVkKEZpZWxkKWBcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUubGlnaHRQcmltYXJ5fTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTlweCAyNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5kYXJrfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgY29sb3I6ICR7V2lra2lUaGVtZS5ncmF5fTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gc3R5bGVkKEZpZWxkKWBcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmxpZ2h0UHJpbWFyeX07XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDE5cHggMjRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmRhcmt9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogJHtXaWtraVRoZW1lLmdyYXl9O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbiIsICJleHBvcnQgY29uc3QgaG9zdCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxyXG4gICAgPyBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9cIlxyXG4gICAgOiBcImh0dHBzOi8vd3d3LmFwaS5teXdpa2tpLmNvbS9cIlxyXG5cclxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYCR7aG9zdH1gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdFVSTCA9IGAke2hvc3R9YXBpL2NvbnRhY3QvYFxyXG4iLCAiaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXItbWF0ZXJpYWxcIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Y2Nlc3NMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTcGlubmVyIHJhZGl1cz17MzB9IGNvbG9yPXtcIiNmZmZcIn0gc3Ryb2tlPXs0fSB2aXNpYmxlPXt0cnVlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IEJvZHkxLCBIZWFkZXIxIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuY29uc3QgQ29udGFjdEhlcm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPENvbnRhY3RIZWFkZXI+XHJcbiAgICAgICAgICA8Q29udGFjdFRpdGxlPkhvdyBjYW4gd2UgaGVscD88L0NvbnRhY3RUaXRsZT5cclxuICAgICAgICAgIDxDb250YWN0VGV4dD5cclxuICAgICAgICAgICAgTG9va2luZyBmb3IgdGhlIHNvbHV0aW9uIHRvIHlvdXIgbG9naXN0aWNzIG5lZWRzIG9yIGFuc3dlcnM/IEZpbGxcclxuICAgICAgICAgICAgb3V0IHRoZSBjb250YWN0IGZvcm0gYW5kIHdlIHdpbGwgYmUgaW4gdG91Y2guXHJcbiAgICAgICAgICA8L0NvbnRhY3RUZXh0PlxyXG4gICAgICAgIDwvQ29udGFjdEhlYWRlcj5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA3MnB4IDAgMCAwO1xyXG5gXHJcbmNvbnN0IENvbnRhY3RIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbmBcclxuY29uc3QgQ29udGFjdFRpdGxlID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IENvbnRhY3RUZXh0ID0gc3R5bGVkKEJvZHkxKWBcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0SGVyb1xyXG4iLCAiaW1wb3J0IFBpY2t1cEhlcm8gZnJvbSBcIn4vY29tcG9uZW50cy9waWNrL1BpY2t1cEhlcm9cIlxyXG5pbXBvcnQgUGlja3VwUHVycG9zZSBmcm9tIFwifi9jb21wb25lbnRzL3BpY2svUGlja3VwUHVycG9zZVwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCJcclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XHJcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxyXG4gIHRpdGxlOiBcIldpa2tpJ3MgUGljayBVcCAtIFJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBcIixcclxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXHJcblxyXG4gIGRlc2NyaXB0aW9uOiBcIkdldCBpdGVtcyBhbmQgZ29vZHMgZGVsaXZlcmVkIGFuZCBwaWNrZWQgdXAgZnJvbSBhbnl3aGVyZVwiLFxyXG59KVxyXG5jb25zdCBQaWNrdXAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8UGlja3VwSGVybyAvPlxyXG4gICAgICA8UGlja3VwUHVycG9zZSAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gYFxyXG5leHBvcnQgZGVmYXVsdCBQaWNrdXBcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXIxIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuY29uc3QgUGlja3VwSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPE1vcmVPdmVybGF5IC8+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbG9vcCBwbGF5c0lubGluZT5cclxuICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kMW55ZXpoMXlzOHdmby5jbG91ZGZyb250Lm5ldC9zdGF0aWMvTG9vcGluZ19WaWRlb3MvQ2FyZWVycy9VYmVyK1dlYnNpdGUrTG9vcCsxMDgwLndlYm1cIlxyXG4gICAgICAgICAgICB0eXBlPVwidmlkZW8vd2VibVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2QxbnllemgxeXM4d2ZvLmNsb3VkZnJvbnQubmV0L3N0YXRpYy9Mb29waW5nX1ZpZGVvcy9DYXJlZXJzL1ViZXIrV2Vic2l0ZStMb29wKzEwODAubXA0XCJcclxuICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgIDxDb250YWN0SGVhZGVyPlxyXG4gICAgICAgICAgPENvbnRhY3RUaXRsZT5XaWtraSdzIFBpY2t1cCBpcyBoZXJlIHRvIGhlbHAgeW91PC9Db250YWN0VGl0bGU+XHJcbiAgICAgICAgPC9Db250YWN0SGVhZGVyPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5cclxuY29uc3QgTW9yZU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5jb25zdCBDb250YWN0SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbmBcclxuY29uc3QgQ29udGFjdFRpdGxlID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWNrdXBIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMiwgSGVhZGVyMyB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5jb25zdCBQaWNrdXBQdXJwb3NlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxXYWl0aW5nUm93PlxyXG4gICAgICAgICAgPFdhaXRUaXRsZT5cclxuICAgICAgICAgICAgU2l0IGJhY2sgd2hpbGUgd2UgZ2V0IHlvdXIgc3R1ZmZzIHBpY2tlZCBmb3IgeW91LlxyXG4gICAgICAgICAgPC9XYWl0VGl0bGU+XHJcbiAgICAgICAgPC9XYWl0aW5nUm93PlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxCdXNpbmVzc1Jvdz5cclxuICAgICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgICA8R3JpZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm9lenJveTgvaW1hZ2UvdXBsb2FkL3YxNjQ4NzU2MTEwL0dyb2Nlcmllcy1kZWxpdmVyeV96cTZpM2wucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInVzZSB3aWtraVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgICAgPFJpZGVUaXRsZT5Sb2J1c3QgZGVsaXZlcnkgYW5kIHBpY2t1cDwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5cclxuICAgICAgICAgICAgICAgIFdlIGtub3cgaG93IGhhcmQgaXQgY2FuIGJlIHRvIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgY2xpZW50IGJhc2UsXHJcbiAgICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzIHRvIGJ1aWxkIG91dCB0aGVpciBzaWRlLWh1c3RsZXMgYW5kIGdldCBzdXBwb3J0IGZyb21cclxuICAgICAgICAgICAgICAgIHRoZWlyIGNsYXNzbWF0ZXMuXHJcbiAgICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9HcmlkTGVmdD5cclxuICAgICAgICAgIDwvQnVzaW5lc3NSb3c+e1wiIFwifVxyXG4gICAgICAgICAgPEJ1c2luZXNzUm93PlxyXG4gICAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICAgIDxHcmlkSW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2b2V6cm95OC9pbWFnZS91cGxvYWQvdjE2NDg3NTYxMTAvT3JkZXItZGVsaXZlcmVkX2RxYjJkcS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgICA8UmlkZVRpdGxlPlJvYnVzdCBkZWxpdmVyeSBhbmQgcGlja3VwPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICAgIGVzcGVjaWFsbHkgYXMgYSBzdHVkZW50LiBXZSBidWlsdCBDbHV0Y2ggdG8gYmUgYSBzYWZlIHNwYWNlIGZvclxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgICA8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgICAgPC9CdXNpbmVzc1Jvdz5cclxuICAgICAgICA8L0RldGFpbHNHcmlkPntcIiBcIn1cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG5gXHJcblxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuY29uc3QgRGV0YWlsc0dyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBtYXJnaW46IDY0cHggMDsgKi9cclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBCdXNpbmVzc1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICBtYXJnaW46IDhweCBhdXRvO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcmlkTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuYFxyXG5cclxuY29uc3QgR3JpZFJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IFJpZGVUZXh0ID0gc3R5bGVkKEJvZHkyKWBcclxuICBtYXJnaW46IDE2cHggMDtcclxuYFxyXG5jb25zdCBXYWl0aW5nUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBXYWl0VGl0bGUgPSBzdHlsZWQoSGVhZGVyMilgXHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWNrdXBQdXJwb3NlXHJcbiIsICJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBBYm91dEJ1c2luZXNzIGZyb20gXCJ+L2NvbXBvbmVudHMvYWJvdXQvQWJvdXRCdXNpbmVzc1wiXHJcbmltcG9ydCBBYm91dERlbGl2ZXJ5IGZyb20gXCJ+L2NvbXBvbmVudHMvYWJvdXQvQWJvdXREZWxpdmVyeVwiXHJcbmltcG9ydCBBYm91dERldGFpbHMgZnJvbSBcIn4vY29tcG9uZW50cy9hYm91dC9BYm91dERldGFpbHNcIlxyXG5pbXBvcnQgQWJvdXRIZXJvIGZyb20gXCJ+L2NvbXBvbmVudHMvYWJvdXQvQWJvdXRIZXJvXCJcclxuaW1wb3J0IEFib3V0UHVycG9zZSBmcm9tIFwifi9jb21wb25lbnRzL2Fib3V0L0Fib3V0UHVycG9zZVwiXHJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcclxuICBjaGFyc2V0OiBcInV0Zi04XCIsXHJcbiAgdGl0bGU6IFwiQWJvdXQgV2lra2kgLSBSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXHJcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxyXG5cclxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcclxufSlcclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8QWJvdXRIZXJvIC8+XHJcbiAgICAgIDxBYm91dFB1cnBvc2UgLz5cclxuICAgICAgPEFib3V0RGVsaXZlcnkgLz5cclxuICAgICAgPEFib3V0RGV0YWlscyAvPlxyXG4gICAgICA8QWJvdXRCdXNpbmVzcyAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gYFxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSGVhZGVyMywgQm9keTMsIEhlYWRlcjIgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCBkZWxpdmVyeSBmcm9tIFwifi9pbWFnZXMvZGVsaXZlcnkwMS5wbmdcIlxyXG5pbXBvcnQgZGVsaXZlcnkwMiBmcm9tIFwifi9pbWFnZXMvZGVsaXZlcnkwMi5wbmdcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuY29uc3QgQWJvdXRCdXNpbmVzcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8QnVzaW5lc0luZm8+XHJcbiAgICAgICAgICA8QnVzaW5lc3NUZXh0PldoYXQgbW9yZSBEbyB3ZSBvZmZlciB5b3U8L0J1c2luZXNzVGV4dD5cclxuICAgICAgICA8L0J1c2luZXNJbmZvPlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPEdyaWRDb3Zlcj5cclxuICAgICAgICAgICAgICA8UmlkZVRpdGxlPlRyYWNrIHlvdXIgb3JkZXI8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgICA8UmlkZVRleHQ+UmVhbCB0aW1lIG9yZGVyICYgcGFja2FnZSB0cmFja2luZzwvUmlkZVRleHQ+XHJcbiAgICAgICAgICAgIDwvR3JpZENvdmVyPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+XHJcbiAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgIDxHcmlkQ292ZXI+XHJcbiAgICAgICAgICAgICAgPFJpZGVUaXRsZT5RdWljayBkZWxpdmVyeTwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5cclxuICAgICAgICAgICAgICAgIERlbGl2ZXIgaXRlbXMgdG8geW91ciBjdXN0b21lcnMgd2l0aG91dCBoYXNzbGVcclxuICAgICAgICAgICAgICA8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L0dyaWRDb3Zlcj5cclxuICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuYFxyXG5jb25zdCBCdXNpbmVzSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDMycHggMDtcclxuYFxyXG5jb25zdCBCdXNpbmVzc1RleHQgPSBzdHlsZWQoSGVhZGVyMilgXHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmBcclxuY29uc3QgRGV0YWlsc0dyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogMTZweDtcclxuICBnYXA6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtYXgtaGVpZ2h0OiA2MzBweDtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke2RlbGl2ZXJ5fSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgR3JpZENvdmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogNjRweCAwO1xyXG4gIHotaW5kZXg6IDM7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNjMwcHg7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtkZWxpdmVyeTAyfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dEJ1c2luZXNzXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBMYXJnZUhlYWRlciB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IEFib3V0RGVsaXZlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjc2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcblxyXG4gMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcblxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSAxNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFJpZGVUZXh0ID0gc3R5bGVkKExhcmdlSGVhZGVyKWBcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXREZWxpdmVyeVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSGVhZGVyMiwgQm9keTMgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCBwdXJwb3NlMDIgZnJvbSBcIn4vaW1hZ2VzL3B1cnBvc2UwMi5wbmdcIlxyXG5pbXBvcnQgcHVycG9zZTAxIGZyb20gXCJ+L2ltYWdlcy9wdXJwb3NlMDEucG5nXCJcclxuY29uc3QgQWJvdXREZXRhaWxzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5XYWl0aW5nIGlzIGJvcmluZzwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+XHJcbiAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICBzdHVkZW50cyB0byBidWlsZCBvdXQgdGhlaXIgc2lkZS1odXN0bGVzIGFuZCBnZXQgc3VwcG9ydCBmcm9tXHJcbiAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICA8R3JpZEltYWdlIHNyYz17cHVycG9zZTAyfSBhbHQ9XCJ1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgIDwvRGV0YWlsc0dyaWQ+e1wiIFwifVxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgIDxHcmlkSW1hZ2Ugc3JjPXtwdXJwb3NlMDF9IGFsdD1cInVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD5cclxuICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5PdXIgTWlzc2lvbjwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+XHJcbiAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICBzdHVkZW50cyB0byBidWlsZCBvdXQgdGhlaXIgc2lkZS1odXN0bGVzIGFuZCBnZXQgc3VwcG9ydCBmcm9tXHJcbiAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERldGFpbHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgR3JpZExlZnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBgXHJcblxyXG5jb25zdCBHcmlkUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgR3JpZEltYWdlID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogNjMwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dERldGFpbHNcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IG1haW4gZnJvbSBcIn4vaW1hZ2VzL21haW4ucG5nXCJcclxuY29uc3QgQWJvdXRIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPE1vcmVPdmVybGF5IC8+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8TW9yZVRpdGxlPkFCT1VUIFdJS0tJPC9Nb3JlVGl0bGU+XHJcbiAgICAgICAgPENvdmVySW1hZ2U+XHJcbiAgICAgICAgICA8QWJvdXRJbWFnZSBzcmM9e21haW59IGFsdD1cInRoZSB3aWtraSBteSB3aWtraVwiIC8+XHJcbiAgICAgICAgPC9Db3ZlckltYWdlPlxyXG4gICAgICAgIDxDb3ZlckRldHM+XHJcbiAgICAgICAgICA8Q292ZXJUaXRsZT5Sb2J1c3QgZGVsaXZlcnkgYW5kIHBpY2t1cCBmb3IgTmlnZXJpYTwvQ292ZXJUaXRsZT5cclxuICAgICAgICAgIDxDb3ZlclRleHQ+XHJcbiAgICAgICAgICAgIFdpa2tpIGlzIGEgdGVjaG5vbG9neSBjb21wYW55IG9uIGEgbWlzc2lvbiB0byBwb3dlciB0aGUgZGlnaXRhbFxyXG4gICAgICAgICAgICBlY29ub215IGluIEFmcmljYSwgdXNpbmcgb3BlbiBiYW5raW5nIGFzIGEgbGF5ZXIgZm9yIGZpbmFuY2lhbCBkYXRhLFxyXG4gICAgICAgICAgICBpZGVudGl0eSBkYXRhLCBhbmQgYmFuayB0cmFuc2ZlciBwYXltZW50cyBmb3IgYnVzaW5lc3Nlcy5cclxuICAgICAgICAgIDwvQ292ZXJUZXh0PlxyXG4gICAgICAgIDwvQ292ZXJEZXRzPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUucHJpbWFyeX07XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMjBweCBhdXRvIDgwcHggYXV0bztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDkycHggYXV0byA1NiBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTW9yZVRpdGxlID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENvdmVySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDhweCBhdXRvO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEFib3V0SW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlckRldHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXJUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuY29uc3QgQ292ZXJUZXh0ID0gc3R5bGVkKEJvZHkyKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjUsIEhlYWRlcjEgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IHB1cnBvc2VEYXRhIH0gZnJvbSBcIi4vUHVycG9zZURhdGFcIlxyXG5pbXBvcnQgcG9pbnRjYXJkIGZyb20gXCJ+L2ltYWdlcy9wb2ludGNhcmQuZ2lmXCJcclxuXHJcbmNvbnN0IEFib3V0UHVycG9zZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPE1vcmVUaXRsZT5PdXIgUHVycG9zZTwvTW9yZVRpdGxlPlxyXG5cclxuICAgICAgICA8RGV0YWlsc0dyaWQ+XHJcbiAgICAgICAgICB7cHVycG9zZURhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UHVycG9zZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPFB1cnBvc2VJY29uPntkYXRhLmljb259PC9QdXJwb3NlSWNvbj5cclxuICAgICAgICAgICAgICA8TW9yZVN1Yj57ZGF0YS50aXRsZX08L01vcmVTdWI+XHJcbiAgICAgICAgICAgICAgPE1vcmVUZXh0PntkYXRhLnRleHR9PC9Nb3JlVGV4dD5cclxuICAgICAgICAgICAgPC9QdXJwb3NlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtwb2ludGNhcmR9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVTdWIgPSBzdHlsZWQoSGVhZGVyNSlgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYFxyXG5jb25zdCBNb3JlVGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5gXHJcbmNvbnN0IERldGFpbHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFB1cnBvc2VSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuYFxyXG5cclxuY29uc3QgUHVycG9zZUljb24gPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAzMnB4IDA7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQdXJwb3NlXHJcbiIsICJleHBvcnQgY29uc3QgcHVycG9zZURhdGEgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwIDIzLjMzMzNIMjEuNjY2N0MyMy41IDIzLjMzMzMgMjUgMjEuODMzMyAyNSAyMFYzLjMzMzM0SDEwQzcuNSAzLjMzMzM0IDUuMzE2NjggNC43MTY2NiA0LjE4MzM1IDYuNzQ5OTlcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAyOC4zMzMzQzMuMzMzMzcgMzEuMSA1LjU2NjcxIDMzLjMzMzMgOC4zMzMzNyAzMy4zMzMzSDEwQzEwIDMxLjUgMTEuNSAzMCAxMy4zMzM0IDMwQzE1LjE2NjcgMzAgMTYuNjY2NyAzMS41IDE2LjY2NjcgMzMuMzMzM0gyMy4zMzM0QzIzLjMzMzQgMzEuNSAyNC44MzM0IDMwIDI2LjY2NjcgMzBDMjguNSAzMCAzMCAzMS41IDMwIDMzLjMzMzNIMzEuNjY2N0MzNC40MzM0IDMzLjMzMzMgMzYuNjY2NyAzMS4xIDM2LjY2NjcgMjguMzMzM1YyMy4zMzMzSDMxLjY2NjdDMzAuNzUgMjMuMzMzMyAzMCAyMi41ODMzIDMwIDIxLjY2NjdWMTYuNjY2N0MzMCAxNS43NSAzMC43NSAxNSAzMS42NjY3IDE1SDMzLjgxNjdMMzAuOTY2NyAxMC4wMTY3QzMwLjM2NjcgOC45ODMzNiAyOS4yNjY4IDguMzMzMzQgMjguMDY2OCA4LjMzMzM0SDI1VjIwQzI1IDIxLjgzMzMgMjMuNSAyMy4zMzMzIDIxLjY2NjcgMjMuMzMzM0gyMFwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMy4zMzMzIDM2LjY2NjdDMTUuMTc0MyAzNi42NjY3IDE2LjY2NjcgMzUuMTc0MyAxNi42NjY3IDMzLjMzMzNDMTYuNjY2NyAzMS40OTI0IDE1LjE3NDMgMzAgMTMuMzMzMyAzMEMxMS40OTI0IDMwIDEwIDMxLjQ5MjQgMTAgMzMuMzMzM0MxMCAzNS4xNzQzIDExLjQ5MjQgMzYuNjY2NyAxMy4zMzMzIDM2LjY2NjdaXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI2LjY2NjcgMzYuNjY2N0MyOC41MDc3IDM2LjY2NjcgMzAgMzUuMTc0MyAzMCAzMy4zMzMzQzMwIDMxLjQ5MjQgMjguNTA3NyAzMCAyNi42NjY3IDMwQzI0LjgyNTggMzAgMjMuMzMzNCAzMS40OTI0IDIzLjMzMzQgMzMuMzMzM0MyMy4zMzM0IDM1LjE3NDMgMjQuODI1OCAzNi42NjY3IDI2LjY2NjcgMzYuNjY2N1pcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzYuNjY2NyAyMFYyMy4zMzMzSDMxLjY2NjdDMzAuNzUgMjMuMzMzMyAzMCAyMi41ODMzIDMwIDIxLjY2NjdWMTYuNjY2N0MzMCAxNS43NSAzMC43NSAxNSAzMS42NjY3IDE1SDMzLjgxNjZMMzYuNjY2NyAyMFpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAxMy4zMzMzSDEzLjMzMzRcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAxOC4zMzMzSDEwXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTMuMzMzMzcgMjMuMzMzM0g2LjY2NjcxXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICB0aXRsZTogXCJGYXN0IGRlbGl2ZXJ5XCIsXHJcbiAgICB0ZXh0OiBcIk5ldyB3b3JsZCBmaW5hbmNpYWwgbGl0ZXJhY3kgZm9yIHRoZSBmdXR1cmUgb2Ygd29yay4gR2l2aW5nIHRoZSB5b3V0aCB0aGUgY29uZmlkZW5jZSB0byBmb2xsb3cgdGhlaXIgY2FsbGluZy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQwIDQwXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01LjAwMDA0IDVIMzVDMzUuNDQyMSA1IDM1Ljg2NiA1LjE3NTU5IDM2LjE3ODYgNS40ODgxNkMzNi40OTExIDUuODAwNzIgMzYuNjY2NyA2LjIyNDY0IDM2LjY2NjcgNi42NjY2N1YzMy4zMzMzQzM2LjY2NjcgMzMuNzc1NCAzNi40OTExIDM0LjE5OTMgMzYuMTc4NiAzNC41MTE4QzM1Ljg2NiAzNC44MjQ0IDM1LjQ0MjEgMzUgMzUgMzVINS4wMDAwNEM0LjU1ODAxIDM1IDQuMTM0MDkgMzQuODI0NCAzLjgyMTUzIDM0LjUxMThDMy41MDg5NyAzNC4xOTkzIDMuMzMzMzcgMzMuNzc1NCAzLjMzMzM3IDMzLjMzMzNWNi42NjY2N0MzLjMzMzM3IDYuMjI0NjQgMy41MDg5NyA1LjgwMDcyIDMuODIxNTMgNS40ODgxNkM0LjEzNDA5IDUuMTc1NTkgNC41NTgwMSA1IDUuMDAwMDQgNVY1Wk02LjY2NjcxIDguMzMzMzNWMzEuNjY2N0gzMy4zMzM0VjguMzMzMzNINi42NjY3MVpNMTQuMTY2NyAyMy4zMzMzSDIzLjMzMzRDMjMuNTU0NCAyMy4zMzMzIDIzLjc2NjQgMjMuMjQ1NSAyMy45MjI2IDIzLjA4OTNDMjQuMDc4OSAyMi45MzMgMjQuMTY2NyAyMi43MjEgMjQuMTY2NyAyMi41QzI0LjE2NjcgMjIuMjc5IDI0LjA3ODkgMjIuMDY3IDIzLjkyMjYgMjEuOTEwN0MyMy43NjY0IDIxLjc1NDUgMjMuNTU0NCAyMS42NjY3IDIzLjMzMzQgMjEuNjY2N0gxNi42NjY3QzE1LjU2MTYgMjEuNjY2NyAxNC41MDE4IDIxLjIyNzcgMTMuNzIwNCAyMC40NDYzQzEyLjkzOSAxOS42NjQ5IDEyLjUgMTguNjA1MSAxMi41IDE3LjVDMTIuNSAxNi4zOTQ5IDEyLjkzOSAxNS4zMzUxIDEzLjcyMDQgMTQuNTUzN0MxNC41MDE4IDEzLjc3MjMgMTUuNTYxNiAxMy4zMzMzIDE2LjY2NjcgMTMuMzMzM0gxOC4zMzM0VjEwSDIxLjY2NjdWMTMuMzMzM0gyNS44MzM0VjE2LjY2NjdIMTYuNjY2N0MxNi40NDU3IDE2LjY2NjcgMTYuMjMzNyAxNi43NTQ1IDE2LjA3NzUgMTYuOTEwN0MxNS45MjEyIDE3LjA2NyAxNS44MzM0IDE3LjI3OSAxNS44MzM0IDE3LjVDMTUuODMzNCAxNy43MjEgMTUuOTIxMiAxNy45MzMgMTYuMDc3NSAxOC4wODkzQzE2LjIzMzcgMTguMjQ1NSAxNi40NDU3IDE4LjMzMzMgMTYuNjY2NyAxOC4zMzMzSDIzLjMzMzRDMjQuNDM4NCAxOC4zMzMzIDI1LjQ5ODMgMTguNzcyMyAyNi4yNzk3IDE5LjU1MzdDMjcuMDYxMSAyMC4zMzUxIDI3LjUgMjEuMzk0OSAyNy41IDIyLjVDMjcuNSAyMy42MDUxIDI3LjA2MTEgMjQuNjY0OSAyNi4yNzk3IDI1LjQ0NjNDMjUuNDk4MyAyNi4yMjc3IDI0LjQzODQgMjYuNjY2NyAyMy4zMzM0IDI2LjY2NjdIMjEuNjY2N1YzMEgxOC4zMzM0VjI2LjY2NjdIMTQuMTY2N1YyMy4zMzMzWlwiXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIHRpdGxlOiBcIkNoZWFwIGZlZXNcIixcclxuICAgIHRleHQ6IFwiTmV3IHdvcmxkIGZpbmFuY2lhbCBsaXRlcmFjeSBmb3IgdGhlIGZ1dHVyZSBvZiB3b3JrLiBHaXZpbmcgdGhlIHlvdXRoIHRoZSBjb25maWRlbmNlIHRvIGZvbGxvdyB0aGVpciBjYWxsaW5nLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTUuMjgzNDUgMTIuNEwyMC4wMDAxIDIwLjkxNjZMMzQuNjE2NyAxMi40NDk5XCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwLjAwMDEgMzYuMDE2NlYyMC44OTk5XCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTM2LjAxNjcgMTUuMjgzM1YyNC43MTY3QzM2LjAxNjcgMjQuODAwMSAzNi4wMTY3IDI0Ljg2NjYgMzYuMDAwMSAyNC45NUMzNC44MzM0IDIzLjkzMzMgMzMuMzMzNCAyMy4zMzM0IDMxLjY2NjcgMjMuMzMzNEMzMC4xIDIzLjMzMzQgMjguNjUgMjMuODgzNCAyNy41IDI0LjhDMjUuOTY2NyAyNi4wMTY3IDI1IDI3LjkgMjUgMzBDMjUgMzEuMjUgMjUuMzUgMzIuNDMzNCAyNS45NjY3IDMzLjQzMzRDMjYuMTE2NyAzMy43IDI2LjMgMzMuOTUgMjYuNSAzNC4xODM0TDIzLjQ1MDEgMzUuODY2N0MyMS41NTAxIDM2LjkzMzQgMTguNDUgMzYuOTMzNCAxNi41NSAzNS44NjY3TDcuNjUwMDMgMzAuOTMzNEM1LjYzMzM3IDI5LjgxNjcgMy45ODM0IDI3LjAxNjcgMy45ODM0IDI0LjcxNjdWMTUuMjgzM0MzLjk4MzQgMTIuOTgzMyA1LjYzMzM3IDEwLjE4MzQgNy42NTAwMyA5LjA2NjdMMTYuNTUgNC4xMzMzM0MxOC40NSAzLjA2NjY2IDIxLjU1MDEgMy4wNjY2NiAyMy40NTAxIDQuMTMzMzNMMzIuMzUgOS4wNjY3QzM0LjM2NjcgMTAuMTgzNCAzNi4wMTY3IDEyLjk4MzMgMzYuMDE2NyAxNS4yODMzWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zOC4zMzMzIDMwQzM4LjMzMzMgMzEuMjUgMzcuOTgzNCAzMi40MzMzIDM3LjM2NjcgMzMuNDMzM0MzNy4wMTY3IDM0LjAzMzMgMzYuNTY2NyAzNC41NjY3IDM2LjA1IDM1QzM0Ljg4MzMgMzYuMDUgMzMuMzUgMzYuNjY2NyAzMS42NjY3IDM2LjY2NjdDMjkuMjMzMyAzNi42NjY3IDI3LjExNjYgMzUuMzY2NyAyNS45NjY2IDMzLjQzMzNDMjUuMzUgMzIuNDMzMyAyNSAzMS4yNSAyNSAzMEMyNSAyNy45IDI1Ljk2NjcgMjYuMDE2NyAyNy41IDI0LjhDMjguNjUgMjMuODgzMyAzMC4xIDIzLjMzMzMgMzEuNjY2NyAyMy4zMzMzQzM1LjM1IDIzLjMzMzMgMzguMzMzMyAyNi4zMTY3IDM4LjMzMzMgMzBaXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zMy40NSAzMS43MzMzTDI5LjkxNjYgMjguMjE2NlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzMuNDE2NiAyOC4yNjY3TDI5Ljg4MzMgMzEuNzgzM1wiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIHRpdGxlOiBcIkJldHRlciBsb2dpc3RpY3NcIixcclxuICAgIHRleHQ6IFwiTmV3IHdvcmxkIGZpbmFuY2lhbCBsaXRlcmFjeSBmb3IgdGhlIGZ1dHVyZSBvZiB3b3JrLiBHaXZpbmcgdGhlIHlvdXRoIHRoZSBjb25maWRlbmNlIHRvIGZvbGxvdyB0aGVpciBjYWxsaW5nLlwiLFxyXG4gIH0sXHJcbl1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IERvTW9yZSBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvRG9Nb3JlXCJcbmltcG9ydCBIb21lQnVzaW5lc3MgZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL0hvbWVCdXNpbmVzc1wiXG5pbXBvcnQgSG9tZUhlcm8gZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL0hvbWVIZXJvXCJcbmltcG9ydCBIb21lV2FpdGluZyBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvSG9tZVdhaXRpbmdcIlxuaW1wb3J0IFVzZUNhc2VzIGZyb20gXCJ+L2NvbXBvbmVudHMvaG9tZS9Vc2VDYXNlc1wiXG5pbXBvcnQgTGF5b3V0SGVhZCBmcm9tIFwifi9jb250YWluZXIvTGF5b3V0SGVhZFwiXG5pbXBvcnQgSG9tZVN0YXJ0ZWQgZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL0hvbWVTdGFydGVkXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxCb2R5PlxuICAgICAgPExheW91dEhlYWQgdGl0bGU9XCJcIiAvPlxuICAgICAgPEhvbWVIZXJvIC8+XG4gICAgICA8SG9tZVdhaXRpbmcgLz5cblxuICAgICAgPFVzZUNhc2VzIC8+XG5cbiAgICAgIDxIb21lQnVzaW5lc3MgLz5cbiAgICAgIDxIb21lU3RhcnRlZCAvPlxuICAgICAgPERvTW9yZSAvPlxuICAgIDwvQm9keT5cbiAgKVxufVxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgYFxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBwb2ludGNhcmQgZnJvbSBcIn4vaW1hZ2VzL3BvaW50Y2FyZC5naWZcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjUsIEhlYWRlcjEgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmNvbnN0IERvTW9yZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPE1vcmVTdWI+RG8gbW9yZSB3aXRoIHdpa2tpPC9Nb3JlU3ViPlxyXG4gICAgICAgIDxNb3JlVGl0bGU+RGVzaWduZWQgZm9yIHRoZSBuZXh0IGJpbGxpb24gdXNlcnMgYW5kIHJpZGVyczwvTW9yZVRpdGxlPlxyXG4gICAgICAgIDxNb3JlVGV4dD5cclxuICAgICAgICAgIEJlYXV0aWZ1bGx5IGVhc3kgdG8gdXNlIHNvZnR3YXJlIHRvIGFjY2VwdCBjYXJkIHBheW1lbnRzIG9uIHlvdXJcclxuICAgICAgICAgIHBob25lLCBhbmQgZ3JvdyB5b3VyIGJ1c2luZXNzIGFueXdoZXJlIG9uIHRoZSBwbGFuZXRcclxuICAgICAgICA8L01vcmVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7cG9pbnRjYXJkfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBNb3JlT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVTdWIgPSBzdHlsZWQoSGVhZGVyNSlgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICBtYXJnaW46IDE2cHggMCAyNHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRG9Nb3JlXHJcbiIsICJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBidXNpbmVzcyBmcm9tIFwifi9pbWFnZXMvYnVzaW5lc3MucG5nXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEhlYWRlcjIsIEJvZHkyIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcclxuaW1wb3J0IHsgQnVzaW5lc3NCdXR0b24gfSBmcm9tIFwifi9zdHlsZXMvQnV0dG9uU3R5bGVzXCJcclxuXHJcbmltcG9ydCBoZWFydCBmcm9tIFwifi9pbWFnZXMvaGVhcnQucG5nXCJcclxuY29uc3QgSG9tZUJ1c2luZXNzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxDYXNlR3JpZD5cclxuICAgICAgICAgIDxDYXNlUm93VXNlcnM+XHJcbiAgICAgICAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICAgICAgICA8Um93Q29udGVudD5cclxuICAgICAgICAgICAgICA8Q2FzZVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgV2lra2kgPExvdmVzdmcgc3JjPXtoZWFydH0gYWx0PVwid2lra2kgaGVhcnRcIiAvPiBidXNpbmVzc2VzICZcclxuICAgICAgICAgICAgICAgIGNvbXBhbmllcy57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9DYXNlVGl0bGU+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxDYXNlVGV4dD5cclxuICAgICAgICAgICAgICAgIFdpa2tpIGZlZWxzIGp1c3QgbGlrZSB0aGUgQXBwbGUgZGV2aWNlcyBlbXBsb3llZXMga25vdyBhbmQgbG92ZVxyXG4gICAgICAgICAgICAgICAgXHUyMDE0IGFuZCB0aGV5IGFsbCB3b3JrIHRvZ2V0aGVyIHNlYW1sZXNzbHkuIENvcHkgYW5kIHBhc3RlIGFjcm9zc1xyXG4gICAgICAgICAgICAgICAgZGV2aWNlcy4gVXNlIEhhbmRvZmYgdG8gc3RhcnQgYW4gZW1haWwgb24gb25lIGRldmljZSBhbmQgZmluaXNoXHJcbiAgICAgICAgICAgICAgICBvbiBhbm90aGVyLiBBbmQgcGljayB1cCBjYWxscyBhbnl3aGVyZS5cclxuICAgICAgICAgICAgICA8L0Nhc2VUZXh0PlxyXG4gICAgICAgICAgICAgIDxDYXNlQnV0dG9uTGluayB0bz1cIi9idXNpbmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgTGVhcm4gd2hhdCB3ZSBoYXZlIHJlYWR5IGZvciBidXNpbmVzc2VzcyA8QnVzaW5lc3NJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXNlQnV0dG9uTGluaz5cclxuICAgICAgICAgICAgPC9Sb3dDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXNlUm93VXNlcnM+XHJcbiAgICAgICAgPC9DYXNlR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnNtb2tlV2hpdGV9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE0NHB4IDE2cHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICBwYWRkaW5nOiA2NHB4IDE2cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmBcclxuXHJcbmNvbnN0IENhc2VHcmlkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBDYXNlUm93VXNlcnMgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgke2J1c2luZXNzfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFJvd0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG5gXHJcbmNvbnN0IENhc2VUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuYFxyXG5jb25zdCBDYXNlVGV4dCA9IHN0eWxlZChCb2R5MilgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5jb25zdCBDYXNlQnV0dG9uTGluayA9IHN0eWxlZChCdXNpbmVzc0J1dHRvbilgXHJcbiAgbWFyZ2luOiA0OHB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IExvdmVzdmcgPSBzdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuYFxyXG5jb25zdCBCdXNpbmVzc0ljb24gPSBzdHlsZWQoQWlPdXRsaW5lUGx1c0NpcmNsZSlgXHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIG1hcmdpbjogMCAwIDAgOHB4O1xyXG4gIHN0cm9rZTogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBIb21lQnVzaW5lc3NcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IGhlcm9iZyBmcm9tIFwifi9pbWFnZXMvaGVyb2JnLnBuZ1wiXHJcbmltcG9ydCBhcHBzdG9yZSBmcm9tIFwifi9pbWFnZXMvYXBwc3RvcmUuc3ZnXCJcclxuaW1wb3J0IHBsYXlzdG9yZSBmcm9tIFwifi9pbWFnZXMvcGxheXN0b3JlLnN2Z1wiXHJcbmltcG9ydCBkZXZpY2UgZnJvbSBcIn4vaW1hZ2VzL2RldmljZS5wbmdcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgRG93bmxvYWRCdXR0b24gfSBmcm9tIFwifi9zdHlsZXMvQnV0dG9uU3R5bGVzXCJcclxuXHJcbmNvbnN0IEhvbWVIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxJbmZvTGVmdD5cclxuICAgICAgICAgIDxHaW5nZXJUaXRsZT5cclxuICAgICAgICAgICAgTW92ZSBpdGVtcyBhbmQgZ29vZHMgaW5zdGFudGx5IHdpdGggbG93IGZlZXMuXHJcbiAgICAgICAgICA8L0dpbmdlclRpdGxlPlxyXG4gICAgICAgICAgPFRlYXNlVGV4dD5HZXQgaXRlbXMgZGVsaXZlcmVkIGFuZCBwaWNrZWQgdXAgaW4gbWludXRlcyE8L1RlYXNlVGV4dD5cclxuICAgICAgICAgIDxHaW5nZXJSb3c+XHJcbiAgICAgICAgICAgIDxDb21tdW5pdHlNYWluQnV0dG9uXHJcbiAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdG9yZUljb24gc3JjPXthcHBzdG9yZX0gYWx0PVwid2lra2kgZG93bmxvYWRcIiAvPiBBcHAgU3RvcmVcclxuICAgICAgICAgICAgPC9Db21tdW5pdHlNYWluQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPENvbW11bml0eU91dGxpbmVCdXR0b25cclxuICAgICAgICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0b3JlSWNvbiBzcmM9e3BsYXlzdG9yZX0gYWx0PVwid2lra2kgZG93bmxvYWRcIiAvPiBHb29nbGUgUGxheVxyXG4gICAgICAgICAgICA8L0NvbW11bml0eU91dGxpbmVCdXR0b24+XHJcbiAgICAgICAgICA8L0dpbmdlclJvdz5cclxuICAgICAgICAgIDxIZXJvSW1hZ2Ugc3JjPXtkZXZpY2V9IGFsdD1cIndpa2tpIGRldmljZVwiIC8+XHJcbiAgICAgICAgPC9JbmZvTGVmdD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA5MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtoZXJvYmd9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgR2luZ2VyVGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFRlYXNlVGV4dCA9IHN0eWxlZChCb2R5MilgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgR2luZ2VyUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb21tdW5pdHlNYWluQnV0dG9uID0gc3R5bGVkKERvd25sb2FkQnV0dG9uKWBgXHJcbmNvbnN0IENvbW11bml0eU91dGxpbmVCdXR0b24gPSBzdHlsZWQoRG93bmxvYWRCdXR0b24pYGBcclxuXHJcbmNvbnN0IFN0b3JlSWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG5gXHJcbmNvbnN0IEhlcm9JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiA5OThweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvIC04MDBweCBhdXRvO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBIZWFkZXIyLCBCb2R5MywgSGVhZGVyMSwgQm9keTEsIFN1YlRpdGxlIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuaW1wb3J0IHB1cnBvc2UwMSBmcm9tIFwifi9pbWFnZXMvcHVycG9zZTAxLnBuZ1wiXHJcblxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuY29uc3QgSG9tZVdhaXRpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFdhaXRpbmdSb3c+XHJcbiAgICAgICAgICA8V2FpdFN1Yj5XaHkgV2lra2k/PC9XYWl0U3ViPlxyXG4gICAgICAgICAgPFdhaXRUaXRsZT5CZWNhdXNlIC0gV2FpdGluZyBpcyBib3Jpbmc8L1dhaXRUaXRsZT5cclxuICAgICAgICAgIDxXYWl0VGV4dD5cclxuICAgICAgICAgICAgV2Uga25vdyBob3cgYW5ub3lpbmcgaXQgY2FuIGJlIHdhaXRpbmcgZm9yIHlvdXIgbWVhbCwgb3JkZXIsIHBhY2thZ2VcclxuICAgICAgICAgICAgb3IgcGlja3VwIHRvIGJlIGRlbGl2ZXJlZCBzYW1lIGRheS5cclxuICAgICAgICAgIDwvV2FpdFRleHQ+XHJcbiAgICAgICAgPC9XYWl0aW5nUm93PlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgIDxHcmlkSW1hZ2Ugc3JjPXtwdXJwb3NlMDF9IGFsdD1cInVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+Um9idXN0IGRlbGl2ZXJ5IGFuZCBwaWNrdXA8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgIFdlIGtub3cgaG93IGhhcmQgaXQgY2FuIGJlIHRvIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgY2xpZW50IGJhc2UsXHJcbiAgICAgICAgICAgICAgZXNwZWNpYWxseSBhcyBhIHN0dWRlbnQuIFdlIGJ1aWx0IENsdXRjaCB0byBiZSBhIHNhZmUgc3BhY2UgZm9yXHJcbiAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgIHRoZWlyIGNsYXNzbWF0ZXMuXHJcbiAgICAgICAgICAgIDwvUmlkZVRleHQ+XHJcbiAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPEdyaWRJbWFnZSBzcmM9e3B1cnBvc2UwMX0gYWx0PVwidXNlIHdpa2tpXCIgLz5cclxuICAgICAgICAgIDwvR3JpZFJpZ2h0PntcIiBcIn1cclxuICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5Sb2J1c3QgZGVsaXZlcnkgYW5kIHBpY2t1cDwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+XHJcbiAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICBzdHVkZW50cyB0byBidWlsZCBvdXQgdGhlaXIgc2lkZS1odXN0bGVzIGFuZCBnZXQgc3VwcG9ydCBmcm9tXHJcbiAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgICA8R3JpZFJpZ2h0PlxyXG4gICAgICAgICAgICA8R3JpZEltYWdlIHNyYz17cHVycG9zZTAxfSBhbHQ9XCJ1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+XHJcbiAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+T3VyIE1pc3Npb248L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgIFdlIGtub3cgaG93IGhhcmQgaXQgY2FuIGJlIHRvIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgY2xpZW50IGJhc2UsXHJcbiAgICAgICAgICAgICAgZXNwZWNpYWxseSBhcyBhIHN0dWRlbnQuIFdlIGJ1aWx0IENsdXRjaCB0byBiZSBhIHNhZmUgc3BhY2UgZm9yXHJcbiAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgIHRoZWlyIGNsYXNzbWF0ZXMuXHJcbiAgICAgICAgICAgIDwvUmlkZVRleHQ+XHJcbiAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgIDwvRGV0YWlsc0dyaWQ+e1wiIFwifVxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEwNTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDY0cHggMDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBEZXRhaWxzR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA1NnB4O1xyXG4gIGdhcDogNTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBtYXJnaW46IDY0cHggMDsgKi9cclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMzJweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAzMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEdyaWRMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5cclxuY29uc3QgR3JpZFJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuYFxyXG5cclxuY29uc3QgR3JpZEltYWdlID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogNjMwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcblxyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbmBcclxuY29uc3QgV2FpdGluZ1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDMycHggYXV0bztcclxuYFxyXG5jb25zdCBXYWl0U3ViID0gc3R5bGVkKFN1YlRpdGxlKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgV2FpdFRpdGxlID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBXYWl0VGV4dCA9IHN0eWxlZChCb2R5MSlgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVXYWl0aW5nXHJcbiIsICJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgSGVhZGVyMiwgSGVhZGVyMyB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IHVzZXIgZnJvbSBcIn4vaW1hZ2VzL3VzZXIucG5nXCJcclxuaW1wb3J0IGRyaXZlciBmcm9tIFwifi9pbWFnZXMvZHJpdmVyLnBuZ1wiXHJcbmltcG9ydCB7IENhc2VCdXR0b24gfSBmcm9tIFwifi9zdHlsZXMvQnV0dG9uU3R5bGVzXCJcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCJcclxuXHJcbmNvbnN0IFVzZUNhc2VzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxNb3JlVGl0bGU+RGlzY292ZXIgV2lra2kgVXNlY2FzZXM8L01vcmVUaXRsZT5cclxuICAgICAgICA8Q2FzZUdyaWQ+XHJcbiAgICAgICAgICA8Q2FzZVJvd1VzZXJzPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICAgICAgICA8Um93Q29udGVudD5cclxuICAgICAgICAgICAgICA8Q2FzZVRpdGxlPkZvciBEaXNwYXRjaDwvQ2FzZVRpdGxlPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Rpc3BhdGNoXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FzZUJ1dHRvbkxpbms+TGVhcm4gbW9yZTwvQ2FzZUJ1dHRvbkxpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1Jvd0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0Nhc2VSb3dVc2Vycz5cclxuICAgICAgICAgIDxDYXNlUm93RHJpdmVycz5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8TW9yZU92ZXJsYXkgLz5cclxuICAgICAgICAgICAgPFJvd0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENhc2VUaXRsZT5Gb3IgcGlja3VwczwvQ2FzZVRpdGxlPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BpY2stdXBcIj5cclxuICAgICAgICAgICAgICAgIDxDYXNlQnV0dG9uTGluaz5MZWFybiBtb3JlPC9DYXNlQnV0dG9uTGluaz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvUm93Q29udGVudD5cclxuICAgICAgICAgIDwvQ2FzZVJvd0RyaXZlcnM+XHJcbiAgICAgICAgPC9DYXNlR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE0NHB4IDA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBtYXJnaW46IDE2cHggMCA2NHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgNDhweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDYXNlR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDYXNlUm93VXNlcnMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICBtaW4taGVpZ2h0OiA2ODBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7dXNlcn0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBSb3dDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMCA0MHB4IDMycHggNDBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDU2cHggMjRweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBtYXJnaW46IDMycHggMDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENhc2VUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBgXHJcbmNvbnN0IENhc2VCdXR0b25MaW5rID0gc3R5bGVkKENhc2VCdXR0b24pYGBcclxuY29uc3QgQ2FzZVJvd0RyaXZlcnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgbWluLWhlaWdodDogNjgwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7ZHJpdmVyfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgVXNlQ2FzZXNcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgTGF5b3V0SGVhZCA9ICh7IHRpdGxlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX0gLTwvdGl0bGU+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfSAtIFJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBgfSAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVxdWVzdCBhIGRpc3BhdGNoIG9yIHBpY2t1cFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9teXdpa2tpLmNvbS9cIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RpdGxlfSAtIFJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBcIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm9lenJveTgvaW1hZ2UvdXBsb2FkL3YxNjQ5NTQ1MTQ1L2Zhdmljb25faGZxbnFnLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbXl3aWtraS5jb20vXCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RpdGxlfSAtIFJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD1cIlJlcXVlc3QgYSBkaXNwYXRjaCBvciBwaWNrdXBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2b2V6cm95OC9pbWFnZS91cGxvYWQvdjE2NDk1NDUxNDUvZmF2aWNvbl9oZnFucWcucG5nXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0SGVhZFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSGVhZGVyMiwgSGVhZGVyMywgU3ViVGl0bGUgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5cclxuY29uc3QgSG9tZVN0YXJ0ZWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxNb3JlVGl0bGU+R2V0IFN0YXJ0ZWQgd2l0aCBXaWtraTwvTW9yZVRpdGxlPlxyXG4gICAgICAgIDxEZXRhaWxzR3JpZD5cclxuICAgICAgICAgIDxHcmlkUmlnaHQ+XHJcbiAgICAgICAgICAgIDxVc2Vyc0NvdmVyPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8R3JpZEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm9lenJveTgvaW1hZ2UvdXBsb2FkL3YxNjQ4NzU2MTE2L0Ryb25lLWRlbGl2ZXJ5X3BkcGZiYi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidXNlIHdpa2tpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1VzZXJzQ292ZXI+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+Rm9yIHVzZXJzPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvdy1pdC13b3Jrc1wiPlxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5MZWFybiBNb3JlPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPERyaXZlcj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9QaXp6YS1kZWxpdmVyeV9weTJhengucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInVzZSB3aWtraVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Ecml2ZXI+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+Rm9yIGRyaXZlcnM8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvaG93LWl0LXdvcmtzL2RyaXZlclwiPlxyXG4gICAgICAgICAgICAgIDxSaWRlVGV4dD5MZWFybiBNb3JlPC9SaWRlVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkUmlnaHQ+e1wiIFwifVxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPENvbXBhbmllcz5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEdyaWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZvZXpyb3k4L2ltYWdlL3VwbG9hZC92MTY0ODc1NjExMC9PcmRlci1kZWxpdmVyZWRfZHFiMmRxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ1c2Ugd2lra2lcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29tcGFuaWVzPlxyXG4gICAgICAgICAgICA8UmlkZVRpdGxlPkZvciBidXNpbmVzc2VzPC9SaWRlVGl0bGU+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2J1c2luZXNzXCI+XHJcbiAgICAgICAgICAgICAgPFJpZGVUZXh0PkxlYXJuIE1vcmU8L1JpZGVUZXh0PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHggNTZweCAxNnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG5gXHJcblxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMjMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG5gXHJcbmNvbnN0IE1vcmVUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBtYXJnaW46IDE2cHggMCA2NHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgNDhweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBEZXRhaWxzR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgZ3JpZC1nYXA6IDI0cHg7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdhcDogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgVXNlcnNDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnVzZXJEb3dubG9hZH07XHJcbmBcclxuXHJcbmNvbnN0IERyaXZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmRyaXZlckRvd25sb2FkfTtcclxuYFxyXG5jb25zdCBDb21wYW5pZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5idXNpbmVzc0Rvd25sb2FkfTtcclxuYFxyXG5jb25zdCBSaWRlVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgbWFyZ2luOiAyNHB4IDAgMTZweCAwO1xyXG5gXHJcblxyXG5jb25zdCBHcmlkUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5cclxuY29uc3QgR3JpZEltYWdlID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoU3ViVGl0bGUpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVTdGFydGVkXHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcbmltcG9ydCB7IEhlYWRlcjIgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIlxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcclxuICBjaGFyc2V0OiBcInV0Zi04XCIsXHJcbiAgdGl0bGU6IFwiUGFnZSBOb3QgRm91bmQgLSBSZXF1ZXN0IGEgZGlzcGF0Y2ggb3IgcGlja3VwXCIsXHJcbiAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxyXG5cclxuICBkZXNjcmlwdGlvbjogXCJHZXQgaXRlbXMgYW5kIGdvb2RzIGRlbGl2ZXJlZCBhbmQgcGlja2VkIHVwIGZyb20gYW55d2hlcmVcIixcclxufSlcclxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPENvbnRhY3RIZWFkZXI+XHJcbiAgICAgICAgICA8Q29udGFjdFRpdGxlPkVycm9yOjQwNDwvQ29udGFjdFRpdGxlPlxyXG5cclxuICAgICAgICAgIDxOb3RGb3VuZEJ1dHRvbiB0bz1cIi9cIj5HbyBiYWNrIEhvbWU8L05vdEZvdW5kQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxDb250YWN0VGl0bGU+RXJyb3I6NDA0PC9Db250YWN0VGl0bGU+XHJcbiAgICAgICAgPC9Db250YWN0SGVhZGVyPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNzJweCAwIDAgMDtcclxuYFxyXG5jb25zdCBDb250YWN0SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgQ29udGFjdFRpdGxlID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBOb3RGb3VuZEJ1dHRvbiA9IHN0eWxlZChGb3JtQnV0dG9uKWBgXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4YmJhNGNlMCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtREZCWjRNSkcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRGN0RZN0ZDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0dRM0NEVk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YVjIzTVg2Ni5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVUJKUVE0TkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZONExTSTdMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVc0QkdEUzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HTDNGVUhaSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVM0QkpTM0ZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFBZV1BYQU4uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyQnOnsnaWQnOidyb3V0ZXMvJCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOicqJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyQtSlpKVU1TWFkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hYm91dCc6eydpZCc6J3JvdXRlcy9hYm91dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhYm91dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hYm91dC01Vk5QM1VGRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREVITzc3M1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZRUlLM1JHRi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYnVzaW5lc3MnOnsnaWQnOidyb3V0ZXMvYnVzaW5lc3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYnVzaW5lc3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYnVzaW5lc3MtUUVGMlhFSE8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb250YWN0Jzp7J2lkJzoncm91dGVzL2NvbnRhY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29udGFjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0LVFQNlBOQlZPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGlzcGF0Y2gnOnsnaWQnOidyb3V0ZXMvZGlzcGF0Y2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGlzcGF0Y2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGlzcGF0Y2gtSU0yWUFHM0YuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kb3dubG9hZCc6eydpZCc6J3JvdXRlcy9kb3dubG9hZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkb3dubG9hZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kb3dubG9hZC0zQ05WWVpKNS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RyaXZlci1yZXF1aXJlbWVudHMnOnsnaWQnOidyb3V0ZXMvZHJpdmVyLXJlcXVpcmVtZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkcml2ZXItcmVxdWlyZW1lbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RyaXZlci1yZXF1aXJlbWVudHMtM0VHTkRPTUIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlFSUszUkdGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob3ctaXQtd29ya3MvZHJpdmVyJzp7J2lkJzoncm91dGVzL2hvdy1pdC13b3Jrcy9kcml2ZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG93LWl0LXdvcmtzL2RyaXZlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob3ctaXQtd29ya3MvZHJpdmVyLUc1MjVMWVBYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SNDRMUktPUy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG93LWl0LXdvcmtzL2luZGV4Jzp7J2lkJzoncm91dGVzL2hvdy1pdC13b3Jrcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob3ctaXQtd29ya3MnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvdy1pdC13b3Jrcy9pbmRleC03SUpCNzVQNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUjQ0TFJLT1MuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVlDMlFMNVBSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ERUhPNzczUy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGljay11cCc6eydpZCc6J3JvdXRlcy9waWNrLXVwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BpY2stdXAnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGljay11cC03S0NES0ZNWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04QkJBNENFMC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFD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
