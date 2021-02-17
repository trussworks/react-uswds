import React from 'react'
import { Tooltip } from './Tooltip'
// import ReactTooltip from 'react-tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    info: `
USWDS 2.0 Tooltip component

Source: https://designsystem.digital.gov/components/tooltip/
`,
  },
}

export const tooltipDefault = (): React.ReactElement => <Tooltip position="top" label="Top">My Tooltip</Tooltip>
export const tooltipTop = (): React.ReactElement => <Tooltip position="top" label="Top">
     <button type="button" className="usa-button usa-tooltip__trigger" title="Top">Show on top</button>
  </Tooltip>
export const tooltipBottom = (): React.ReactElement => <Tooltip position="bottom" label="Bottom">
  <button type="button" className="usa-button usa-tooltip__trigger" title="Bottom">Show on bottom</button>
</Tooltip>
export const tooltipLeft = (): React.ReactElement => <Tooltip position="left" label="Left">
  <button type="button" className="usa-button usa-tooltip__trigger" title="Left" role="tooltip">Show on left</button>
</Tooltip>
export const tooltipRight = (): React.ReactElement => <Tooltip  position="right" label="Right">
  <button type="button" className="usa-button usa-tooltip__trigger" title="Right" role="tooltip">Show on right</button>
</Tooltip>