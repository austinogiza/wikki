import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "@remix-run/react"
import NProgress from "nprogress"
import { useEffect } from "react"
import styles from "~/styles/index.css"
import nProgressStyles from "~/styles/nprogress.css"
import DriverMessage from "~/components/DriverMessage"
import Footer from "~/components/Footer"
import NavCover from "~/components/navbar/NavCover"
import BackToTop from "~/components/BackToTop"
import { ToastContainer } from "react-toastify"
import toast from "react-toastify/dist/ReactToastify.css"
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Request a dispatch or pickup",
  viewport: "width=device-width,initial-scale=1",

  description: "Get items and goods delivered and picked up from anywhere",
  "twitter:card": "summary_large_image",

  "twitter:site": "@Wikki",
  "twitter:title": "Request a dispatch or pickup",
  "twitter:description":
    "Get items and goods delivered and picked up from anywhere",
  "twitter:creator": "@Wikki",
  "twitter:image":
    "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png",
  "og:description": "Get items and goods delivered and picked up from anywhere",
  "og:image":
    "https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png",
  "og:url": "https://mywikki.com/",
  "og:site_name": "Wikki",
  "og:title": "Request a dispatch or pickup",
})

export const links: LinksFunction = () => {
  // if you already have one only add this stylesheet to your list of links
  return [
    { rel: "stylesheet", href: nProgressStyles },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: toast },

    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ]
}

export default function App() {
  const transition = useTransition()
  useEffect(() => {
    if (transition.state === "idle") NProgress.done()
    else NProgress.start()
  }, [transition.state])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <NavCover />
        <BackToTop />
        <Outlet />
        <DriverMessage />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
