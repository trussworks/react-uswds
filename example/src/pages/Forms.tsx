import React, { useState } from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import {
  Alert,
  Button,
  Form,
  Label,
  TextInput,
  ValidationChecklist,
  ValidationItem,
} from '@trussworks/react-uswds'

type FormValues = {
  email?: string
  password?: string
}

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20).required(),
})

const FormsPage = (): React.ReactElement => {
  return (
    <>
      <h1>Forms Examples</h1>
      <section>
        <h2>Formik</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))

              setSubmitting(false)
            }, 400)
          }}>
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {touched.email && errors.email && (
                <Alert type="info" validation heading="Email Requirements">
                  <ValidationChecklist id="validate-email">
                    <ValidationItem
                      id="required"
                      isValid={values.email.length > 0}>
                      Include required field.
                    </ValidationItem>
                    <ValidationItem id="validFormat" isValid={!errors.email}>
                      Use only valid email formatting
                    </ValidationItem>
                    {errors.email}
                  </ValidationChecklist>
                </Alert>
              )}
              <Label htmlFor="email">Email</Label>
              <Field
                as={TextInput}
                type="email"
                name="email"
                id="email"
                value={values.email}
              />

              {touched.password && errors.password && (
                <Alert type="info" validation heading="Password Requirements">
                  <ValidationChecklist id="validate-password">
                    <ValidationItem
                      id="required"
                      isValid={values.password.length > 0}>
                      Include required field.
                    </ValidationItem>
                    <ValidationItem id="length" isValid={!errors.password}>
                      Length is between 8-20 characters
                    </ValidationItem>
                  </ValidationChecklist>
                </Alert>
              )}
              <Label htmlFor="password">Password</Label>
              <Field
                as={TextInput}
                type="password"
                name="password"
                id="password"
                value={values.password}
              />

              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  )
}

export default FormsPage
