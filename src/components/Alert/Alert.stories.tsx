import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

import { Button } from '../Button/Button'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Alert component

Source: https://designsystem.digital.gov/components/alert/
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const testText = (
  <>
    Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a> elit,
    sed do eiusmod.
  </>
)

export const Success: Story = {
  render: () => (
    <Alert type="success" heading="Success status" headingLevel="h4">
      {testText}
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert type="warning" heading="Warning status" headingLevel="h4">
      {testText}
    </Alert>
  ),
}

export const Error: Story = {
  render: () => (
    <Alert type="error" heading="Error status" headingLevel="h4">
      {testText}
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert type="info" heading="Informative status" headingLevel="h4">
      {testText}
    </Alert>
  ),
}

export const Slim: Story = {
  render: () => (
    <>
      <Alert type="success" headingLevel="h4" slim>
        {testText}
      </Alert>
      <Alert type="warning" headingLevel="h4" slim>
        {testText}
      </Alert>
      <Alert type="error" headingLevel="h4" slim>
        {testText}
      </Alert>
      <Alert type="info" headingLevel="h4" slim>
        {testText}
      </Alert>
    </>
  ),
}

export const NoIcon: Story = {
  render: () => (
    <>
      <Alert type="success" headingLevel="h4" noIcon>
        {testText}
      </Alert>
      <Alert type="warning" headingLevel="h4" noIcon>
        {testText}
      </Alert>
      <Alert type="error" headingLevel="h4" noIcon>
        {testText}
      </Alert>
      <Alert type="info" headingLevel="h4" noIcon>
        {testText}
      </Alert>
    </>
  ),
}

export const SlimNoIcon: Story = {
  render: () => (
    <>
      <Alert type="success" headingLevel="h4" slim noIcon>
        {testText}
      </Alert>
      <Alert type="warning" headingLevel="h4" slim noIcon>
        {testText}
      </Alert>
      <Alert type="error" headingLevel="h4" slim noIcon>
        {testText}
      </Alert>
      <Alert type="info" headingLevel="h4" slim noIcon>
        {testText}
      </Alert>
    </>
  ),
}

export const HeadingLevels: Story = {
  render: () => (
    <>
      <h1>Heading Level 1</h1>
      <Alert type="info" heading="Heading level 2" headingLevel="h2">
        {testText}
      </Alert>
    </>
  ),
}

export const WithCTA: Story = {
  render: () => (
    <Alert
      type="warning"
      heading="Warning status"
      headingLevel="h4"
      cta={
        <Button type="button" outline>
          Click here
        </Button>
      }>
      {testText}
    </Alert>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Alert type="info" heading="Code requirements" headingLevel="h4" validation>
      <ul>
        <li>Use at least one uppercase character</li>
        <li>Use at least one number</li>
      </ul>
    </Alert>
  ),
}
