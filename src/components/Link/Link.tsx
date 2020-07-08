import React from 'react'
import classnames from 'classnames'

/* Two ways to use Link 
    1. Pass in children and props for the default anchor tag element.  Use BaseLinkProps to style. 
    2. Use the component prop and pass in a custom React element. Use BaseLinkProps to style.
*/

type BaseLinkProps = {
  className?: string
  variant?: 'external' | 'unstyled'
}

type LinkProps = {
  href: string
  children: React.ReactNode
} & BaseLinkProps &
  JSX.IntrinsicElements['a']

type CustomComponentProps = {
  component: React.ReactElement
  children?: React.ReactNode
} & BaseLinkProps

type PossibleLinkProps = CustomComponentProps | LinkProps

const isCustomComponent = (
  props: PossibleLinkProps
): props is CustomComponentProps => {
  return (props as CustomComponentProps).component !== undefined
}

// Overloads
export function Link(customComponentProps: CustomComponentProps): JSX.Element
export function Link(linkProps: LinkProps): JSX.Element

export function Link(props: PossibleLinkProps): React.ReactElement {
  const { children, variant, className, ...linkProps } = props
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

  if (isCustomComponent(props)) {
    const { component, ...remainingProps } = linkProps as CustomComponentProps
    return React.cloneElement(component, {
      ...remainingProps,
      className: classes,
    })
  }

  return (
    <a className={classes} {...linkProps}>
      {children}
    </a>
  )
}
