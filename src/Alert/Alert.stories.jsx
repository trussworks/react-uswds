import React from 'react'
import Alert from './Alert'

export default { title: 'Alert' }

const testText = (
  <>
    Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a> elit,
    sed do eiusmod.
  </>
)

export const success = () => (
  <Alert type="success" heading="Success status">
    {testText}
  </Alert>
)

export const warning = () => (
  <Alert type="warning" heading="Warning status">
    {testText}
  </Alert>
)

export const error = () => (
  <Alert type="error" heading="Error status">
    {testText}
  </Alert>
)

export const info = () => (
  <Alert type="info" heading="Informative status">
    {testText}
  </Alert>
)
