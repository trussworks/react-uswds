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

export const tooltipDefault = (): React.ReactElement => <Tooltip className="top" position="top" label="Top">My Tooltip</Tooltip>
export const tooltipTop = (): React.ReactElement => <Tooltip className="top" position="top" label="Top">
     <button type="button" className="usa-button usa-tooltip" data-position="top" title="Top">Show on top</button>
  </Tooltip>
export const tooltipBottom = (): React.ReactElement => <Tooltip className="bottom" position="bottom" label="Bottom">
  <button type="button" className="usa-button" title="Bottom">Show on bottom</button>
</Tooltip>
export const tooltipLeft = (): React.ReactElement => <Tooltip  className="left" position="left" label="Left">
  <button type="button" className="usa-button" title="Left">Show on left</button>
</Tooltip>
export const tooltipRight = (): React.ReactElement => <Tooltip className="right"  position="right" label="Right">
  <button type="button" className="usa-button" title="Left">Show on right</button>
</Tooltip>

// export const customBg = (): React.ReactElement => (
//   <Tag background="#e44608">My Tag</Tag>
// )

// export const customClass = (): React.ReactElement => (
//   <Tag className="custom-class">My Tag</Tag>
