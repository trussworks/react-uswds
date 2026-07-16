/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert, AlertHeading, AlertText } from './Alert'

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
    controls: {
      exclude: ['children'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const alertText = (
  <>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed
    do eiusmod.
  </>
)

export const Info: Story = {
  args: { type: 'info' },
  render: (args) => (
    <Alert {...args}>
      <AlertHeading level="h4">Informative status</AlertHeading>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const Warning: Story = {
  args: { type: 'warning' },
  render: (args) => (
    <Alert {...args}>
      <AlertHeading level="h4">Warning status</AlertHeading>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const Success: Story = {
  args: { type: 'success' },
  render: (args) => (
    <Alert {...args}>
      <AlertHeading level="h4">Success status</AlertHeading>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const Error: Story = {
  args: { type: 'error' },
  render: (args) => (
    <Alert {...args}>
      <AlertHeading level="h4">Error status</AlertHeading>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const Emergency: Story = {
  args: { type: 'emergency' },
  render: (args) => (
    <Alert {...args}>
      <AlertHeading level="h4">Emergency status</AlertHeading>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const Slim: Story = {
  args: { type: 'info', slim: true },
  render: (args) => (
    <Alert {...args}>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const WithNoIcon: Story = {
  args: { type: 'info', noIcon: true },
  render: (args) => (
    <Alert {...args}>
      <AlertText>{alertText}</AlertText>
    </Alert>
  ),
}

export const WithCustomCallToAction: Story = {
  args: { type: 'warning' },
  render: (args) => (
    <Alert {...args}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div>
          <AlertHeading level="h4">Warning status</AlertHeading>
          <AlertText>{alertText}</AlertText>
        </div>
        <Button type="button" outline>
          Click here
        </Button>
      </div>
    </Alert>
  ),
}
