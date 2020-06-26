/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, ComponentClass, HTMLAttributes } from 'react'
import classnames from 'classnames'

type BaseLinkProps = {
  variant?: 'external' | 'unstyled'
}

type AnchorTagProps = BaseLinkProps &
  JSX.IntrinsicElements['a'] & {
    href: string
    children: React.ReactNode
  }

type CustomComponentProps = BaseLinkProps &
  HTMLAttributes<HTMLElement> & {
    asCustom: FunctionComponent<any> | ComponentClass<any>
    [x: string]: any
  }

type LinkProps = CustomComponentProps | AnchorTagProps // order matters here - default suggestion should be anchor tag props

const isCustomComponent = (
  props: Partial<LinkProps>
): props is CustomComponentProps => {
  return (props as CustomComponentProps).asCustom !== undefined
}

export const Link = ({
  children,
  variant,
  className,
  ...linkProps
}: LinkProps): React.ReactElement => {
  const unstyled = variant === 'unstyled'
  const isExternalLink = variant === 'external'

  const classes = unstyled
    ? className
    : classnames(
        'usa-link',
        {
          'usa-link--external': isExternalLink,
        },
        className
      )

  if (isCustomComponent(linkProps)) {
    const { asCustom, ...restProps } = linkProps
    return React.createElement(
      asCustom,
      {
        ...restProps,
        className: classes,
      },
      children
    )
  }

  return (
    <a className={classes} {...linkProps}>
      {children}
    </a>
  )
}
