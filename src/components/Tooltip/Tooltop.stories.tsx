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
export const tooltipTop = (): React.ReactElement => <Tooltip position="top" label="Top">My Tooltip</Tooltip>
export const tooltipBottom = (): React.ReactElement => <Tooltip position="bottom" label="Bottom">My Tooltip</Tooltip>
export const tooltipLeft = (): React.ReactElement => <Tooltip position="left" label="Left">My Tooltip</Tooltip>
export const tooltipRight = (): React.ReactElement => <Tooltip position="right" label="Right">My Tooltip</Tooltip>

// export const customBg = (): React.ReactElement => (
//   <Tag background="#e44608">My Tag</Tag>
// )

// export const customClass = (): React.ReactElement => (
//   <Tag className="custom-class">My Tag</Tag>
