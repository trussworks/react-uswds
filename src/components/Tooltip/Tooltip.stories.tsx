import React, { type JSX } from 'react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    happo: {
      // Comparing on ios-safari causes spurious diffs.
      targets: ['chrome', 'firefox', 'edge', 'safari'],
      beforeScreenshot: (): void => {
        const event = new MouseEvent('mouseover', {
          view: window,
          bubbles: true,
          cancelable: true,
        })
        document.querySelector('.usa-tooltip__trigger')?.dispatchEvent(event)
      },
      waitFor: <E extends Element>(): E | null =>
        document.querySelector('.usa-tooltip__body.is-visible.is-set'),
    },
    docs: {
      description: {
        component: `
### USWDS 3.0 Tooltip component

Source: https://designsystem.digital.gov/components/tooltip/
`,
      },
    },
  },
}

export const TooltipDefault = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip label="Default">Default</Tooltip>
  </div>
)

export const TooltipTop = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip position="top" label="Top">
      Show on top
    </Tooltip>
  </div>
)

export const TooltipBottom = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip position="bottom" label="Bottom">
      Show on bottom
    </Tooltip>
  </div>
)

export const TooltipRight = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip position="right" label="Right">
      Show on right
    </Tooltip>
  </div>
)

export const TooltipLeft = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip position="left" label="Left">
      Show on left
    </Tooltip>
  </div>
)

export const TooltipWithUtilityClass = (): JSX.Element => (
  <div className="margin-4">
    <Tooltip
      wrapperclasses="width-full tablet:width-auto"
      position="right"
      label="Right">
      Show on right
    </Tooltip>
  </div>
)

export const CustomComponent = (): JSX.Element => {
  type CustomLinkProps = React.PropsWithChildren<{
    to: string
    className?: string
  }> &
    JSX.IntrinsicElements['a'] &
    React.RefAttributes<HTMLAnchorElement>
  const CustomLinkForwardRef: React.ForwardRefRenderFunction<
    HTMLAnchorElement,
    CustomLinkProps
  > = ({ to, className, children, ...tooltipProps }: CustomLinkProps, ref) => (
    <a ref={ref} href={to} className={className} {...tooltipProps}>
      {children}
    </a>
  )
  const CustomLink = React.forwardRef(CustomLinkForwardRef)

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

export const TooltipTopLeftWrap = (): JSX.Element => (
  <div style={{ marginTop: '32px' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const TooltipBottomLeftWrap = (): JSX.Element => (
  <div style={{ position: 'absolute', bottom: '32px' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const TooltipTopRightWrap = (): JSX.Element => (
  <div style={{ marginTop: '32px', textAlign: 'right' }}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>
)

export const TooltipBottomRightWrap = (): JSX.Element => (
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
