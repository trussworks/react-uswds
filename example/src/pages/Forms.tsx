import React from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import {
  Alert,
  Button,
  ComboBox,
  Form,
  FormGroup,
  Label,
  TextInput,
  ValidationChecklist,
  ValidationItem,
  DatePicker,
  FileInput,
  FileInputRef,
} from '@trussworks/react-uswds'

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20).required(),
  fruit: Yup.string().nullable(),
})

const fruits = {
  apple: 'Apple',
  apricot: 'Apricot',
  avocado: 'Avocado',
  banana: 'Banana',
  blackberry: 'Blackberry',
  'blood orange': 'Blood orange',
  blueberry: 'Blueberry',
  boysenberry: 'Boysenberry',
  breadfruit: 'Breadfruit',
}

const fruitOptions = Object.entries(fruits).map(([value, key]) => ({
  value: value,
  label: key,
}))

const FormsPage = (): React.ReactElement => {
  const fileInputRef = React.createRef<FileInputRef>()

  return (
    <>
      <h1>Forms Examples</h1>
      <section>
        <h2>Formik</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
            fruit: 'avocado',
            appointmentDate: '1/20/2021',
            file: '',
            attachments: [],
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Submit form data:', values)
            setTimeout(() => {
              console.log('Submit complete!')
              setSubmitting(false)
            }, 400)
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <span>Form data</span>
                <pre>{JSON.stringify(values)}</pre>
              </div>

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
              <Label htmlFor="fruit">My Favorite Fruit</Label>
              <Field
                as={ComboBox}
                name="fruit"
                id="fruit"
                options={fruitOptions}
                onChange={(val: string) => setFieldValue('fruit', val, true)}
                defaultValue="avocado"></Field>

              <FormGroup>
                <Label id="appointment-date-label" htmlFor="appointment-date">
                  Appointment date
                </Label>
                <div className="usa-hint" id="appointment-date-hint">
                  mm/dd/yyyy
                </div>
                <Field
                  as={DatePicker}
                  id="appointmentDate"
                  name="appointmentDate"
                  aria-describedby="appointment-date-label appointment-date-hint"
                  defaultValue="2021-01-01"
                  onChange={(val: string) =>
                    setFieldValue('appointmentDate', val, true)
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="file">File input (single)</Label>
                <FileInput
                  id="file"
                  name="file"
                  onChange={(e: React.ChangeEvent): void => {
                    const event = e as React.ChangeEvent<HTMLInputElement>

                    if (event.target.files?.length) {
                      setFieldValue('file', event.target.files[0])
                    }
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="attachments">File input (multiple)</Label>
                <FileInput
                  id="attachments"
                  name="attachments"
                  multiple
                  onChange={(e: React.ChangeEvent): void => {
                    const event = e as React.ChangeEvent<HTMLInputElement>
                    const files = []
                    if (event.target.files?.length) {
                      for (let i = 0; i < event.target.files?.length; i++) {
                        files.push(event.target.files[i])
                      }
                    }
                    setFieldValue('attachments', files)
                  }}
                  onDrop={(e: React.DragEvent): void => {
                    console.log('handle drop', e)
                  }}
                  ref={fileInputRef}
                />
              </FormGroup>

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
