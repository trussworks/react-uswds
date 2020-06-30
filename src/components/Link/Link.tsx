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

type LinkProps = CustomComponentProps | AnchorTagProps

const isCustomComponent = (
  props: Partial<LinkProps>
): props is CustomComponentProps => {
  return (props as CustomComponentProps).asCustom !== undefined
}

type ProhibitKeys<K extends keyof any> = { [P in K]?: never }

type Xor<T, U> =
  | (T & ProhibitKeys<Exclude<keyof U, keyof T>>)
  | (U & ProhibitKeys<Exclude<keyof T, keyof U>>)
// Overloads
export function Link(customComponentProps: CustomComponentProps): JSX.Element
export function Link(anchorTagProps: AnchorTagProps): JSX.Element

export function Link({
  children,
  variant,
  className,
  ...linkProps
}: LinkProps): JSX.Element {
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
