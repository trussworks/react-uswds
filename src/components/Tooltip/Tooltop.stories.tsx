import React from 'react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    info: `
    USWDS 2.0 Tooltip component

    Source: https://designsystem.digital.gov/components/tooltip/
    `,
    viewport: {
      defaultViewport: 'xs',
    },
  },
}

export const tooltipDefault = (): React.ReactElement => (
  <Tooltip label="Default">
    <button
      style={{ margin: '40px' }}
      type="button"
      className="usa-button usa-tooltip__trigger"
      title="Bottom">
      Show default
    </button>
  </Tooltip>
)
export const tooltipTop = (): React.ReactElement => (
  <Tooltip position="top" label="Top">
    <button
      style={{ margin: '40px' }}
      type="button"
      className="usa-button usa-tooltip__trigger"
      title="Top">
      Show on top
    </button>
  </Tooltip>
)
export const tooltipBottom = (): React.ReactElement => (
  <Tooltip position="bottom" label="Bottom">
    <button
      style={{ margin: '40px' }}
      type="button"
      className="usa-button usa-tooltip__trigger"
      title="Bottom">
      Show on bottom
    </button>
  </Tooltip>
)
export const tooltipRight = (): React.ReactElement => (
  <Tooltip position="right" label="Right">
    <button
      style={{ margin: '40px' }}
      type="button"
      className="usa-button usa-tooltip__trigger"
      title="Right">
      Show on right
    </button>
  </Tooltip>
)
export const tooltipLeft = (): React.ReactElement => (
  <Tooltip position="left" label="Left">
    <button
      style={{ margin: '40px' }}
      type="button"
      className="usa-button usa-tooltip__trigger"
      title="Left">
      Show on left
    </button>
  </Tooltip>
)
