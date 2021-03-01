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

export const tooltipDefault = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip label="Default">Default</Tooltip>
  </div>
)

export const tooltipTop = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="top" label="Top">
      Show on top
    </Tooltip>
  </div>
)

export const tooltipBottom = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="bottom" label="Bottom">
      Show on bottom
    </Tooltip>
  </div>
)

export const tooltipRight = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="right" label="Right">
      Show on right
    </Tooltip>
  </div>
)

export const tooltipLeft = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip position="left" label="Left">
      Show on left
    </Tooltip>
  </div>
)

export const CustomComponent = (): React.ReactElement => {
  type MockTooltipProps = React.PropsWithChildren<{
    to: string
    className?: string
  }> &
    JSX.IntrinsicElements['a'] &
    React.RefAttributes<HTMLAnchorElement>
  const CustomLink: React.ForwardRefExoticComponent<MockTooltipProps> = React.forwardRef(
    ({ to, className, children, ...tooltipProps }: MockTooltipProps, ref) => (
      <a ref={ref} href={to} className={className} {...tooltipProps}>
        {children}
      </a>
    )
  )

  CustomLink.displayName = 'custom link'

  return (
    <div className="margin-4">
      <p>
        <Tooltip<MockTooltipProps>
          label="Follow Link"
          asCustom={CustomLink}
          to="http://www.truss.works">
          This
        </Tooltip>
        &nbsp;is a custom component link.
      </p>
    </div>
  )
}
