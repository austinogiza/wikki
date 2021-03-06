export const host =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/"
    : "https://www.api.mywikki.com/"

export const endpoint = `${host}`

export const ContactURL = `${host}api/contact/`
