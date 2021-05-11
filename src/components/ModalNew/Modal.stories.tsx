import React from 'react'

import { ModalNew } from './Modal'

export default {
  title: 'Components/Modal',
  component: ModalNew,
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
  <ModalNew>some children</ModalNew>
)

export const largeModal = (): React.ReactElement => (
  <ModalNew isLarge>large modal</ModalNew>
)

export const modalWithForcedAction = (): React.ReactElement => (
  <ModalNew>forced action</ModalNew>
)
