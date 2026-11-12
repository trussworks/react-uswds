import React, { type JSX } from 'react'
import { Tooltip } from './Tooltip'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Tooltip> = {
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

Changing the \`position\` prop repositions a tooltip that is already visible.
`,
      },
    },
  },
  argTypes: {
    position: {
      table: {
        type: {
          summary: 'enum',
        },
      },
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
  args: { label: 'Default', children: 'Default' },
  render: (args) => {
    const { children, ...props } = args
    return (
      <div className="margin-4">
        <Tooltip {...props}>{children}</Tooltip>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TooltipDefault: Story = {}

export const TooltipTop: Story = {
  args: {
    position: 'top',
    label: 'Top',
    children: 'Show on top',
  },
}

export const TooltipBottom: Story = {
  args: {
    position: 'bottom',
    label: 'Bottom',
    children: 'Show on bottom',
  },
}

export const TooltipRight: Story = {
  args: {
    position: 'right',
    label: 'Right',
    children: 'Show on right',
  },
}

export const TooltipLeft: Story = {
  args: {
    position: 'left',
    label: 'Left',
    children: 'Show on left',
  },
}

export const TooltipWithUtilityClass: Story = {
  args: {
    wrapperclasses: 'width-full tablet:width-auto',
    position: 'right',
    label: 'Right',
    children: 'Show on right',
  },
}

export const CustomComponent: Story = {
  args: { label: 'Follow Link', children: 'This' },
  render: (args) => {
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a'] &
      React.RefAttributes<HTMLAnchorElement>
    const CustomLinkForwardRef: React.ForwardRefRenderFunction<
      HTMLAnchorElement,
      CustomLinkProps
    > = (
      { to, className, children, ...tooltipProps }: CustomLinkProps,
      ref
    ) => (
      <a ref={ref} href={to} className={className} {...tooltipProps}>
        {children}
      </a>
    )
    const CustomLink = React.forwardRef(CustomLinkForwardRef)

    const { children, ...props } = args
    return (
      <div className="margin-4">
        <p>
          <Tooltip<CustomLinkProps>
            {...props}
            asCustom={CustomLink}
            to="http://www.truss.works">
            {children}
          </Tooltip>
          &nbsp;is a custom component link.
        </p>
      </div>
    )
  },
}

const LONG_LABEL =
  'You can only add 10 links to a collection. To add more links, please create a new collection.'

export const TooltipTopLeftWrap: Story = {
  args: {
    label: LONG_LABEL,
  },
  render: (args) => {
    const { children, ...props } = args
    return (
      <div style={{ marginTop: '32px' }}>
        <Tooltip {...props}>{children}</Tooltip>
      </div>
    )
  },
}

export const TooltipBottomLeftWrap: Story = {
  args: {
    label: LONG_LABEL,
  },
  render: (args) => {
    const { children, ...props } = args
    return (
      <div style={{ position: 'absolute', bottom: '32px' }}>
        <Tooltip {...props}>{children}</Tooltip>
      </div>
    )
  },
}

export const TooltipTopRightWrap: Story = {
  args: {
    label: LONG_LABEL,
  },
  render: (args) => {
    const { children, ...props } = args
    return (
      <div style={{ marginTop: '32px', textAlign: 'right' }}>
        <Tooltip {...props}>{children}</Tooltip>
      </div>
    )
  },
}

export const TooltipBottomRightWrap: Story = {
  args: {
    label: LONG_LABEL,
  },
  render: (args) => {
    const { children, ...props } = args
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          width: '100%',
          left: '0',
          paddingRight: '32px',
          textAlign: 'right',
        }}>
        <Tooltip {...props}>{children}</Tooltip>
      </div>
    )
  },
}
