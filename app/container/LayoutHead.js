import React from "react"

const LayoutHead = ({ title }) => {
  return (
    <>
      <title>{title} -</title>

      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={`${title} - Request a dispatch or pickup`} />
      <meta name="description" content="Request a dispatch or pickup" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mywikki.com/" />
      <meta
        property="og:title"
        content={`${title} - Request a dispatch or pickup`}
      />
      <meta property="og:description" content="Request a dispatch or pickup" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mywikki.com/" />
      <meta
        property="twitter:title"
        content={`${title} - Request a dispatch or pickup`}
      />
      <meta
        property="twitter:description"
        content="Request a dispatch or pickup"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dvoezroy8/image/upload/v1649545145/favicon_hfqnqg.png"
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default LayoutHead
