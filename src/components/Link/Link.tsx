import React, { forwardRef } from 'react'
import classnames from 'classnames'

// These props we want to require always, even on custom components
export type StyledLinkProps<T> = {
  variant?: 'external' | 'unstyled' | 'nav'
  className?: string
  children: React.ReactNode
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

export function isCustomProps<T>(
  props: DefaultLinkProps | CustomLinkProps<T>
): props is CustomLinkProps<T> {
  return 'asCustom' in props
}

export function linkClasses<T>(
  variant: StyledLinkProps<T>['variant'],
  className: StyledLinkProps<T>['className']
): string | undefined {
  const unstyled = variant === 'unstyled'
  const isExternalLink = variant === 'external'
  const isNavLink = variant === 'nav'

  return unstyled
    ? className
    : classnames(
        'usa-link',
        { 'usa-link--external': isExternalLink, 'usa-nav__link': isNavLink },
        className
      )
}

export type LinkProps<
  FCProps extends React.PropsWithChildren<object> = DefaultLinkProps
> = DefaultLinkProps | CustomLinkProps<FCProps>

export const LinkForwardRef: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = <
  FCProps extends React.PropsWithChildren<object> = DefaultLinkProps
>(props, ref): React.ReactElement => {
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
    const { children, className, variant, ...linkProps } = props

    const classes = linkClasses(variant, className)
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }
}

export const Link = forwardRef(LinkForwardRef)

export default Link