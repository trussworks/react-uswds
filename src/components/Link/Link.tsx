import React from 'react'
import classnames from 'classnames'

/* Two ways to use Link 
    1. Pass in children and props for the default anchor tag element.  Add BaseLinkProps to style. 
    2. Pass in asComponentComponent=true and children (single element) to use as the base element. Add BaseLinkProps to style.
*/

type BaseLinkProps = {
  className?: string
  variant?: 'external' | 'unstyled'
}

type AnchorTagProps = {
  href: string
  children: React.ReactNode
} & BaseLinkProps &
  JSX.IntrinsicElements['a']

type CustomComponentProps = {
  asCustomComponent: boolean
  children: React.ReactElement
} & BaseLinkProps

type PossibleLinkProps = CustomComponentProps | AnchorTagProps

const isCustomComponent = (
  props: PossibleLinkProps
): props is CustomComponentProps => {
  return (props as CustomComponentProps).asCustomComponent === true
}

// Overloads
export function Link(
  customComponentProps: CustomComponentProps
): React.ReactElement
export function Link(linkProps: AnchorTagProps): React.ReactElement

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
    const child = children as CustomComponentProps['children']

    return React.cloneElement(child, {
      className: classes,
    })
  }

  return (
    <a className={classes} {...linkProps}>
      {children}
    </a>
  )
}
