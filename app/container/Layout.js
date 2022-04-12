import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "components/Footer"
import NavCover from "components/navbar/NavCover"
import BackToTop from "components/BackToTop"
import DriverMessage from "components/DriverMessage"
const Layout = ({ children }) => {
  return (
    <>
      {" "}
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
      {children}
      <DriverMessage />
      <Footer />
    </>
  )
}

export default Layout
