import React from 'react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    happo: {
      beforeScreenshot: (): void => {
        const event = new MouseEvent('mouseover', {
          view: window,
          bubbles: true,
          cancelable: true,
        })
        document.querySelector('.usa-tooltip__trigger').dispatchEvent(event)
      },
    },
    docs: {
      description: {
        component: `
### USWDS 2.0 Tooltip component

Source: https://designsystem.digital.gov/components/tooltip/
`,
      },
    },
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

export const tooltipWithUtilityClass = (): React.ReactElement => (
  <div className="margin-4">
    <Tooltip
      wrapperclasses="width-full tablet:width-auto"
      position="right"
      label="Right">
      Show on right
    </Tooltip>
  </div>
)

export const CustomComponent = (): React.ReactElement => {
  type CustomLinkProps = React.PropsWithChildren<{
    to: string
    className?: string
  }> &
    JSX.IntrinsicElements['a'] &
    React.RefAttributes<HTMLAnchorElement>
  const CustomLink: React.ForwardRefExoticComponent<CustomLinkProps> =
    React.forwardRef(
      ({ to, className, children, ...tooltipProps }: CustomLinkProps, ref) => (
        <a ref={ref} href={to} className={className} {...tooltipProps}>
          {children}
        </a>
      )
    )

  CustomLink.displayName = 'custom link'

  return (
    <div className="margin-4">
      <p>
        <Tooltip<CustomLinkProps>
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

export const tooltipTopLeftWrap = (): React.ReactElement => (
  <div style={{ marginTop: '32px' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const tooltipBottomLeftWrap = (): React.ReactElement => (
  <div style={{ position: 'absolute', bottom: '32px' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const tooltipTopRightWrap = (): React.ReactElement => (
  <div style={{ marginTop: '32px', textAlign: 'right' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const tooltipBottomRightWrap = (): React.ReactElement => (
  <div
    style={{
      position: 'absolute',
      bottom: '32px',
      width: '100%',
      left: '0',
      paddingRight: '32px',
      textAlign: 'right',
    }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)
