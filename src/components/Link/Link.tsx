import React from 'react'
import classnames from 'classnames'

export type AsCustomLinkProps<T> = {
  asCustom?: React.FunctionComponent<T>
  children?: React.ReactNode
} & T

interface StyledLinkProps {
  variant?: 'external' | 'unstyled'
  className?: string
  children?: React.ReactNode
}

type LinkProps = StyledLinkProps & JSX.IntrinsicElements['a']

function isAsCustomLinkProps<T>(
  props: AsCustomLinkProps<T> | LinkProps
): props is AsCustomLinkProps<T> {
  return (props as AsCustomLinkProps<T>).asCustom !== undefined
}

export function Link<T = LinkProps>(
  props: AsCustomLinkProps<T> | LinkProps
): React.ReactElement<T> {
  if (isAsCustomLinkProps(props)) {
    const { asCustom, children, ...otherLinkProps } = props
    if (asCustom) {
      return React.createElement<T>(asCustom, otherLinkProps as T, children)
    }
    // this should never happen
    throw Error('Link: asCustom is unexpectedly undefined')
  } else {
    const { variant, className, children, ...linkProps } = props
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
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }
}
