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
  },
}

// export const CustomComponentTooltip = (): React.ReactElement => {
//   type MockTooltipProps = React.PropsWithChildren<{
//     title: string
//     className: string
//   }> & JSX.IntrinsicElements['span']

//   const CustomTooltip: React.FunctionComponent<MockTooltipProps> = ({}
//   : MockTooltipProps): React.ReactElement => {

//   }
// }

export const tooltipDefault = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip label="Default">Default</Tooltip>
  </div>
)

export const tooltipTop = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="top" label="Top">Show on top</Tooltip>
  </div>
)

export const tooltipBottom = (): React.ReactElement => (
  <div className="margin-4">
   <Tooltip position="bottom" label="Bottom">Show on bottom</Tooltip>
  </div>
)

export const tooltipRight = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="right" label="Right">Show on right</Tooltip>
  </div>
)

export const tooltipLeft = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="left" label="Left">Show on left</Tooltip>
  </div>
)

export const CustomComponent = (): React.ReactElement => {
  type MockLinkProps = React.PropsWithChildren<{
    to: string
    className: string
  }> &
    JSX.IntrinsicElements['a']

    const CustomLink: React.FunctionComponent<MockLinkProps> = ({
      to,
      className,
      children,
      ...linkProps
    }: MockLinkProps): React.ReactElement => (
      <a href={to} className={className} {...linkProps}>
        {children}
      </a>
    )
  
    return (
      <p>
        <Tooltip<MockLinkProps>
          className="abc"
          asCustom={CustomLink}
          to="http://www.truss.works">
          This
        </Tooltip>
        &nbsp;is a custom component link.
      </p>
    )
}
