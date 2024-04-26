import React from 'react'
import { handleKeyDown, isCustomProps, linkClasses } from './utils.js'

// These props we want to require always, even on custom components
export type StyledLinkProps<T> = {
  variant?: 'external' | 'unstyled' | 'nav'
  className?: string
  children: React.ReactNode
  allowSpacebarActivation?: boolean
} & T

// These props are only required on the default Link
export interface WithDefaultLinkProps {
  href: string
}

// Add `asCustom` to the provided custom props
export interface WithCustomLinkProps<T> {
  asCustom: React.FunctionComponent<T>
}

// Default props means allow the StyledLinkProps as well as any
// props allowed on the `a` element, plus the required props on
// WithDefaultLinkProps
export type DefaultLinkProps = StyledLinkProps<JSX.IntrinsicElements['a']> &
  WithDefaultLinkProps

// Custom props means allow the StyledLinkProps as well as the custom
// props, plus the required props on WithCustomLinkProps
export type CustomLinkProps<T> = StyledLinkProps<T> & WithCustomLinkProps<T>

export type LinkProps<T = DefaultLinkProps> =
  | DefaultLinkProps
  | CustomLinkProps<T>

export default function Link(props: DefaultLinkProps): React.ReactElement
export default function Link<T>(props: CustomLinkProps<T>): React.ReactElement
export default function Link<
  FCProps extends React.PropsWithChildren<object> = DefaultLinkProps,
>(props: LinkProps<FCProps>): React.ReactElement {
  if (isCustomProps(props)) {
    const { variant, className, asCustom, children, ...remainingProps } = props
    // 1. We know props is AsCustomProps<FCProps>
    // 2. We know AsCustomProps<FCProps> is
    //    FCProps & { variant: ..., className: ..., children: ..., asCustom: ... }
    // 3. Therefore we know that removing those props leaves us
    //    with FCProps
    //
    const linkProps: FCProps = remainingProps as unknown as FCProps
    const classes = linkClasses(variant, className)
    return React.createElement(
      asCustom,
      {
        className: classes,
        ...linkProps,
      },
      children
    )
  } else {
    const {
      children,
      className,
      variant,
      allowSpacebarActivation = false,
      ...linkProps
    } = props

    const classes = linkClasses(variant, className)
    return (
      <a
        className={classes}
        {...(allowSpacebarActivation && { onKeyDown: handleKeyDown })}
        {...linkProps}>
        {children}
      </a>
    )
  }
}
