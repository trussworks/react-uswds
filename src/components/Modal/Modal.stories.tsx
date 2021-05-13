import React from 'react'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SiteAlert component

Source: http://designsystem.digital.gov/components/modal
`,
      },
    },
  },
}

export const defaultModal = (): React.ReactElement => (
  <Modal>some children</Modal>
)

export const largeModal = (): React.ReactElement => (
  <Modal isLarge>large modal</Modal>
)

export const modalWithForcedAction = (): React.ReactElement => (
  <Modal>forced action</Modal>
)
