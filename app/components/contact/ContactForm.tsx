import React from "react"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"

import * as Yup from "yup"
import { TextInput, TextArea } from "~/styles/InputStyles"
import { SubTitleSmall, Header3, SubTitle } from "~/styles/TextStyles"
import { FormButton } from "~/styles/ButtonStyles"
import axios from "axios"
import { ContactURL } from "~/constants/Constant"
import { toast } from "react-toastify"
import SuccessLoading from "~/components/SuccessLoading"
import { Form, Formik, FormikHelpers } from "formik"
interface Values {
  email: string
  message: string
  name: string
}
const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),

    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required"),
  })

  const submitForm = (values: Values, onSubmitProps: FormikHelpers<Values>) => {
    onSubmitProps.setSubmitting(true)
    axios
      .post(ContactURL, { values })
      .then((res) => {
        toast.success("Message sent successfully")
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
      })
      .catch((err) => {
        onSubmitProps.setSubmitting(false)
      })
  }
  return (
    <Body>
      <Cover>
        <FormTitle>Send us a message</FormTitle>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={submitForm}
        >
          {({
            errors,
            isSubmitting,
            values,
            handleChange,
            handleBlur,
            touched,
          }) => (
            <FormForm>
              <FormColumn>
                <FormLabel htmlFor="name">
                  {" "}
                  <LabelText>Name</LabelText>
                </FormLabel>
                <FormInput
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="input"
                  type="text"
                />
                {errors.name && touched.name && (
                  <FormError>
                    <FormErrorText>Your name is required</FormErrorText>
                  </FormError>
                )}
              </FormColumn>
              <FormColumn>
                <FormLabel htmlFor="email">
                  {" "}
                  <LabelText>Email</LabelText>
                </FormLabel>
                <FormInput
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="input"
                  type="email"
                />
                {errors.email && touched.email && (
                  <FormError>
                    <FormErrorText>Your email is required</FormErrorText>
                  </FormError>
                )}
              </FormColumn>
              <FormColumn>
                <FormLabel htmlFor="message">
                  {" "}
                  <LabelText>Message</LabelText>
                </FormLabel>
                <FormArea
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="textarea"
                  placeholder="Type your message"
                />
                {errors.message && touched.message && (
                  <FormError>
                    <FormErrorText>Your message is required</FormErrorText>
                  </FormError>
                )}
              </FormColumn>
              <FormButtonWrap>
                <FormButtonMain type="submit">
                  {isSubmitting ? (
                    <>
                      <SuccessLoading />
                    </>
                  ) : (
                    <>Send</>
                  )}
                </FormButtonMain>
              </FormButtonWrap>
            </FormForm>
          )}
        </Formik>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  min-height: 900px;
  background: ${WikkiTheme.snowWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  padding: 80px 0;
`
const Cover = styled.div`
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
`
const FormTitle = styled(Header3)`
  margin: 40px 0 56px 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 32px 0 40px 0;
  }
`
const FormForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
const FormColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 16px auto;
  max-width: 450px;
`
const LabelText = styled(SubTitle)`
  color: ${WikkiTheme.dark};
  margin: 10px 0;
`
const FormLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`
const FormInput = styled(TextInput)``
const FormArea = styled(TextArea)``

const FormError = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`
const FormErrorText = styled(SubTitleSmall)`
  color: ${WikkiTheme.red};
`
const FormButtonWrap = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormButtonMain = styled(FormButton)``
export default ContactForm
